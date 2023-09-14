import { CardtarjetaPartner } from "./TarjetaPartnersStyles.styled"
import { TarjetaPartnersCardType } from "./types"

function TarjetaPartnersCard({logo}:TarjetaPartnersCardType){
    return(
        <CardtarjetaPartner>
            <img src={logo} alt="" />
        </CardtarjetaPartner>
    )
}
export default TarjetaPartnersCard