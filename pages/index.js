import Navbar from '@/components/Navbar';
import Main from '@/components/Main';
import Head from 'next/head';
import About from '@/components/About';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sarah | Développeuse web junior</title>
        <meta name="description" content="Développeuse web junior" />
        <link rel="icon" href="/fav.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar />
      <Main />
      <About />
    </div>
  )
}