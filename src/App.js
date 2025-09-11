import './App.css';
import './index.css';
import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { motion} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function App() {
  const el = useRef(null);
  const [slide,setslide] = useState(false)

  const toggle = ()=>{
    setslide((prev)=>!prev)
  }
const closeMenu = () => setslide(false);

const scrollToSection = (e, id) => {
  e.preventDefault();          // stop default jump / new page
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  closeMenu();
};


  useEffect(()=>{
      let typed = new Typed(el.current,{
        strings:["Developer","Video Editer"],
        typeSpeed:100,
        backSpeed:100,
        backDelay:1000,
        startDelay:1000,
        loop:true
      })

      return () => {
      typed.destroy();
    };
  },[])
  return (
    <>
       <nav id='nav'>
        <img src='assets/RD logo.png' alt='My Logo'></img>
        
        <div id='links'>
            <a href="#home" style={{ margin: "0 10px" }} onClick={(e) => scrollToSection(e, "home")}>Home</a>
            <a href="#about" style={{ margin: "0 10px" }} onClick={(e) => scrollToSection(e, "about")}>About</a>
            <a href="#Project" style={{ margin: "0 10px" }} onClick={(e) => scrollToSection(e, "Project")}>Project</a>
            <a href="#contact" style={{ margin: "0 10px" }} onClick={(e) => scrollToSection(e, "contact")}>Contact</a>
        </div>

        <a className='download' href='assets/Rohit CV.pdf' download="Rohit CV.pdf">
          <button className='CV'>Download CV</button>
        </a>
        

      </nav>
 
    {/* Nav for mobile Screens */}

       <nav id='nav2'>
          <img src='assets/RD logo.png' alt='My Logo'></img>
           <button onClick={toggle}><FontAwesomeIcon icon={slide ? faTimes : faBars}></FontAwesomeIcon> </button>
       </nav>

        {/* Overlay that closes menu on click */}
      {slide && <motion.div initial={{opacity:0}} animate={{opacity:1}}
      exit={{opacity:0}} transition={{duration:0.5}} className="overlay show"/>}

<motion.div id='slider' initial={{x:'-50%'}}
                       animate={{x:slide ? "0%" : "-50%"}}
                       transition={{ type: "tween", duration: 0.3 }}
>

          <div id='slide'>
                <div id='links'>
            <a onClick={(e) => scrollToSection(e, "home")} href="#home" style={{ margin: "0 10px" }}>Home</a>
            <a onClick={(e) => scrollToSection(e, "about")} href="#about" style={{ margin: "0 10px" }}>About</a>
            <a onClick={(e) => scrollToSection(e, "Project")} href="#Project" style={{ margin: "0 10px" }}>Project</a>
            <a onClick={(e) => scrollToSection(e, "contact")} href="#contact" style={{ margin: "0 10px" }}>Contact</a>
                </div>

            <a className='download' href='assets/Rohit CV.pdf'      download="Rohit CV.pdf">
                 <button className='CV'>Download CV</button>
            </a>

          </div>
    
</motion.div>

      {/* Sections */}

     {/*Home section for avtar and discription */}

      <motion.div initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 , ease:"easeInOut"}}
        viewport={{ once: false, amount: 0.3 }} 
         id="home">
         <div id='text'>
          
          <div className='name'><h4>Rohit Dogra</h4></div>
           
          <div id='type'><h1>I'm &nbsp;</h1><h1 id='h1' ref={el}></h1></div>
            
            <div id='dis'>
              <p>
                 I’m a MERN stack developer and video editor with a passion for creating websites and apps using MongoDB, Express, React, and Node.js.
              </p>
              </div>

              <div id='btn'>
                  <a className='download' href='assets/Rohit CV.pdf' download="Rohit CV.pdf">
                     <button className='CV'>Download CV</button>
                 </a> 
              </div>

              <div className='social'>
                <a href='https://www.facebook.com/rohit.dogra.560' style={{marginLeft:"0px"}}><FontAwesomeIcon className='brand' icon={faFacebook}></FontAwesomeIcon></a>
                  <a href='https://github.com/Dograrohit?tab=repositories'><FontAwesomeIcon className='brand' icon={faGithub}></FontAwesomeIcon></a>
                  <a href='https://www.instagram.com/rohit.dogra777/'><FontAwesomeIcon className='brand' icon={faInstagram}></FontAwesomeIcon></a>
                  <a href='https://www.linkedin.com/in/rohit-dogra-a40ba334b/'><FontAwesomeIcon className='brand' icon={faLinkedinIn}></FontAwesomeIcon></a>
              </div>

         </div>

         <div id='avtar'>
            <motion.img animate={{borderRadius:[
      "45% 55% 55% 45% / 55% 45% 55% 45%",
      "50% 45% 50% 45% / 45% 55% 45% 55%",
      "45% 55% 55% 45% / 55% 45% 55% 45%",
    ],y:[0,-20,0]}}
                        transition={{duration:10,repeat:Infinity,ease:"easeInOut"}}
            src='assets/Myphoto.jpg'></motion.img>
         </div>

      </motion.div>

     
     {/* 👇 this about section for about me and my skills */}

      <motion.div initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease:"easeInOut"}}
        viewport={{ once: false, amount: 0.3 }}  id="about">

        <div id='about-me'>
             
             <motion.div animate={{borderRadius:["35% 45% 35% 45% / 45% 35% 45% 35%",
              "45% 35% 45% 35% / 35% 45% 35% 45%",
              "38% 48% 38% 48% / 48% 38% 48% 38%",
              "42% 32% 42% 32% / 32% 42% 32% 42%",
              "35% 45% 35% 45% / 45% 35% 45% 35%"]}} transition={{duration:10,repeat:Infinity,ease:"easeInOut"}} id='about-box'>
                  <h2>My Introduction</h2>
                 <p>I’m a MERN stack developer and video editor with a passion for creating websites and apps using MongoDB, Express, React, and Node.js. Alongside coding, I enjoy editing videos and bringing creative ideas to life through visuals. Always learning and improving, I love working on projects that combine both tech and creativity.</p>
                 
                <a className='download' href='assets/Rohit CV.pdf' download="Rohit CV.pdf">
                   <button className='CV'>Download CV</button>
               </a>
             </motion.div>
        </div>

        <div id='skills'>

            <div id='skills-set'>
                 
                 <ul>
                    <label>front-end</label>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React.js</li>
                 </ul>

                 <ul>
                    <label>Back-end</label>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                 </ul>

                 <ul>
                    <label>Video-Editing</label>
                    <li>Adobe Premiere pro</li>
                 </ul>

            </div>

        </div>

      </motion.div>

      {/* 👇 This section is for Showing projects i made */}

      <motion.div initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease:"easeInOut"}}
        viewport={{ once: false, amount: 0.3 }}  id="Project" >

          <h1>Projects</h1>

          <div id='main'>
                <div className='p1'>
                  <a href='https://to-do-list-frontend-cv25.onrender.com'>
                     <video autoPlay muted loop playsInline><source src='assets/To-Do-App-project.mp4' type='video/mp4'></source></video>
                 </a>
                   
                   <h2>To-Do List using Mern Stack</h2>
                </div>
                <div className='p1'>
                  <a href='https://wheather-app-yx5h.onrender.com'>
                      <video autoPlay muted loop playsInline><source src='assets/Weather App - Google Chrome 2025-09-09 14-54-08.mp4' type='video/mp4'></source></video>
                  </a>
                  
                   <h2>Weather-App using React and API</h2>
                </div>
                
          </div>
          

      </motion.div>

      {/* 👇 this section is for links and contact to connect with me */}

      <motion.div initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease:"easeInOut"}}
        viewport={{ once: false, amount: 0.3 }} id="contact" >
            
             <div id='contact-box'>
                  <div id='text'>
                     <h2>Find Me</h2>
                     <h3>Name: Rohit Dogra</h3>
                     <h3>Email: sastanoobie5@gmail.com </h3>
                     <h3>Tel: 8800360161</h3>
                     
                  </div>
             </div>
      </motion.div>

      <footer>
           <div id='footer-text'>
                <h3>ROHIT DOGRA</h3>

                <div id='nav-footer'>
                    <a onClick={(e) => scrollToSection(e, "home")} href="#home" style={{ margin: "0 10px" }}>Home</a>
                    <a onClick={(e) => scrollToSection(e, "about")} href="#about" style={{ margin: "0 10px" }}>About</a>
                    <a onClick={(e) => scrollToSection(e, "Project")} href="#Project" style={{ margin: "0 10px" }}>Project</a>
                    <a onClick={(e) => scrollToSection(e, "contact")} href="#contact" style={{ margin: "0 10px" }}>Contact</a>
                </div>

                <div id='links'>
                   <a href='https://www.facebook.com/rohit.dogra.560' style={{marginLeft:"0px"}}><FontAwesomeIcon className='brand' icon={faFacebook}></FontAwesomeIcon></a>
                  <a href='https://github.com/Dograrohit?tab=repositories'><FontAwesomeIcon className='brand' icon={faGithub}></FontAwesomeIcon></a>
                  <a href='https://www.instagram.com/rohit.dogra777/'><FontAwesomeIcon className='brand' icon={faInstagram}></FontAwesomeIcon></a>
                  <a href='https://www.linkedin.com/in/rohit-dogra-a40ba334b/'><FontAwesomeIcon className='brand' icon={faLinkedinIn}></FontAwesomeIcon></a>
                </div>

                <h4>Copyright © <a id='back' href="#home">ROHIT DOGRA</a> - All rights reserved</h4>

           </div>
      </footer>

    </>
  );
}

export default App;
