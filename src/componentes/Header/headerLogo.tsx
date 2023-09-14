import { headerData } from "../../data/headerData"
import { ContainerLogoHeader, ImgLogoHeader } from "./HeaderStyles.styled"
function HeaderLogo(){
    const logo = headerData.headerLogo
    return(
        <>
        <ContainerLogoHeader>
            <a href={logo.logoLink}>
                <ImgLogoHeader src={logo.logoUrl}/>
            </a>
        </ContainerLogoHeader>
        </>
    )
}

export default HeaderLogo