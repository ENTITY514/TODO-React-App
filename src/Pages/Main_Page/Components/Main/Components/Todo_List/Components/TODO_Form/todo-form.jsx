import { useState } from "react"
import style from "./todo-form.module.css"
import Icon from './Icon/icon'

const TODO_Form = ({ addTask }) => {
  let [userInput, set_userInput] = useState("")

  let submit = (e) => {
    e.preventDefault()
    addTask(userInput)
    set_userInput("")
  }

  let handleChange = (e) => {
    set_userInput(e.currentTarget.value)
  }

  let handleKeyPress = (e) => {
    if (e.key === "Enter") {
      submit(e)
    }
  }

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={submit}>
        <input
          className={style.inp}
          value={userInput}
          type="text"
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder="Введите текст..." />
        <button className={style.btn}><Icon icon_src="icons/tab.png" /></button>
      </form>
    </div>
  )
}

export default TODO_Form;
