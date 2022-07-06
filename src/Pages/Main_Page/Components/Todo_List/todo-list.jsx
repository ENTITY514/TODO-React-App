import style from "./todo-list.module.css"
import './Components/Todo-item/todo-item-style.css'
import TODO_Item from './Components/Todo-item/todo-item'
import TODO_Form from './Components/TODO_Form/todo-form'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { useState } from 'react'

const Todo_List = () => {
  let todo = [
    { id: Math.random().toString().substring(2, 9), work_text: "Создать верстку для todo react app" },
    { id: Math.random().toString().substring(2, 9), work_text: "Написать структуру проекта" },
    { id: Math.random().toString().substring(2, 9), work_text: "Сделать визуальные компоненты" },
    { id: Math.random().toString().substring(2, 9), work_text: "Добавить функционал" },
    { id: Math.random().toString().substring(2, 9), work_text: "Добавить анимацию для элементов" },
    { id: Math.random().toString().substring(2, 9), work_text: "Добавить работу локального хранилища" },
  ]

  if (localStorage.getItem("User") != "True") {
    localStorage.setItem("User", "True")
    for (let i = 0; i < todo.length; i++) {
      localStorage.setItem(todo[i].id, todo[i].work_text)
    }
  }

  let initial_state = [];
  for (let i = 0; i < localStorage.length; i++) {
    let id = localStorage.key(i)
    if (id != "User") {
      initial_state.push({
        id: id,
        work_text: localStorage.getItem(id)
      })
    }
  }


  let [todos, set_todos] = useState(initial_state)

  let addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString().substring(2, 9),
        work_text: userInput,
      }
      localStorage.setItem(newItem.id, newItem.work_text)
      set_todos([...todos, newItem])
    }
  }

  let removeTask = (id) => {
    localStorage.removeItem(id)
    set_todos([...todos.filter((todo) => todo.id !== id)])
  }


  return (
    <main className={style.container}>
      <TODO_Form addTask={addTask} />
      <TransitionGroup >
        {todos.map((item) => {
          return (
            <CSSTransition
              key={item.id}
              timeout={580}
              classNames={"todo_container"}
            >
              <TODO_Item item={item} removeTask={removeTask} />
            </CSSTransition>
          )
        })}
      </TransitionGroup >
    </main>
  )
}

export default Todo_List;
