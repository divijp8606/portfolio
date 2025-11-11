import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Sign Language Animation Generation System',
      description:
        'A system that converts text input to its respective sign language animations, making content more accessible for the hearing impaired community.',
      tech: ['Python', 'Flask'],
      achievements: [
        'Secured 2nd prize at PRAKALPANA 1.0 (AIML branch)',
        'Selected for TECHVISION 2024 project exhibition',
      ],
      color: 'from-blue-600 to-blue-800',
    },
    {
      title: 'Virtual Painter Software',
      description:
        'An innovative application that detects hand gestures through computer vision and allows users to draw on a virtual canvas without any physical tools.',
      tech: ['Python', 'OpenCV', 'PyCharm'],
      color: 'from-green-600 to-green-800',
    },
    {
      title: 'E-Commerce Platform',
      description:
        'Full-featured e-commerce website with payment gateway integration, product management, shopping cart, and admin dashboard.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
      color: 'from-purple-600 to-purple-800',
    },
    {
      title: 'Online Book Store',
      description:
        'A dynamic web application for browsing and purchasing books online, developed during internship at Swizosoft.',
      tech: ['HTML', 'CSS', 'JavaScript', 'React'],
      color: 'from-orange-600 to-orange-800',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects showcasing my skills and experience in fullstack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} p-8 flex items-center justify-center`}>
                <h2 className="text-2xl font-bold text-white text-center">{project.title}</h2>
              </div>

              <div className="p-8">
                <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>

                {project.achievements && (
                  <div className="mb-6 bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Achievements:</h3>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="text-blue-800 text-sm flex gap-2">
                          <span>•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                    <Github size={18} />
                    <span>Code</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Want to see more?</h2>
          <p className="text-blue-100 text-lg mb-6">
            Check out my GitHub profile for more projects and contributions
          </p>
          <a
            href="https://github.com/Divij860"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            <Github size={20} />
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}
