import { createClient } from "pexels";
import { useEffect, useState } from "react";

export default function Photo({ photo, setPhoto }) {
  const client = createClient(import.meta.env.VITE_API_KEY);

  const getPhoto = async () => {
    await client.collections
      .media({ id: "sn4q2si", type: "photos" })
      .then((result) => {
        const photos = photo;
        console.log(result);
        result.media.forEach((element) => {
          photos.push(element.src.landscape);
        });
        setPhoto([...photos]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPhoto();
  }, []);
}
