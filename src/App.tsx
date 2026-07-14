import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, Code, Briefcase, Terminal, Award } from 'lucide-react';
import { Scene3D } from './components/Scene3D';

// ==========================================
// 📊 UNIFIED DATA MATRIX (FROM YOUR RESUME)
// ==========================================
const personalInfo = {
  name: "J. MUNEESWARI",
  title: "AI Engineer & Full Stack Developer (React.js)",
  education: "B.Tech in Artificial Intelligence and Data Science",
  college: "Ramco Institute of Technology",
  cgpa: "7.92 (till 5th Semester)",
  email: "munisha.j276@gmail.com",
  github: "https://github.com/munishaj276-coder",
  linkedin: "https://linkedin.com/in/muneeswari-j-a2a78027b",
  leetcode: "https://leetcode.com/u/OBA5odker1"
};

const skillsData = [
  {
    category: "Frontend Core",
    items: ["React.js", "HTML5", "CSS3", "JavaScript", "Responsive Design", "REST API Integration"]
  },
  {
    category: "Backend & Languages",
    items: ["Node.js", "Express.js", "Python", "Java", "C", "C++", "MongoDB", "MySQL"]
  },
  {
    category: "Tools & Libraries",
    items: ["Git / GitHub", "Scikit-learn", "Matplotlib", "Seaborn", "Power BI", "UI/UX Fundamentals"]
  }
];

const projectsList = [
  {
    title: "AI-Enabled Direct Market Access App for Farmers",
    timeline: "2024 – 2025",
    description: "Designed and built an AI-powered platform connecting farmers directly with buyers, eliminating middlemen. Engineered a custom Machine Learning crop price prediction model using historical database sets to support automated selling insights.",
    tags: ["Python", "Predictive Modeling", "Data Analysis", "ML Extraction"]
  },
  {
    title: "Performance Analytics & Alerts System",
    timeline: "2025",
    description: "Built a real-time KPI analytics dashboard engine to evaluate internal health dimensions. Integrated threshold-based conditional notification setups using Matplotlib, Seaborn, and automated metrics ingestion templates.",
    tags: ["Python", "Power BI", "Matplotlib", "Seaborn"]
  }
];

const experienceData = [
  {
    role: "Full Stack Developer Intern",
    company: "Elysium Techlabs – Elysium Technologies",
    duration: "Jun 2025 – Jul 2025",
    points: [
      "Built responsive, reusable React.js UI modules for an production e-commerce catalog, shopping cart setups, and checkout micro-states.",
      "Developed robust RESTful Express.js API configurations linked securely to automated front-ends for processing inventory items.",
      "Modeled structural MongoDB schemas supporting heavy state reads and dynamic client data mutations."
    ]
  },
  {
    role: "Machine Learning Intern",
    company: "Elysium Technologies",
    duration: "Feb 2025",
    points: [
      "Trained and evaluated supervised and unsupervised predictive architectures via Scikit-Learn libraries.",
      "Conducted extensive database preprocessing modules, feature standardizations, missing-value handlers, and telemetry scalers."
    ]
  }
];

const certifications = [
  "Java Multithreading – Infosys Springboard (Jan 2025)",
  "Foundations of Cybersecurity – Google via Coursera (Jan 2024)",
  "UI/UX Design – Great Learning Academy (Aug 2024)",
  "Networking Basics – Cisco Networking Academy (Mar 2025)"
];

