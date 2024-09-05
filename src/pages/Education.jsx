import React from 'react';

function Education() {
  const education = [
    {
      year: "2007-2022",
      degree: "Secondary and Higher Secondary",
      institution: "Ichapur N.C High School",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur ut lorem vitae ultricies. Integer porta, libero sit amet pretium lobortis.",
    },
    {
      year: "2022 - 2026",
      degree: "Bachelor Degree",
      institution: "MAKAUT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur ut lorem vitae ultricies. Integer porta, libero sit amet pretium lobortis.",
    },
    {
      year: "2027-2029",
      degree: "Master Degree",
      institution: "IIT-Delhi",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur ut lorem vitae ultricies. Integer porta, libero sit amet pretium lobortis.",
    },
  ];

  const experience = [
    {
      year: "2028 - 2030",
      role: "Jr. UI UX Designer",
      company: "Fiverr",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur ut lorem vitae ultricies. Integer porta, libero sit amet pretium lobortis.",
    },
    {
      year: "2031 - 2033",
      role: "Web Designer",
      company: "Freelancer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur ut lorem vitae ultricies. Integer porta, libero sit amet pretium lobortis.",
    },
    {
      year: "2034 - Present",
      role: "Web Developer",
      company: "Templatemonster",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur ut lorem vitae ultricies. Integer porta, libero sit amet pretium lobortis.",
    },
  ];

  return (
    <section className="bg-gray-100 text-yellow-800 py-16">
      {/* Education Section */}
      <div className="container mx-auto px-5 mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">My Education</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full font-semibold text-sm">
                  {edu.year}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
              <p className="text-sm font-light text-gray-400 mb-4">
                {edu.institution}
              </p>
              <p className="text-gray-400">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-10">My Experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experience.map((exp, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full font-semibold text-sm">
                  {exp.year}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
              <p className="text-sm font-light text-gray-400 mb-4">
                {exp.company}
              </p>
              <p className="text-gray-400">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
