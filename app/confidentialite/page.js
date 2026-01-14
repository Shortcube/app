export const metadata = {
  title: "Politique de confidentialité | BureauWeb",
  description:
    "Politique de confidentialité de BureauWeb : collecte, utilisation et protection des renseignements personnels.",
};

export default function ConfidentialitePage() {
  return (
    <main className="section-container py-16 prose prose-slate max-w-3xl">
      <h1>Politique de confidentialité</h1>

      <p>
        Dernière mise à jour : <strong>2026-01-14</strong>
      </p>

      <p>
        BureauWeb recueille certains renseignements personnels lorsque vous nous
        contactez (ex. via formulaire, courriel ou téléphone). Cette politique
        explique ce que nous recueillons, pourquoi, et comment nous protégeons
        ces renseignements.
      </p>

      <h2>Renseignements recueillis</h2>
      <ul>
        <li>Nom et coordonnées (téléphone, courriel) si vous les fournissez</li>
        <li>Informations sur votre entreprise (secteur, région desservie)</li>
        <li>Message et informations transmises volontairement</li>
      </ul>

      <h2>Utilisation</h2>
      <ul>
        <li>Répondre à votre demande et vous fournir une estimation</li>
        <li>Communiquer avec vous au sujet de votre projet</li>
        <li>Améliorer notre service (statistiques agrégées, si applicable)</li>
      </ul>

      <h2>Partage</h2>
      <p>
        Nous ne vendons pas vos renseignements. Nous pouvons utiliser des
        fournisseurs (hébergement, courriel) pour opérer le service. Ces
        fournisseurs n’ont accès qu’au nécessaire.
      </p>

      <h2>Conservation</h2>
      <p>
        Nous conservons les renseignements le temps nécessaire pour répondre à
        la demande et respecter nos obligations.
      </p>

      <h2>Vos droits</h2>
      <p>
        Vous pouvez demander l’accès, la correction ou la suppression de vos
        renseignements, sous réserve des obligations légales applicables.
      </p>

      <h2>Contact</h2>
      <p>
        Pour toute question : <strong>info@bureauweb.ca</strong>
      </p>

      <p className="text-sm">
        Note : Cette page est un modèle informatif. Pour une conformité complète
        adaptée à vos pratiques, consultez un professionnel.
      </p>
    </main>
  );
}
