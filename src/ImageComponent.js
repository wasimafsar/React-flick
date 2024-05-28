import { useEffect, useState } from "react";
import css from "./ImageComponent.module.css";

function ImageComponent() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const data = fetch("https://api.unsplash.com/photos?page=1", {
      headers: {
        Authorization: `Client-ID zZm--WwJ9o03kDaABjwfrpitp5yoTznhM6duogN-Jqk`,
      },
    })
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <>
      <div className={css.imageList}>
        {images.map((image) => (
          <img src={image.urls.small} key={image.id} />
        ))}
      </div>
    </>
  );
}

export default ImageComponent;
