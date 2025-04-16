<?php

namespace App\Service\FormMamo;

use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Mime\Address;

class EmailService
{
    private MailerInterface $mailer;
    private string $senderEmail;
    private string $senderName;

    public function __construct(
        MailerInterface $mailer,
        string $senderEmail,
        string $senderName
    ) {
        $this->mailer = $mailer;
        $this->senderEmail = $senderEmail;
        $this->senderName = $senderName;
    }

    public function sendReport(
        string $recipientEmail,
        array $formData,
        string $attachmentPath,
        string $attachmentType = 'pdf'
    ): void {
        $email = (new Email())
            ->from(new Address($this->senderEmail, $this->senderName))
            ->to($recipientEmail)
            ->subject($this->generateSubject($formData))
            ->html($this->generateEmailContent($formData));

        // Ajouter la pièce jointe
        $email->attachFromPath(
            $attachmentPath,
            $this->generateAttachmentName($formData, $attachmentType),
            $this->getMimeType($attachmentType)
        );

        $this->mailer->send($email);
    }

    private function generateSubject(array $formData): string
    {
        return sprintf(
            'Compte rendu mammographie - %s %s - %s',
            $formData['patient']['nom'] ?? '',
            $formData['patient']['prenom'] ?? '',
            date('d/m/Y')
        );
    }

    private function generateEmailContent(array $formData): string
    {
        // À adapter selon vos besoins
        return sprintf(
            '<p>Bonjour,</p>
            <p>Veuillez trouver ci-joint le compte rendu de mammographie pour :</p>
            <ul>
                <li>Patient(e) : %s %s</li>
                <li>Date d\'examen : %s</li>
            </ul>
            <p>Cordialement,<br>%s</p>',
            $formData['patient']['nom'] ?? '',
            $formData['patient']['prenom'] ?? '',
            $formData['patient']['date_examen'] ?? '',
            $this->senderName
        );
    }

    private function generateAttachmentName(array $formData, string $type): string
    {
        return sprintf(
            'compte_rendu_mammographie_%s_%s_%s.%s',
            $formData['patient']['nom'] ?? 'unknown',
            $formData['patient']['prenom'] ?? 'unknown',
            date('Y-m-d'),
            $type
        );
    }

    private function getMimeType(string $type): string
    {
        return match($type) {
            'pdf' => 'application/pdf',
            'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            default => 'application/octet-stream',
        };
    }
} 