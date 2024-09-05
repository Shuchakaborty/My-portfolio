import React from 'react';

function Skill() {
  const skill = [
    { title: "Web Design", description: "In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque.", icon: "🖥️" },
    { title: "Web Development", description: "In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque.", icon: "📦" },
    { title: "UI/UX Design", description: "In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque.", icon: "🛠️" },
    { title: "App Design & Develop", description: "In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque.", icon: "💎" },
    { title: "Graphic Design", description: "In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque.", icon: "🎨" },
    { title: "SEO Marketing", description: "In nisi tortor, consequat eu semper ut, consequat in massa. Maecenas at odio a felis commodo pulvinar quis eu neque.", icon: "📢" },
  ];

  return (
    <section className="bg-gray-100 text-yellow-800 py-16">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-4xl font-semibold mb-4">My skill</h2>
        <p className="max-w-xl mx-auto mb-8">
          Etiam suscipit ante at sem facilisis, id sagittis nunc aliquet. Vivamus sodales elementum pharetra. Cras dignissim justo eu accumsan vulputate.
        </p>
        <div className="border-b-2 border-yellow-500 w-16 mx-auto mb-8"></div>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
        {skill.map((skill, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg text-center shadow-lg">
            <div className="text-5xl mb-4">{skill.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-gray-400">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