// ==========================================
// 💻 PORTFOLIO WEB ENGINE INTERFACE
// ==========================================
export default function App() {
  return (
    <div className="bg-[#030014] text-white min-h-screen font-sans selection:bg-purple-500/30 selection:text-white antialiased overflow-x-hidden">
      
      {/* Aurora Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full filter blur-[180px] pointer-events-none" />

      {/* 🚀 HERO ARCHITECTURE */}
      <section className="relative min-h-screen flex items-center justify-center px-6 border-b border-white/5 overflow-hidden">
        {/* Premium interactive 3D core */}
        <Scene3D />
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="px-4 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-cyan-400 uppercase tracking-widest">
              ⚡ Open for Software Roles
            </span>
          </motion.div>

          <motion.h1 
            className="mt-8 text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500 tracking-tight"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p 
            className="mt-6 text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {personalInfo.title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-normal text-lg">
              {personalInfo.education} • {personalInfo.college}
            </span>
          </motion.p>

          <motion.div 
            className="mt-12 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a href="#projects" className="group flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-slate-100 transition duration-300">
              Explore Projects <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition backdrop-blur-md">
              <Linkedin className="w-4 h-4 text-blue-400" /> LinkedIn
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition backdrop-blur-md">
              <Github className="w-4 h-4 text-slate-300" /> GitHub
            </a>
          </motion.div>

          {/* Interactive Console Terminal */}
          <motion.div 
            className="mt-16 max-w-xl mx-auto p-4 rounded-xl bg-black/60 border border-white/10 text-left font-mono text-xs text-slate-400 shadow-2xl backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex gap-1.5 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            <p className="text-cyan-400">$ npm run load-stats --user=muneeswari</p>
            <p className="text-green-400">✔ Cumulative CGPA Metric: {personalInfo.cgpa}</p>
            <p className="text-purple-400">✔ Active Stack: React (v19) + Tailwind CSS Engine</p>
          </motion.div>
        </div>
      </section>

      {/* 💼 EXPERIENCE ARCHITECTURE */}
      <section className="py-24 max-w-5xl mx-auto px-6 border-b border-white/5">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-6 h-6 text-purple-400" />
          <h2 className="text-3xl font-bold tracking-tight">Professional Experience</h2>
        </div>
        <div className="space-y-12">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative p-8 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all duration-300">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-purple-400 font-medium text-sm mt-0.5">{exp.company}</p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-slate-400">{exp.duration}</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-400 text-sm leading-relaxed">
                {exp.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 🛠️ PROJECTS LAYOUT CONTAINER */}
      <section id="projects" className="py-24 max-w-5xl mx-auto px-6 border-b border-white/5">
        <div className="flex items-center gap-3 mb-12">
          <Terminal className="w-6 h-6 text-cyan-400" />
          <h2 className="text-3xl font-bold tracking-tight">Technical Implementations</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projectsList.map((project, idx) => (
            <div key={idx} className="flex flex-col justify-between p-8 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group">
              <div>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <span className="text-xs font-mono text-slate-500 shrink-0">{project.timeline}</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {project.tags.map((t, i) => (
                  <span key={i} className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 💻 CORE COMPETENCIES SKILLS MATRIX */}
      <section className="py-24 max-w-5xl mx-auto px-6 border-b border-white/5">
        <div className="flex items-center gap-3 mb-12">
          <Code className="w-6 h-6 text-pink-400" />
          <h2 className="text-3xl font-bold tracking-tight">Core Competencies</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {skillsData.map((skillGroup, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <h3 className="text-sm font-mono text-pink-400 font-semibold uppercase tracking-wider mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span key={i} className="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 hover:bg-white/10 transition">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🏅 CREDENTIALS & CERTIFICATIONS */}
      <section className="py-24 max-w-5xl mx-auto px-6 border-b border-white/5">
        <div className="flex items-center gap-3 mb-12">
          <Award className="w-6 h-6 text-yellow-400" />
          <h2 className="text-3xl font-bold tracking-tight">Credentials & Verification</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white/[0.01] border border-white/5 flex items-center gap-3 text-slate-300 text-xs font-medium">
              <div className="w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
              <span>{cert}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 📬 CONNECT FOOTER */}
      <footer className="py-16 text-center text-slate-600 text-xs border-t border-white/5 font-mono">
        <p>© 2026 J. Muneeswari. Compiled for Enterprise Quality Evaluation.</p>
        <p className="mt-3 text-slate-300 flex justify-center items-center gap-2">
          <Mail className="w-3.5 h-3.5 text-cyan-400" /> {personalInfo.email}
        </p>
      </footer>

    </div>
  );
}