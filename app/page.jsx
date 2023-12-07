import { Trends } from '@/components/home/Trends';
import { Suspense } from 'react';

export const metadata = {
  title: 'Home',
  description: 'Description | Home Page',
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
