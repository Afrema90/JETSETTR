import React from 'react';
// import PostSide from '../../components/PostSide/PostSide';
// import ProfileCard from '../../components/ProfileCard/ProfileCard';
// import  ProfileLeft from '../../components/ProfileLeft/ProfileLeft';
// import  ProfileRight from '../../components/ProfileRight/ProfileRight';
import './Profile.css';
const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__container">
                <div className="profile__left">
                    {/* <ProfileLeft/> */}
                    <searchLogo/>
                    <cardInfo/>
                    <cardFollowers/>
                </div>
                <div className="profile__middle">
                    {/* <ProfileCard/> */}
                </div>
                <div className="profile__right">
                    {/* <ProfileRight/> */}
                </div>
            </div>
        </div>
    );
}
export default Profile;