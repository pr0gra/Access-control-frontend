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
      "https://46d0-2a03-d000-5004-906e-e400-f2c7-da3d-7812.ngrok-free.app/visitors/identify/",
      {
        method: "POST",
        headers: { mode: "no-cors" },
        body: formData,
      }
    );
    const data = await response.json();
    console.log(data);
    setAccessAnalysData((prev) => [...prev, data]);
    setCurrentPersonData(data);
    setImgSrc(null);
  }

  useEffect(()=>{
    setInterval(()=>{
      const data = fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setTEST((prev)=>[...prev, json]))
      
    }, 4000)
  },[
  ])
  const [TEST, setTEST] = useState([])
  console.log(TEST)
  const [imgSrc, setImgSrc] = useState(null);
  const [accessAnalysData, setAccessAnalysData] = useState([]);
  const [currentPersonData, setCurrentPersonData] = useState({});
  useEffect(() => {
    if (imgSrc === null) {
      return;
    }

    getImageAccessAnalysFromCamera();
  }, [imgSrc]);
  console.log(currentPersonData);
  return (
    <main className={styles["main"]}>
      <div className={styles["sections-container"]}>
        <section className={styles["people-table"]}>
          {/* {accessAnalysData.map((person, index) => {
            if (person?.isFace === false) {
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

                <img
                  className="rounded-full h-[83px] w-[83px]"
                  src={`https://46d0-2a03-d000-5004-906e-e400-f2c7-da3d-7812.ngrok-free.app${currentPersonData?.visitor?.faceImage}`}
                  alt=""
                />
                <div className={styles["person-fullname"]}>
                  <p className={styles["person-fullname-text"]}>
                    {`${person.visitor.lastName} ${person.visitor.firstName} ${person.visitor.patronymic}`}
                  </p>
                </div>
              </div>
            );
          })} */}
          {TEST.map((elem, id)=>{
            return <div className="h-[250px]">
              elem.title {id}
            </div>
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
          <div className={styles["percent"]}>
            Распознан:{" "}
            {currentPersonData?.visitor &&
              Math.floor(currentPersonData?.coeff * 100)}{" "}
            %
          </div>
          <div className={styles["more-info"]}>
            <div className={styles["image"]}>
              {currentPersonData?.visitor && (
                <img
                  src={`https://46d0-2a03-d000-5004-906e-e400-f2c7-da3d-7812.ngrok-free.app${currentPersonData?.visitor?.faceImage}`}
                  alt=""
                />
              )}
            </div>
            {currentPersonData?.visitor && (
              <p className={styles["more-info-text"]}>
                {`${currentPersonData?.visitor?.lastName} ${currentPersonData?.visitor?.firstName} ${currentPersonData?.visitor?.patronymic}`}
              </p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
