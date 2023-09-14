import BannerHero from "../../componentes/BannerHero"
import HeaderContainer from "../../componentes/Header/headerContainer"
import HeaderMobileContainer from "../../componentes/HeaderMobile/headerMobileContainer";
import TarjetaHeader from "../../componentes/Tarjeta"

function HomePage(){
    const isMobile = window.innerWidth <= 768;
    return(
        <div>
            <TarjetaHeader/>
            {isMobile ? (
                <HeaderMobileContainer/>
            ) : (
                <HeaderContainer/>
             )}
            <BannerHero/>
        </div>
    )
}

export default HomePage