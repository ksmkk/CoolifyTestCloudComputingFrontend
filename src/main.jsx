import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const technologies = [
  { name: 'Ubuntu Server 22.04', type: 'Sistema operativo', icon: '⌘' },
  { name: 'Coolify', type: 'Plataforma PaaS', icon: '◈' },
  { name: 'Docker', type: 'Contenedores', icon: '◇' },
  { name: 'React', type: 'Interfaz de usuario', icon: '⚛' },
  { name: 'Vite', type: 'Herramienta de build', icon: 'ϟ' },
  { name: 'Cloudflare', type: 'Red y seguridad', icon: '☁' },
]

const architecture = ['Usuario', 'Cloudflare', 'Ubuntu Server 22.04', 'Coolify', 'Aplicación Frontend']

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <span className="brand-mark" aria-hidden="true">⌁</span>
          <span>Taller 1 - PaaS con Coolify</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#arquitectura">Arquitectura</a>
          <a href="#tecnologias">Tecnologías</a>
          <a href="#estado">Estado</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span /> INFRAESTRUCTURA CLOUD</p>
            <h1 id="hero-title">Despliegue de aplicaciones con <em>Coolify</em></h1>
            <p className="hero-description">
              Este proyecto demuestra la implementación de una plataforma PaaS Self-Hosted utilizando Ubuntu Server 22.04 y Coolify para publicar una aplicación frontend de forma simple y confiable.
            </p>
            <a className="primary-link" href="#arquitectura">Ver arquitectura <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="cloud-card">
              <div className="card-top"><span className="status-dot" /> SISTEMA EN LÍNEA</div>
              <div className="cloud-symbol">☁</div>
              <div className="connection-line" />
              <div className="mini-nodes"><span /> <span /> <span /></div>
            </div>
          </div>
        </section>

        <section className="content-section architecture-section" id="arquitectura" aria-labelledby="architecture-title">
          <div className="section-heading">
            <p className="eyebrow"><span /> FLUJO DE DESPLIEGUE</p>
            <h2 id="architecture-title">Arquitectura del proyecto</h2>
            <p>Un flujo claro, desde quien accede a la aplicación hasta la plataforma que la entrega.</p>
          </div>
          <ol className="architecture-flow">
            {architecture.map((item, index) => (
              <li key={item}>
                <div className="flow-step"><span className="step-number">0{index + 1}</span><span>{item}</span></div>
                {index < architecture.length - 1 && <span className="flow-arrow" aria-hidden="true">↓</span>}
              </li>
            ))}
          </ol>
        </section>

        <section className="content-section technology-section" id="tecnologias" aria-labelledby="technology-title">
          <div className="section-heading">
            <p className="eyebrow"><span /> STACK TECNOLÓGICO</p>
            <h2 id="technology-title">Tecnologías utilizadas</h2>
          </div>
          <div className="technology-grid">
            {technologies.map(({ name, type, icon }) => (
              <article className="technology-card" key={name}>
                <span className="technology-icon" aria-hidden="true">{icon}</span>
                <div><h3>{name}</h3><p>{type}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="deployment-status" id="estado" aria-labelledby="status-title">
          <div className="status-icon" aria-hidden="true">✓</div>
          <div><p className="eyebrow"><span /> ESTADO DEL DESPLIEGUE</p><h2 id="status-title">Aplicación desplegada correctamente</h2><p>El frontend está preparado para ser servido como una aplicación estática mediante Coolify.</p></div>
        </section>
      </main>

      <footer>Bastián Salinas | Tomás Guerra | 2026 | Cloud Computing</footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
