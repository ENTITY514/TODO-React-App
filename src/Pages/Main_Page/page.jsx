import style from "./page.module.css"
import Todo_List from './Components/Todo_List/todo-list'

const MainPage = () => {
  return (
    <main className={style.container}>
      <Todo_List />
    </main>
  )
}

export default MainPage;
