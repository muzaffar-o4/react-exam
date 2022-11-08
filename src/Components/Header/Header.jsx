import React, { useRef, useState } from 'react'
import Footer from '../Footer/Footer'
import Text from '../Text/Text'
import logoLight from './../../assets/logo_light.png'
import './Header.scss'


const Header = () => {
    const navRef = useRef()
    const [menu, setMenu] = useState(false)

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive')
        setMenu(prev => !prev)
    }

    return (
        <div className='header'>
            <main className='main'>
                <nav>
                    <div className="header">
                        <a href='{#}' className="header-left">
                            <img src={logoLight} alt="{logo image}" className='left__img' />
                            {!menu ? <span className='close__btn' onClick={showNavbar}><i className="fa-solid fa-xmark"></i></span>
                                : <span className='bar__btn' onClick={showNavbar}><i className="fa-solid fa-bars"></i></span>}
                        </a>
                        <div ref={navRef} className="header-middle">
                            <a href="{#}">Design Theory</a>
                            <a href="{#}">UX</a>
                            <a href="{#}">UI</a>
                            <a href="{#}">Typography</a>
                        </div>
                    </div>
                    <div className="nav-right">
                        <input type="text" />
                        <button><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </nav >
                <Text />
            </main>
            <Footer />
        </div>
    )
}

export default Header