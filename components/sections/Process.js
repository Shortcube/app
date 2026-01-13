import { Phone, FileCheck, Rocket, Ship, AlertTriangle, Clock, CheckCircle2 } from 'lucide-react'

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: Phone,
      title: 'Qualification',
      duration: '15 min — Appel ou Visio',
      color: 'bg-blue-500',
      content: [
        {
          type: 'text',
          value: 'Nous validons que votre secteur et votre zone géographique correspondent à notre modèle.',
        },
        {
          type: 'highlight',
          value: "Vous recevez la Checklist d'Activation : liste précise des éléments requis (photos, textes, accès Google Business).",
        },
      ],
    },
    {
      number: '02',
      icon: FileCheck,
      title: 'Vous Fournissez, Nous Construisons',
      duration: 'Délai standard : 21 jours ouvrables',
      color: 'bg-safety',
      content: [
        {
          type: 'split',
          vous: 'Envoyez les éléments de la checklist dans les 7 jours suivant la signature.',
          nous: "Auditons votre présence Google, configurons l'hébergement sécurisé, construisons le site.",
        },
        {
          type: 'note',
          value: 'Les retards causés par des demandes de modifications majeures après validation du design initial peuvent prolonger ce délai.',
        },
        {
          type: 'warning',
          value: "Si les éléments ne sont pas fournis dans les 14 jours, le projet est suspendu jusqu'à réception.",
        },
      ],
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Lancement & Formation',
      duration: '1h en visioconférence',
      color: 'bg-green-500',
      content: [
        {
          type: 'text',
          value: "Nous vous montrons comment fonctionne le système d'avis client.",
        },
        {
          type: 'text',
          value: 'Vous recevez vos accès (lecture seule — nous gérons toute la technique).',
        },
      ],
    },
    {
      number: '04',
      icon: Ship,
      title: 'Croisière',
      duration: 'Opération Continue',
      color: 'bg-navy',
      content: [
        {
          type: 'split',
          vous: 'Nous signalez 2 fois/mois les changements requis (nouveaux services, photos de chantiers récents).',
          nous: 'Gérons les sauvegardes, la sécurité, les mises à jour techniques.',
        },
        {
          type: 'highlight',
          value: 'Vous recevez : Rapport mensuel simple (PDF + email) — Visiteurs, Demandes de soumission reçues, Nouveaux avis Google.',
        },
      ],
    },
  ]

  return (
    <section id="processus" className="py-20 md:py-28 bg-white scroll-mt-header">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-safety/10 text-safety-700 px-4 py-2 rounded-full mb-6">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Processus réaliste</span>
          </div>
          <h2 className="text-navy mb-6">
            Comment ça fonctionne
          </h2>
          <p className="text-xl text-concrete-600 max-w-2xl mx-auto">
            Un processus transparent avec des délais réalistes. Pas de promesses vides.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-concrete-200" />
            
            {/* Steps */}
            <div className="space-y-8 md:space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="md:ml-20 bg-white rounded-xl border border-concrete-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center gap-4 p-6 border-b border-concrete-100">
                      {/* Number badge - Mobile */}
                      <div className="md:hidden flex items-center gap-4">
                        <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center`}>
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-concrete-400">ÉTAPE {step.number}</span>
                          <h3 className="text-lg font-semibold text-navy">{step.title}</h3>
                        </div>
                      </div>
                      
                      {/* Desktop title */}
                      <div className="hidden md:block flex-1">
                        <span className="text-xs font-bold text-concrete-400">ÉTAPE {step.number}</span>
                        <h3 className="text-xl font-semibold text-navy">{step.title}</h3>
                      </div>
                      
                      {/* Duration badge */}
                      <div className="bg-concrete-100 text-concrete-700 px-4 py-2 rounded-lg text-sm font-medium">
                        {step.duration}
                      </div>
                    </div>
                    
                    {/* Content */}
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
                              <span className="text-concrete-400">Note:</span>
                              <p>{item.value}</p>
                            </div>
                          )
                        }
                        
                        if (item.type === 'warning') {
                          return (
                            <div key={itemIndex} className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4">
                              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                              <p className="text-amber-800 text-sm">{item.value}</p>
                            </div>
                          )
                        }
                        
                        return null
                      })}
                    </div>
                  </div>
                  
                  {/* Timeline dot - Desktop */}
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
