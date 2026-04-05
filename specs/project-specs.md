# Especificaciones del Proyecto: El Ranchito

## 1. Vision General
Pagina web completa para el restaurante "El Ranchito". Diseno que combina estetica rustica/rancho con elementos modernos. Incluye sistema de reservas en linea, cotizador de eventos y links a redes sociales/WhatsApp.

## 2. Objetivos
- Presentar el restaurante con identidad rustica-moderna
- Permitir reservas de mesas en linea
- Generar cotizaciones automatizadas para eventos especiales
- Facilitar comunicacion via redes sociales y WhatsApp
- Mostrar menu de forma atractiva y navegable

## 3. Alcance
### Incluido
- Hero con identidad del restaurante
- Seccion de menu con categorias (Entradas, Platos Fuertes, Parrilla, Postres, Bebidas)
- Sistema de reservas (formulario con fecha, hora, comensales)
- Cotizador de eventos (tipo evento, numero invitados, servicios, calculo automatico)
- Seccion "Sobre Nosotros" con historia
- Galeria de fotos
- Footer con mapa, redes sociales, WhatsApp
- Boton WhatsApp flotante
- CTA en cada seccion

### Excluido
- E-commerce / pedidos online
- Backend / base de datos
- Pagos en linea
- Blog

## 4. Arquitectura
- HTML5 + CSS3 + Vanilla JS
- Google Fonts (CDN)
- Sin frameworks, sin build tools

### Estructura de la pagina
1. **Navbar** (sticky): Logo + nav (Inicio, Menu, Reservas, Eventos, Nosotros, Contacto)
2. **Hero** (100vh): Imagen rustica, titulo, tagline, CTA
3. **Menu** (tabs por categoria): Entradas, Parrilla, Platos, Postres, Bebidas
4. **Reservas** (formulario): Fecha, hora, comensales, nombre, telefono
5. **Eventos** (cotizador): Tipo, invitados, servicios, precio estimado
6. **Sobre Nosotros**: Historia + galeria
7. **Contacto/Footer**: Mapa, redes, WhatsApp, datos

## 5. Diseno Visual
### Estetica: Rustico-Moderno
Madera, texturas organicas, tipografia serif elegante combinada con sans-serif moderna.

### Paleta
| Color | Hex | Uso |
|-------|-----|-----|
| Marron Oscuro | #3E2723 | Texto, navbar, fondos oscuros |
| Terracota | #BF5B21 | Acentos principales, CTAs, botones |
| Crema Calido | #FDF6EC | Fondo principal |
| Verde Salvia | #6B7F5E | Acentos secundarios, badges |
| Dorado Rustico | #C8A96E | Detalles, bordes, iconos |
| Blanco Antiguo | #FAF3E8 | Fondos alternos |
| Gris Calido | #7A7067 | Texto secundario |

### Tipografia
- Titulos: Playfair Display (700, 800) — serif elegante
- Cuerpo: Nunito (400, 600) — moderna, redondeada, calida
- Menu/precios: Josefin Sans (400, 600) — limpia para datos

### Responsive
- Mobile-first
- Breakpoints: 768px, 1200px

## 6. Secciones Detalladas

### 6.1 Navbar
- Logo + "El Ranchito"
- Links: Inicio, Menu, Reservas, Eventos, Nosotros
- Boton CTA: "Reservar Mesa"
- Hamburguesa en movil

### 6.2 Hero
- Fondo: gradiente calido oscuro (madera/rancho)
- Titulo: "El Ranchito"
- Tagline: "Sabor autentico con alma de rancho"
- CTA: "Ver Menu" + "Reservar Mesa"

### 6.3 Menu
- Tabs: Entradas | Parrilla | Platos Fuertes | Postres | Bebidas
- Cada item: nombre + descripcion + precio
- Diseno tipo carta de restaurante

### 6.4 Reservas
- Formulario: Nombre, Telefono, Email, Fecha, Hora, Comensales, Notas
- Validacion en cliente
- Mensaje de confirmacion

### 6.5 Cotizador de Eventos
- Tipo: Cumpleanos, Boda, Corporativo, Otro
- Invitados: slider o input numerico
- Servicios: checkboxes (Menu basico, Menu premium, Barra libre, Decoracion, Musica, Meseros extra)
- Precio estimado calculado en tiempo real
- CTA: "Solicitar Cotizacion Formal"

### 6.6 Sobre Nosotros
- Historia del restaurante (2 parrafos)
- Cifras: Anos, Platos servidos, Eventos realizados

### 6.7 Footer/Contacto
- Direccion + telefono + email
- Mapa embebido
- Links redes sociales (Facebook, Instagram, TikTok)
- WhatsApp directo

## 7. SEO
- Title: "El Ranchito | Restaurante con Sabor Autentico — Reservas y Eventos"
- Meta description
- Schema.org Restaurant
- Open Graph tags
