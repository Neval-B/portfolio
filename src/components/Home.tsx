import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaAndroid,
  FaTerminal,
  FaTasks,
  FaProjectDiagram,
  FaNetworkWired
} from "react-icons/fa";

import {
  SiCplusplus,
  SiJavascript,
  SiPostman,
  SiSwagger,
  SiMysql,
  SiSpring,
  SiReact,
  SiTypescript
} from "react-icons/si";

import "./Home.css";

function Home() {

const skills = [

{ icon: <FaPython />, name: "Python" },
{ icon: <FaJava />, name: "Java" },
{ icon: <SiCplusplus />, name: "C++" },
{ icon: <SiJavascript />, name: "JavaScript" },
{ icon: <SiReact />, name: "React" },
{ icon: <SiTypescript />, name: "TypeScript" },
{ icon: <FaHtml5 />, name: "HTML" },
{ icon: <FaCss3Alt />, name: "CSS" },
{ icon: <FaNetworkWired />, name: "REST APIs" },
{ icon: <SiSpring />, name: "Spring MVC" },
{ icon: <SiPostman />, name: "Postman" },
{ icon: <SiSwagger />, name: "Swagger" },
{ icon: <FaAndroid />, name: "Android Studio" },
{ icon: <SiMysql />, name: "SQL" },
{ icon: <FaGitAlt />, name: "Git" },
{ icon: <FaTasks />, name: "Agile" },
{ icon: <FaProjectDiagram />, name: "SDLC" },
{ icon: <FaTerminal />, name: "Shell Scripting" }

];

return (

<section id="home" className="home">

<div>

<p className="portfolio-text">
PORTFOLIO
</p>

<h1>
Hi, I'm <span>Neval Babu</span>
</h1>

<h2>
Computer Science Graduate
</h2>

<p className="description">
As a driven and enthusiastic Computer Science graduate from the University of Leicester, I have cultivated a strong foundation in software development, problem-solving and collaborative teamwork. My passion for technology grew through academic projects, practical development work and hands-on experience building software applications.
</p>

<div className="buttons">

<div className="buttons">

  <a href="#projects">
    Projects
  </a>

  <a
    href="/Neval_Babu_CV.pdf"
    target="_blank"
    rel="noreferrer"
  >
    View CV
  </a>

  <a href="mailto:Neval271@gmail.com">
    Contact Me
  </a>

</div>

</div>

<div className="skills-title">

<h3>
Tech Stack & Skills
</h3>

</div>

<div className="skills">

{
skills.map((skill)=>(

<div
className="card"
key={skill.name}
>

<span>

{skill.icon}

</span>

<p>

{skill.name}

</p>

</div>

))
}

</div>

</div>

</section>

)

}

export default Home;