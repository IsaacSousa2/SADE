import Header from "@/components/Header/header";/*Importando componente do cabeçalho*/
import Footer from "@/components/Footer/footer";/*Importando componente do rodapé*/
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight:['400', '600'] })

export const metadata: Metadata = {
  
  title: 'SADE',
  description: 'Sistema de Gerenciamento',
  icons:{
    icon:[
      '/favicon.ico?v=1'
    ],
    apple:[
      '/apple-touch-icon.png?v-4'
    ],
    shortcut:[
      '/apple-touch-icon.png'
    ],
  },
  manifest: 'site/webmanifest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
