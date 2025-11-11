import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export default function Home() {
  const { navigateTo } = useNavigation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Hi, I'm <span className="text-blue-600">Divij P</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl text-gray-700 font-medium">
                Fullstack Developer
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Specializing in the MERN stack with 1 year of professional experience.
                I build scalable, high-performance web applications with clean, maintainable code.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigateTo('projects')}
                className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
              >
                View My Work
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => navigateTo('contact')}
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                Get In Touch
              </button>
            </div>

            <div className="flex gap-6 pt-4">
              <a
                href="https://github.com/Divij860"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/divijp860"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:divijp2002@gmail.com"
                className="p-3 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-2xl flex items-center justify-center">
              <div className="text-white text-center space-y-6 p-8">
                <div className="text-6xl font-bold">1+</div>
                <div className="text-xl">Year of Experience</div>
                <div className="border-t border-white/20 pt-6 space-y-2">
                  <div className="text-3xl font-bold">7.7</div>
                  <div className="text-sm">CGPA in AI & ML</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-200 rounded-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-300 rounded-full -z-10"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Technologies</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-gray-600">Projects</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
            <div className="text-gray-600">Awards Won</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600">Dedicated</div>
          </div>
        </div>
      </div>
    </div>
  );
}
