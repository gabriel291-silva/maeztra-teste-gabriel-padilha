import { HeaderMobile } from "."
import { headerData } from "../../data/headerData"
import { MenuHeaderMobileContainer } from "./HeaderMobileStyles.styled"


function HeaderMobileContainer(){  
    const HeaderData = headerData
 
    return(
        <MenuHeaderMobileContainer>
            <HeaderMobile.menu 
                logoLink={HeaderData?.headerLogo?.logoLink} 
                logoUrl={HeaderData?.headerLogo?.logoUrl} 
                iconMenuUrl={HeaderData?.headerMenuMobile?.iconUrl}/>
            <HeaderMobile.icons 
                iconSearch={HeaderData.headerOptions.meuCarinhoOption.iconUrl} 
                iconMinicart={HeaderData.headerOptions.SearchOption.iconUrl}/>
        </MenuHeaderMobileContainer>
    )
}

export default HeaderMobileContainer 