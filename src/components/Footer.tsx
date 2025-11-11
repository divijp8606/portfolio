import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Divij P</h3>
            <p className="text-gray-400 leading-relaxed">
              Fullstack Developer specializing in MERN stack. Building scalable web applications
              with modern technologies.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </a>
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#skills" className="block text-gray-400 hover:text-white transition-colors">
                Skills
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/Divij860"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/divijp860"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:divijp2002@gmail.com"
                className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 mt-4">divijp2002@gmail.com</p>
            <p className="text-gray-400">+91 6282472416</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Divij P. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Built with <Heart size={16} className="text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
