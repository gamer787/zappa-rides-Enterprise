import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Introduction } from './components/Introduction';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-black">
      <Hero />
      <ProblemSolution />
      <Introduction />
      <Features />
      <Pricing />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;