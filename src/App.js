import './styles/App.scss';
import Rates from './components/Rates';
import data from './data.json';
import { useState } from 'react';

function App() {

  const [id, setId] = useState(0);

  return (
    <div className='container'>
      {data.map((item, index) => (
        <Rates {...item}
          speed={item.speed}
          terms={item.terms}
          item={item}
          activeCard={item.id === id}
          setId={setId}
          key={index} />
      ))}

    </div>
  );
}

export default App;
