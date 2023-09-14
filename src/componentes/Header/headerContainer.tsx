import { Header } from "."
import { ContainerHeader, ContentHeader, ContentHeaderCategory } from "./HeaderStyles.styled"


function HeaderContainer(){
    return(
        <>
            <ContainerHeader>
                <ContentHeader>
                    <Header.logo/>
                    <Header.search/>
                    <Header.option/>
                </ContentHeader>
                <ContentHeaderCategory>
                    <Header.category/>
                </ContentHeaderCategory>
            </ContainerHeader>
        </>
    )
}

export default HeaderContainer