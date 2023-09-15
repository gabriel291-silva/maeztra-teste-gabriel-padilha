import BannerFooter from "../../componentes/BannerFooter";
import BannerHero from "../../componentes/BannerHero"
import { FooterContainer } from "../../componentes/Footer/FooterContainer";
import HeaderContainer from "../../componentes/Header/headerContainer"
import HeaderMobileContainer from "../../componentes/HeaderMobile/HeaderMobileContainer";
import NewsLetter from "../../componentes/NewsLetter";
import PopUpContainer from "../../componentes/PopUp/PopUpContainer";
import Shelf from "../../componentes/Shelf";
import TarjetaHeader from "../../componentes/Tarjeta"
import TarjetaInformation from "../../componentes/TarjetaInformations";
import TarjetaPartners from "../../componentes/TarjetaPartners";

function HomePage(){
    const isMobile = window.innerWidth <= 768;
    return(
        <div>
            <PopUpContainer/>
            <TarjetaHeader/>
            {isMobile ? (
                <HeaderMobileContainer/>
            ) : (
                <HeaderContainer/>
             )}
            <BannerHero/>
            <TarjetaInformation/>
            <TarjetaPartners/>
            <Shelf/>
            <BannerFooter/>
            <NewsLetter/>
            <FooterContainer/>
        </div>
    )
}

export default HomePage