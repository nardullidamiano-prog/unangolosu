import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Struttura from '@/components/Struttura';
import Camere from '@/components/Camere';
import Territorio from '@/components/Territorio';
import Servizi from '@/components/Servizi';
import Contatti from '@/components/Contatti';
import Footer from '@/components/Footer';
import BackgroundMusic from '@/components/BackgroundMusic';

function App() {
  return (
    <div className="min-h-screen bg-sand-50 font-sans-body">
      <Header />
      <main>
        <Hero />
        <Struttura />
        <Camere />
        <Territorio />
        <Servizi />
        <Contatti />
      </main>
      <Footer />
      <BackgroundMusic />
    </div>
  );
}

export default App;
