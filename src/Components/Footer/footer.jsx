import style from "./footer.module.css"
import Icon from './Components/Icon/icon'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className={style.container}>
      <div className={style.wrapper}>
        <Link to="/About" className={style.link} >О проекте</Link>
        <div className={style.icon_wrapper}>
          <a target="_blank" className={style.link} href="https://github.com/ENTITY514/TODO-React-App">GitHub</a>
          <Icon icon_src={"/icons/github.png"} />
        </div>
      </div>
    </footer>
  )
}

export default Footer;
