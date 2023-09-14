
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css'; 
import { bannerHeroHomeData } from "../../data/bannerHeroHomeData";
import { 
  ContainerBannerHero, 
  ContentBannerHero,
  TitleCardBannerHero, 
  CardBannerHero,
  SubTitleCardBannerHero,
  ButtonCardBannerHero 
} from "./BannerHeroStyles.styled";


 function BannerHero() {
  const bannersData = bannerHeroHomeData.Cards
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
      {bannersData?.map((card)=>{
        return(
          <ContentBannerHero>
          <CardBannerHero>
            <TitleCardBannerHero>{card.title}</TitleCardBannerHero>
              <SubTitleCardBannerHero>{card.subtitle}</SubTitleCardBannerHero>
              <ButtonCardBannerHero>{card.textButton}</ButtonCardBannerHero>
          </CardBannerHero>
        </ContentBannerHero>
        )
      })}
    </Slider>
    </ContainerBannerHero>
    
  );
}

export default BannerHero