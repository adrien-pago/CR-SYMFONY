<?php

namespace App\Service\Document;

use Dompdf\Dompdf;
use Dompdf\Options;
use Twig\Environment;

class PdfGeneratorService implements DocumentGeneratorInterface
{
    private Environment $twig;
    private string $templateDir;

    public function __construct(
        Environment $twig,
        string $templateDir
    ) {
        $this->twig = $twig;
        $this->templateDir = $templateDir;
    }

    public function generate(array $data, string $formType): string
    {
        try {
            // Configurer DomPDF
            $options = new Options();
            $options->set('isHtml5ParserEnabled', true);
            $options->set('isPhpEnabled', true);
            $options->set('isRemoteEnabled', true);

            $dompdf = new Dompdf($options);

            // Générer le HTML en utilisant le template approprié
            $template = sprintf('pdf_formulaire/%s/pdf_template.html.twig', $formType);
            
            if (!$this->twig->getLoader()->exists($template)) {
                throw new \RuntimeException(sprintf('Le template "%s" n\'existe pas', $template));
            }

            $html = $this->twig->render($template, $data);

            // Convertir en PDF
            $dompdf->loadHtml($html);
            $dompdf->setPaper('A4', 'portrait');
            $dompdf->render();

            // Sauvegarder le PDF
            $output = $dompdf->output();
            $filename = sprintf('compte_rendu_%s_%s.pdf', $formType, date('Y-m-d_H-i-s'));
            $filepath = sys_get_temp_dir() . '/' . $filename;
            
            if (file_put_contents($filepath, $output) === false) {
                throw new \RuntimeException('Impossible d\'écrire le fichier PDF');
            }

            return $filepath;
        } catch (\Exception $e) {
            throw new \RuntimeException('Erreur lors de la génération du PDF : ' . $e->getMessage(), 0, $e);
        }
    }
} 