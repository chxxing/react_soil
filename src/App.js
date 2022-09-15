import './App.css';
import Header from './component/Header';
import MainVisual from './component/MainVisual';
import Company from './component/Company';
import Business from './component/Business';
import Sustainability from './component/Sustainability';
import Relation from './component/Relation';
import Footer from './component/Footer';

function App() {
  return (
    <div className='Wrapper'>
      <Header />
      <main>
        <MainVisual />
        <Company />
        <Business />
        <Sustainability />
        <Relation />
      </main>
      <Footer />
    </div>
  );
}

export default App;