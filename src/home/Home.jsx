import React from 'react'
import style from './Home.module.css'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import myImg from './portfolio.png'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()
  const getGithub = () => {
    navigate('/contact')
  }

  return (
    <div className={style.container}>
      <div className={style.left_side}>
        <div className={style.content}>
          <h3>Hello, I am</h3>
          <h1>Zeeshan Ansari</h1>
          <h3 className={style.typed_out}>And I'm a <span>Frontend Developer</span></h3>
            {/* < */}
        </div>
        <div className={style.social}>
          <Link to="https://www.linkedin.com/in/mohd-zeeshan-ansari-544593209/" target='blank' className={style.social_icons}><FaLinkedin /></Link>
          <Link to="https://www.instagram.com/youth_assassin/" target='blank' className={style.social_icons}><GrInstagram/></Link>
          <Link to="https://github.com/Zeeshan00-7" target='blank' className={style.social_icons}><FaGithub /></Link>
        </div>
        <div className={style.btn}>
          <Link to="https://drive.google.com/file/d/1201UhCiG6rSbEkgoTEqtcFzUf8lBAst1/view?usp=sharing" target='blank'><button>Hire Me</button></Link>
          <button onClick={getGithub}>Let's Talk</button>
      </div>
      </div>
      <div className={style.right_side}>
      
            <img src={myImg} alt="profile" />
            
      </div>
    </div>
  )
}

export default Home