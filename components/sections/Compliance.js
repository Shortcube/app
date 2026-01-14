import { Shield, Check, Cookie, FileText, Globe, Database, AlertCircle, Scale } from 'lucide-react'

const Compliance = () => {
  const features = [
    {
      icon: Cookie,
      title: 'Bannière de consentement aux cookies',
      description: 'Conforme aux meilleures pratiques',
    },
    {
      icon: FileText,
      title: 'Page de Politique de Confidentialité',
      description: 'Modèle type adapté',
    },
    {
      icon: Globe,
      title: 'Hébergement canadien',
      description: 'Préférence pour les régions canadiennes lorsque disponible',
    },
    {
      icon: Database,
      title: 'Minimisation des données',
      description: 'Collecte de données personnelles réduite au minimum',
    },
  ]

  return (
    <section id="conformite" className="py-20 md:py-28 bg-concrete-50 scroll-mt-header">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Protection des données</span>
          </div>
          <h2 className="text-navy mb-6">
            Conformité et protection des données
          </h2>
          <p className="text-xl text-concrete-600 max-w-2xl mx-auto">
            Loi 25 : outils de base inclus
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="bg-white rounded-2xl border border-concrete-200 overflow-hidden mb-8">
            {/* Header */}
            <div className="bg-navy p-6 md:p-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-7 h-7 text-safety" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Loi 25 du Québec
                  </h3>
                  <p className="text-concrete-300">
                    BureauWeb configure les éléments techniques essentiels pour faciliter votre conformité
                  </p>
                </div>
              </div>
            </div>
            
            {/* Features Grid */}
            <div className="p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-concrete-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Important Disclaimer */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 md:p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Scale className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">
                  Important
                </h4>
                <p className="text-blue-800 leading-relaxed">
                  Chaque entreprise doit adapter sa politique selon ses pratiques réelles de collecte 
                  et d'utilisation de données. BureauWeb fournit l'infrastructure technique de base, 
                  mais ne remplace pas un avis juridique.
                </p>
                <p className="mt-3 font-medium text-blue-900">
                  Pour une conformité légale complète, consultez un avocat spécialisé en protection des données.
                </p>
              </div>
            </div>
          </div>

          {/* NAP Note */}
          <div className="bg-white rounded-xl border border-concrete-200 p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-navy mb-2">
                  Pour vos sites clients
                </h4>
                <p className="text-concrete-600 leading-relaxed">
                  Nous utilisons vos coordonnées NAP officielles (Nom, Adresse, Téléphone) 
                  pour préserver votre référencement local Google.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Compliance
