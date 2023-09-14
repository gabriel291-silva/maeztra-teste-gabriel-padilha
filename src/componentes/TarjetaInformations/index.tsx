import { TarjetaInformationData } from "../../data/tarjetaInformationData"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TarjetaInfoCardType } from "./types";
import TarjetaInfoCard from "./TarjetaInfoCard";
import { TarjetaContainer, TarjetaTitle, TarjetaTitleContent } from "./TarjetaInformationsStyles.styled";

function TarjetaInformation(){
    const Data = TarjetaInformationData
        const isMobile = window.innerWidth <= 768;

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:true,
        className:"tarjetaInformation",
      };
      var settingsMob = {
        dots: false,
        infinite: true,
        arrows:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className:"tarjetaInformation",
      };
    return(
        <TarjetaContainer>
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
                        Data.items.map((item:TarjetaInfoCardType,key:any)=>{
                            return(
                                <TarjetaInfoCard key={key} icon={item.icon} text={item.text} title={item.title}/>
                            )
                        })
                    }
            </Slider>
        :
            <Slider  {...settings}>
                    {
                        Data.items.map((item:TarjetaInfoCardType,key:any)=>{
                            return(
                                <TarjetaInfoCard key={key} icon={item.icon} text={item.text} title={item.title}/>
                            )
                        })
                    }
            </Slider>
                }
          </div>
        </TarjetaContainer>
    )
}

export default TarjetaInformation