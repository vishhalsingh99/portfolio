import RevealOnScroll from "../Ui/RevealOnScroll";
function About() {
  const skills = [
    "Html",
    "Css",
    "Javascript",
    "Express Js",
    "React",
    "TailwindCSS",
    "Node Js",
    "MongoDB",
    ,
  ];
  return (
    <section
      id="about"
      className="min-h-screen font-mono flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center ">
            About Me
          </h2>
          <div className="p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all ">
            <p className="text-gray-300 mb-5 text-xl">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">💼 Skills</h3>
              <div className="flex justify-center flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition "
                    key={index}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">
                📚 Education
              </h3>
              <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
                <li>
                  <strong>
                    {" "}
                    <em>BCA from Bareilly College, Mahatma Jyotiba Phule Rao University </em>{" "}
                  </strong>
                  (2022-2025)
                </li>
                <li>
                  C, C++ Web Development..
                </li>
              </ul>
            </div>
          </div>
          <div className="p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-2xl text-center font-bold mb-8">
              💻 Work Experience
            </h3>
            <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
              <li>
                <strong className="text-blue-400">
                  <em>Intern | OctaNet Service Pvt Ltd.</em>
                </strong>
                📍
                <br />
                <ul>
                  <li>
                    <p className="text-sm">• Built a To-Do App:
                      <ul>
                        <ol className="text-xs">Developed a dynamic and responsive landing page using React.js.</ol>
                      </ul>
                    </p>
                  </li>

                  <li>
                    <p className="text-sm">• Developed a Landing Page:
                      <ul>
                        <ol className="text-xs">Developed a feature-rich to-do application using React.js, enabling users to add, edit, and delete tasks..</ol>
                      </ul>
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;
