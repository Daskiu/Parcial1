import './App.css'

import { CardAlimentacion } from './components/CardAlimentacion/CardAlimentacion'
import { CardHoteles } from './components/CardHoteles/CardHoteles'
import { CardDestinos } from './components/CardDestinos/CardDestinos'
import { LeftNav } from './components/LeftNav/LeftNav'

function App() {

  return (
    <main>
      <h1 className='main-title'>Planea tu viaje</h1>
      <LeftNav/>
      <h1>Category 1</h1>
      <CardAlimentacion/>
      <h1>Category 2</h1>
      <CardHoteles/>
      <h1>Category 3</h1>
      <CardDestinos/>
    </main>
  )
}

export default App