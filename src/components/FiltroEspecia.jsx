import PropTypes from 'prop-types';
import '../styles/FiltroEspecia.css';

function FiltroEspecia({ filtroActual, onCambiarFiltro, busqueda, onCambiarBusqueda }) {
  const especies = [
    { valor: 'Todas', etiqueta: 'Todas' },
    { valor: 'Perro', etiqueta: '🐕 Perros' },
    { valor: 'Gato', etiqueta: '🐱 Gatos' },
    { valor: 'Otro', etiqueta: '🐾 Otros' }
  ];

  return (
    <div className="filtro-contenedor">
      <div className="busqueda-seccion">
        <input
          type="text"
          placeholder="🔍 Buscar por nombre..."
          value={busqueda}
          onChange={(e) => onCambiarBusqueda(e.target.value)}
          className="input-busqueda"
        />
      </div>

      <div className="filtro-seccion">
        <label className="filtro-label">Filtrar por especie:</label>
        <div className="botones-filtro">
          {especies.map((especie) => (
            <button
              key={especie.valor}
              className={`boton-filtro ${filtroActual === especie.valor ? 'activo' : ''}`}
              onClick={() => onCambiarFiltro(especie.valor)}
            >
              {especie.etiqueta}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

FiltroEspecia.propTypes = {
  filtroActual: PropTypes.string.isRequired,
  onCambiarFiltro: PropTypes.func.isRequired,
  busqueda: PropTypes.string.isRequired,
  onCambiarBusqueda: PropTypes.func.isRequired,
};

export default FiltroEspecia;
