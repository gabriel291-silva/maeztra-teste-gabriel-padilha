import { headerData } from "../../data/headerData"
import { TextTarjetaHeader,ContainerTarjetaHeader } from "./TarjetaStyles.styled";

function TarjetaHeader(){
    const Tarjeta = headerData?.headerTarjeta;
    return(
        <>
        <ContainerTarjetaHeader>
            <TextTarjetaHeader href={Tarjeta.TarjetaUrl}>
                {Tarjeta?.TarjetaText}
            </TextTarjetaHeader>
        </ContainerTarjetaHeader>
        </>
    )
}
export default TarjetaHeader