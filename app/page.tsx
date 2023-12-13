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
    setImgSrc(null);
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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, sunt
          dicta odit cumque quia ab laboriosam, pariatur aspernatur alias
          accusantium dignissimos repudiandae fugiat quibusdam, numquam officia
          est. Voluptates quos repellendus quidem repudiandae reiciendis
          assumenda ea laborum veritatis eius commodi asperiores exercitationem
          doloremque architecto aperiam quam, laudantium maxime magni maiores!
          In ad dolores itaque id autem, deleniti voluptates nisi nulla ipsam
          saepe aperiam excepturi placeat, aliquid provident cumque rerum
          delectus accusantium ipsa nobis quis voluptatum. Ducimus eligendi
          maxime quia minima possimus quis provident voluptas, doloremque ipsam
          molestias inventore perspiciatis. Dolores nobis voluptatum, cum
          maiores, odit laboriosam doloremque mollitia beatae vel possimus,
          natus saepe ipsa tenetur voluptatibus modi laudantium quia similique
          voluptatem sequi quaerat. Adipisci doloremque reiciendis dolor,
          facilis ea libero deserunt, iste sapiente, perferendis modi
          reprehenderit. Asperiores placeat blanditiis, similique a voluptate
          perspiciatis repellendus dolorum, dicta tenetur nihil deleniti magni
          necessitatibus reiciendis totam eius ea ipsa qui animi eaque numquam
          ducimus rem cumque inventore! Praesentium amet architecto, nulla magni
          vel ab ex accusamus unde, quis cum sint ratione. Distinctio quo hic
          labore consequatur ipsam error, in, illo est saepe cum fuga eaque
          modi. Vero, molestias at, facilis obcaecati expedita suscipit
          aspernatur cupiditate nostrum dolorum commodi voluptatum! Corporis est
          praesentium eum perspiciatis mollitia laudantium blanditiis ut?
          Pariatur quae, magni, eaque cumque aliquam officia dolorum molestiae
          harum quasi, possimus qui fuga. Inventore assumenda nostrum asperiores
          nam reprehenderit iure, quae doloribus, quibusdam temporibus quos
          repellat et ea veritatis laudantium similique incidunt harum deleniti
          aliquid illo culpa perspiciatis, recusandae ex! At facere mollitia
          itaque est quo nobis amet, similique impedit suscipit cupiditate
          perspiciatis nostrum voluptatum, quam soluta! Ea, blanditiis
          reiciendis voluptatem sit mollitia, expedita dolor necessitatibus enim
          reprehenderit earum repudiandae iste, repellendus doloribus tempore
          perspiciatis placeat quisquam provident cumque maiores molestiae? Modi
          veritatis magnam, doloremque minima iure, vitae nulla sed voluptates
          ducimus sint repellendus suscipit impedit, dolorum quas sequi ipsum ad
          voluptatum quisquam! Dolorum dolores magni incidunt ipsa veniam!
          Corrupti enim deserunt molestiae temporibus dolor fugiat, excepturi,
          voluptatem veniam labore vero nesciunt a omnis. Unde repellendus,
          laudantium ipsa numquam commodi quaerat temporibus rerum quis sunt ut
          magni corporis repellat, voluptatum quas blanditiis sint quasi
          doloremque. Accusantium iure praesentium expedita animi earum quod
          obcaecati suscipit, laudantium dolorem aliquam modi eaque fugit magnam
          natus quasi doloremque in provident consequatur quo optio. Sunt fugiat
          eos, debitis recusandae, dolores aliquid praesentium cum vitae
          assumenda, minus fuga est maxime? Nobis blanditiis praesentium
          inventore sint voluptas? At ullam non voluptatibus adipisci sint nam
          magni, molestias error sapiente aliquam beatae ut sit exercitationem
          ducimus eveniet minima architecto officia facilis atque iste assumenda
          expedita doloribus? Corrupti modi ut nisi cumque! Harum, sapiente
          doloribus quam alias facilis sint expedita blanditiis ducimus ratione,
          reiciendis ad autem corrupti? Quis, a veritatis tempore eligendi
          voluptatibus quo maiores ratione sunt architecto molestiae laboriosam
          unde repellendus est quas error modi nesciunt, repudiandae dolorum
          atque voluptate illo doloremque ducimus alias dolores? Tempora quis
          illo cum laborum, at non delectus vero quod maiores odio molestias
          veritatis nostrum magnam obcaecati totam nobis, saepe incidunt, modi
          repellat. Saepe culpa maiores velit natus corporis sit. Aliquid,
          nostrum? Pariatur, culpa commodi mollitia esse optio corporis aliquam
          obcaecati minima! Accusamus similique assumenda amet ipsa eaque harum
          sunt deserunt nemo dicta reprehenderit nulla aperiam dolorum
          doloribus, tempore asperiores quam voluptas, laboriosam qui architecto
          autem illo eius obcaecati? Debitis magnam pariatur neque corporis quis
          fuga esse rerum deleniti qui, eaque doloremque culpa. Quaerat ipsum
          odit mollitia illum, non quam quis eaque iure molestiae porro ullam
          alias quisquam magnam doloremque ea amet ipsam deserunt illo
          voluptates dolore saepe optio voluptatem. Iusto quod aspernatur fuga
          libero inventore perferendis optio tempore ipsa nostrum molestias quos
          nam velit odit eligendi consequuntur eaque tenetur reprehenderit
          dolorem ad, omnis dolorum! Nulla ducimus nisi reiciendis et maiores
          asperiores repellat accusamus consequuntur quasi aut, quos iste odit
          fugiat commodi sunt quas nesciunt molestias laborum, vitae aspernatur
          itaque! Explicabo perferendis eum expedita porro ipsum nisi
          necessitatibus, quia soluta repellendus sequi deleniti, neque
          perspiciatis amet dolore, vero autem eos. Soluta molestiae obcaecati
          voluptatibus aut debitis! Perspiciatis libero nihil atque nesciunt
          ipsum quo harum voluptas neque earum, quis ipsa labore rem assumenda
          ex quod cumque eius ea magni voluptatem expedita laboriosam vitae
          fuga. Voluptates qui magnam assumenda sequi laboriosam ducimus nihil
          saepe, incidunt aut omnis laborum fuga rerum at non. Illum deserunt
          perspiciatis dolorum voluptatum. Illum, quasi? Neque, eveniet quaerat
          odit cumque aspernatur nostrum reiciendis ratione ducimus, nobis ab
          deserunt soluta. Nihil illum voluptas tempora odit hic necessitatibus
          ab mollitia vel illo dignissimos fuga suscipit ipsa, earum ratione
          veritatis culpa voluptatibus ea in porro repellat ipsam repudiandae.
          Perferendis aspernatur fuga maxime harum quasi nesciunt error culpa
          modi iusto id. Velit cumque eos laborum hic unde necessitatibus
          magnam? Nam maiores doloremque nisi, officiis, officia facere quae
          nesciunt consequuntur quos nulla libero obcaecati excepturi, vel
          molestias? Commodi repellat eligendi nemo maiores veritatis vero hic
          unde nostrum, corporis nam laudantium amet recusandae, sint molestias
          vel explicabo quo. Itaque corporis recusandae ipsum aspernatur. Quas
          voluptate dolor error, accusamus delectus numquam nostrum quibusdam at
          consequuntur? Ut corporis unde distinctio, iusto neque aut. Nemo,
          reiciendis excepturi eligendi dignissimos minus error natus repellat
          soluta dolor velit aspernatur, obcaecati quos cum vitae aperiam
          recusandae consequatur laborum doloribus, mollitia voluptatibus
          aliquid. Recusandae omnis a, officia nostrum ea quos tenetur
          blanditiis aliquid necessitatibus cupiditate fugiat laborum!
          Perferendis quis ducimus distinctio voluptas tempora quas dignissimos
          aliquid vero officia provident amet odio temporibus, obcaecati rerum
          recusandae adipisci dolore non quibusdam quod praesentium quaerat
          laboriosam. Accusantium perspiciatis dolor libero, voluptas, animi
          dolores sapiente officia consequatur dignissimos eum autem deleniti
          incidunt iusto ad! Illum, labore. Libero optio quia deserunt
          architecto, quam quo laudantium doloribus nostrum perspiciatis natus
          sunt culpa eum cupiditate ratione id eaque minima impedit sequi
          expedita ex corrupti. Possimus similique, cupiditate sapiente sequi
          nobis laboriosam! Consequuntur vitae exercitationem neque aspernatur
          assumenda nemo, tempora ut. Voluptatem inventore magni, doloremque,
          quos tempore assumenda omnis necessitatibus numquam recusandae animi
          ea praesentium vitae, architecto voluptate saepe eum accusantium
          sequi. Eligendi nisi quasi, provident ab nostrum aperiam ducimus
          corrupti accusamus. Fugiat error ipsum velit doloribus, doloremque est
          reiciendis mollitia cum porro laborum libero magni beatae pariatur?
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
        </section>
      </div>
    </main>
  );
}
