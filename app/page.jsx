import { Trends } from '@/components/home/Trends';
import { Suspense } from 'react';

export const metadata = {
  metadataBase: new URL(`https://next-movie-app-seven.vercel.app/`),
  title: 'StunDeals - Your Source for Hot Deals, Sale Items, Coupons and Savings.',
  description: 'Discover incredible deals and exclusive offers from top retailers at StunDeals. Explore savings across categories for remarkable prices!',
  openGraph: {
    title: 'StunDeals - Your Source for Hot Deals, Sale Items, Coupons and Savings.',
    description: 'Discover incredible deals and exclusive offers from top retailers at StunDeals. Explore savings across categories for remarkable prices!',
    siteName: 'Movies Service',
    type: 'article',
    url: 'https://next-movie-app-seven.vercel.app/',
    images: [
      {
        url: '/stundeals.png',
        width: 600,
        height: 600,
        alt: 'Home Page'
      }
    ]
  }
}

export default function Home() {

  return (
    <>
      
      <h2 style={{padding: '20px 0 10px 15px'}}>Trends today</h2>

      <Suspense fallback={<h2>LOADING MOVIES WAIT.....</h2>}>
        <Trends />
      </Suspense>
      
    </>
  )
}
