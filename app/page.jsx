import { Trends } from '@/components/home/Trends';
import { Suspense } from 'react';

export const metadata = {
  metadataBase: new URL(`https://next-movie-app-seven.vercel.app/`),
  title: 'Home',
  description: 'Description | Home Page',
  openGraph: {
    title: 'Home',
    description: 'Welcome to Movie Service',
    siteName: 'Movies Service',
    type: 'article',
    url: 'https://next-movie-app-seven.vercel.app/',
    images: [
      {
        url: 'https://img.freepik.com/free-vector/seamless-pattern-with-cinema-elements_225004-1154.jpg?w=740&t=st=1701983783~exp=1701984383~hmac=49a028fb0d46b67d478ff6ce701b5d697fb055eee78ada4654d7346e4694547d',
        width: 1000,
        height: 1000,
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
