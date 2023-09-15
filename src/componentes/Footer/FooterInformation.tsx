import { FooterData } from "../../data/footerData"
import { FooterInformationContainer, FooterIconsContainer, FooterRedesItem, FooterInfosItemIcon, FooterInfosItemText, FooterInfosItemContainer } from "./Footer.styled"
import { FooterInformationItemType, FooterPagamentoItemType, FooterRedesItemType } from "./typez"

function FooterInformation(){
    const data = FooterData
    console.log(data)
    return(
        <FooterInformationContainer>
            <FooterIconsContainer>
            {
                data.redes.map((item:FooterRedesItemType,key:any)=>{
                    return(
                        <FooterRedesItem key={key} src={item.icon} alt="" />
                    )
                })
            }
            </FooterIconsContainer>
            <FooterIconsContainer>
            {
                data.pagamento.map((item:FooterPagamentoItemType,key:any)=>{
                    return(
                        <img key={key} src={item.icon} alt="" />
                    )
                })
            }
            </FooterIconsContainer>
            <FooterIconsContainer>
                {
                    data.information.map((item:FooterInformationItemType,key:any)=>{
                        return(
                            <FooterInfosItemContainer key={key}>
                                <FooterInfosItemText>{item.texte}</FooterInfosItemText>
                                <FooterInfosItemIcon src={item.icon} alt="" />
                            </FooterInfosItemContainer>
                        )
                    })
                }

            </FooterIconsContainer>

        </FooterInformationContainer>
    )
}
export default FooterInformation