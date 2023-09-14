
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TarjetaPartnersCardType } from "./types";
import { TarjetaPartnersContainer, TarjetaTitle, TarjetaTitleContent } from "./TarjetaPartnersStyles.styled";
import TarjetaPartnersCard from "./TarjetaPartnersCard";
import { TarjetaPartnersData } from "../../data/tarjetaPartnersData";


function TarjetaPartners(){
    const Data = TarjetaPartnersData
        const isMobile = window.innerWidth <= 768;

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:true,
        className:"TarjetaPartners",
      };
      var settingsMob = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        className:"TarjetaPartners",
      };
      
    return(
        <TarjetaPartnersContainer>
            <TarjetaTitleContent>
                <TarjetaTitle>
                Por que comprar na Maeztra?
                </TarjetaTitle>
            </TarjetaTitleContent>
          <div>
          {
            isMobile ?
            <Slider  {...settingsMob}>
                    {
                        Data.items.map((item:TarjetaPartnersCardType,key:any)=>{
                            return(
                                <TarjetaPartnersCard key={key} logo={item.logo}/>
                            )
                        })
                    }
            </Slider>
        :
            <Slider  {...settings}>
                    {
                        Data.items.map((item:TarjetaPartnersCardType,key:any)=>{
                            return(
                                <TarjetaPartnersCard key={key} logo={item.logo}/>
                            )
                        })
                    }
            </Slider>
                }
          </div>
        </TarjetaPartnersContainer>
    )
}

export default TarjetaPartners