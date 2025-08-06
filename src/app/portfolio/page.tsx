"use client";

import React from "react";

const socialLinks = [
  { name: "Facebook", href: "#", label: "f" },
  { name: "Instagram", href: "#", label: "📷" },
  { name: "Dribbble", href: "#", label: "🎯" },
  { name: "Behance", href: "#", label: "Be" },
];

const stats = [
  { label: "", value: "14%", icon: "🏆" },
  { label: "", value: "50+", icon: "💼" },
  { label: "", value: "1.5K", icon: "👥" },
  { label: "", value: "50+", icon: "👑" },
];

const specializations = [
  {
    title: "Web Development",
    description: "Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Utilizing methods such as surveys, interviews, and usability testing...",
    projects: "10 PROJECTS",
    icon: "💻"
  },
  {
    title: "UI/UX Design",
    description: "Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Utilizing methods such as surveys, interviews, and usability testing...",
    projects: "11 PROJECTS",
    icon: "🎨"
  }
];

const skills = [
  { name: "Figma", percentage: "92%", icon: "🎨" },
  { name: "Sketch", percentage: "80%", icon: "💎" },
  { name: "XD", percentage: "85%", icon: "Xd" },
  { name: "WordPress", percentage: "99%", icon: "W" },
  { name: "React", percentage: "89%", icon: "⚛️" },
  { name: "JavaScript", percentage: "93%", icon: "JS" }
];

const testimonials = [
  {
    text: "Taylor is a professional Designer really my business by providing value to my business. Taylor is a professional Designer he really helps my business by providing value to my business. Taylor is a professional.",
    author: "Brandon Fraser",
    role: "Senior Software Dev, Cosmic Sport",
    rating: 4.5,
    avatar: "https://placehold.co/60x60?text=BF"
  },
  {
    text: "Taylor is a professional Designer really my business by providing value to my business. Taylor is a professional Designer he really helps my business by providing value to my business. Taylor is a professional.",
    author: "Tim Bailey",
    role: "SEO Specialist, Theme Junction",
    rating: 4.5,
    avatar: "https://placehold.co/60x60?text=TB"
  }
];

const education = [
  { title: "BA IN DESIGN", role: "Product Designer", period: "January 2024 - Present" },
  { title: "UX/UI DESIGN SCHOOL", role: "Product Designer", period: "April 2024 - Present" }
];

const experience = [
  { title: "LION PARCEL", role: "Product Designer", period: "January 2024 - Present" },
  { title: "ENVER STUDIO", role: "Product Designer", period: "May 2024 - Present" },
  { title: "TOKO DISTRIBUTOR", role: "Product Designer", period: "March 2024 - Present" }
];

