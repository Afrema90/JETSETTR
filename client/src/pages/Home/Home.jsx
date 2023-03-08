import React, { useState } from 'react';
import Axios from 'axios';
import {Image} from 'cloudinary-react';
// import PostSide from '../../components/PostSide/PostSide';
// import ProfileSide from '../../components/Profileside/Profileside';
// import RightSide from '../../components/RightSide/RightSide';
import './Home.css';

function Home() {

    const [imageSelected, setImageSelected] = useState("");

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
            />
            <button onClick={uploadImage}>Upload Image</button>

            <Image  
            style= {{width: 200}}
            cloudName = "dze7hholo" publicId=""/>
        </div>
    );
}
// const Home = () => {
//     return (
//         <div className="home">
//             <div className="home__container">
//                 <div className="home__left">
//                     {/* <ProfileSide/> */}
//                 </div>
//                 <div className="home__middle">
//                     {/* <PostSide/> */}
//                 </div>
//                 <div className="home__right">
//                     {/* <RightSide/> */}
//                 </div>
//             </div>
//         </div>
//     )
// }
// // export default Home

export default Home;