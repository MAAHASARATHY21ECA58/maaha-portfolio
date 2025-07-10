'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  Code, 
  Server, 
  Database, 
  Cloud,
  Brain,
  Zap,
  Globe,
  Terminal,
  ChevronDown,
  ExternalLink,
  Moon,
  Sun
} from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [darkMode, setDarkMode] = useState(true);
  const [typewriterText, setTypewriterText] = useState('');

  const fullText = "AI Engineer & DevOps Specialist";

  useEffect(() => {
    setIsLoaded(true);
    
    // Typewriter effect
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    { name: 'AI/ML', icon: Brain, level: 95, color: '#00ff88' },
    { name: 'DevOps', icon: Server, level: 90, color: '#0088ff' },
    { name: 'Cloud Computing', icon: Cloud, level: 88, color: '#ff0088' },
    { name: 'Python', icon: Code, level: 92, color: '#ffaa00' },
    { name: 'Kubernetes', icon: Database, level: 85, color: '#aa00ff' },
    { name: 'Automation', icon: Zap, level: 90, color: '#00ffaa' }
  ];

  const projects = [
    {
      title: "AI-Powered DevOps Pipeline",
      description: "Intelligent CI/CD pipeline with ML-based optimization and predictive failure detection.",
      tech: ["Python", "TensorFlow", "Kubernetes", "Jenkins"],
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "#"
    },
    {
      title: "Cloud Infrastructure Automation",
      description: "Scalable infrastructure as code with automated deployment and monitoring.",
      tech: ["Terraform", "AWS", "Docker", "Prometheus"],
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "#"
    },
    {
      title: "Machine Learning Operations Platform",
      description: "End-to-end MLOps platform for model deployment and lifecycle management.",
      tech: ["MLflow", "Kubeflow", "Python", "React"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "#"
    }
  ];

  const experience = [
    {
      year: "July 2025",
      title: "Data Analytics Virtual Job Simulation",
      company: "Deloitte Australia",
      description: "Completed forensic data analysis simulation, built interactive dashboards using Tableau, and derived actionable business insights through Excel data classification.",
      type: "virtual",
      skills: ["Tableau", "Excel", "Data Analytics", "Business Intelligence"]
    },
    {
      year: "2023-Present",
      title: "Senior AI Engineer",
      company: "Tech Innovation Corp",
      description: "Leading AI initiatives and DevOps transformation projects.",
      type: "full-time"
    },
    {
      year: "2021-2023",
      title: "DevOps Engineer",
      company: "Cloud Solutions Inc",
      description: "Implemented scalable infrastructure and CI/CD pipelines.",
      type: "full-time"
    },
    {
      year: "2019-2021",
      title: "Software Engineer",
      company: "StartupTech",
      description: "Full-stack development and system architecture design.",
      type: "full-time"
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      {/* Cursor Trail */}
      <div 
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          background: 'radial-gradient(circle, rgba(0,255,136,0.8) 0%, transparent 70%)',
          borderRadius: '50%',
          transition: 'all 0.1s ease-out'
        }}
      />

      {/* Dark/Light Mode Toggle */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </motion.button>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent`}
            >
              Maaha Sarathy
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`${darkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-purple-600'} transition-colors duration-300`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                opacity: 0
              }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <h1 className={`text-6xl md:text-8xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Maaha Sarathy
              </span>
            </h1>
            <div className={`text-2xl md:text-3xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} h-12 flex items-center justify-center`}>
              <span className="border-r-2 border-cyan-400 pr-2 animate-pulse">
                {typewriterText}
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-12 max-w-2xl mx-auto`}
          >
            Bridging the gap between artificial intelligence and scalable infrastructure. 
            Passionate about creating intelligent systems that drive innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,255,136,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Explore My Work
            </motion.button>
            <motion.a
              href="/maahasarathydevopsresume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 border-2 ${darkMode ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900' : 'border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white'} rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2`}
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className={`w-8 h-8 ${darkMode ? 'text-cyan-400' : 'text-purple-500'} animate-bounce`} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm`}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={`${darkMode ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-md rounded-2xl p-8 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-xl`}
            >
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-6`}>
                I&apos;m a passionate AI Engineer and DevOps Specialist with expertise in building intelligent, 
                scalable systems. My journey spans across machine learning, cloud infrastructure, and 
                automation technologies.
              </p>
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                I believe in the power of technology to transform businesses and create meaningful impact. 
                My approach combines cutting-edge AI techniques with robust DevOps practices to deliver 
                solutions that are both innovative and reliable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Brain, title: "AI/ML Expert", desc: "Deep learning & neural networks" },
                { icon: Server, title: "DevOps Pro", desc: "CI/CD & infrastructure automation" },
                { icon: Cloud, title: "Cloud Native", desc: "AWS, Azure & Kubernetes" },
                { icon: Zap, title: "Innovation", desc: "Cutting-edge solutions" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className={`${darkMode ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-md rounded-xl p-6 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg text-center`}
                >
                  <item.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>{item.title}</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Technical <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className={`${darkMode ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-md rounded-2xl p-8 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-xl relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-cyan-500/10"></div>
                <div className="relative z-10">
                  <skill.icon className="w-12 h-12 mb-4" style={{ color: skill.color }} />
                  <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{skill.name}</h3>
                  <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded-full h-3 mb-2`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-3 rounded-full"
                      style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)` }}
                    ></motion.div>
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{skill.level}% Proficiency</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm`}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className={`${darkMode ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-md rounded-2xl overflow-hidden border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-xl group`}
              >
                <div className="relative overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    View Project <ExternalLink size={16} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Professional <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"></div>
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className={`${darkMode ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-md rounded-2xl p-6 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-xl ${exp.type === 'virtual' ? 'ring-2 ring-cyan-400/30' : ''}`}>
                    {exp.type === 'virtual' && (
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30 font-semibold">
                          Virtual Internship
                        </span>
                        <Globe className="w-4 h-4 text-cyan-400" />
                      </div>
                    )}
                    <div className="text-cyan-400 font-semibold mb-2">{exp.year}</div>
                    <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{exp.title}</h3>
                    <div className="text-purple-400 font-semibold mb-3">{exp.company}</div>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.description}</p>
                    {exp.skills && (
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-2 py-1 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-300 rounded-md text-xs border border-cyan-500/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${exp.type === 'virtual' ? 'bg-gradient-to-r from-cyan-300 to-cyan-500 animate-pulse' : 'bg-gradient-to-r from-cyan-400 to-purple-400'} rounded-full border-4 ${darkMode ? 'border-gray-900' : 'border-gray-100'}`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Vision</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mb-8"></div>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
              &quot;To bridge the gap between artificial intelligence and practical implementation, 
              creating intelligent systems that scale seamlessly in production environments. I envision a future where AI 
              and DevOps work in perfect harmony to deliver unprecedented value.&quot;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Let&apos;s <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={`${darkMode ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-md rounded-2xl p-8 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-xl`}
            >
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Get In Touch</h3>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
                Ready to discuss your next AI or DevOps project? Let&apos;s create something amazing together.
              </p>
              <div className="space-y-4">
                <motion.a
                  href="mailto:maaha.sarathy@email.com"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300"
                >
                  <Mail className="text-cyan-400" size={24} />
                  <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>maaha.sarathy@email.com</span>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/maahasarathy"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300"
                >
                  <Linkedin className="text-cyan-400" size={24} />
                  <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>LinkedIn Profile</span>
                </motion.a>
                <motion.a
                  href="https://github.com/maahasarathy"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300"
                >
                  <Github className="text-cyan-400" size={24} />
                  <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>GitHub Profile</span>
                </motion.a>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={`${darkMode ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-md rounded-2xl p-8 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-xl`}
            >
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={`w-full p-4 rounded-xl ${darkMode ? 'bg-gray-800/50 text-white border-gray-600' : 'bg-white/50 text-gray-900 border-gray-300'} border focus:border-cyan-400 focus:outline-none transition-all duration-300`}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={`w-full p-4 rounded-xl ${darkMode ? 'bg-gray-800/50 text-white border-gray-600' : 'bg-white/50 text-gray-900 border-gray-300'} border focus:border-cyan-400 focus:outline-none transition-all duration-300`}
                  />
                </div>
                <div>
                  <textarea
                    rows={5}
                    placeholder="Your Message"
                    className={`w-full p-4 rounded-xl ${darkMode ? 'bg-gray-800/50 text-white border-gray-600' : 'bg-white/50 text-gray-900 border-gray-300'} border focus:border-cyan-400 focus:outline-none transition-all duration-300 resize-none`}
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,255,136,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-900' : 'bg-white'} border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2024 Maaha Sarathy. Crafted with passion and cutting-edge technology.
          </p>
        </div>
      </footer>
    </div>
  );
}