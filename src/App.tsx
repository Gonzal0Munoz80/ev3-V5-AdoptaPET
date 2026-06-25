import { useState } from 'react'
import ListaMascotas from './components/ListaMascotas'
import FiltroEspecia from './components/FiltroEspecia'
import { mascotas } from './data/mascotas'
import './App.css'

function App() {
  const [filtroEspecie, setFiltroEspecie] = useState('Todas')
  const [busqueda, setBusqueda] = useState('')

  const handleAdoptar = (mascota: any) => {
    alert(`¡Gracias por querer adoptar a ${mascota.nombre}! Te contactaremos pronto.`)
  }

  // Aplicar filtros al array de mascotas
  const mascotasFiltradas = mascotas.filter((mascota) => {
    // Filtro por especie
    const cumpleFiltroEspecie = filtroEspecie === 'Todas' || mascota.especie === filtroEspecie

    // Filtro por búsqueda (nombre)
    const cumpleBusqueda = mascota.nombre.toLowerCase().includes(busqueda.toLowerCase())

    return cumpleFiltroEspecie && cumpleBusqueda
  })

  return (
    <div className="app">
      <header>
        <h1>🐾 Adopta Mascota</h1>
        <p>Encuentra tu nuevo compañero feliz</p>
      </header>
      
      <main>
        <FiltroEspecia 
          filtroActual={filtroEspecie}
          onCambiarFiltro={setFiltroEspecie}
          busqueda={busqueda}
          onCambiarBusqueda={setBusqueda}
        />

        {mascotasFiltradas.length === 0 ? (
          <div className="sin-resultados">
            <div className="icono-vacio">😢</div>
            <h3>No hay mascotas que coincidan</h3>
            <p>Intenta ajustar los filtros de búsqueda</p>
          </div>
        ) : (
          <ListaMascotas 
            mascotas={mascotasFiltradas}
            onAdoptar={handleAdoptar}
          />
        )}
      </main>
      
      <footer>
        <p>&copy; 2024 Adopta Mascota. Todos los derechos reservados. 🐾</p>
      </footer>
    </div>
  )
}

export default App
