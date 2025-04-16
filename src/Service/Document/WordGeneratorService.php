<?php

namespace App\Service\Document;

use PhpOffice\PhpWord\PhpWord;
use Twig\Environment;

class WordGeneratorService implements DocumentGeneratorInterface
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
        // Créer un nouveau document Word
        $phpWord = new PhpWord();

        // Ajouter une section
        $section = $phpWord->addSection();

        // Ajouter l'en-tête
        $this->addHeader($section, $data);

        // Ajouter le contenu selon le type de formulaire
        switch ($formType) {
            case 'mamo':
                $this->addMamoContent($section, $data);
                break;
            // Ajouter d'autres types de formulaires ici
            default:
                throw new \InvalidArgumentException(sprintf('Type de formulaire non supporté : %s', $formType));
        }

        // Sauvegarder le document
        $filename = sprintf('%s_%s.docx', $formType, date('Y-m-d_H-i-s'));
        $filepath = sys_get_temp_dir() . '/' . $filename;
        $phpWord->save($filepath);

        return $filepath;
    }

    private function addHeader($section, array $data): void
    {
        $section->addText(
            sprintf(
                'Compte rendu - %s',
                date('d/m/Y')
            ),
            ['bold' => true, 'size' => 16]
        );

        if (isset($data['patient'])) {
            $section->addText(
                sprintf(
                    'Patient: %s %s',
                    $data['patient']['nom'] ?? '',
                    $data['patient']['prenom'] ?? ''
                )
            );
        }
    }

    private function addMamoContent($section, array $data): void
    {
        // Ajouter le contenu spécifique au formulaire mammographie
        if (isset($data['densite'])) {
            $section->addText('Densité mammaire:', ['bold' => true]);
            // Ajouter les détails de la densité...
        }

        if (isset($data['conclusion'])) {
            $section->addText('Conclusion:', ['bold' => true]);
            $section->addText($data['conclusion']['commentaire'] ?? '');
        }
    }
} 