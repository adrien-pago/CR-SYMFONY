<?php

namespace App\Service\FormMamo;

class FormDataService
{
    public function formatFormData(array $formData): array
    {
        // Organiser les données par sections
        return [
            'titre' => $this->formatTitreData($formData),
            'patient' => $this->formatPatientData($formData),
            'densite' => [
                'droite' => $this->formatDensiteData($formData, 'droite'),
                'gauche' => $this->formatDensiteData($formData, 'gauche')
            ],
            'conclusion' => $this->formatConclusionData($formData)
        ];
    }

    public function validateFormData(array $formData): bool
    {
        // Pour le test, on ne valide que le titre
        return isset($formData['titre']['titre']) && !empty($formData['titre']['titre']);
    }

    private function formatTitreData(array $formData): array
    {
        return [
            'titre' => $formData['titre']['titre'] ?? ''
        ];
    }

    private function formatPatientData(array $formData): array
    {
        // Extraire et formater les données du patient
        return [
            'nom' => $formData['patient']['nom'] ?? '',
            'prenom' => $formData['patient']['prenom'] ?? '',
            'date_naissance' => $formData['patient']['date_naissance'] ?? '',
            'date_examen' => $formData['patient']['date_examen'] ?? ''
        ];
    }

    private function formatDensiteData(array $formData, string $cote): array
    {
        // Formater les données de densité pour un côté spécifique
        return [
            'masses' => $this->formatMassesData($formData[$cote]['masses'] ?? []),
            'microcalcifications' => $this->formatMicrocalcificationsData($formData[$cote]['microcalcifications'] ?? []),
            'asymetries' => $this->formatAsymetriesData($formData[$cote]['asymetries'] ?? [])
        ];
    }

    private function formatConclusionData(array $formData): array
    {
        // Formater les données de conclusion
        return [
            'birads' => $formData['conclusion']['birads'] ?? '',
            'commentaire' => $formData['conclusion']['commentaire'] ?? ''
        ];
    }

    private function formatMassesData(array $masses): array
    {
        return $masses;
    }

    private function formatMicrocalcificationsData(array $microcalcifications): array
    {
        return $microcalcifications;
    }

    private function formatAsymetriesData(array $asymetries): array
    {
        return $asymetries;
    }
} 