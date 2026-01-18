import { FileCheck, CheckCircle2, CreditCard, Hammer, Rocket, ShieldCheck, Clock } from 'lucide-react'

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: FileCheck,
      title: 'Diagnostic',
      duration: 'Étape 1',
      color: 'bg-blue-500',
      content: [
        {
          type: 'text',
          value: 'On analyse votre site, votre fiche Google et les infos que vous fournissez. Diagnostic écrit, 1 page.',
        },
        {
          type: 'highlight',
          value: 'Retour sous 24–48 h ouvrables. 1 page. Actions prioritaires.',
        },
      ],
    },
    {
      number: '02',
      icon: CheckCircle2,
      title: 'Décision',
      duration: 'Étape 2',
      color: 'bg-safety',
      content: [
        {
          type: 'text',
          value: 'GO/NO-GO clair et offre (2 options max) si c’est pertinent.',
        },
        {
          type: 'highlight',
          value: 'Si on avance, on précise le périmètre et les limites mensuelles.',
        },
      ],
    },
    {
      number: '03',
      icon: CreditCard,
      title: 'Paiement',
      duration: 'Étape 3',
      color: 'bg-green-500',
      content: [
        {
          type: 'text',
          value: 'Paiement envoyé après diagnostic (lien Stripe).',
        },
        {
          type: 'text',
          value: 'Une fois le paiement reçu, l’abonnement est actif et la production démarre.',
        },
      ],
    },
    {
      number: '04',
      icon: Hammer,
      title: 'Production',
      duration: 'Étape 4',
      color: 'bg-navy',
      content: [
        {
          type: 'text',
          value: 'On construit le site à partir du template BureauWeb et des éléments fournis.',
        },
        {
          type: 'highlight',
          value: 'Échanges écrits par défaut. Appel optionnel si utile.',
        },
      ],
    },
    {
      number: '05',
      icon: Rocket,
      title: 'Livraison',
      duration: 'Étape 5',
      color: 'bg-slate-700',
      content: [
        {
          type: 'text',
          value: 'Go-live + handoff court (accès, checklist, points d’attention).',
        },
      ],
    },
    {
      number: '06',
      icon: ShieldCheck,
      title: 'Exploitation mensuelle',
      duration: 'Étape 6',
      color: 'bg-slate-900',
      content: [
        {
          type: 'text',
          value: 'Rapport 1 page, 1 micro-amélioration, QA mensuelle.',
        },
      ],
    },
  ]

  return (
    <section id="processus" className="py-20 md:py-28 bg-white scroll-mt-header">
      <div className="section-container">
        {/* En-tête */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-safety/10 text-safety-700 px-4 py-2 rounded-full mb-6">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Processus clair</span>
          </div>
          <h2 className="text-navy mb-6">
            Comment ça se passe
          </h2>
          <p className="text-xl text-concrete-600 max-w-2xl mx-auto">
            Un processus clair, sans téléphone obligatoire et sans promesse inventée.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Ligne verticale pour desktop */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-concrete-200" />
            
            {/* Étapes */}
            <div className="space-y-8 md:space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Carte de l'étape */}
                  <div className="md:ml-20 bg-white rounded-xl border border-concrete-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center gap-4 p-6 border-b border-concrete-100">
                      {/* Badge numéro - Mobile */}
                      <div className="md:hidden flex items-center gap-4">
                        <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center`}>
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-concrete-400">ÉTAPE {step.number}</span>
                          <h3 className="text-lg font-semibold text-navy">{step.title}</h3>
                        </div>
                      </div>
                      
                      {/* Titre desktop */}
                      <div className="hidden md:block flex-1">
                        <span className="text-xs font-bold text-concrete-400">ÉTAPE {step.number}</span>
                        <h3 className="text-xl font-semibold text-navy">{step.title}</h3>
                      </div>
                      
                      {/* Badge durée */}
                      <div className="bg-concrete-100 text-concrete-700 px-4 py-2 rounded-lg text-sm font-medium">
                        {step.duration}
                      </div>
                    </div>
                    
                    {/* Contenu */}
                    <div className="p-6 space-y-4">
                      {step.content.map((item, itemIndex) => {
                        if (item.type === 'text') {
                          return (
                            <p key={itemIndex} className="text-concrete-600 leading-relaxed">
                              {item.value}
                            </p>
                          )
                        }
                        
                        if (item.type === 'highlight') {
                          return (
                            <div key={itemIndex} className="flex items-start gap-3 bg-safety/5 border border-safety/20 rounded-lg p-4">
                              <CheckCircle2 className="w-5 h-5 text-safety flex-shrink-0 mt-0.5" />
                              <p className="text-concrete-700">{item.value}</p>
                            </div>
                          )
                        }
                        
                        if (item.type === 'split') {
                          return (
                            <div key={itemIndex} className="grid md:grid-cols-2 gap-4">
                              <div className="bg-concrete-50 rounded-lg p-4">
                                <span className="text-xs font-bold text-safety uppercase tracking-wide">Vous</span>
                                <p className="text-concrete-600 mt-2">{item.vous}</p>
                              </div>
                              <div className="bg-navy/5 rounded-lg p-4">
                                <span className="text-xs font-bold text-navy uppercase tracking-wide">Nous</span>
                                <p className="text-concrete-600 mt-2">{item.nous}</p>
                              </div>
                            </div>
                          )
                        }
                        
                        if (item.type === 'note') {
                          return (
                            <div key={itemIndex} className="flex items-start gap-3 text-sm text-concrete-500 italic">
                              <span className="text-concrete-400">Note :</span>
                              <p>{item.value}</p>
                            </div>
                          )
                        }
                        
                        return null
                      })}
                    </div>
                  </div>
                  
                  {/* Point timeline - Desktop */}
                  <div className="hidden md:flex absolute left-0 top-6 items-center justify-center">
                    <div className={`w-16 h-16 ${step.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
