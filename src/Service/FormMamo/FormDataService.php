<?php

namespace App\Service\FormMamo;

use Psr\Log\LoggerInterface;

class FormDataService
{
    private $logger;

    public function __construct(LoggerInterface $logger)
    {
        $this->logger = $logger;
    }

    public function formatFormData(array $formData): array
    {
        // Organiser les données par sections
        return [
            'titre' => $this->formatTitreData($formData),
            'indication' => $this->formatIndicationData($formData),
            'technique' => $this->formatTechniqueData($formData),
            'comparatif' => $this->formatComparatifData($formData),
            'examen_clinique' => $this->formatExamenCliniqueData($formData),
            'densite_seins' => $this->formatDensiteSeinsData($formData),
            'densite_gauche' => $this->formatDensiteGaucheData($formData),
            'densite_droite' => $this->formatDensiteDroiteData($formData),
            'densite_echo_gauche' => $this->formatDensiteEchoGaucheData($formData),
            'densite_echo_droite' => $this->formatDensiteEchoDroiteData($formData)          
        ];
    }

    private function formatTitreData(array $formData): array
    {
        return [
            'titre' => $formData['titre']['titre'] ?? ''
        ];
    }

    private function formatIndicationData(array $formData): array
    {
        return $formData['indication'] ?? [];
    }

    private function formatTechniqueData(array $formData): array
    {
        return $formData['technique'] ?? [];
    }

    private function formatComparatifData(array $formData): array
    {
        return $formData['comparatif'] ?? [];
    }

    private function formatExamenCliniqueData(array $formData): array
    {
        return $formData['examen_clinique'] ?? [];
    }

    private function formatDensiteSeinsData(array $formData): array
    {
        return $formData['densite_seins'] ?? [];
    }

    private function formatDensiteGaucheData(array $formData): array
    {
        return $formData['densite_gauche'] ?? [];
    }

    private function formatDensiteDroiteData(array $formData): array
    {
        return $formData['densite_droite'] ?? [];
    }

    private function formatDensiteEchoGaucheData(array $formData): array
    {
        return $formData['densite_echo_gauche'] ?? [];
    }

    private function formatDensiteEchoDroiteData(array $formData): array
    {
        return $formData['densite_echo_droite'] ?? [];
    }

} 