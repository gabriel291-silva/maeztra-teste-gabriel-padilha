import { IconTarjetaInfor,CardtarjetaInfor, TextContainerTarjetaInfor, TitleTarjetaInfor, TextTarjetaInfor } from "./TarjetaInformationsStyles.styled"
import { TarjetaInfoCardType } from "./types"

function TarjetaInfoCard({icon,title,text}:TarjetaInfoCardType){
    return(
        <CardtarjetaInfor>
                <IconTarjetaInfor src={icon} alt="" />
            <TextContainerTarjetaInfor>
                <TitleTarjetaInfor>{title}</TitleTarjetaInfor>
                <TextTarjetaInfor>{text}</TextTarjetaInfor>
            </TextContainerTarjetaInfor>
        </CardtarjetaInfor>
    )
}
export default TarjetaInfoCard