import './globals.css'

export const metadata = {
  title: 'BureauWeb.ca | Infrastructure web pour entrepreneurs québécois',
  description: "Votre département web externe. Nous bâtissons, hébergeons et maintenons votre infrastructure numérique. Site performant + Optimisation Google + Système d'avis. Un forfait mensuel fixe, sans surprises.",
  keywords: 'site web entrepreneur, infrastructure web québec, google business profile, site plombier, site couvreur, site paysagiste, site entrepreneur construction, rive-sud, montréal',
  authors: [{ name: 'BureauWeb' }],
  creator: 'BureauWeb',
  publisher: 'BureauWeb',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bureauweb.ca'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-CA': '/',
    },
  },
  openGraph: {
    title: 'BureauWeb.ca | Infrastructure web pour entrepreneurs québécois',
    description: "L'infrastructure web complète pour entrepreneurs québécois. Site performant + Optimisation Google + Système d'avis. Un forfait mensuel fixe, sans surprises.",
    url: 'https://bureauweb.ca',
    siteName: 'BureauWeb.ca',
    locale: 'fr_CA',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "BureauWeb - Infrastructure web pour entrepreneurs québécois",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BureauWeb.ca | Infrastructure web pour entrepreneurs québécois',
    description: "L'infrastructure web complète pour entrepreneurs québécois. Site performant + Optimisation Google + Système d'avis.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification-token-a-ajouter',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0f172a',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr-CA">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen bg-background antialiased">
        {children}
      </body>
    </html>
  )
}
