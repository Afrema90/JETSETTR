import React, { useState } from 'react';
import Axios from 'axios';
import { Image } from 'cloudinary-react';
import './Home.css';

function Home() {
  const [imagesSelected, setImagesSelected] = useState([]);

  const uploadImages = () => {
    const formData = new FormData();
    for (let i = 0; i < imagesSelected.length; i++) {
      formData.append('file', imagesSelected[i]);
      formData.append('upload_preset', 'jtj4c4ac');
      Axios.post(
        'https://api.cloudinary.com/v1_1/dze7hholo/image/upload',
        formData
      ).then((response) => {
        console.log(response);
      });
    }
  };

  return (
    <div>
      <input
        type="file"
        multiple
        onChange={(event) => {
          setImagesSelected(event.target.files);
        }}
      />
      <button onClick={uploadImages}>Upload Images</button>
      {imagesSelected.length > 0 &&
        Array.from(imagesSelected).map((image, index) => (
          <div key={index}>
            <Image
              style={{ width: 200 }}
              cloudName="dze7hholo"
              publicId="{image.name}"
            />
          </div>
        ))}
    </div>
  );
}

export default Home;
