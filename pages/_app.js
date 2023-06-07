import Navbar from '@/components/Navbar';
import '@/styles/globals.min.css';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

