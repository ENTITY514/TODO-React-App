import style from "./header.module.css"

const Header = () => {
  return (
    <header className={style.container}>
      <div className={style.app_name}>TODO React app</div>
    </header>
  )
}

export default Header;
