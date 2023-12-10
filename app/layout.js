import { Header } from '@/components/header/Header'
import './globals.css'
import StoreProvider from './StoreProvider'

export default function RootLayout({ children }) {
  return (
    <html lang="en" prefix="og: https://ogp.me/ns#">
      <body>
        <Header />
        <main className='container'>
          <StoreProvider>
            {children}
          </StoreProvider>
        </main>
      </body>
    </html>
  )
}
