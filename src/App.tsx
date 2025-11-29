import { useState, useEffect, useRef, type ReactNode, type MouseEvent } from 'react';
import {
  GithubIcon,
  LinkedinIcon,
  Mail,
  Terminal,
  Cpu,
  Database,
  Server,
  Zap,
  Activity,
  Layers,
  ExternalLink,
  TrendingUp,
  Code2
} from 'lucide-react';

// --- TYPE DEFINITIONS ---

interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

interface ExperienceHighlight {
  metric: string;
  context: string;
  type: string;
}

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
  highlight?: ExperienceHighlight;
}

interface Skill {
  category: string;
  icon: ReactNode;
  items: string[];
}

interface Star {
  x: number;
  y: number;
  z: number;
  pz: number;
}

interface Rotation {
  x: number;
  y: number;
}

interface GlowPosition {
  x: number;
  y: number;
}

// --- DATA CONSTANTS ---

const PERSONAL_INFO: PersonalInfo = {
  name: "GABRIEL FAGUNDEZ",
  title: "BACKEND ENGINEER",
  subtitle: "JAVA // .NET // NODE.JS // LINUX VETERAN",
  email: "gabrielfagundeznievas@gmail.com",
  phone: "+598 97 319 679",
  linkedin: "https://www.linkedin.com/in/juan-gabriel-fagundez-805518226/",
  github: "https://github.com/gabrielfagundeznievas",
};

const EXPERIENCE: Experience[] = [
  {
    id: 0,
    company: "ICHASH.ONE",
    role: "SSR Backend Developer (Java)",
    period: "OCT 2025 - ACTUALIDAD",
    description: "Desarrollo backend para sector Fintech. Liderazgo en optimizacion de recursos criticos y refactorizacion de procesos asincronos para alta concurrencia.",
    tech: ["JAVA", "SPRING BOOT", "THREAD POOLS", "DOCKER"],
    highlight: {
      metric: "80% MEMORY REDUCTION",
      context: "Async Threads -> ThreadPoolExecutor",
      type: "performance"
    }
  },
  {
    id: 1,
    company: "ALSACIA SOFTWARE",
    role: "Desarrollador de Software",
    period: "FEB 2025 - OCT 2025",
    description: "Participacion en el desarrollo de software interno utilizando .NET y Angular. Colaboracion en equipo multidisciplinario para definir requerimientos y optimizar procesos.",
    tech: [".NET", "ANGULAR", "C#", "SQL"]
  },
  {
    id: 2,
    company: "FREELANCER",
    role: "Desarrollador Full Stack",
    period: "SEP 2024 - ENE 2025",
    description: "Creacion de plataforma LMS para aprendizaje de ingles. Diseno de arquitectura y APIs REST en NestJS. Implementacion de pruebas unitarias y frontend con Styled-Components.",
    tech: ["REACT", "NESTJS", "TYPESCRIPT", "POSTGRESQL"]
  },
  {
    id: 3,
    company: "CENCOSUD",
    role: "Desarrollador de Software",
    period: "AGO 2022 - MAY 2024",
    description: "Mantenimiento de sitios de alto trafico (Paris, Easy, Jumbo). Migracion de monolito a microservicios. Implementacion de controles de calidad y migracion de GitLab a GitHub.",
    tech: ["NODE", "GRAPHQL", "MICROSERVICES", "REACT"]
  }
];

const SKILLS: Skill[] = [
  {
    category: "BACKEND",
    icon: <Server className="text-cyan-400" />,
    items: ["Java (Spring Boot)", "Node.js (NestJS)", "C# (.NET)", "Microservices", "REST/GraphQL"]
  },
  {
    category: "FRONTEND",
    icon: <Zap className="text-fuchsia-400" />,
    items: ["React.js", "Angular", "Next.js", "JavaScript/ES6+", "SASS/CSS"]
  },
  {
    category: "DATABASE",
    icon: <Database className="text-emerald-400" />,
    items: ["PostgreSQL", "MySQL", "JPA / Hibernate", "TypeORM / MikroORM", "Entity Framework"]
  },
  {
    category: "INFRA & TOOLS",
    icon: <Terminal className="text-yellow-400" />,
    items: ["Linux (10+ years)", "Docker", "Kubernetes", "AWS (Basic)", "Git/GitHub", "Terraform"]
  },
];

