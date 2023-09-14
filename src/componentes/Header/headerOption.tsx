import { headerData } from "../../data/headerData"
import { ContainerOptionsHeader, TextOptionsHeader, ContentOptionsHeader } from "./HeaderStyles.styled"
function HeaderOption(){
    const options = headerData.headerOptions
    return(
        <>
        <ContainerOptionsHeader>
            <ContentOptionsHeader>
                <img src={options.favoritoOption.iconUrl} alt="" />
                <TextOptionsHeader>{options.favoritoOption.iconText}</TextOptionsHeader>
            </ContentOptionsHeader>
            <ContentOptionsHeader>
                <img src={options.minhaContaOption.iconUrl} alt="" />
                <TextOptionsHeader>{options.minhaContaOption.iconText}</TextOptionsHeader>
            </ContentOptionsHeader>
            <ContentOptionsHeader>
                <img src={options.meuCarinhoOption.iconUrl} alt="" />
                <TextOptionsHeader>{options.meuCarinhoOption.iconText}</TextOptionsHeader>
            </ContentOptionsHeader>
        </ContainerOptionsHeader>
        </>
    )
}

export default HeaderOption