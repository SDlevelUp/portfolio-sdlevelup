
import Main from '@/components/Main';
import Head from 'next/head';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sarah | Développeuse web junior</title>
        <meta name="description" content="Développeuse web junior" />
        <link rel="icon" href="/fav.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      </div>
  )
}