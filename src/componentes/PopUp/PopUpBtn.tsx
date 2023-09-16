import { PopUpButton } from "./PopUp.styled"
import { PopUpButtonTextType } from "./type"

function PopUpBtn({popUpTextButton}:PopUpButtonTextType){
    return(
        <PopUpButton>{popUpTextButton}</PopUpButton>
    )
}

export default PopUpBtn