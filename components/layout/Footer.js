import { Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-navy-950 text-white">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <span className="text-2xl font-bold">
              Bureau<span className="text-safety">Web</span>
            </span>
            <p className="text-concrete-400 text-sm leading-relaxed">
              Votre département web externe. Infrastructure complète pour entrepreneurs québécois.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:514-XXX-XXXX" 
                  className="flex items-center space-x-3 text-concrete-300 hover:text-safety transition-colors group"
                  aria-label="Appelez-nous au 514-XXX-XXXX"
                >
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-safety/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>514-XXX-XXXX</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@bureauweb.ca" 
                  className="flex items-center space-x-3 text-concrete-300 hover:text-safety transition-colors group"
                  aria-label="Envoyez-nous un courriel à info@bureauweb.ca"
                >
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-safety/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>info@bureauweb.ca</span>
                </a>
              </li>
              <li>
                <div className="flex items-center space-x-3 text-concrete-400">
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Longueuil, QC</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Légal</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/conditions" 
                  className="text-concrete-300 hover:text-safety transition-colors"
                >
                  Conditions de Service
                </a>
              </li>
              <li>
                <a 
                  href="/confidentialite" 
                  className="text-concrete-300 hover:text-safety transition-colors"
                >
                  Politique de Confidentialité
                </a>
              </li>
            </ul>
          </div>

          {/* Partenaires */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Partenaires</h4>
            <p className="text-concrete-400 text-sm">
              Nous comprenons votre industrie.
            </p>
            <div className="flex flex-wrap gap-2">
              {/* Placeholders pour logos partenaires */}
              <span className="bg-white/5 text-concrete-400 text-xs px-3 py-2 rounded-lg border border-white/10">
                APCHQ
              </span>
              <span className="bg-white/5 text-concrete-400 text-xs px-3 py-2 rounded-lg border border-white/10">
                CMMTQ
              </span>
              <span className="bg-white/5 text-concrete-400 text-xs px-3 py-2 rounded-lg border border-white/10">
                RBQ
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-concrete-500 text-sm text-center lg:text-left">
              <p>
                BureauWeb est une division de [Nom d'Entreprise], immatriculée au Registre des Entreprises du Québec (NEQ : [à compléter]).
              </p>
              <p className="mt-1">
                TPS/TVQ : [à compléter]
              </p>
            </div>
            <p className="text-concrete-500 text-sm">
              © {currentYear} BureauWeb. Tous droits réservés.
            </p>
          </div>
          <p className="text-concrete-600 text-xs mt-6 text-center">
            Nous utilisons des outils d'analyse respectueux de la vie privée. 
            Hébergement avec préférence pour les régions canadiennes lorsque disponible.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
