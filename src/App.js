import PrimerComponente from './Components/PrimerComponente'
import './App.css';

// const vectorNombres = [
//   "Juan Carlos",
//   "Maria",
//   "Gerardo"
// ];

const vectorImagenes = [
  { url: 'https://placeimg.com/80/80/people?id=1', title: 'Titulo 1', description:
  'Descripcion imagen 1'},
  { url: 'https://placeimg.com/80/80/people?id=2', title: 'Titulo 2', description:
  'Descripcion imagen 2'},
  { url: 'https://placeimg.com/80/80/people?id=3', title: 'Titulo 3', description:
  'Descripcion imagen 3'},
  { url: 'https://placeimg.com/80/80/people?id=4', title: 'Titulo 4', description:
  'Descripcion imagen 4'}
  ]

function App() {

  // let respuesta = vectorNombres.map( el => 
  //   <PrimerComponente name={el} />
  // );

  let respuesta = vectorImagenes.map((el,index) => 
    <PrimerComponente url={el.url} title={el.title} description={el.description} key={index}/> 
  )

  return (
    <div className="App">
        {respuesta}
    </div>
  );
}

export default App;
