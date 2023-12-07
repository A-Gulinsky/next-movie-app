import { Trends } from '@/components/home/Trends';
import { Suspense } from 'react';

export const metadata = {
  title: 'Home',
  description: 'Description | Home Page',
  openGraph: {
    title: 'Home',
    description: 'Welcome to Movie Service',
    siteName: 'Movies Service',
    type: 'article',
    url: 'https://next-movie-app-seven.vercel.app/',
    images: 'https://img.freepik.com/free-photo/fresh-natural-green-schefflera-arboricola-background_53876-153311.jpg?w=996&t=st=1701474143~exp=1701474743~hmac=50682caf3fdfd630dff9ea401437b10bd57f30234e16b1f53a14a718a5ea0498'
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
