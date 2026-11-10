# DESIGN.md — Sistema de Diseño "Vialité Precision"

Documento de especificación de diseño, tokens, componentes y pautas de interacción para la plataforma de evaluación y preparación para el examen oficial de tránsito.

---

## 1. Visión y Principios de Diseño

- **Foco y Claridad Cognitiva:** La interfaz reduce las distracciones al mínimo indispensable. El objetivo prioritario es que el usuario procese el enunciado de la pregunta y sus opciones sin fatiga visual.
- **Rigor Oficial & Modernidad:** Estética técnica inspirada en simuladores oficiales de certificación vial pero con refinamiento visual contemporáneo (bordes sutiles, micro-interacciones suaves, acentos cromáticos precisos).
- **Consistencia de Estados:** La distinción visual entre estados neutros, correctos e incorrectos debe ser inequívoca tanto cromáticamente como mediante iconografía accesible.

---

## 2. Paleta de Colores y Tokens Semánticos

### Fondos y Superficies (Dark Mode)
| Token | Valor Hex | Uso / Semántica |
| :--- | :--- | :--- |
| `surface-canvas` | `#0a0e14` / `#10141a` | Fondo general de la aplicación |
| `surface-card` | `#161B22` | Contenedor principal de tarjetas centradas |
| `surface-card-subtle` | `#1c2128` | Tarjetas secundarias, módulos de estadísticas y badges |
| `surface-interactive` | `#21262d` | Estado neutro de botones y opciones de respuesta |
| `surface-hover` | `#282e37` | Hover en elementos clicables |
| `border-subtle` | `rgba(255, 255, 255, 0.08)` | Delimitadores y bordes de tarjetas |
| `border-focus` | `rgba(99, 102, 241, 0.4)` | Foco accesible en inputs y tarjetas activas |

### Color de Acento Primario (Frío / Índigo - Violeta)
| Token | Valor Hex | Uso / Semántica |
| :--- | :--- | :--- |
| `primary` | `#6366f1` | Color principal de marca, progreso y botones de acción primaria |
| `primary-hover` | `#4f46e5` | Estado activo/hover de botones de navegación principal |
| `primary-glow` | `rgba(99, 102, 241, 0.25)` | Resplandor sutil en tarjetas destacadas y focus rings |

### Colores Semánticos de Validación
| Token | Valor Hex | Uso / Semántica |
| :--- | :--- | :--- |
| `success-base` | `#10b981` | Verde esmeralda para respuestas correctas y badges aprobados |
| `success-surface` | `rgba(16, 185, 129, 0.12)` | Fondo de opción correcta |
| `success-border` | `rgba(16, 185, 129, 0.45)` | Borde de confirmación para respuesta válida |
| `warning-base` | `#f59e0b` | Ámbar para respuestas erróneas seleccionadas |
| `warning-surface` | `rgba(245, 158, 11, 0.12)` | Fondo de opción incorrecta |
| `warning-border` | `rgba(245, 158, 11, 0.45)` | Borde de advertencia de fallo |

### Tipografía y Contraste
| Token | Valor Hex | Uso |
| :--- | :--- | :--- |
| `text-primary` | `#f8fafc` | Títulos, enunciados de examen y puntuaciones |
| `text-secondary` | `#94a3b8` | Subtítulos, textos de opciones y metadatos |
| `text-tertiary` | `#64748b` | Notas al pie, versiones, leyendas de tiempo |

---

## 3. Tipografía

- **Familia tipográfica principal:** `Inter`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `sans-serif`.
- **Escala de fuentes:**
  - `Display / Hero`: `2rem` a `2.5rem` (32px - 40px) | `font-bold` (`700`) — Puntuación final y título principal.
  - `Heading 1`: `1.5rem` (24px) | `font-semibold` (`600`) — Enunciados de las preguntas.
  - `Heading 2`: `1.125rem` (18px) | `font-medium` (`500`) — Títulos de dificultad y resúmenes.
  - `Body`: `1rem` (16px) | `font-normal` (`400`) — Opciones de selección y explicaciones normativas.
  - `Caption / Badge`: `0.75rem` a `0.875rem` (12px - 14px) | `font-medium` (`500`) — Cronómetro, numeración `3 de 10`, etiquetas de ley.

---

## 4. Estructura Espacial y Diseño Responsivo

- **Sistema de espaciado:** Múltiplos de 4px / 8px (`8px`, `16px`, `24px`, `32px`, `48px`).
- **Comportamiento Responsive:**
  - **Desktop (`≥ 1024px`):** Tarjeta centralizada con un ancho máximo estricto (`max-w-2xl` o `max-w-3xl` ~680px - 768px), centrada vertical y horizontalmente en el viewport.
  - **Tablet (`640px` - `1023px`):** Tarjeta con margen lateral de `24px` y padding interior de `24px`.
  - **Mobile (`< 640px`):** Tarjeta que aprovecha el ancho completo con padding lateral de `16px`, opciones apiladas en bloque táctil de mínimo `48px` de altura para facilitar el toque.
- **Radios de esquina (`Border Radius`):**
  - Contenedor / Tarjeta: `rounded-2xl` (16px).
  - Opciones de respuesta y botones: `rounded-xl` (12px).
  - Badges e insignias: `rounded-full` (9999px).

---

## 5. Componentes Clave

### 5.1 Barra Superior de Navegación y Shell
- Contenedor discreto en `top-0` con blur `backdrop-blur-md`.
- Logotipo oficial a la izquierda (*Test de Tránsito - Simulador Oficial*).
- Selector de categoría en píldora (*Licencia B • Clase A/B*).
- Píldoras de navegación de modo de prueba y avatar de usuario a la derecha.

### 5.2 Barra de Progreso Fina
- Ubicada en la parte superior de la tarjeta de la pregunta.
- Altura: `4px` - `6px`.
- Fondo inactivo: `rgba(255, 255, 255, 0.08)`.
- Indicador activo: Degradado suave índigo `#6366f1` con animación de ancho al cambiar de paso.

### 5.3 Opciones de Respuesta Multiestado
1. **Estado Neutro / No seleccionado:**
   - Fondo: `#161B22` / `surface-interactive`.
   - Borde: `1px solid rgba(255, 255, 255, 0.08)`.
   - Letra de opción (A, B, C) en píldora circular neutra gris.
2. **Estado Correcto (Oficial):**
   - Fondo: `rgba(16, 185, 129, 0.12)`.
   - Borde: `1px solid rgba(16, 185, 129, 0.5)`.
   - Icono `✓` en círculo verde esmeralda y texto explicativo verde sutil.
3. **Estado Incorrecto (Error de usuario):**
   - Fondo: `rgba(245, 158, 11, 0.12)`.
   - Borde: `1px solid rgba(245, 158, 11, 0.5)`.
   - Icono `✕` en círculo ámbar con etiqueta de "Incorrecta seleccionada".

### 5.4 Tarjeta de Carga (Skeleton Loader)
- Refleja exactamente las proporciones de la tarjeta de examen real.
- Barras con animación `animate-pulse` o `shimmer` en `#21262d`.
- Preserva la consistencia de altura para evitar saltos de layout (*Cumulative Layout Shift*).

### 5.5 Pantalla de Resultados y Logro
- Medalla / Círculo de score de `120px` con aro concéntrico en verde y violeta.
- Desglose en rejilla de 3 columnas: Respuestas correctas, respuestas incorrectas y tiempo promedio por pregunta.
- Botones de acción vertical: Primario con acento violeta (*Repetir test*) y Secundario con borde sutil (*Volver al inicio*).
