<?php

namespace App\Service\Document;

interface DocumentGeneratorInterface
{
    /**
     * Génère un document à partir des données fournies
     *
     * @param array $data Les données à inclure dans le document
     * @param string $formType Le type de formulaire (ex: 'mamo', 'echo', etc.)
     * @return string Le chemin vers le fichier généré
     */
    public function generate(array $data, string $formType): string;
} 