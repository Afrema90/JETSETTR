import React from 'react';
// import PostSide from '../../components/PostSide/PostSide';
// import ProfileSide from '../../components/Profileside/Profileside';
// import RightSide from '../../components/RightSide/RightSide';
import './Home.css';
<<<<<<< HEAD

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

    const uploadImage = () => {
        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "jtj4c4ac")

        Axios.post("https://api.cloudinary.com/v1_1/dze7hholo/image/upload", formData).then((response) => {
            console.log(response);
        });
    };

    return (
        <div className='Home'>
            <input 
                type="file" 
                onChange={(event) => {
                    setImageSelected(event.target.files);
                }}
  return (
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
=======
const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__left">
                    {/* <ProfileSide/> */}
                </div>
                <div className="home__middle">
                    {/* <PostSide/> */}
                </div>
                <div className="home__right">
                    {/* <RightSide/> */}
                </div>
            </div>
        </div>
    )
>>>>>>> branch-models
}
export default Home