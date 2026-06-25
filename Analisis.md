# Análisis - Adopta Mascota

## Problemática
App para listar, ver detalles y adoptar mascotas. Datos dinámicos e interfaz interactiva.

---

## Elementos React Usados

| Elemento | Uso | Por qué |
|----------|-----|--------|
| **Componentes** | Header, CardMascota, ListadoMascotas, FormularioAdopcion | Reutilizar código y modularidad |
| **JSX** | Escribir HTML dentro de JavaScript | Sintaxis clara y legible |
| **Props** | `<CardMascota mascota={mascota} />` | Pasar datos padre → hijo |
| **useState** | `const [mascotas, setMascotas] = useState([])` | Gestionar datos dinámicos |
| **.map + key** | `{mascotas.map(m => <Card key={m.id} />)}` | Renderizar listas eficientemente |
| **Condicional** | `{cargando ? <p>Cargando...</p> : <Lista />}` | Mostrar UI según estados |

---

## Preguntas Frecuentes

### 1. ¿Ventajas de componentes vs un archivo?
- Código reutilizable (CardMascota se usa múltiples veces)
- Más fácil de mantener y debuggear
- Permite que desarrolladores trabajen en paralelo
- Componentes pequeños son más testables

### 2. Props vs Estado

Props: Datos 
```jsx
function CardMascota({ mascota }) {
  return <h2>{mascota.nombre}</h2>;
}
```

**Estado**: Datos internos
```jsx
const [filtro, setFiltro] = useState("");
```

**Diferencia**: Props se leen. Estado se lee Y se modifica.

---

### 2. Diferencia entre Props y Estado en tu solución

| Aspecto | Props | Estado |
|--------|-------|--------|
| **Definición** | Datos pasados del padre al hijo | Datos internos del componente |
| **Mutabilidad** | No se modifican (readonly) | Se modifican con setState |
| **Origen** | Vienen de afuera | Se crean dentro del componente |

**Ejemplo Props (en CardMascota):**
```jsx
function CardMascota({ mascota }) {  // mascota es un prop recibido del padre
  return <h2>{mascota.nombre}</h2>;
}
// El padre lo usa así:
<CardMascota mascota={mascotas[0]} />
```

**Ejemplo Estado (en ListadoMascotas):**
```jsx
const [filtro, setFiltro] = useState("");  // estado local
const [mostrarModal, setMostrarModal] = useState(false);
// El componente controla estos datos
```

Resumen: Props vienen de afuera (lectura), Estado es interno (lectura + escritura).

---

## Conclusión

Estos elementos de React forman el núcleo de una aplicación funcional y mantenible. Su combinación permite:
 Código modular y reutilizable
 Aplicación reactiva que responde a cambios
Buena experiencia de usuario
 Facilidad para agregar nuevas funcionalidades
 Mejor rendimiento y debugging
