import { Header } from '@/components/header/Header'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en" prefix="og: https://ogp.me/ns#">
      <body>
        <Header />
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}
