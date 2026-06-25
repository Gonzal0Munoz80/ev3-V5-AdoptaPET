import PropTypes from 'prop-types';
import '../styles/MascotaCard.css';

function MascotaCard({ mascota, onAdoptar }) {
  // Función para obtener el estilo según la especie
  const getEspecieStyle = (especie) => {
    switch(especie.toLowerCase()) {
      case 'perro':
        return { clase: 'perro', icono: '🐕' };
      case 'gato':
        return { clase: 'gato', icono: '🐱' };
      case 'otro':
        return { clase: 'otro', icono: '🐾' };
      default:
        return { clase: 'otro', icono: '🐾' };
    }
  };

  const especieStyle = getEspecieStyle(mascota.especie);

  return (
    <div className={`mascota-card ${especieStyle.clase} ${mascota.adopcionUrgente ? 'urgente' : ''}`}>
      {mascota.adopcionUrgente && (
        <div className="urgente-badge">⚠️ ¡ADOPCIÓN URGENTE!</div>
      )}
      
      <div className={`card-header ${especieStyle.clase}`}>
        <div className="header-info">
          <span className="icono-especie">{especieStyle.icono}</span>
          <h3 className="mascota-nombre">{mascota.nombre}</h3>
        </div>
        <span className={`especie-badge ${especieStyle.clase}`}>{mascota.especie}</span>
      </div>

      <div className="card-body">
        <div className="info-grid">
          <div className="info-item">
            <span className="label">🏷️ Raza:</span>
            <span className="valor">{mascota.raza}</span>
          </div>
          <div className="info-item">
            <span className="label">🎂 Edad:</span>
            <span className="valor">{mascota.edad} años</span>
          </div>
        </div>

        <p className="descripcion">"{mascota.descripcion}"</p>

        <div className="caracteristicas">
          <strong>✨ Características:</strong>
          <div className="tags">
            {mascota.caracteristicas.map((caract, index) => (
              <span key={index} className={`tag ${especieStyle.clase}`}>
                {caract}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="card-footer">
        <button 
          className={`btn-adoptar ${especieStyle.clase}`}
          onClick={() => onAdoptar(mascota)}
        >
          ❤️ Adoptar
        </button>
      </div>
    </div>
  );
}

MascotaCard.propTypes = {
  mascota: PropTypes.shape({
    id: PropTypes.number.required,
    nombre: PropTypes.string.required,
    raza: PropTypes.string.required,
    edad: PropTypes.number.required,
    especie: PropTypes.string.required,
    descripcion: PropTypes.string.required,
    caracteristicas: PropTypes.arrayOf(PropTypes.string).required,
    adopcionUrgente: PropTypes.bool.required,
  }).isRequired,
  onAdoptar: PropTypes.func.isRequired,
};

export default MascotaCard;
