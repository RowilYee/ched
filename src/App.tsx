import Nav from './components/Nav'
import './App.css'
import chedLogo from './assets/ched-logo.png'


function App() {


  return (
    <>
      <div className="app-container">
        <Nav />
        <div className="content-container">
          <h1 className='header'>BIENVENIDOS!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sit provident ea, dicta eum odio laborum magnam qui sapiente, incidunt quo sequi possimus, delectus accusantium nemo et amet. Fuga, sint?</p>
        </div>
        <img className="logo" src={chedLogo} />

      </div>
    </>
  )
}

export default App
