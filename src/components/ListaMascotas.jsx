import PropTypes from 'prop-types';
import MascotaCard from './MascotaCard';
import '../styles/ListaMascotas.css';

function ListaMascotas({ mascotas, onAdoptar }) {
  return (
    <div className="lista-mascotas">
      <div className="titulo-seccion">
        <h2>🐾 Mascotas Disponibles para Adopción</h2>
        <p className="contador">Total: <strong>{mascotas.length}</strong> mascotas</p>
      </div>

      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-label">🐕 Perros:</span>
          <span className="stat-valor">{mascotas.filter(m => m.especie === 'Perro').length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">🐱 Gatos:</span>
          <span className="stat-valor">{mascotas.filter(m => m.especie === 'Gato').length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">🐾 Otros:</span>
          <span className="stat-valor">{mascotas.filter(m => m.especie === 'Otro').length}</span>
        </div>
        <div className="stat-item urgente">
          <span className="stat-label">⚠️ Adopción Urgente:</span>
          <span className="stat-valor">{mascotas.filter(m => m.adopcionUrgente).length}</span>
        </div>
      </div>

      <div className="grid-mascotas">
        {mascotas.map((mascota) => (
          <MascotaCard 
            key={mascota.id}
            mascota={mascota}
            onAdoptar={onAdoptar}
          />
        ))}
      </div>
    </div>
  );
}

ListaMascotas.propTypes = {
  mascotas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.required,
      nombre: PropTypes.string.required,
      raza: PropTypes.string.required,
      edad: PropTypes.number.required,
      especie: PropTypes.string.required,
      descripcion: PropTypes.string.required,
      caracteristicas: PropTypes.arrayOf(PropTypes.string).required,
      adopcionUrgente: PropTypes.bool.required,
    })
  ).isRequired,
  onAdoptar: PropTypes.func.isRequired,
};

export default ListaMascotas;
