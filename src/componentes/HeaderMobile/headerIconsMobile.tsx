import { HeaderIconMobile, HeaderIconsMobileContent } from "./HeaderMobileStyles.styled"
import { HeaderMenuMobileIcons } from "./types"

function headerIconsMobile({iconSearch,iconMinicart}:HeaderMenuMobileIcons){
    return(
        <HeaderIconsMobileContent>
            <HeaderIconMobile src={iconMinicart} alt="" />
            <HeaderIconMobile src={iconSearch} alt="" />
        </HeaderIconsMobileContent>
    )
}

export default headerIconsMobile