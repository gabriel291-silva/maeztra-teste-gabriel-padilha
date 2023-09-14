import { BannerFooterData } from "../../data/bannerFooterData"
import { 
    BannerFooterContainer, 
    BannerFooterImage,
    BannerFooterTextContainer,
    BannerFooterTitle,
    BannerFooterText } from "./BannerFooterStyles.styled"

function BannerFooter(){
    const data = BannerFooterData.bannerFooter
    return(
        <BannerFooterContainer>
            <BannerFooterTextContainer>
                <BannerFooterTitle>{data.title}</BannerFooterTitle>
                <BannerFooterText>{data.text}</BannerFooterText>
            </BannerFooterTextContainer>
            <BannerFooterImage src={data.image} alt="" />

        </BannerFooterContainer>
    )
}

export default BannerFooter