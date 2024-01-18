import './App.css'
import { TarjetaX } from './TarjetaX.jsx'
export function App () {
    return (

        <section className='App'>
                <TarjetaX 
                teSigue={true} 
                nombre="Manuel Guerrero Rodriguez" 
                nombreUsuario="FFoccuss"/>
                <TarjetaX 
                teSigue={false} 
                nombre="Lailo Guerrero" 
                nombreUsuario="SSuccoFF"/>
                <TarjetaX 
                teSigue={false} 
                nombre="Federico Guerrero" 
                nombreUsuario="Fede"/>
                <TarjetaX  
                teSigue={true} nombre="Roman Guerrero" 
                nombreUsuario="Roman"/>

        </section>
        
    )
}