import styled from "styled-components";
const fontTitillium =" 'Titillium Web',sans-serif;`"

export const ContainerFooter = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    @media only screen and (max-width: 600px) {
        padding: 0;
    }
`
export const TarjetaContainerFooter = styled.div`
    display: flex;
    justify-content: center;
    background: var(--color-2-500, #353535);
    margin: 0 auto;
    
`
export const ContainerCategoryes = styled.div`
    display: flex;
    width: 770px;
    justify-content: space-between;
    margin: 0 auto;
    padding: 41px 0px 64px 0;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
        width: 100%;
        gap: 17px;
    }
`
export const CategoriesContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    @media only screen and (max-width: 600px) {
        width: 100%;
        max-width: 90%;
        padding: 0 16px;
    }
`
export const CategoryTitle = styled.span`
    color: var(--color-2-500, #353535);
    font-family: ${fontTitillium};
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    @media only screen and (max-width: 600px) {
        display: flex;
        align-items: center;
        width: 100%;
        height: auto;
        justify-content: space-between;
    }
`
export const SubCategoryTitle = styled.span`
color: var(--color-2-900, #000);
font-family: ${fontTitillium};
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 18px;
`
export const FooterInformationContainer= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 85px;
    width: 100%;
    max-width: 1440px;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
        padding: 24px 31px;
        gap: 36px;
        height: auto;
    }

`
export const FooterIconsContainer = styled.div`
display: flex;
gap: 22px;
`
export const FooterRedesItem = styled.img`
height:32px;
width: 32px;
`

export const FooterInfosItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`
export const FooterInfosItemText = styled.span`
    color: var(--color-5-500, #FFF);
    font-family: Open Sans;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
export const FooterInfosItemIcon = styled.img`
    height: 25px;
`