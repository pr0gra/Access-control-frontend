import styles from './Header.module.css'
import Link from 'next/link'

export  function Header() {
  return (
    <header className={styles["header"]}>
    <div className={styles["profile"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
      >
        <circle cx="40" cy="40" r="40" fill="#616161" />
      </svg>
      <div className={styles["profile-info"]}>
        <p className={styles["name"]}>Фамилия имя</p>
        <p className={styles["status"]}>Охранник</p>
      </div>
    </div>
    <nav className={styles["navigation"]}>
      <Link className={styles["link"]} href={"/home"}>
        Люди
      </Link>
      <Link className={styles["link"]} href={"/home"}>
        Заявки
      </Link>
    </nav>
  </header>
  )
}
