import { Star, Check, X, MessageSquare, FileText, Link, BookOpen, Send, Reply, AlertTriangle } from 'lucide-react'

const Reviews = () => {
  const included = [
    {
      icon: MessageSquare,
      text: "Configuration du système d’envoi (modèles SMS et courriels prêts à l’emploi)",
    },
    {
      icon: Link,
      text: "Instructions pour l’intégration à votre logiciel de facturation ou à votre CRM",
    },
    {
      icon: FileText,
      text: "Page dédiée sur votre site pour faciliter le dépôt d’avis",
    },
    {
      icon: BookOpen,
      text: 'Guide PDF : « Comment demander des avis à vos clients sans être insistant »',
    },
  ]

  const notIncluded = [
    {
      icon: Send,
      text: "Envoi automatique depuis nos systèmes (vous déclenchez l’envoi depuis votre outil, ou manuellement)",
    },
    {
      icon: Reply,
      text: "Réponses illimitées aux avis (positifs ou négatifs). On peut vous montrer quoi répondre, ou le faire à la carte : 75 $/réponse.",
    },
    {
      icon: AlertTriangle,
      text: "Gestion de crise réputationnelle (client très insatisfait, faux avis) : service additionnel sur demande.",
    },
  ]

  return (
    <section id="avis" className="py-20 md:py-28 bg-white scroll-mt-header">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 fill-yellow-500" />
            <span className="text-sm font-medium">Réputation en ligne</span>
          </div>
          <h2 className="text-navy mb-6">
            Système d’avis Google
          </h2>
          <p className="text-xl text-concrete-600 max-w-2xl mx-auto">
            Qu’est-ce qui est inclus, exactement, dans votre forfait ?
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Included Column */}
          <div className="bg-green-50 rounded-2xl p-6 md:p-8 border border-green-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-800">
                Système d’avis inclus
              </h3>
            </div>
            
            <div className="space-y-4">
              {included.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-concrete-700 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Not Included Column */}
          <div className="bg-concrete-50 rounded-2xl p-6 md:p-8 border border-concrete-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-concrete-200 rounded-full flex items-center justify-center">
                <X className="w-5 h-5 text-concrete-600" />
              </div>
              <h3 className="text-xl font-semibold text-concrete-700">
                Ce qui n’est pas inclus
              </h3>
            </div>
            
            <div className="space-y-4">
              {notIncluded.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4">
                  <div className="w-8 h-8 bg-concrete-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-concrete-500" />
                  </div>
                  <p className="text-concrete-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <div className="bg-navy/5 rounded-xl p-6">
            <div className="flex justify-center mb-3">
              <div className="flex text-yellow-400 text-2xl">
                {'★'.repeat(5)}
              </div>
            </div>
            <p className="text-concrete-600">
              Les avis Google sont essentiels pour votre visibilité locale. 
              Notre système vous donne tous les outils pour en obtenir plus facilement.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
