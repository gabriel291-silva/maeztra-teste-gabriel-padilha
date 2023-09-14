import { headerData } from "../../data/headerData"
import { TextTarjetaHeader,ContainerTarjetaHeader } from "./TarjetaStyles.styled";

function TarjetaHeader(){
    const Tarjeta = headerData?.headerTarjeta;
    console.log(Tarjeta)
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