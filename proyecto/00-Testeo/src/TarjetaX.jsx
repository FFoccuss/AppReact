export function TarjetaX ({nombreUsuario,nombre}) {
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
                <button className='tw-tarjetaX-button'>
                    Follow
                </button>
            </aside>
        </article>
    )
}
