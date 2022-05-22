import style from './main-page.module.css'
import Header from './Components/Header/header'
import Main from './Components/Main/main'
import Footer from './Components/Footer/footer'

const Main_Page = () => {
  return (
    <div className={style.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Main_Page;
