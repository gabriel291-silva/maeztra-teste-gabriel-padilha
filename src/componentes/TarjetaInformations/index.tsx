import { TarjetaInformationData } from "../../data/tarjetaInformationData"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TarjetaInfoCardType } from "./types";
import TarjetaInfoCard from "./TarjetaInfoCard";
function TarjetaInformation(){
    const Data = TarjetaInformationData
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        className:"tarjetaInformation"
      };
      console.log(Data)
    return(
        <div>
        <Slider {...settings}>
            {
                Data.items.map((item:TarjetaInfoCardType,key:any)=>{
                    return(
                        <TarjetaInfoCard key={key} icon={item.icon} text={item.text} title={item.title}/>
                    )
                })
            }
        </Slider>
        </div>
    )
}

export default TarjetaInformation