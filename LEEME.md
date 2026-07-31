# T-EN — publicar la app y usarla desde el móvil

Diez ejercicios de inglés al día. Esta carpeta contiene la app completa y lista
para subir. No hace falta instalar nada ni saber programar.

---

## Los archivos

Van **los trece juntos en la misma carpeta**, sin subcarpetas, y sin cambiarles
el nombre.

| Archivo | Para qué |
|---|---|
| `index.html` | La página principal |
| `app.js` | El código de la app |
| `react.min.js`, `react-dom.min.js` | Librerías necesarias |
| `anton.woff2`, `mono-400.woff2`, `mono-700.woff2` | Las tipografías |
| `manifest.json` | Le dice al móvil que esto es una app |
| `sw.js` | Hace que funcione sin conexión |
| `icon-*.png`, `apple-touch-icon.png` | El icono |

La app no depende de ningún servidor externo: funciona entera con estos archivos.

---

## PARTE 1 — Publicarla (GitHub Pages, gratis)

**1. Cuenta.** Regístrate en **github.com** si no tienes cuenta.

**2. Repositorio.** Arriba a la derecha, **+** → **New repository**. Nombre:
`ten`. Marca **Public** (con cuenta gratuita, Pages no funciona en privados).
Pulsa **Create repository**.

**3. Subir.** Pulsa **uploading an existing file**, arrastra los trece archivos
de golpe y pulsa **Commit changes**.

**4. Activar Pages.** **Settings** → **Pages** (columna izquierda) → en *Source*
elige **Deploy from a branch** → rama **main**, carpeta **/ (root)** → **Save**.

**5. Esperar.** Uno a tres minutos. Recarga esa página y aparecerá tu dirección:

```
https://TU-USUARIO.github.io/ten/
```

Si sale un error 404, espera un poco más: la primera publicación tarda.

---

## PARTE 2 — Ponerla en la pantalla de inicio del iPhone

1. Abre la dirección **en Safari** (tiene que ser Safari)
2. Pulsa **Compartir** (el cuadrado con la flecha)
3. Elige **Añadir a pantalla de inicio** → **Añadir**

A partir de ahí, ábrela siempre desde el icono. Así ocupa toda la pantalla, va
sin conexión y **conserva tu progreso de forma indefinida** — las pestañas
normales de Safari pueden borrar los datos tras semanas sin usarlas.

---

## Guardar una copia de tu progreso

El progreso vive en el dispositivo, no en internet. Si cambias de móvil o borras
la app, se pierde.

- **Guardar:** en el inicio, pulsa **datos** → **Copiar mis datos**, y pega el
  texto en una nota. En iPhone usa esto en vez de *Archivo*: Safari gestiona mal
  las descargas.
- **Recuperar:** **datos** → pega el texto en el recuadro → **Revisar** →
  **Sustituir**. Antes de tocar nada te enseña qué contiene la copia.

Las copias de la versión anterior (In·Glear) también sirven: la app las detecta
y las carga automáticamente la primera vez.

---

## Cambiar los colores

En el inicio, abajo, hay un botón **paleta** que rota entre las disponibles:
Neón, Taller y Tinta. La elección se guarda con el resto de tu progreso.

Para crear paletas nuevas o cambiar las que hay, abre `app.js` y busca
`PALETTES` (está al principio). Cada paleta tiene esta forma:

```js
mipaleta: {
  label: "Mi paleta",
  ink: "#0D0D0D",        // el color del texto y de las líneas
  paper: "#F2F0EB",      // el fondo de las pantallas neutras
  cycle: ["#...", ...],  // colores de reserva para bloques nuevos
  blocks: {
    saludos: "#DFFF3E",
    comida:  "#FF4A17",
    // ...un color por bloque
  }
}
```

Toda la interfaz sale de esos valores, así que no hay que tocar nada más. Si
añades un bloque de contenido y no le das color, se le asigna uno de `cycle`
automáticamente.

---

## Actualizar la app más adelante

1. Sube los archivos nuevos al repositorio (sobrescribiendo los viejos)
2. **Abre `sw.js` y cambia el número de versión**: de `ten-v1` a `ten-v2`

El segundo paso es imprescindible. Sin cambiarlo, los móviles que ya tengan la
app instalada seguirán viendo la versión antigua, porque la tienen guardada para
poder funcionar sin conexión.

---

## Si algo falla

**Pantalla en blanco.** Falta algún archivo. Comprueba que están los trece en la
raíz del repositorio.

**Las letras se ven genéricas.** Faltan los `.woff2`. Súbelos.

**No aparece "Añadir a pantalla de inicio".** No estás en Safari, o estás en una
ventana privada.

**El icono sale en blanco.** Falta `apple-touch-icon.png`. Súbelo y vuelve a
añadir la app a la pantalla de inicio.
