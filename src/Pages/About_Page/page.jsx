import style from './page.module.css'

const AboutPage = () => {
  return (
    <div className={style.container}>
      <p>Данный проект был создан как учебный, для проверки своих знаний по работе с React и освоения новых технологий. Само приложение является простым списком задач,
        которые пользователь может добавлять. Сами задачи записываются в локальное хранилище браузера. При первом использовании пользователь увидит мои задачи записанные
        для данного проекта.</p>
      <p>Вот технологии, которые задействованы в данном проекте:</p>
      <ul>
        <li>React - библиотека, на которой написано дфнное веб-приложение;</li>
        <li>React-Transition-Group - пакет для создания анимаций перехода страниц и добавления.удаления задачи;</li>
        <li>React-Router-DOM - пакет для маршрутизации страницы</li>
        <li>GitHub - для хранения проекта;</li>
        <li>Git - для контроля версий;</li>
        <li>Vercel - для хостинга проекта.</li>
      </ul>
      <p>Проект был создан с использованием команды create-react-app</p>
    </div>
  )
}

export default AboutPage;
