import React, { useEffect } from 'react'
import indexingDelay from '../../utils/indexingDelay'
import styles from './Menu.module.scss'

const menuLinks = [
  {
    title: 'about',
    forPage: 2,
  },
  {
    title: 'our app',
    forPage: 5,
  },
  {
    title: 'our values',
    forPage: 7,
  },
  {
    title: 'news',
    forPage: 9,
  },
  {
    title: 'hiring',
    forPage: 10,
  },
  {
    title: 'discuss',
    forPage: 4,
  },
]

const Menu = ({ menuActive, setMenuActive }) => {
  useEffect(() => {
    const menuLinks = document
      .querySelector(`.${styles.menuList}`)
      .querySelectorAll('li')

    indexingDelay(menuLinks, 'animation')
  })

  useEffect(() => {
    const menu = document.querySelector(`.${styles.menu}`)
    if (menuActive) {
      menu.classList.remove(`out`)
      menu.classList.add(`active`)
    } else if (!menuActive) {
      menu.classList.remove('active')
      menu.classList.add('out')
    }
  }, [menuActive])

  return (
    <menu className={`menu ${styles.menu}`}>
      <h5 className={styles.menuLabel}>Menu</h5>
      <div className={styles.wrapper}>
        <div className={styles.leftSide}>
          <h3>
            <a href="mailto:info@nostra2b">info@nostra2b</a>
          </h3>
          <h5>nostra</h5>
        </div>
        <ul className={styles.menuList}>
          {menuLinks.map((link) => (
            <li
              onClick={(e) => {
                setMenuActive(false)
                setTimeout(
                  () =>
                    window.fullpage_api.moveTo(
                      e.target.closest('li').dataset.page
                    ),
                  500
                )
              }}
              key={link.title}
              data-page={link.forPage}
            >
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.7"
                  d="M3 3L39 39M39 39V14.4545M39 39H14.4545"
                  stroke="#F6F6F6"
                  strokeWidth="4.90909"
                  strokeLinecap="round"
                />
              </svg>
              <h1>{link.title}</h1>
            </li>
          ))}
        </ul>
      </div>
    </menu>
  )
}

export default Menu