const pastRoles = [
  { title: "LION PARCEL", role: "Product Designer", period: "January 2024 - Present" },
  { title: "ENVER STUDIO", role: "Product Designer", period: "May 2024 - Present" },
  { title: "TOKO DISTRIBUTOR", role: "Product Designer", period: "March 2024 - Present" }
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      {/* Header */}
      <header className="flex items-center justify-between py-6 px-4 lg:px-8 border-b border-purple-800/30">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-purple-600">G</span>
          </div>
          <a
            href="mailto:mail@gerolddesign.com"
            className="text-sm font-medium hover:text-purple-400 transition-colors"
          >
            mail@gerolddesign.com
          </a>
        </div>
        
        <nav className="hidden lg:flex space-x-8 font-medium">
          <a href="#services" className="hover:text-purple-400 transition-colors">Services</a>
          <a href="#works" className="hover:text-purple-400 transition-colors">Works</a>
          <a href="#resume" className="hover:text-purple-400 transition-colors">Resume</a>
          <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
          <a href="#testimonials" className="hover:text-purple-400 transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
        </nav>
        
        <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2">
          <span>Resume</span>
          <span>⬇</span>
        </button>
        
        {/* Theme Toggle */}
        <button className="fixed top-6 right-6 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors z-50">
          <span className="text-xl">☀️</span>
        </button>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl p-8 lg:p-12 border border-purple-800/30">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Hi, I am Sam - Web Developer + UX Designer
                  </span>
                </h1>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  I design and code beautifully simple things and i love what i do. Just simple like that!
                </p>
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center space-x-2">
                    <span>Hire Me!</span>
                    <span>→</span>
                  </button>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="w-12 h-12 bg-purple-800/30 hover:bg-purple-700/50 rounded-full flex items-center justify-center transition-colors border border-purple-700/50"
                      >
                        <span className="text-sm">{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  <img
                    src="https://placehold.co/400x400?text=Professional+headshot+of+Sam+web+developer+with+beard+and+modern+styling"
                    alt="Sam - Web Developer and UX Designer"
                    className="w-80 h-80 rounded-3xl object-cover border-4 border-purple-600/30"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-purple-600/30">
                  <span className="text-2xl text-purple-400">{stat.icon}</span>
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl p-8 border border-purple-800/30">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Achievements in my professional life.
                </span>
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer us
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center space-x-2">
                <span>Contact Me</span>
                <span>→</span>
              </button>
            </div>
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl p-8 border border-purple-800/30">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Interface Designer</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                As a UI designer, I work closely with clients to understand their needs and goals for their software or website.
              </p>
              <div className="relative">
                <img
                  src="https://placehold.co/400x300?text=Modern+interface+design+mockups+showing+mobile+and+desktop+layouts"
                  alt="Interface design mockups"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialization Section */}
      <section id="services" className="py-16 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              My Specialization
            </span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {specializations.map((spec, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl p-8 border border-purple-800/30 hover:border-purple-600/50 transition-all duration-300">
                <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mb-6 border border-purple-600/30">
                  <span className="text-2xl">{spec.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{spec.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{spec.description}</p>
                <div className="text-purple-400 font-medium underline">{spec.projects}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section id="works" className="py-16 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Recent Projects
            </span>
          </h2>
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl p-8 lg:p-12 border border-purple-800/30">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-purple-400 font-medium mb-2">Social App</div>
                <h3 className="text-3xl font-bold mb-6 text-white">Deloitte</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Project was about precision and information. That's all. Our design tem helps clients achieve their marketing Trader and branding that appeals to a website
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 bg-purple-600/20 rounded-full text-sm border border-purple-600/30">Branding</span>
                  <span className="px-4 py-2 bg-purple-600/20 rounded-full text-sm border border-purple-600/30">Graphic Design</span>
                  <span className="px-4 py-2 bg-purple-600/20 rounded-full text-sm border border-purple-600/30">User Stories</span>
                </div>
                <blockquote className="text-gray-300 italic mb-4">
                  "The service was excellent. Template example is the next killer app."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <img
                    src="https://placehold.co/50x50?text=JD"
                    alt="Jeremy Doughlas"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-medium text-white">Jeremy Doughlas</div>
                    <div className="text-sm text-gray-400">UI & UX designer</div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://placehold.co/600x400?text=Deloitte+project+showcase+with+modern+dashboard+interface+and+data+visualization"
                  alt="Deloitte project showcase"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section id="resume" className="py-16 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Education & Work Experience
            </span>
          </h2>
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl p-8 lg:p-12 border border-purple-800/30">
            <div className="grid lg:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-8 text-purple-400">EDUCATION</h3>
                <div className="space-y-8">
                  {education.map((item, index) => (
                    <div key={index} className="relative pl-6">
                      <div className="absolute left-0 top-2 w-3 h-3 bg-purple-600 rounded-full"></div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-300 mb-1">{item.role}</p>
                      <p className="text-sm text-gray-400">{item.period}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-8 text-purple-400">EXPERIENCE</h3>
                <div className="space-y-8">
                  {experience.map((item, index) => (
                    <div key={index} className="relative pl-6">
                      <div className="absolute left-0 top-2 w-3 h-3 bg-purple-600 rounded-full"></div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-300 mb-1">{item.role}</p>
                      <p className="text-sm text-gray-400">{item.period}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-8 text-purple-400">PAST ROLES</h3>
                <div className="space-y-8">
                  {pastRoles.map((item, index) => (
                    <div key={index} className="relative pl-6">
                      <div className="absolute left-0 top-2 w-3 h-3 bg-purple-600 rounded-full"></div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-300 mb-1">{item.role}</p>
                      <p className="text-sm text-gray-400">{item.period}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              My Skills
            </span>
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-purple-600/30">
                  <span className="text-2xl">{skill.icon}</span>
                </div>
                <div className="text-2xl font-bold text-white mb-2">{skill.percentage}</div>
                <div className="text-purple-400 font-medium">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Clients Testimonials
            </span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl p-8 border border-purple-800/30">
                <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6 border border-purple-600/30">
                  <span className="text-purple-400 text-xl">💬</span>
                </div>
                <p className="text-gray-300 mb-8 leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-medium text-white">{testimonial.author}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-lg ${i < Math.floor(testimonial.rating) ? 'text-purple-400' : 'text-gray-600'}`}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-3xl p-8 lg:p-12 border border-purple-800/30">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Let's work together!
              </span>
            </h2>
            <p className="text-gray-300 mb-12 leading-relaxed max-w-2xl">
              I design and code beautifully simple things and i love what i do. Just simple like that!
            </p>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full bg-transparent border-b border-gray-600 py-4 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full bg-transparent border-b border-gray-600 py-4 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full bg-transparent border-b border-gray-600 py-4 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full bg-transparent border-b border-gray-600 py-4 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full bg-transparent border-b border-gray-600 py-4 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center space-x-2">
                  <span>Send Message</span>
                  <span>→</span>
                </button>
              </div>
              
              <div className="space-y-8">
                <div>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    I'm currently available to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <a href="tel:+01123654096" className="text-xl font-medium text-white hover:text-purple-400 transition-colors underline">
                      +01 123 654 8096
                    </a>
                  </div>
                  <div>
                    <a href="mailto:gerolddesign@mail.com" className="text-xl font-medium text-white hover:text-purple-400 transition-colors underline">
                      gerolddesign@mail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-xl font-medium text-white">
                      <span className="underline">Warne Park Street Pine,</span><br />
                      <span className="underline">FL 33157, New York</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex space-x-4 pt-8">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-purple-800/30 hover:bg-purple-700/50 rounded-full flex items-center justify-center transition-colors border border-purple-700/50"
                    >
                      <span className="text-sm">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 lg:px-8 border-t border-purple-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 rounded-3xl p-8 text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="text-2xl font-bold text-purple-600">G</span>
            </div>
            <nav className="flex justify-center space-x-8 mb-8 font-medium">
              <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              <a href="#services" className="hover:text-purple-400 transition-colors">Services</a>
              <a href="#works" className="hover:text-purple-400 transition-colors">Portfolios</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
            </nav>
            <p className="text-gray-400 text-sm">
              © 2024 All rights reserved by ThemeJunction
            </p>
          </div>
        </div>
        
        {/* Scroll to Top Button */}
        <button className="fixed bottom-6 right-6 w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors z-50">
          <span className="text-xl text-white">↑</span>
        </button>
      </footer>
    </div>
  );
}
