import BannerHero from "../../componentes/BannerHero"
import HeaderContainer from "../../componentes/Header/headerContainer"
import TarjetaHeader from "../../componentes/Tarjeta"


function HomePage(){
    return(
        <div>
            <TarjetaHeader/>
            <HeaderContainer/>
            <BannerHero/>
        </div>
    )
}

export default HomePage