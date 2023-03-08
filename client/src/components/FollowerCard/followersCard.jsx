import React from "react";
import './followersCard.css';

import { followers } from '../../data/followers';
const FollowerCard = () => {
    return (
        <div className="follower-card">
        {followers.map((follower) => (
            <div className="follower-card__item" key={follower.id}>
            <img src={follower.avatar} alt="avatar" />
            <div className="follower-card__item__info">
                <h3>{follower.name}</h3>
                <p>{follower.bio}</p>
            </div>
            </div>
        ))}
        </div>
    );
    };

export default FollowerCard;