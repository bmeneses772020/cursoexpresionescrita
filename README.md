# Expresión Escrita y Comprensión Lectora

Curso de autogestión del aprendizaje sobre expresión escrita y comprensión lectora, construido con React + Vite — misma plantilla que Ficha APA (APA 7).

Incluye 6 módulos, 30 lecciones (texto, video y cuestionarios), listas de chequeo, página de ventas con QR/transferencia, y candado de código de acceso.

## Antes de publicar: revisa estos datos

En `src/Landing.jsx`, el bloque `CONFIG` ya trae tus datos reales (mismo WhatsApp, correo y cuenta de Banco Ganadero que usas en APA 7). Revísalo de todas formas antes de publicar, por si algo cambió.

## Código de acceso

En `src/Gate.jsx`, el código configurado por defecto es:

```
ESCRITURA-AGOSTO2026
```

Puedes cambiarlo o agregar más códigos editando la lista `VALID_CODES`, igual que en el proyecto de APA 7.

## Requisitos

- [Node.js](https://nodejs.org) versión 18 o superior.

## Cómo correrlo en tu computadora

```
npm install
npm run dev
```

## Cómo publicarlo en internet (gratis)

1. Sube esta carpeta a un repositorio de GitHub **nuevo** (no lo mezcles con el repositorio de APA 7). Por ejemplo, `expresion-escrita`.
2. Entra a [vercel.com](https://vercel.com), inicia sesión con GitHub, "Add New Project" → importa este repositorio nuevo.
3. Deja la configuración automática y haz clic en "Deploy".
4. Obtendrás un enlace propio, por ejemplo `expresion-escrita.vercel.app`.
5. Copia ese enlace y pídele a Claude que actualice la tarjeta de este curso en tu vitrina **Ficha Cursos** (moverla de "Próximamente" a "Disponible").

## Actividades prácticas

Las 6 actividades prácticas del curso ya están completas — una por módulo, cada una completable en línea (con guardado automático) y descargable como PDF desde `public/actividad-practica-modulo1.pdf` a `public/actividad-practica-modulo6.pdf`.

El ejercicio de tipo `"source-compare"` ahora admite mostrar solo un texto fuente sin necesidad de una "versión del estudiante" para comparar (útil para ejercicios de comprensión lectora y resumen) — simplemente omite la propiedad `studentVersion` en la definición del ejercicio.

## Próximos pasos posibles

## Autora

Msc. Betty Meneses Ayllón
