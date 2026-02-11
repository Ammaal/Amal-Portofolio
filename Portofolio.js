import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  ChevronRight, 
  Code, 
  Layout, 
  Trophy,
  Briefcase,
  GraduationCap,
  Gamepad2,
  Image as ImageIcon,
  Play
} from 'lucide-react';

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 selection:bg-indigo-500 selection:text-white font-sans">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <span className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-serif italic">A</span>
            <span>Ahmad Maula</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-indigo-400 transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-zinc-900 border-b border-zinc-800 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-white hover:text-indigo-400"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={variants}
            className="space-y-6 z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-indigo-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Available for new projects
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
              Bridging Virtual Worlds <br />
              <span className="text-zinc-500">& Real Solutions.</span>
            </h1>
            
            <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
              I am an Information Systems undergraduate and Project Manager specializing in Roblox-based virtual platforms. 
              I lead cross-functional teams to deliver structured digital solutions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="px-6 py-3 bg-white text-zinc-950 font-semibold rounded-lg hover:bg-zinc-200 transition-colors">
                View Projects
              </a>
              <a href="mailto:ahmadmaula2006@gmail.com" className="px-6 py-3 border border-zinc-700 rounded-lg hover:border-indigo-500 hover:text-indigo-400 transition-colors">
                Contact Me
              </a>
            </div>

            <div className="pt-8 flex gap-6 text-zinc-500">
              <a href="https://www.linkedin.com/in/ahmad-maula-shibghotulloh-447190312" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:ahmadmaula2006@gmail.com" className="hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Image / Face */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end z-10"
          >
             {/* Decorative Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-blue-500/20 blur-3xl rounded-full transform rotate-12" />
            
            {/* Image Container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 group">
              {/* PLACEHOLDER: Replace src with your actual photo URL */}
              <img 
                src="https://api.dicebear.com/9.x/avataaars/svg?seed=Ahmad&backgroundColor=b6e3f4" 
                alt="Ahmad Maula" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/80 backdrop-blur-sm p-3 rounded-lg border border-zinc-800 flex items-center gap-3">
                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <p className="text-xs text-zinc-400">Current Status</p>
                  <p className="text-sm font-semibold text-white">Open to Work</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Background Decorative Gradient */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />
      </section>

      {/* About & Education Grid */}
      <section id="about" className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">About Me</h2>
            <p className="text-zinc-400 leading-relaxed">
              Based in Cikarang, Indonesia, I am a Co-Founder at OnBlox Studio with a GPA of 3.83 in Information Systems & Business Management from President University.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              My expertise lies in blending technical skills (Python, React, ERP) with managerial acumen (Agile, Project Planning). I have a proven track record of managing end-to-end operations for hackathons, leadership programs, and large-scale virtual events.
            </p>
            
            <div className="flex items-center gap-2 text-zinc-300">
              <MapPin size={18} className="text-indigo-400" />
              <span>Cikarang, Indonesia</span>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-indigo-400" size={28} />
              <h3 className="text-xl font-semibold text-white">Education</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg text-white font-medium">President University</h4>
                <p className="text-zinc-400 text-sm">Information System & Business Management</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs px-2 py-1 bg-indigo-500/10 text-indigo-400 rounded">GPA 3.83</span>
                  <span className="text-zinc-500 text-sm">2024 - Present</span>
                </div>
              </div>
              
              <div className="border-t border-zinc-800 pt-4">
                <p className="text-sm font-medium text-white mb-2">Key Coursework</p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Enterprise Resource Planning (ERP), Business Process Analysis, Systems Analysis & Design, Data & Information Management.
                </p>
              </div>

               <div className="border-t border-zinc-800 pt-4">
                <p className="text-sm font-medium text-white mb-2 flex items-center gap-2">
                  <Trophy size={14} className="text-yellow-500" /> Jababeka Scholarship Awardee
                </p>
                <p className="text-xs text-zinc-400">
                  Full scholarship + Tuition Fee Reduction for developing the President University Virtual Campus Map.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Work Experience</h2>
            <div className="h-1 w-20 bg-indigo-500 rounded-full"></div>
          </div>

          <div className="space-y-12">
            {/* Job 1 */}
            <ExperienceCard 
              company="OnBlox Studio"
              role="Project Manager | Co-Founder"
              period="Jul 2025 - Present"
              description="Led end-to-end delivery of Roblox-based digital products. Coordinated cross-functional teams (builders, designers, scripters) using Agile workflows."
              achievements={[
                "Delivered Virtual Campus Beta 30% faster than planned, reaching 2,000+ visits in week one.",
                "Managed virtual concert IDGITAF & Dannila (Ahquote Land) achieving 1M+ social engagements.",
                "Contributed directly to building and design (~30%) alongside QA standards."
              ]}
            />
            
            {/* Job 2 */}
            <ExperienceCard 
              company="PUMA Information Systems"
              role="Project Manager (Hackathon)"
              period="Aug 2024 - Present"
              description="Led planning and execution of an international student hackathon co-hosted by President University & UNITAR International University (Malaysia)."
              achievements={[
                "Managed logistics and cross-department coordination for a 3-day hybrid event (25+ participants).",
                "Facilitated cross-cultural collaboration across workshops and challenges."
              ]}
            />

            {/* Job 3 */}
            <ExperienceCard 
              company="President University Investment Club"
              role="Project Manager (Leadership Program)"
              period="Jan 2025 - May 2025"
              description="Spearheaded a leadership development workshop focused on communication and team effectiveness."
              achievements={[
                "Managed end-to-end operations including agenda design, speaker coordination, and internal team collaboration."
              ]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section with Visuals */}
      <section id="projects" className="py-20 px-6 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Selected Projects</h2>
            <div className="h-1 w-20 bg-indigo-500 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard 
              title="Virtual Campus"
              category="Roblox Simulation"
              description="An immersive digital twin of President University. Beta launch achieved 2k+ visits in week one."
              tags={['Roblox Studio', 'Project Management', 'Education']}
              icon={<MapPin size={20} />}
              imgUrl="https://placehold.co/600x400/222/555?text=Virtual+Campus"
            />
            <ProjectCard 
              title="Ahquote Land Concert"
              category="Virtual Event"
              description="Hosted IDGITAF & Dannila virtual concert. Achieved 1M+ engagements across TikTok, Instagram, and Roblox."
              tags={['Event Management', 'Social Media', '3D Design']}
              icon={<Gamepad2 size={20} />}
              imgUrl="https://placehold.co/600x400/333/666?text=Concert+Event"
            />
            <ProjectCard 
              title="EcoBlox Social Project"
              category="Educational Game"
              description="Waste management game for high school students. Aligned digital delivery with social impact objectives."
              tags={['Gamification', 'Sustainability', 'Team Lead']}
              icon={<Code size={20} />}
              imgUrl="https://placehold.co/600x400/111/444?text=EcoBlox"
            />
          </div>
        </div>
      </section>

      {/* NEW: Gallery Section (Photo/Vid) */}
      <section id="gallery" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Gallery</h2>
              <p className="text-zinc-400">Moments from events, hackathons, and team collaborations.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 auto-rows-[200px]">
            {/* Gallery Item 1 (Large) */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group bg-zinc-900 border border-zinc-800"
            >
              {/* PLACEHOLDER: Replace with Hackathon Photo */}
              <img src="https://placehold.co/800x600/1e1e24/indigo?text=Hackathon+Team" alt="Hackathon" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-bold text-indigo-400 bg-zinc-900/80 px-2 py-1 rounded mb-2 inline-block">Event</span>
                <h3 className="text-xl font-bold text-white">Hackathon Leadership</h3>
              </div>
            </motion.div>

            {/* Gallery Item 2 */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden group bg-zinc-900 border border-zinc-800"
            >
               {/* PLACEHOLDER: Replace with Concert Video Thumbnail */}
              <img src="https://placehold.co/400x400/1e1e24/violet?text=Virtual+Concert" alt="Concert" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                <div className="h-10 w-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                  <Play size={16} className="text-white fill-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3">
                 <p className="text-sm font-medium text-white">Virtual Concert Demo</p>
              </div>
            </motion.div>

            {/* Gallery Item 3 */}
            <motion.div 
               whileHover={{ scale: 1.02 }}
               className="relative rounded-2xl overflow-hidden group bg-zinc-900 border border-zinc-800"
            >
               {/* PLACEHOLDER: Replace with another photo */}
               <img src="https://placehold.co/400x400/1e1e24/green?text=Team+Planning" alt="Meeting" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3">
                 <p className="text-sm font-medium text-white">Team Planning</p>
              </div>
            </motion.div>

             {/* Gallery Item 4 */}
            <motion.div 
               whileHover={{ scale: 1.02 }}
               className="md:col-span-1 relative rounded-2xl overflow-hidden group bg-zinc-900 border border-zinc-800"
            >
               <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-zinc-900">
                  <ImageIcon size={32} className="text-zinc-600 mb-2 group-hover:text-indigo-400 transition-colors" />
                  <p className="text-sm text-zinc-500">More moments <br/>coming soon...</p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Core Competencies</h2>
            <p className="text-zinc-400">A blend of management strategy and technical execution</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <SkillColumn 
              icon={<Briefcase className="text-indigo-400" />}
              title="Management"
              skills={['Project Planning & Execution', 'Agile/Sprint Management', 'Stakeholder Coordination', 'Quality Assurance (QA)', 'System & Process Thinking']}
            />
            <SkillColumn 
              icon={<Code className="text-indigo-400" />}
              title="Technical"
              skills={['React JS', 'Python', 'Google AI Studio', 'n8n Automation', 'EPICOR ERP Software']}
            />
            <SkillColumn 
              icon={<Layout className="text-indigo-400" />}
              title="Tools"
              skills={['Roblox Studio', 'Notion', 'Microsoft Excel/Spreadsheet', 'Microsoft Word', 'Figma (Design Basics)']}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-zinc-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-zinc-400 mb-10 text-lg">
            I'm currently open to opportunities in Product Management, Project Management, and Digital Development.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a 
              href="mailto:ahmadmaula2006@gmail.com"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all font-medium"
            >
              <Mail size={20} />
              ahmadmaula2006@gmail.com
            </a>
            <a 
              href="https://linkedin.com/in/ahmad-maula-shibghotulloh-447190312"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-zinc-800 text-white rounded-xl hover:bg-zinc-700 transition-all font-medium border border-zinc-700"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-zinc-800 text-zinc-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Ahmad Maula Shibghotulloh. All rights reserved.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

/* Sub-Components */

const ExperienceCard = ({ company, role, period, description, achievements }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative pl-8 md:pl-0"
  >
    {/* Timeline line for desktop */}
    <div className="hidden md:block absolute left-[-29px] top-2 h-full w-[2px] bg-zinc-800"></div>
    <div className="hidden md:block absolute left-[-34px] top-2 h-3 w-3 rounded-full bg-indigo-500 ring-4 ring-zinc-950"></div>

    <div className="grid md:grid-cols-4 gap-4">
      <div className="md:col-span-1 text-zinc-500 text-sm pt-1 uppercase tracking-wide font-medium">
        {period}
      </div>
      <div className="md:col-span-3">
        <h3 className="text-xl font-bold text-white">{role}</h3>
        <h4 className="text-indigo-400 mb-4 font-medium">{company}</h4>
        <p className="text-zinc-400 mb-4 leading-relaxed">{description}</p>
        <ul className="space-y-2">
          {achievements.map((item, idx) => (
            <li key={idx} className="flex gap-3 text-sm text-zinc-300">
              <span className="text-indigo-500 mt-1.5">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const ProjectCard = ({ title, category, description, tags, icon, imgUrl }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-colors group flex flex-col h-full"
  >
    {/* Project Image */}
    <div className="h-48 w-full bg-zinc-900 relative overflow-hidden">
        <img src={imgUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-4 right-4 p-2 bg-zinc-950/80 backdrop-blur rounded-lg text-indigo-400 border border-zinc-800">
            {icon}
        </div>
    </div>

    <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <ExternalLink size={16} className="text-zinc-600 group-hover:text-indigo-400 transition-colors mt-1" />
        </div>
        
        <p className="text-xs text-indigo-400 font-medium mb-3 uppercase tracking-wide">{category}</p>
        <p className="text-zinc-400 text-sm mb-6 leading-relaxed flex-grow">
        {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map(tag => (
            <span key={tag} className="text-xs px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-zinc-400">
            {tag}
            </span>
        ))}
        </div>
    </div>
  </motion.div>
);

const SkillColumn = ({ icon, title, skills }) => (
  <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/50">
    <div className="flex items-center gap-3 mb-6">
      {icon}
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <div className="space-y-3">
      {skills.map((skill, idx) => (
        <div key={idx} className="flex items-center gap-3 text-zinc-400">
          <div className="h-1.5 w-1.5 rounded-full bg-zinc-600"></div>
          <span className="text-sm">{skill}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Portfolio;