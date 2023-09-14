import { TarjetaInfoCardType } from "./types"

function TarjetaInfoCard({icon,title,text}:TarjetaInfoCardType){
    return(
        <div>
            <div>
                <img src={icon} alt="" />
            </div>
            <div>
                <span>{title}</span>
                <span>{text}</span>
            </div>
        </div>
    )
}
export default TarjetaInfoCard