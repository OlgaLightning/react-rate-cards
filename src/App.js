import './styles/App.scss';
import Rates from './components/Rates';
import data from './data.json'

function App() {
  return (
    <div className='container'>
      {data.map((item, index) => (
        <Rates {...item} {...item} speed={item.speed} terms={item.terms} isSelected={item.isSelected} key={index} />
      ))}

    </div>
  );
}

export default App;
