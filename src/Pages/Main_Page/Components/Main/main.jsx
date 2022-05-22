import style from "./main.module.css"
import Todo_List from './Components/Todo_List/todo-list'

const Main = () => {
  return (
    <main className={style.container}>
      <Todo_List />
    </main>
  )
}

export default Main;
