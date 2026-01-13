import { AlertCircle, DollarSign, Clock, UserX } from 'lucide-react'

const Problem = () => {
  const problems = [
    {
      icon: DollarSign,
      title: 'Agences coûteuses',
      description: '3,000$+ pour un site, puis ils disparaissent après le lancement.',
    },
    {
      icon: UserX,
      title: 'Freelances instables',
      description: 'Ils ne répondent plus après 6 mois. Votre site devient obsolète.',
    },
    {
      icon: Clock,
      title: 'Pas de suivi',
      description: 'Mises à jour ignorées, sécurité négligée, problèmes non résolus.',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-concrete-50">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-50 text-red-700 px-4 py-2 rounded-full mb-6">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Le problème</span>
            </div>
            <h2 className="text-navy mb-6">
              Vous méritez une infrastructure stable
            </h2>
            <p className="text-xl text-concrete-600 leading-relaxed max-w-2xl mx-auto">
              Les agences traditionnelles coûtent 3,000$+ et disparaissent après le lancement. 
              Les freelances ne répondent plus après 6 mois.
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 md:p-8 border border-concrete-200 hover:border-concrete-300 transition-colors"
              >
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-5">
                  <problem.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-3">
                  {problem.title}
                </h3>
                <p className="text-concrete-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem
