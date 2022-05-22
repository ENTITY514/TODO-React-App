import style from "./todo-item.module.css"
import './todo-item-style.css'
import Icon from './Icon/icon'

const TODO_Item = ({ item, removeTask }) => {
  return (
      <div key={item.id} className="todo_container">
        <div className={style.text}>{item.work_text}</div>
        <div className={style.done} onClick={() => { removeTask(item.id) }}><Icon icon_src="icons/check.png" /></div>
        <div className={style.delete} onClick={() => { removeTask(item.id) }}><Icon icon_src="icons/remove.png" /></div>
      </div>
  )
}

export default TODO_Item;
