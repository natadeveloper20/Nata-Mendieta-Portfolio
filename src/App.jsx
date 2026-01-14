import React from "react";
import {
  Terminal,
  Code2,
  Database,
  Layout,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  User,
  Briefcase,
  Cpu,
  GraduationCap,
  Sparkles,
  Phone,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

function App() {
  const skills = {
    backend: [
      "C#",
      ".NET 6/8",
      "ASP.NET Core",
      "Entity Framework",
      "APIs RESTful",
      "SQL Server",
      "Arquitectura Limpia",
    ],
    frontend: ["JavaScript (ES6+)", "React.js", "HTML5", "CSS3", "Bootstrap 5", "Vite"],
    tools: ["Git", "GitHub", "Postman", "Visual Studio", "VS Code"],
  };

  const projects = [
    {
      title: "Sistema de Gestión Empresarial (Backend)",
      stack: "C#, .NET 6, EF Core, SQL Server",
      description:
        "Desarrollo robusto bajo arquitectura en 3 capas (Datos, Negocio, Presentación). Incluye autenticación, validaciones complejas y manejo de transacciones SQL.",
      icon: <Database className="w-6 h-6" />,
      link: "https://github.com/natadeveloper20/backend-crud-3-layers",
    },
    {
      title: "Panel de Administración de Usuarios",
      stack: "C#, .NET Core, SQL Server, Bootstrap",
      description:
        "Portal administrativo para control de usuarios con roles, perfiles y auditoría. Implementado con Entity Framework y migraciones dinámicas.",
      icon: <User className="w-6 h-6" />,
      link: "https://github.com/natadeveloper20/user-management-net",
    },
    {
      title: "Portfolio Interactivo de Alto Rendimiento",
      stack: "React, Framer Motion, CSS Moderno",
      description:
        "Esta misma web: una SPA (Single Page Application) optimizada para SEO, con animaciones fluidas, scroll inteligente y diseño totalmente responsivo.",
      icon: <Layout className="w-6 h-6" />,
      link: "#",
    },
  ];

  const education = [
    {
      title: "Licenciatura en Sistemas",
      institution: "Universidad (En curso)",
      period: "2020 - Actualidad",
      description: "Profundizando en fundamentos teóricos, algoritmos, estructuras de datos y gestión de proyectos de software.",
    },
    {
      title: "Programación Full Stack",
      institution: "Bootcamp / Institución de Tecnología",
      period: "2023 - 2024",
      description: "Especialización en desarrollo de aplicaciones escalables con enfoque en el ecosistema Microsoft .NET.",
    },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const whatsappUrl = "https://wa.me/541160168760";

  return (
    <div className="portfolio">
      <nav className="nav">
        <a href="#home">Inicio</a>
        <a href="#about">Sobre mí</a>
        <a href="#skills">Habilidades</a>
        <a href="#projects">Proyectos</a>
        <a href="#experience">Recorrido</a>
        <a href="#contact">Contacto</a>
      </nav>

      <section id="home" className="hero">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hero-container"
        >
          <motion.span 
            className="badge"
            animate={{ boxShadow: ["0 0 0px var(--accent-glow)", "0 0 15px var(--accent-glow)", "0 0 0px var(--accent-glow)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles size={14} style={{ marginRight: '5px' }} /> Disponible para nuevos desafíos
          </motion.span>
          <h1>
            Natanael <span className="gradient-text">Mendieta</span>
          </h1>
          <p className="hero-subtitle centered">
            <span className="text-accent">Fullstack Developer Jr.</span> especializado en el ecosistema <span className="text-highlight">.NET</span> & <span className="text-highlight">React</span>
          </p>
          <div className="hero-actions">
            <div className="btn-group">
              <a href="#contact" className="btn">
                Hablemos
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                <Phone size={18} /> WhatsApp
              </a>
            </div>
            <div className="social-links-hero">
              <a
                href="https://linkedin.com/in/nata-mendieta"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                title="LinkedIn"
              >
                <Linkedin />
              </a>
              <a 
                href="https://github.com/natadeveloper20" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon" 
                title="GitHub"
              >
                <Github />
              </a>
              <a href="mailto:mendietanatanael9@gmail.com" className="social-icon" title="Email">
                <Mail />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="about">
        <motion.div {...fadeIn} className="glass-card main-about">
          <div className="section-title">
            <User className="text-accent" />
            <h2>Sobre mí</h2>
          </div>
          <div className="about-content">
            <p>
              ¡Hola! Soy <strong>Natanael</strong>, un desarrollador que no solo escribe código, sino que <strong>construye soluciones</strong>. 
              Mi especialidad es el backend con <strong>.NET y C#</strong>, donde me siento cómodo diseñando arquitecturas robustas, 
              pero mi curiosidad me llevó a dominar también <strong>React</strong> para tener una visión completa del producto.
            </p>
            <p>
              Empecé mi camino en la <strong>Licenciatura en Sistemas en 2020</strong>, y desde entonces no he parado de aprender. 
              Me motiva el desafío de transformar problemas complejos en sistemas simples y eficientes. 
              Soy proactivo, detallista y siempre busco el "porqué" de las cosas, no solo el "cómo".
            </p>
            <p>
              Actualmente busco un equipo donde pueda aportar mi energía, seguir creciendo profesionalmente y, sobre todo, 
              crear software del que pueda sentirme orgulloso.
            </p>
            <div className="quick-info spaced">
              <div className="info-item">
                <MapPin size={22} className="text-accent" />
                <span>Buenos Aires, Argentina</span>
              </div>
              <div className="info-item">
                <Briefcase size={22} className="text-accent" />
                <span>Freelance / En búsqueda activa</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="skills">
        <motion.div {...fadeIn} style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 className="section-header">Habilidades Técnicas</h2>
          <p className="section-subheader">Mi stack tecnológico principal y herramientas</p>
        </motion.div>
        <div className="grid">
          <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="glass-card skill-card">
            <h3><Terminal className="text-accent" /> Backend</h3>
            <div className="skill-tags">
              {skills.backend.map((s) => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="glass-card skill-card">
            <h3><Layout className="text-accent" /> Frontend</h3>
            <div className="skill-tags">
              {skills.frontend.map((s) => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="glass-card skill-card">
            <h3><Cpu className="text-accent" /> Herramientas</h3>
            <div className="skill-tags">
              {skills.tools.map((s) => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects">
        <motion.div {...fadeIn} style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 className="section-header">Proyectos Destacados</h2>
          <p className="section-subheader">Soluciones reales desarrolladas con buenas prácticas</p>
        </motion.div>
        <div className="grid">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              {...fadeIn}
              transition={{ delay: i * 0.15 }}
              className="glass-card project-card"
            >
              <div className="project-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p className="project-stack">{p.stack}</p>
              <p className="project-desc">{p.description}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
                Ver Detalles <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="experience">
        <div className="timeline-container">
          <motion.div {...fadeIn} className="glass-card timeline-card">
            <div className="section-title">
              <Briefcase className="text-accent" />
              <h2>Experiencia Profesional</h2>
            </div>
            <div className="timeline-item">
              <div className="timeline-header">
                <h3>Desarrollador Freelance Full Stack</h3>
                <span className="timeline-date">2022 – Actualidad</span>
              </div>
              <ul className="timeline-list">
                <li>Diseño e implementación de interfaces responsivas y accesibles.</li>
                <li>Mantenimiento de bases de datos SQL Server y optimización de consultas.</li>
                <li>Colaboración en proyectos .NET aplicando Clean Architecture.</li>
                <li>Control de versiones riguroso con Git/GitHub.</li>
              </ul>
            </div>
          </motion.div>

          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="glass-card timeline-card">
            <div className="section-title">
              <GraduationCap className="text-accent" />
              <h2>Formación Académica</h2>
            </div>
            {education.map((edu, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-header">
                  <h3>{edu.title}</h3>
                  <span className="timeline-date">{edu.period}</span>
                </div>
                <p className="timeline-desc">{edu.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contact">
        <motion.div {...fadeIn} className="glass-card contact-section">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 className="section-header">¿Empezamos un proyecto?</h2>
            <p className="section-subheader">Estoy disponible para charlar sobre tu próxima idea o vacante profesional.</p>
          </div>
          <div className="contact-grid">
            <a href="mailto:mendietanatanael9@gmail.com" className="contact-method">
              <Mail className="text-accent" />
              <div>
                <h4>Email</h4>
                <p>mendietanatanael9@gmail.com</p>
              </div>
            </a>
            <a href="https://linkedin.com/in/nata-mendieta" target="_blank" className="contact-method">
              <Linkedin className="text-accent" />
              <div>
                <h4>LinkedIn</h4>
                <p>Natanael Mendieta</p>
              </div>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact-method whastapp-direct">
              <Phone className="text-whatsapp" />
              <div>
                <h4>WhatsApp</h4>
                <p>+54 11 6016-8760</p>
              </div>
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Natanael Mendieta. Casi todo es posible si tienes el código correcto.</p>
          <div className="footer-links">
            <a href="https://github.com/natadeveloper20" target="_blank"><Github size={18} /></a>
            <a href="https://linkedin.com/in/nata-mendieta" target="_blank"><Linkedin size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
