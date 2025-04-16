<?php

namespace App\Service\FormMamo;

use PhpOffice\PhpWord\PhpWord;
use Dompdf\Dompdf;
use Dompdf\Options;

class DocumentGeneratorService
{
    private FormDataService $formDataService;
    private string $templateDir;

    public function __construct(
        FormDataService $formDataService,
        string $templateDir
    ) {
        $this->formDataService = $formDataService;
        $this->templateDir = $templateDir;
    }

    public function generatePDF(array $formData): string
    {
        // Configurer DomPDF
        $options = new Options();
        $options->set('isHtml5ParserEnabled', true);
        $options->set('isPhpEnabled', true);

        $dompdf = new Dompdf($options);

        // Formater les données
        $data = $this->formDataService->formatFormData($formData);

        // Générer le HTML
        $html = $this->generateHTML($data);

        // Convertir en PDF
        $dompdf->loadHtml($html);
        $dompdf->setPaper('A4', 'portrait');
        $dompdf->render();

        // Sauvegarder le PDF
        $output = $dompdf->output();
        $filename = sprintf('compte_rendu_%s.pdf', date('Y-m-d_H-i-s'));
        $filepath = sys_get_temp_dir() . '/' . $filename;
        file_put_contents($filepath, $output);

        return $filepath;
    }

    public function generateWord(array $formData): string
    {
        // Créer un nouveau document Word
        $phpWord = new PhpWord();

        // Formater les données
        $data = $this->formDataService->formatFormData($formData);

        // Ajouter une section
        $section = $phpWord->addSection();

        // Ajouter l'en-tête
        $this->addHeader($section, $data['patient']);

        // Ajouter le contenu
        $this->addContent($section, $data);

        // Sauvegarder le document
        $filename = sprintf('compte_rendu_%s.docx', date('Y-m-d_H-i-s'));
        $filepath = sys_get_temp_dir() . '/' . $filename;
        $phpWord->save($filepath);

        return $filepath;
    }

    private function generateHTML(array $data): string
    {
        // Charger le template HTML
        $template = file_get_contents($this->templateDir . '/pdf_template.html.twig');

        // Remplacer les variables dans le template
        // À adapter selon votre template
        return strtr($template, [
            '{{ patient.nom }}' => $data['patient']['nom'],
            '{{ patient.prenom }}' => $data['patient']['prenom'],
            // ... autres remplacements
        ]);
    }

    private function addHeader($section, array $patientData): void
    {
        $section->addText(
            sprintf(
                'Compte rendu mammographie - %s %s - %s',
                $patientData['nom'],
                $patientData['prenom'],
                $patientData['date_examen']
            ),
            ['bold' => true, 'size' => 16]
        );
    }

    private function addContent($section, array $data): void
    {
        // Ajouter le contenu du document Word
        // À adapter selon vos besoins
        $section->addText('Sein Droit:', ['bold' => true]);
        $this->addDensiteContent($section, $data['densite']['droite']);

        $section->addText('Sein Gauche:', ['bold' => true]);
        $this->addDensiteContent($section, $data['densite']['gauche']);

        $section->addText('Conclusion:', ['bold' => true]);
        $section->addText($data['conclusion']['commentaire']);
    }

    private function addDensiteContent($section, array $densiteData): void
    {
        // Ajouter les détails de la densité
        // À adapter selon votre structure de données
    }
} 