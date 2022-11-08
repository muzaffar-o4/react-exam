import React from 'react'
import './Footer.scss'
import logoDark from './../../assets/logo_dark.png'
import logoBigDark from './../../assets/logo_B_dark.png'

const Footer = () => {
    return (
        <div className='Footer'>
            {/* footer left */}
            <div className="footer__left">
                <img src={logoBigDark} alt="{imageLogo dark}" className='logoBig' />
                <a href="{#}"><img src={logoDark} alt="{logoDark image}" className='logoDark' /></a>
            </div>
            {/* footer middle */}
            <div className="footer__middle">
                {/* middle-left */}
                <div className="footer__middle--left">
                    <h2>FIGHT WITH ME ON:</h2>
                    <div className="social__links">
                        <a href="{#}">Twitter</a>
                        <a href="{#}">Instagram</a>
                        <a href="{#}">Telegram</a>
                        <a href="{#}">Youtube</a>
                        <a href="{#}">Figma</a>
                    </div>
                </div>
                {/* middle-right */}
                <div className="footer__middle--right">
                    <h2>WHAT I HAVE DONE:</h2>
                    <div className="social__links">
                        <a href="{#}">Xalq Kutubxonasi</a>
                        <a href="{#}">Websitee</a>
                        <a href="{#}">Website</a>
                        <a href="{#}">Play market</a>
                        <a href="{#}">App store</a>
                    </div>
                </div>
            </div>
            {/* footer right */}
            <div className="footer__right">
                <div className="social__links">
                    <a href="{#}">Contacts</a>
                    <a href="{#}">Blog</a>
                    <a href="{#}">Dribble</a>
                    <a href="{#}">Behance</a>
                </div>
            </div>
        </div>
    )
}

export default Footer