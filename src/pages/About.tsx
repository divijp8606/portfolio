import { GraduationCap, Briefcase, Award, Calendar } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A passionate developer dedicated to creating exceptional digital experiences
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Summary</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Fullstack Developer with 1 year of professional experience specializing in the MERN stack.
            Experienced in building scalable and high-performance web applications, with strong expertise
            in Context API for state management, JWT authentication, and modern build tools like Vite.
            Proficient in Git/GitHub workflows and delivering clean, maintainable solutions aligned with
            business objectives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <GraduationCap className="text-blue-600" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Education</h2>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900">Bachelor of Engineering</h3>
                <p className="text-blue-600 font-medium">Sahyadri College of Engineering and Management</p>
                <div className="flex items-center gap-2 text-gray-600 mt-2">
                  <Calendar size={16} />
                  <span>2020 - 2024</span>
                </div>
                <p className="text-gray-700 mt-2">
                  Artificial Intelligence and Machine Learning
                </p>
                <p className="text-lg font-semibold text-blue-600 mt-2">CGPA: 7.7</p>
              </div>

              <div className="border-l-4 border-gray-300 pl-6">
                <h3 className="text-xl font-bold text-gray-900">Higher Secondary Education</h3>
                <p className="text-gray-700 font-medium">HHSIBSHSS, Edneer</p>
                <div className="flex items-center gap-2 text-gray-600 mt-2">
                  <Calendar size={16} />
                  <span>2020</span>
                </div>
                <p className="text-gray-700 mt-2">PCMB</p>
                <p className="text-lg font-semibold text-blue-600 mt-2">92%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 rounded-lg">
                <Briefcase className="text-green-600" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900">MERN Fullstack Developer</h3>
                <p className="text-green-600 font-medium">Pendagon Technologies</p>
                <div className="flex items-center gap-2 text-gray-600 mt-2">
                  <Calendar size={16} />
                  <span>Sep 2024 - Present</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">Kasaragod, Kerala</p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Developed and deployed static and dynamic websites, including e-commerce platforms</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Implemented payment gateways, admin dashboards, and secure authentication systems</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Built scalable applications using the MERN stack with Tailwind CSS and Next.js</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-gray-300 pl-6">
                <h3 className="text-xl font-bold text-gray-900">Internship</h3>
                <p className="text-gray-700 font-medium">Swizosoft</p>
                <div className="flex items-center gap-2 text-gray-600 mt-2">
                  <Calendar size={16} />
                  <span>Mar 2024</span>
                </div>
                <p className="text-gray-600 text-sm mt-1">Manglore, Karnataka</p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-gray-600 font-bold">•</span>
                    <span>Participated in the entire software development lifecycle</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gray-600 font-bold">•</span>
                    <span>Developed a webpage for an Online Book Store</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8 text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-white/20 rounded-lg">
              <Award className="text-white" size={28} />
            </div>
            <h2 className="text-2xl font-bold">Achievements</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-3">2nd Prize Winner</h3>
              <p className="text-blue-100 leading-relaxed">
                Secured 2nd prize for Sign Language Generating System at PRAKALPANA 1.0 (AIML branch)
                and selected for TECHVISION 2024 project exhibition
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-3">Certified Developer</h3>
              <p className="text-blue-100 leading-relaxed">
                Completed Full-Stack Web Development course, earning certification in modern MERN practices
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
