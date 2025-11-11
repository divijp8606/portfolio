import { Code2, Database, Wrench, Cloud } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'from-blue-600 to-blue-800',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Vite', level: 85 },
        { name: 'Next.js', level: 80 },
      ],
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'from-green-600 to-green-800',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'SQL', level: 75 },
        { name: 'JWT', level: 90 },
        { name: 'Axios', level: 85 },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      color: 'from-purple-600 to-purple-800',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Postman', level: 85 },
        { name: 'Figma', level: 75 },
        { name: 'Firebase', level: 80 },
        { name: 'Cloudinary', level: 85 },
        { name: 'Vercel', level: 85 },
      ],
    },
    {
      title: 'Additional Skills',
      icon: Cloud,
      color: 'from-orange-600 to-orange-800',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      skills: [
        { name: 'Python', level: 80 },
        { name: 'Flask', level: 75 },
        { name: 'OpenCV', level: 70 },
        { name: 'GSAP', level: 75 },
        { name: 'Swiper.js', level: 80 },
        { name: 'Context API', level: 90 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Skills & Expertise</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 ${category.iconBg} rounded-lg`}>
                    <Icon className={category.iconColor} size={28} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-600 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8 text-white text-center">
            <div className="text-5xl font-bold mb-3">1+</div>
            <div className="text-xl text-blue-100">Years Experience</div>
          </div>
          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl shadow-lg p-8 text-white text-center">
            <div className="text-5xl font-bold mb-3">15+</div>
            <div className="text-xl text-green-100">Technologies</div>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl shadow-lg p-8 text-white text-center">
            <div className="text-5xl font-bold mb-3">10+</div>
            <div className="text-xl text-purple-100">Projects Built</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Competencies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'MERN Stack Development',
              'RESTful API Design',
              'State Management (Context API)',
              'Authentication & Authorization',
              'Responsive Web Design',
              'Database Design & Optimization',
              'Version Control (Git)',
              'Agile Development',
              'Payment Gateway Integration',
              'Cloud Deployment',
              'UI/UX Implementation',
              'Performance Optimization',
            ].map((competency, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-600 hover:bg-blue-50 transition-all"
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">{competency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
