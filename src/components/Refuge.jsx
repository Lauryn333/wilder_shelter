import "../App.css";
import { useLocation } from "react-router-dom";
import "../styles/Refuge.css";

function Refuge() {
  const location = useLocation();
  const { unRefuge } = location.state;

  const coordinates = unRefuge?.geometry?.coordinates;

  const imgs = [
    {
      src: "https://media.istockphoto.com/id/1135078485/fr/photo/paysage-montagnard-idyllique-dans-les-alpes-chalet-de-montagne-prairies-et-ciel-bleu.jpg?s=612x612&w=0&k=20&c=t5xsgpyT9wxhZao_CFB0ZIHo2qmBbIUyYb529-0IiRs=",
    },
    {
      src: "https://cdn.pixabay.com/photo/2022/10/28/23/51/the-alps-7554145_1280.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/11/21/10/18/dachstein-2967796_1280.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2020/04/23/20/21/mountain-5083927_1280.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2012/10/06/04/28/babenstuber-hut-60060_1280.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2012/10/09/14/29/allgau-60505_1280.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/11/21/10/18/dachstein-2967796_1280.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2021/06/06/14/01/alps-6315469_1280.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2023/06/01/15/14/mountain-8033774_640.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/03/27/18/53/mountain-1283613_1280.jpg",
    },
  ];

  if (!coordinates) {
    return <div>chargement....</div>;
  }

  function getRandomInt() {
    return Math.floor(Math.random() * 10);
  }

  return (
    <div className="container-refuge">
      <div key={unRefuge.id} className="card-refuge">
        <h1 key={unRefuge.id}>{unRefuge?.properties?.nom}</h1>
        <a href={unRefuge?.properties?.lien}>{unRefuge?.properties?.lien}</a>
        <img src={imgs[getRandomInt()].src}></img>
        <p>
          {unRefuge?.properties?.places?.nom} :{" "}
          {unRefuge?.properties?.places?.valeur}
        </p>
      </div>
    </div>
  );
}
export default Refuge;
