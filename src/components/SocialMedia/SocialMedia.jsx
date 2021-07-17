import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faViber, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'

export default function SocialMedia() {
    return (
        <>

            <div className="social-icon-wrapper">
            {/* ссылка на общий гитхаб */}

            <a href='https://github.com/PavelMelnik94' alt='github' className='social-link'>
            <FontAwesomeIcon icon={faGithubAlt} size='2x' />
            GitHub
             </a>
            

            {/* вайбер */}
            <a href='viber://chat?number=%2B375298571345"' alt='Viber' className='social-link'>
            <FontAwesomeIcon icon={faViber} size='2x' />
            Viber
             </a>
            

            {/* телеграм */}
            <a href='https://t.me/pavelmelnik94' alt='Telegram' className='social-link'>
            <FontAwesomeIcon icon={faTelegramPlane} size='2x' />
            Telegram
             </a>
            

            {/* звонок на мобилу */}
            <a href='tel: +375298571345' alt='call' className='social-link'>
            <FontAwesomeIcon icon={faPhoneVolume} size='2x' />
            звонок
             </a>
            
            </div>
        </>
    )
}
