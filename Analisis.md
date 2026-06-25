# Análisis - Adopta Mascota

## Problemática
App para listar mascotas en adopción, ver detalles y adoptar. Interfaz interactiva con datos dinámicos.

---

## Elementos React usados

| Elemento | Uso | Por qué |
|----------|-----|--------|
| Componentes | Header, CardMascota, ListaMascotas, FiltroEspecia | Modularidad y reutilización |
| JSX | Escribir HTML dentro de JavaScript | Sintaxis clara |
| Props | `<CardMascota mascota={mascota} />` | Pasar datos del padre al hijo |
| useState | `const [mascotas, setMascotas] = useState([])` | Manejar datos que cambian |
| .map + key | `{mascotas.map(m => <Card key={m.id} />)}` | Renderizar listas |
| Condicional | `{cargando ? <p>Cargando...</p> : <Lista />}` | Mostrar según estado |

---


### 1. Ventajas de componentes vs un archivo
- Reutilización de código
- Más fácil de mantener
- Mejor organización
- Más claro para varios desarrolladores

### 2. Props vs Estado
Props son datos que vienen del padre:
```jsx
function CardMascota({ mascota }) {
  return <h2>{mascota.nombre}</h2>;
}
```
Estado son datos internos que cambian:
```jsx
const [filtro, setFiltro] = useState("");
```
Props se leen. El estado se lee y se modifica.

---

### Diferencia entre Props y Estado en la solución

| Aspecto | Props | Estado |
|--------|-------|--------|
| Definición | Datos del padre | Datos internos |
| Mutabilidad | No cambia | Cambia con setState |
| Origen | Viene de afuera | Se crea en el componente |

Ejemplo de props:
```jsx
<CardMascota mascota={mascotas[0]} />
```
Ejemplo de estado:
```jsx
const [mostrarModal, setMostrarModal] = useState(false);
```

---

## Conclusión

React permite una app modular y fácil de mantener. La solución es clara, responde a cambios y se puede ampliar con nuevas funciones.

