import { useState } from 'react'
import ListaMascotas from './components/ListaMascotas'
import { mascotas } from './data/mascotas'
import './App.css'

function App() {
  const [mascotasLista] = useState(mascotas)

  const handleAdoptar = (mascota) => {
    alert(`¡Gracias por querer adoptar a ${mascota.nombre}! Te contactaremos pronto.`)
  }

  return (
    <div className="app">
      <header>
        <h1>🐾 Adopta Mascota</h1>
        <p>Encuentra tu nuevo compañero feliz</p>
      </header>
      
      <main>
        <ListaMascotas 
          mascotas={mascotasLista}
          onAdoptar={handleAdoptar}
        />
      </main>
      
      <footer>
        <p>&copy; 2024 Adopta Mascota. Todos los derechos reservados. 🐾</p>
      </footer>
    </div>
  )
}

export default App
