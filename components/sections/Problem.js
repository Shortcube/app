import { AlertCircle, DollarSign, Clock, UserX } from 'lucide-react'

const Problem = () => {
  const problems = [
    {
      icon: DollarSign,
      title: 'Les agences coûtent cher',
      description: '3 000$ et plus pour un site, puis ils disparaissent après le lancement. Bonne chance pour avoir du support.',
    },
    {
      icon: UserX,
      title: 'Les freelances sont instables',
      description: 'Ils répondent plus après 6 mois. Votre site devient obsolète et personne pour vous aider.',
    },
    {
      icon: Clock,
      title: 'Personne pour faire le suivi',
      description: 'Les mises à jour s\'accumulent, la sécurité est négligée, les problèmes traînent.',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-concrete-50">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-50 text-red-700 px-4 py-2 rounded-full mb-6">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Le problème</span>
            </div>
            <h2 className="text-navy mb-6">
              Vous méritez mieux que ça
            </h2>
            <p className="text-xl text-concrete-600 leading-relaxed max-w-2xl mx-auto">
              Les agences chargent une fortune puis disparaissent. 
              Les freelances répondent plus après quelques mois. 
              Vous méritez un partenaire stable.
            </p>
          </div>

          {/* Cartes des problèmes */}
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
