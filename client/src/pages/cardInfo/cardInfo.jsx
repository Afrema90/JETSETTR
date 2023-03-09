import React from 'react'
import './cardInfo.css'
import {UilPen} from ''

const cardInfo = () => {
    return (
        <div className="cardInfo">
            <div className='headInfo'>
                <h3>Your Info</h3>
                <UilPen/>
            </div>
            <div className='info'>
                <span>
                    <b>Status</b>
                </span>
                <span> in relationship</span>
            </div>
        </div>
    )
}

export default cardInfo