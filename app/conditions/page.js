export const metadata = {
  title: "Conditions de service | BureauWeb",
  description: "Conditions de service et modalités d’abonnement BureauWeb.",
};

export default function ConditionsPage() {
  return (
    <main className="section-container py-16 prose prose-slate max-w-3xl">
      <h1>Conditions de service</h1>

      <h2>1. Portée du service</h2>
      <p>
        BureauWeb fournit une infrastructure web (site, hébergement, maintenance
        définie au forfait). Les livrables exacts et limites sont décrits au
        devis/contrat.
      </p>

      <h2>2. Délais</h2>
      <p>
        Les délais dépendent de la réception des éléments demandés (textes,
        photos, accès). Un projet peut être mis en pause si les éléments ne sont
        pas fournis dans les délais convenus.
      </p>

      <h2>3. Abonnement, paiement et résiliation</h2>
      <p>
        Les forfaits sont facturés mensuellement. Après la période d’engagement
        initial (si applicable), la résiliation se fait avec un préavis écrit de
        30 jours.
      </p>

      <h2>4. Contenu client</h2>
      <p>
        Le client confirme détenir les droits sur les contenus fournis (textes,
        images, logos).
      </p>

      <h2>5. Limitation</h2>
      <p>
        BureauWeb ne garantit pas un nombre spécifique d’appels ou de clients.
        Les résultats dépendent du marché, de la concurrence, des avis, et du
        service offert.
      </p>

      <h2>6. Contact</h2>
      <p>
        Questions : <strong>info@bureauweb.ca</strong>
      </p>

      <p className="text-sm">
        Note : Ce texte est un modèle. Fais valider par un professionnel avant
        usage commercial.
      </p>
    </main>
  );
}
