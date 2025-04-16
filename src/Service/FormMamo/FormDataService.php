<?php

namespace App\Service\FormMamo;

class FormDataService
{
    public function formatFormData(array $formData): array
    {
        // Organiser les données par sections
        return [
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
        // Vérifier les champs obligatoires
        if (!$this->validatePatientData($formData)) {
            return false;
        }

        // Vérifier la cohérence des données
        if (!$this->validateDensiteData($formData)) {
            return false;
        }

        return true;
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

    private function validatePatientData(array $formData): bool
    {
        // Vérifier les données obligatoires du patient
        return !empty($formData['patient']['nom']) 
            && !empty($formData['patient']['prenom'])
            && !empty($formData['patient']['date_examen']);
    }

    private function validateDensiteData(array $formData): bool
    {
        // Vérifier la cohérence des données de densité
        return true; // À adapter selon vos règles de validation
    }
} 