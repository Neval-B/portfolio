import {
  FaJava,
  FaPython,
  FaReact,
  FaGitAlt
} from "react-icons/fa";

import {
  SiTypescript,
  SiMysql
} from "react-icons/si";

import "./Home.css";

function Home() {

const skills = [
{icon:<FaJava/>,name:"Java"},
{icon:<FaPython/>,name:"Python"},
{icon:<FaReact/>,name:"React"},
{icon:<SiTypescript/>,name:"TypeScript"},
{icon:<SiMysql/>,name:"SQL"},
{icon:<FaGitAlt/>,name:"Git"}
]

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
As a driven and enthusiastic Computer Science student at the University of Leicester, I have
cultivated a strong foundation in software development, problem-solving, and collaborative
teamwork. My passion for technology stems from an early interest in coding, which has since
grown through academic projects, industry-oriented assignments, and practical work
experiences. 
</p>

<div className="buttons">
<a href="#projects">Projects</a>
<a href="#contact">Contact Me</a>
</div>

<div className="skills">

{
skills.map((skill)=>(

<div className="card">

{skill.icon}
<p>{skill.name}</p>

</div>

))
}

</div>

</div>

</section>

)

}

export default Home