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
        // Configurer DomPDF
        $options = new Options();
        $options->set('isHtml5ParserEnabled', true);
        $options->set('isPhpEnabled', true);

        $dompdf = new Dompdf($options);

        // Générer le HTML en utilisant le template approprié
        $template = sprintf('pdf_formulaire/%s/pdf_template.html.twig', $formType);
        $html = $this->twig->render($template, $data);

        // Convertir en PDF
        $dompdf->loadHtml($html);
        $dompdf->setPaper('A4', 'portrait');
        $dompdf->render();

        // Sauvegarder le PDF
        $output = $dompdf->output();
        $filename = sprintf('compte_rendu_%s_%s.pdf', $formType, date('Y-m-d_H-i-s'));
        $filepath = sys_get_temp_dir() . '/' . $filename;
        file_put_contents($filepath, $output);

        return $filepath;
    }
} 