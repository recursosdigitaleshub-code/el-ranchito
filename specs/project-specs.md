# Especificaciones del Proyecto: El Ranchito

## 0. Idioma y Ortografía
- **Idioma**: Español (México)
- **Ortografía**: Todos los textos visibles deben incluir tildes (á, é, í, ó, ú) y la letra ñ según las reglas ortográficas del español.
- **Excepciones**: Nombres de clases CSS, IDs, data-attributes y valores de formulario (value="") se mantienen sin tildes ni caracteres especiales para compatibilidad técnica.
- **Codificación**: UTF-8 (declarado en meta charset)

## 1. Visión General
Página web completa para el restaurante "El Ranchito". Diseño que combina estética rústica/rancho con elementos modernos. Incluye sistema de reservas en línea, cotizador de eventos y links a redes sociales/WhatsApp.

## 2. Objetivos
- Presentar el restaurante con identidad rústica-moderna
- Permitir reservas de mesas en línea
- Generar cotizaciónes automatizadas para eventos especiales
- Facilitar comunicación via redes sociales y WhatsApp
- Mostrar menú de forma atractiva y navegable

## 3. Alcance
### Incluido
- Hero con identidad del restaurante
- Sección de menú con categorías (Entradas, Platos Fuertes, Parrilla, Postres, Bebidas)
- Sistema de reservas (formulario con fecha, hora, comensales)
- Cotizador de eventos (tipo evento, número invitados, servicios, cálculo automático)
- Sección "Sobre Nosotros" con historia
- Galería de fotos
- Footer con mapa, redes sociales, WhatsApp
- Botón WhatsApp flotante
- CTA en cada sección

### Excluido
- E-commerce / pedidos online
- Backend / base de datos
- Pagos en línea
- Blog

## 4. Arquitectura
- HTML5 + CSS3 + Vanilla JS
- Google Fonts (CDN)
- Sin frameworks, sin build tools

### Estructura de la página
1. **Navbar** (sticky): Logo + nav (Inicio, Menú, Reservas, Eventos, Nosotros, Contacto)
2. **Hero** (100vh): Imagen rústica, título, tagline, CTA
3. **Menú** (tabs por categoría): Entradas, Parrilla, Platos, Postres, Bebidas
4. **Reservas** (formulario): Fecha, hora, comensales, nombre, teléfono
5. **Eventos** (cotizador): Tipo, invitados, servicios, precio estimado
6. **Sobre Nosotros**: Historia + galería
7. **Contacto/Footer**: Mapa, redes, WhatsApp, datos

## 5. Diseño Visual
### Estética: Rústico-Moderno
Madera, texturas orgánicas, tipografía serif elegante combinada con sans-serif moderna.

### Paleta
| Color | Hex | Uso |
|-------|-----|-----|
| Marron Oscuro | #3E2723 | Texto, navbar, fondos oscuros |
| Terracota | #BF5B21 | Acentos principales, CTAs, botones |
| Crema Calido | #FDF6EC | Fondo principal |
| Verde Salvia | #6B7F5E | Acentos secundarios, badges |
| Dorado Rústico | #C8A96E | Detalles, bordes, iconos |
| Blanco Antiguo | #FAF3E8 | Fondos alternos |
| Gris Calido | #7A7067 | Texto secundario |

### Tipografía
- Titulos: Playfair Display (700, 800) — serif elegante
- Cuerpo: Nunito (400, 600) — moderna, redondeada, calida
- Menú/precios: Josefin Sans (400, 600) — limpia para datos

### Responsive
- Mobile-first
- Breakpoints: 768px, 1200px

## 6. Secciónes Detalladas

### 6.1 Navbar
- Logo + "El Ranchito"
- Links: Inicio, Menú, Reservas, Eventos, Nosotros
- Botón CTA: "Reservar Mesa"
- Hamburguesa en móvil

### 6.2 Hero
- Fondo: gradiente calido oscuro (madera/rancho)
- Titulo: "El Ranchito"
- Tagline: "Sabor auténtico con alma de rancho"
- CTA: "Ver Menú" + "Reservar Mesa"

### 6.3 Menú
- Tabs: Entradas | Parrilla | Platos Fuertes | Postres | Bebidas
- Cada item: nombre + descripción + precio
- Diseño tipo carta de restaurante

### 6.4 Reservas
- Formulario: Nombre, Teléfono, Email, Fecha, Hora, Comensales, Notas
- Validación en cliente
- Mensaje de confirmación

### 6.5 Cotizador de Eventos
- Tipo: Cumpleaños, Boda, Corporativo, Otro
- Invitados: slider o input numérico
- Servicios: checkboxes (Menú básico, Menú premium, Barra libre, Decoración, Música, Meseros extra)
- Precio estimado calculado en tiempo real
- CTA: "Solicitar Cotización Formal"

### 6.6 Sobre Nosotros
- Historia del restaurante (2 párrafos)
- Cifras: Años, Platos servidos, Eventos realizados

### 6.7 Footer/Contacto
- Dirección + teléfono + email
- Mapa embebido
- Links redes sociales (Facebook, Instagram, TikTok)
- WhatsApp directo

## 7. SEO
- Title: "El Ranchito | Restaurante con Sabor Auténtico — Reservas y Eventos"
- Meta description
- Schema.org Restaurant
- Open Graph tags
