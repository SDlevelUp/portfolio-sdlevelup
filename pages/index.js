
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
        <title>Sarah, développeuse web junior</title>
        <meta name="description" content="Développeuse web junior" />
        <meta name="description" content="S'Dlevel'Up: Développeuse web" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <title>Portfolio S'Dlevel'Up </title>
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}