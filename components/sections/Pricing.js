'use client'

import { Check, Clock, Mail, FileText, Globe, Star, PenTool, Headphones, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Pricing = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const plans = [
    {
      name: 'Forfait Essentiel',
      price: '399',
      activation: '799',
      popular: false,
      features: [
        { text: 'Site web performant (optimisé mobile, temps de chargement <2 sec)', included: true },
        { text: 'Hébergement sécurisé avec préférence pour les régions canadiennes (incluant certificat SSL)', included: true },
        { text: 'Optimisation Profil d\'entreprise Google (vérification, catégories, description)', included: true },
        { text: 'Système d\'avis : Configuration initiale + templates SMS/courriel + instructions d\'intégration', included: true },
        { text: '2 mises à jour mineures incluses par mois', included: true },
        { text: 'Support par courriel : Réponse sous 48h ouvrables', included: true },
      ],
      extra: 'Modifications majeures (refonte de section, nouvelle page de service) : 150$/heure, facturation par bloc de 30 min.',
    },
    {
      name: 'Forfait Croissance',
      price: '599',
      activation: '999',
      popular: true,
      features: [
        { text: 'Tout du Forfait Essentiel', included: true, highlight: true },
        { text: '1 article de blogue optimisé SEO par mois (500-800 mots)', included: true },
        { text: '1 page de service additionnelle (ex: page dédiée à un nouveau service)', included: true },
        { text: 'Support prioritaire : Réponse sous 24h ouvrables', included: true },
        { text: '4 mises à jour mineures incluses par mois', included: true },
      ],
      extra: null,
    },
  ]

  return (
    <section id="forfaits" className="py-20 md:py-28 bg-concrete-50 scroll-mt-header">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-safety/10 text-safety-700 px-4 py-2 rounded-full mb-6">
            <FileText className="w-4 h-4" />
            <span className="text-sm font-medium">Tarification transparente</span>
          </div>
          <h2 className="text-navy mb-6">
            Forfaits et Prix
          </h2>
          <p className="text-xl text-concrete-600 max-w-2xl mx-auto">
            Des forfaits clairs, sans frais cachés. Choisissez celui qui correspond à vos besoins.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'border-safety shadow-lg scale-[1.02]' 
                  : 'border-concrete-200 hover:border-concrete-300'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-safety text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Recommandé
                  </div>
                </div>
              )}
              
              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-navy mb-4">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-navy">{plan.price}</span>
                    <span className="text-xl text-concrete-500">$/mois</span>
                  </div>
                  <p className="text-concrete-500 mt-2">
                    + Frais d'activation unique : <span className="font-semibold text-navy">{plan.activation}$</span>
                  </p>
                </div>
                
                {/* Features */}
                <div className="space-y-4 mb-8">
                  <p className="text-sm font-semibold text-concrete-500 uppercase tracking-wide">Inclus :</p>
                  {plan.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className={`flex items-start gap-3 ${
                        feature.highlight ? 'bg-safety/5 -mx-2 px-2 py-2 rounded-lg' : ''
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        feature.highlight ? 'bg-safety' : 'bg-green-100'
                      }`}>
                        <Check className={`w-3 h-3 ${feature.highlight ? 'text-white' : 'text-green-600'}`} />
                      </div>
                      <span className={`text-concrete-600 leading-relaxed ${
                        feature.highlight ? 'font-semibold text-navy' : ''
                      }`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Extra Info */}
                {plan.extra && (
                  <div className="bg-concrete-50 rounded-lg p-4 mb-8 text-sm text-concrete-600">
                    {plan.extra}
                  </div>
                )}
                
                {/* CTA */}
                <Button 
                  className={`w-full py-6 text-lg font-semibold ${
                    plan.popular 
                      ? 'btn-cta' 
                      : 'bg-navy hover:bg-navy-800 text-white'
                  }`}
                  onClick={scrollToContact}
                >
                  Choisir ce forfait
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Modalités */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl border border-concrete-200 p-6 md:p-8">
            <h4 className="text-xl font-semibold text-navy mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-safety" />
              Modalités claires
            </h4>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-concrete-50 rounded-lg">
                <p className="text-2xl font-bold text-navy">6 mois</p>
                <p className="text-concrete-600 text-sm mt-1">Engagement initial</p>
                <p className="text-concrete-500 text-xs mt-2">
                  Nécessaire pour établir votre présence Google et générer des données exploitables
                </p>
              </div>
              <div className="text-center p-4 bg-concrete-50 rounded-lg">
                <p className="text-2xl font-bold text-navy">Mensuel</p>
                <p className="text-concrete-600 text-sm mt-1">Après 6 mois</p>
                <p className="text-concrete-500 text-xs mt-2">
                  Reconduction mensuelle automatique
                </p>
              </div>
              <div className="text-center p-4 bg-concrete-50 rounded-lg">
                <p className="text-2xl font-bold text-navy">30 jours</p>
                <p className="text-concrete-600 text-sm mt-1">Préavis de résiliation</p>
                <p className="text-concrete-500 text-xs mt-2">
                  Résiliable avec préavis écrit
                </p>
              </div>
            </div>
            
            <div className="bg-concrete-50 rounded-lg p-4 text-sm text-concrete-600">
              <p className="font-medium text-navy mb-1">
                Délai standard de livraison :
              </p>
              <p>
                Site en ligne dans les 21 jours ouvrables suivant la réception de TOUS les éléments requis (voir Checklist d'Activation).
              </p>
            </div>
          </div>
          
          {/* Important Disclaimer */}
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">
                  IMPORTANT — Gestion des Attentes
                </h4>
                <p className="text-amber-800 leading-relaxed">
                  BureauWeb fournit l'infrastructure technique et l'optimisation de votre présence en ligne. 
                  La génération de demandes de soumission dépend également de :
                </p>
                <ul className="mt-3 space-y-2 text-amber-800">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    Votre réputation locale et vos avis existants
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    Votre secteur d'activité et la concurrence dans votre zone
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    La qualité de votre service client (qui génère les avis positifs)
                  </li>
                </ul>
                <p className="mt-4 font-semibold text-amber-900">
                  Nous ne garantissons pas un nombre spécifique de clients ou d'appels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
