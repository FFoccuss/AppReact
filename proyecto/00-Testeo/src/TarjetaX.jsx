import { useState } from "react"

export function TarjetaX ({nombreUsuario,nombre}) {
    const [teSigue,setTeSigue]= useState(false)
    const clickSeguir = () => {
        setTeSigue(!teSigue)
    }
    const text = teSigue ? 'Siguiendo' : 'Seguir'
    const buttonClassname = teSigue ? 'tw-tarjetaX-button teSigue'
    : 'tw-tarjetaX-button'
    return (
        <article className='tw-tarjetaX'>
            <header className='tw-tarjetaX-header'>
                <img 
                className='tw-tarjetaX-avatar'
                src="https://media.licdn.com/dms/image/C4D03AQHfPwU1Xc0iUg/profile-displayphoto-shrink_200_200/0/1642615132018?e=1710979200&v=beta&t=WfEJY0k-rGRKl_gry59ggpoTA_ENq70MN7ao2ZW-hIU"></img>
            <div className='.tw-tarjetaX-info'>
            <strong>{nombre}</strong>
            <span className='.tw-tarjetaX-infoUserName'> @{nombreUsuario}</span>

            </div>
            </header>
            <aside>
                <button className={buttonClassname} onClick={clickSeguir}>
                    {text}
                </button>
            </aside>
        </article>
    )
}
