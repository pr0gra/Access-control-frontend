import { TestUploadImage } from "./components/Header/testUploadImage/TestUploadImage";
import styles from "./page.module.css";

export default function Home() {
  const peopleFromCamera = ["Иван Иванов", "Петя Петров", "Денис Денисов"];
  let accessControlPercent = Math.floor(Math.random() * 100);
  return (
    <main className={styles["main"]}>
      <div className={styles["sections-container"]}>
        <section className={styles["people-table"]}>
          {peopleFromCamera.map((person, index) => {
            return (
              <div className={styles["person"]}>
                <div className={styles["time"]}>
                  <p className={styles["time-text"]}>
                    {new Date().toDateString()}
                  </p>
                </div>
                <div className={styles["access-control-percent"]}>
                  <p
                    className={
                      styles[
                        `access-control-percent-text ${
                          accessControlPercent < 90 && accessControlPercent > 50
                            ? `access-control-percent-text-yellow`
                            : `access-control-percent-text-red`
                        }`
                      ]
                    }
                  >
                    {Math.floor(Math.random() * 100)}
                  </p>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                >
                  <circle cx="40" cy="40" r="40" fill="#616161" />
                </svg>
                <div className={styles["person-fullname"]}>
                  <p className={styles["person-fullname-text"]}>{person}</p>
                </div>
              </div>
            );
          })}
        </section>
        <section className={styles["camera"]}>
          <h1 className={styles["title"]}>Камера</h1>
          <div className={styles["camera-display"]}></div>
          <div className={styles["percent"]}>Распознан: %</div>
          <div className={styles["more-info"]}>
            <div className={styles["image"]}></div>
            <p className={styles["more-info-text"]}>фио</p>
          </div>
          <TestUploadImage />
        </section>
      </div>
    </main>
  );
}
