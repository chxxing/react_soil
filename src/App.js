import './App.css';
import Header from './component/Header';
import MainVisual from './component/MainVisual';
import Company from './component/Company';

function App() {
  return (
    <div className='Wrapper'>
      <Header />
      <main>
        <MainVisual />
        <Company />
      </main>
    </div>
  );
}

export default App;
