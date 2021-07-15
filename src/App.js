import PrimerComponente from './Components/PrimerComponente'
import './App.css';

const vectorNombres = [
  "Juan Carlos",
  "Maria",
  "Gerardo"
];

function App() {

  let respuesta = vectorNombres.map( el => 
    <PrimerComponente name={el} />
  );

  return (
    <div className="App">
        {respuesta}
    </div>
  );
}

export default App;
