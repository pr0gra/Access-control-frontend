"use client";
import { useEffect, useState } from "react";
import { TestUploadImage } from "./components/TestUploadImage";
import { WebcamComponent } from "./components/webcamComponent";
import styles from "./page.module.css";

function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[arr.length - 1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}

export default function Home() {
  async function getImageAccessAnalysFromCamera() {
    let file = dataURLtoFile(imgSrc, "image");
    let formData = new FormData();
    formData.append("image", file);
    const response = await fetch(
      "https://8a72-193-143-66-46.ngrok-free.app/visitors/identify/",
      {
        method: "POST",
        headers: { mode: "no-cors" },
        body: formData,
      }
    );
    const data = await response.json();
    console.log(data);
    setAccessAnalysData((prev) => [...prev, data]);
    setImgSrc(null)
  }

  const [imgSrc, setImgSrc] = useState(null);
  const [accessAnalysData, setAccessAnalysData] = useState([]);

  useEffect(() => {
    if (imgSrc === null) {
      return;
    }

    getImageAccessAnalysFromCamera();
  }, [imgSrc]);

  return (
    <main className={styles["main"]}>
      <div className={styles["sections-container"]}>
        <section className={styles["people-table"]}>
          <h1 className={styles["prople-table-title"]}>Таблица</h1>
          {accessAnalysData.map((person, index) => {
            if (person?.is_face === false) {
              return;
            }
            return (
              <div key={index} className={styles["person"]}>
                <div className={styles["time"]}>
                  <p className={styles["time-text"]}>
                    {new Date().toDateString()}
                  </p>
                </div>
                <div className={styles["access-control-percent"]}>
                  <p className={styles[`access-control-percent-text`]}>
                    {Math.floor(person.coeff * 100) + " %"}
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
                  <p
                    className={styles["person-fullname-text"]}
                  >{`${person.visitor.last_name} ${person.visitor.first_name} ${person.visitor.patronymic}`}</p>
                </div>
              </div>
            );
          })}
        </section>
        <section className={styles["camera"]}>
          <h1 className={styles["title"]}>Камера</h1>
          <div className={styles["camera-display"]}>
            <WebcamComponent
              accessAnalysData={accessAnalysData}
              imgSrc={imgSrc}
              setImgSrc={setImgSrc}
            />
          </div>
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
