
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css'; 
import { ContainerBannerHero, ContentBannerHero } from "./BannerHeroStyles.styled";
 function BannerHero() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    className:"bannerHero"
  };
  return (
    <ContainerBannerHero>
    <Slider {...settings}>
        <ContentBannerHero>
            <span>teste 1</span>
            <span></span>
            <button></button>
        </ContentBannerHero>
        <ContentBannerHero>
            <span> teste 2</span>
            <span></span>
            <button></button>
        </ContentBannerHero>
    </Slider>
    </ContainerBannerHero>
    
  );
}

export default BannerHero