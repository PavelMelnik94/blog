import React from 'react'
import avatar from '../assets/img/avatar.jpg'

//#59948c8f - success
//#ec3c3cd3 - danger

export default function Notification(props) {

  const { type, message } = props;


    return (
      <div className='notification' style={{background: type }}>
          <div className='notification-header'> 
            <div className='notification-userbar'>
              <img src={avatar} alt="userbar" />
              <span>Паша</span>
            </div>

            <span>1 секунду назад</span>
          </div>
      <div className='divider'></div>


      <div className='notification-body'>
      <span> {message} </span>
      </div>

      </div>
    );
}
