import { ProductsData } from "../../data/productsData"
import ProductCardContainer from "../Product/ProductCardContainer"
import { ProductDataType } from "../Product/types"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ShelfContainer,ShelfTitleContent,ShelfTitle } from "./Shelf.styled";

function Shelf(){
    const data = ProductsData.Products
    const isMobile = window.innerWidth <= 768;

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:true,
        className:"Shelf"
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
        <ShelfContainer>
            <ShelfTitleContent>
                <ShelfTitle>
                As Mais Pedidas
                </ShelfTitle>
            </ShelfTitleContent>
            {
            isMobile ?
            <Slider {...settingsMob}>
            {
                data?.map((item:ProductDataType,key:any)=>{
                    return(
                        <ProductCardContainer 
                        key={key}
                        imageUrl={item.imageUrl} 
                        titleProduct={item.titleProduct} 
                        description={item.description} 
                        variants={item.variants} 
                        price={item.price}/>
                    )
                })
            }
            </Slider>
        :
            <Slider {...settings}>
                {
                    data?.map((item:ProductDataType,key:any)=>{
                        return(
                            <ProductCardContainer 
                            key={key}
                            imageUrl={item.imageUrl} 
                            titleProduct={item.titleProduct} 
                            description={item.description} 
                            variants={item.variants} 
                            price={item.price}/>
                        )
                    })
                }
            </Slider>
            }

        </ShelfContainer>
    )
}

export default Shelf