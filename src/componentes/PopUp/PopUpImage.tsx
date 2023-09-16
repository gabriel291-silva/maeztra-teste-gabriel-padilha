import { PopUpImageContainer,PopUpImageItem } from "./PopUp.styled"
import { PopUpImageType } from "./type"

function PopUpImage({popUpImage}:PopUpImageType){
    return(
        <PopUpImageContainer>
            <PopUpImageItem src={popUpImage} alt="" />
        </PopUpImageContainer> 
    )
}

export default PopUpImage