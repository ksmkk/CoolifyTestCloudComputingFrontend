# Taller 1 - PaaS con Coolify

Frontend de una sola página creado como demostración de despliegue de una aplicación mediante una plataforma PaaS Self-Hosted. La interfaz presenta el flujo de arquitectura, las tecnologías involucradas y el estado del despliegue.

## Tecnologías utilizadas

- React
- Vite
- JavaScript y CSS
- Node.js
- Ubuntu Server 22.04, Coolify, Docker y Cloudflare como componentes de la arquitectura demostrada

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

## Instalación local

```bash
npm install
```

## Ejecutar en desarrollo

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local para abrir la aplicación.

## Build de producción

```bash
npm run build
```

El resultado se genera en el directorio `dist`.

## Estructura del proyecto

```text
.
├── index.html
├── package.json
├── vite.config.js
└── src
    ├── main.jsx
    └── styles.css
```

## Preparado para Coolify

El proyecto usa la estructura estándar de Vite y no contiene rutas locales, secretos ni configuración de infraestructura. En Coolify, configure el comando de instalación como `npm install` y el comando de build como `npm run build`. Publique el contenido generado en `dist` usando el tipo de aplicación estática o un método de despliegue compatible con Vite.
