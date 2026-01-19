'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const items = [
    {
      question: 'Êtes-vous une agence ?',
      answer:
        'Non. BureauWeb est un partenaire d’infrastructure web. On installe un site, on structure la fiche Google et on opère cette infrastructure en continu. On ne vend pas de campagnes publicitaires ni de promesses de résultats.',
    },
    {
      question: 'Pourquoi ne pas rester sur Wix ou Squarespace ?',
      answer:
        'Si votre plateforme actuelle fait le travail, on n’impose pas un changement. Le diagnostic gratuit permet de vérifier ce qui bloque la visibilité locale ou la conversion, puis de décider si une itération est nécessaire.',
    },
    {
      question: 'Qu’est-ce qui est inclus chaque mois ?',
      answer:
        'Une intervention ciblée plafonnée (micro-amélioration), une vérification QA et un rapport synthèse. On maintient l’infrastructure, on corrige ce qui tombe dans le périmètre et on documente les limites mensuelles; on n’ajoute pas des campagnes marketing ou des grosses refontes sans scope séparé.',
    },
    {
      question: 'Que se passe-t-il après le diagnostic gratuit ?',
      answer:
        'On rend une décision GO/NO-GO. Si le dossier avance, on envoie un lien de paiement Stripe pour activer l’abonnement mensuel. Aucun travail n’est lancé tant qu’un paiement actif n’est pas confirmé.',
    },
    {
      question: 'Est-ce qu’il y a des engagements ou des délais garantis ?',
      answer:
        'C’est un abonnement mensuel sans engagement de durée. Chaque mois est facturé d’avance et l’annulation passe par le portail client Stripe; elle prend effet à la fin de la période déjà payée. Aucun remboursement partiel n’est offert.',
    },
    {
      question: 'Comment puis-je annuler le service ?',
      answer:
        'Utilisez le Portail client pour arrêter la facturation. Vous pouvez le faire à tout moment. L’annulation prend effet à la fin du mois déjà payé.',
    },
    {
      question: 'Y a-t-il des remboursements ?',
      answer:
        'Non. Les frais sont prélevés pour couvrir le mois d’opération. Si vous stoppez via le portail, vous gardez l’accès jusqu’à la fin du mois en cours sans remboursement partiel.',
    },
    {
      question: 'Garantissez-vous des résultats (leads, appels, ventes) ?',
      answer:
        'Non. BureauWeb fournit une infrastructure claire (site, fiche Google, conversion) et des moyens de suivi. Les volumes de leads/appels/demandes dépendent du marché et de votre capacité à répondre; nous ne garantissons pas de résultats chiffrés.',
    },
  ]

  return (
    <section id="faq" className="py-16 md:py-20 bg-white scroll-mt-header">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-safety/10 text-safety-700 px-4 py-2 rounded-full mb-6">
            <HelpCircle className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-medium">FAQ</span>
          </div>
          <h2 className="text-navy mb-4">Questions fréquentes</h2>
          <p className="text-xl text-concrete-600 max-w-2xl mx-auto">
            Des réponses simples, sans promesses non vérifiables.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index
            const buttonId = `faq-button-${index}`
            const panelId = `faq-panel-${index}`
            return (
            <div
              key={item.question}
              className="rounded-xl border border-concrete-200 bg-concrete-50 p-6"
            >
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 text-left text-lg font-semibold text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-safety focus-visible:ring-offset-2"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-concrete-500 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className="mt-2 text-concrete-600 leading-relaxed"
              >
                {item.answer}
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  )
}

export default FAQ