// --- UI COMPONENTS ---

interface MetricHighlightProps {
  metric: string;
  context: string;
}

const MetricHighlight = ({ metric, context }: MetricHighlightProps) => (
  <div className="mt-4 relative group overflow-hidden rounded bg-emerald-900/10 border border-emerald-500/30 hover:border-emerald-400 transition-colors duration-300">
    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
    <div className="p-3 flex items-center gap-4">
      <div className="p-2 bg-emerald-500/20 rounded-full border border-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
        <TrendingUp className="w-5 h-5 text-emerald-400" />
      </div>
      <div>
        <div className="text-lg md:text-xl font-black text-emerald-400 tracking-tighter leading-none shadow-emerald-500/50 drop-shadow-sm">
          {metric}
        </div>
        <div className="text-[10px] md:text-xs text-emerald-600/80 font-mono uppercase tracking-wider mt-1">
          {context}
        </div>
      </div>
    </div>
    <div className="absolute inset-0 bg-linear-to-r from-transparent via-emerald-500/5 to-transparent -skew-x-12 translate-x-[-200%] group-hover:animate-shine pointer-events-none" />
  </div>
);

// --- 3D & ANIMATION COMPONENTS ---

const SpaceBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const stars: Star[] = Array.from({ length: 400 }).map(() => ({
      x: Math.random() * width - width / 2,
      y: Math.random() * height - height / 2,
      z: Math.random() * 2000,
      pz: 0
    }));

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    const render = () => {
      ctx.fillStyle = 'rgba(5, 5, 10, 0.4)';
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      const scrollSpeed = Math.min(window.scrollY / 10, 50);
      const speed = 20 + scrollSpeed;

      stars.forEach(star => {
        star.pz = star.z;
        star.z -= speed;

        if (star.z < 1) {
          star.z = 2000;
          star.x = Math.random() * width - width / 2;
          star.y = Math.random() * height - height / 2;
          star.pz = 2000;
        }

        const x = (star.x / star.z) * width + cx;
        const y = (star.y / star.z) * height + cy;

        const px = (star.x / star.pz) * width + cx;
        const py = (star.y / star.pz) * height + cy;

        const scale = (2000 - star.z) / 2000;
        const colorVal = Math.floor(scale * 255);

        ctx.beginPath();
        ctx.strokeStyle = `rgb(${colorVal}, ${colorVal * 0.8}, 255)`;
        ctx.lineWidth = scale * 2;
        ctx.moveTo(px, py);
        ctx.lineTo(x, y);
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 bg-black"
    />
  );
};

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

const TiltCard = ({ children, className = "" }: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState<Rotation>({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState<GlowPosition>({ x: 50, y: 50 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
    setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      className={`perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className="transition-transform duration-100 ease-out transform-gpu relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <div
          className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-300 mix-blend-overlay"
          style={{
            background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(0, 255, 255, 0.8), transparent 60%)`
          }}
        />

        {children}
      </div>
    </div>
  );
};

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
  return (
    <div className={`relative group inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-cyan-500 opacity-0 group-hover:opacity-70 animate-pulse translate-x-[2px]">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-fuchsia-500 opacity-0 group-hover:opacity-70 animate-pulse -translate-x-[2px]">
        {text}
      </span>
    </div>
  );
};

// --- MAIN APP ---

type TabType = 'EXPERIENCE_LOG' | 'PROJECT_PROTOCOLS';

export default function CyberPortfolio() {
  const [activeTab, setActiveTab] = useState<TabType>('EXPERIENCE_LOG');

  return (
    <div className="min-h-screen text-white font-mono overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-100">
      <SpaceBackground />

      {/* Scanline & Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">

        {/* Header / Hero */}
        <header className="mb-24 text-center md:text-left md:flex justify-between items-end border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2 text-cyan-400 text-sm tracking-widest">
              <span className="animate-pulse">●</span> SYSTEM ONLINE
              <span className="hidden sm:inline"> // UY-MONTEVIDEO-ROOT</span>
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-2 text-transparent bg-clip-text bg-linear-to-r from-white via-cyan-100 to-slate-400">
              <GlitchText text={PERSONAL_INFO.name} />
            </h1>
            <h2 className="text-lg md:text-2xl text-cyan-500/80 font-bold mt-2 flex items-center gap-2 flex-wrap justify-center md:justify-start">
              {PERSONAL_INFO.title}
              <span className="hidden md:inline text-white/20">|</span>
              <span className="text-xs md:text-sm text-slate-400 font-normal border border-slate-700 px-2 py-0.5 rounded bg-slate-900">
                {PERSONAL_INFO.subtitle}
              </span>
            </h2>
          </div>

          <div className="flex gap-4 mt-8 md:mt-0 justify-center md:justify-start">
            {[
              { icon: <GithubIcon />, link: PERSONAL_INFO.github },
              { icon: <LinkedinIcon />, link: PERSONAL_INFO.linkedin },
              { icon: <Mail />, link: `mailto:${PERSONAL_INFO.email}` }
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-white/20 rounded-full hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all duration-300 hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Column: Bio & Skills (4 cols) */}
          <div className="lg:col-span-4 space-y-8">

            {/* Profile Card */}
            <TiltCard className="h-auto">
              <div className="p-6 bg-linear-to-b from-slate-900 to-black h-full">
                <div className="flex items-center justify-between mb-6">
                  <Cpu className="w-8 h-8 text-cyan-400 animate-[spin_8s_linear_infinite]" />
                  <span className="text-xs border border-cyan-500/30 px-2 py-1 rounded text-cyan-400 bg-cyan-900/20">v4.0.0 STABLE</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Ingeniero Backend especializado en <span className="text-white font-bold">Java, .NET y Node.js</span>.
                  <br/><br/>
                  Obsesionado con el <span className="text-cyan-400">rendimiento</span> y la gestion de memoria.
                  +10 anos dominando entornos <span className="text-white font-bold">Linux</span> y optimizando arquitecturas criticas.
                </p>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div>
                     <div className="flex justify-between text-xs text-cyan-400 mb-1 font-bold">
                      <span>JAVA / SPRING BOOT</span>
                      <span>95%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-500 w-[95%] shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-fuchsia-400 mb-1 font-bold">
                      <span>.NET / ANGULAR</span>
                      <span>90%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-fuchsia-500 w-[90%] shadow-[0_0_10px_rgba(217,70,239,0.5)]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 gap-4">
              {SKILLS.map((skill, idx) => (
                <TiltCard key={idx}>
                  <div className="p-5 flex flex-col h-full bg-slate-900/50 hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      {skill.icon}
                      <h3 className="font-bold text-white tracking-wide text-sm">{skill.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span key={item} className="px-2 py-1 text-[10px] bg-white/5 border border-white/10 rounded hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-100 transition-all cursor-crosshair">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>

          {/* Right Column: Projects & Exp (8 cols) */}
          <div className="lg:col-span-8 space-y-8">

            {/* Control Panel Tabs */}
            <div className="flex gap-4 border-b border-white/10 pb-1 overflow-x-auto">
              {(['EXPERIENCE_LOG', 'PROJECT_PROTOCOLS'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 px-4 text-sm font-bold tracking-wider transition-colors relative whitespace-nowrap ${
                    activeTab === tab ? 'text-cyan-400' : 'text-slate-500 hover:text-white'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                  )}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="min-h-[500px]">
              {activeTab === 'EXPERIENCE_LOG' ? (
                <div className="space-y-6">
                  {EXPERIENCE.map((job) => (
                    <TiltCard key={job.id} className="group">
                      <div className={`p-8 bg-slate-900/40 relative ${job.highlight ? 'bg-linear-to-br from-slate-900/80 to-emerald-950/20' : ''}`}>
                        {/* Timeline decorative line */}
                        <div className={`absolute left-0 top-0 bottom-0 w-1 transition-opacity ${
                          job.highlight ? 'bg-emerald-500 opacity-100' : 'bg-linear-to-b from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100'
                        }`}></div>

                        <div className="md:flex justify-between items-start mb-4">
                          <div>
                            <h3 className={`text-2xl font-bold transition-colors ${job.highlight ? 'text-white' : 'text-white group-hover:text-cyan-400'}`}>
                              {job.role}
                            </h3>
                            <h4 className={`text-slate-400 flex items-center gap-2 font-medium ${job.highlight ? 'text-emerald-100/70' : ''}`}>
                              <Layers className="w-4 h-4" /> {job.company}
                            </h4>
                          </div>
                          <div className={`mt-2 md:mt-0 px-3 py-1 rounded text-xs font-mono border ${
                            job.highlight
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                              : 'bg-white/5 text-cyan-200 border-white/10'
                          }`}>
                            {job.period}
                          </div>
                        </div>

                        <p className="text-slate-300 mb-6 border-l-2 border-slate-700 pl-4 leading-relaxed">
                          {job.description}
                        </p>

                        {/* FEATURE: Render Metric Highlight if exists */}
                        {job.highlight && (
                          <div className="mb-6">
                            <MetricHighlight
                              metric={job.highlight.metric}
                              context={job.highlight.context}
                            />
                          </div>
                        )}

                        <div className="flex gap-2 flex-wrap">
                          {job.tech.map(t => (
                            <span key={t} className={`text-[10px] md:text-xs font-bold px-2 py-1 rounded flex items-center gap-1 ${
                              job.highlight
                                ? 'bg-emerald-950 text-emerald-400 border border-emerald-900'
                                : 'text-slate-500 bg-black/30 border border-transparent'
                            }`}>
                              {job.highlight && <Terminal className="w-3 h-3" />}
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </TiltCard>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <TiltCard>
                    <div className="p-6 h-full bg-linear-to-br from-slate-900 to-slate-800 border-t border-white/5">
                      <div className="flex justify-between items-start mb-4">
                        <Activity className="text-fuchsia-500 w-8 h-8" />
                        <ExternalLink className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">English Learning Platform</h3>
                      <p className="text-sm text-slate-400 mb-4">
                        Plataforma educativa completa (LMS). Arquitectura de microservicios con NestJS.
                      </p>
                      <div className="text-xs text-fuchsia-400 font-mono border border-fuchsia-500/30 inline-block px-2 py-1 rounded bg-fuchsia-500/10">
                        STATUS: DEPLOYED
                      </div>
                    </div>
                  </TiltCard>

                  <TiltCard>
                    <div className="p-6 h-full bg-linear-to-br from-slate-900 to-slate-800 border-t border-white/5">
                      <div className="flex justify-between items-start mb-4">
                        <Code2 className="text-emerald-500 w-8 h-8" />
                        <ExternalLink className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Alsacia Internal Tools</h3>
                      <p className="text-sm text-slate-400 mb-4">
                        Software de gestion interna en .NET y Angular. Optimizacion de flujos operativos.
                      </p>
                      <div className="text-xs text-emerald-400 font-mono border border-emerald-500/30 inline-block px-2 py-1 rounded bg-emerald-500/10">
                        STATUS: PRODUCTION
                      </div>
                    </div>
                  </TiltCard>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 border-t border-white/10 pt-8 text-center text-slate-600 text-sm">
          <p className="flex items-center justify-center gap-2">
            <Terminal className="w-4 h-4" />
            <span>SYSTEM OPTIMIZED. MEMORY LEAKS: 0.</span>
          </p>
          <p className="mt-2 text-xs opacity-50">
            ENGINEERED BY GABRIEL FAGUNDEZ
          </p>
        </footer>

      </div>
    </div>
  );
}
