import { HeaderMobileMenuContent,HeaderIconMobile,HeaderLogoMobile } from "./HeaderMobileStyles.styled"
import { HeaderMenuMobileType } from "./types"

function headerMenuMobile({ logoUrl, logoLink, iconMenuUrl}:HeaderMenuMobileType){

    return(
        <HeaderMobileMenuContent>
            <HeaderIconMobile src={iconMenuUrl} alt="" />
            <a href={logoLink}>
                <HeaderLogoMobile src={logoUrl} alt="" />
            </a>
        </HeaderMobileMenuContent>
    )
}

export default headerMenuMobile