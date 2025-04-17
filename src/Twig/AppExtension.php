<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class AppExtension extends AbstractExtension
{
    public function getFunctions(): array
    {
        return [
            new TwigFunction('clean_label', [$this, 'cleanLabel']),
        ];
    }

    public function cleanLabel(?string $value): string
    {
        if (empty($value)) {
            return '';
        }

        // Remplacer les underscores par des espaces
        $value = str_replace('_', ' ', $value);
        
        // Remplacer certains mots techniques par des libellés plus appropriés
        $replacements = [
            'Mammo' => 'Mammographie',
            'Echo' => 'Échographie',
            'Bilaterale' => 'Bilatérale',
            'Unilaterale' => 'Unilatérale',
            'Depistage' => 'Dépistage',
            'Organise' => 'Organisé',
            'Individuel' => 'Individuel',
            'Acr' => 'ACR',
            'recente' => 'récente',       
        ];
        
        foreach ($replacements as $search => $replace) {
            $value = str_replace($search, $replace, $value);
        }
        
        return $value;
    }
} 