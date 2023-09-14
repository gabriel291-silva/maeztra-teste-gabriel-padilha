import { 
    NewsLetterButton, 
    NewsLetterContainer, 
    NewsLetterFormContainer, 
    NewsLetterInput, 
    NewsLetterInputContainer, 
    NewsLetterTitulo 
} from "./NewsLetterStyles.styled"

function NewsLetter(){
    return(
        <NewsLetterContainer>
            <NewsLetterTitulo>Recebe Nossa Newsletter</NewsLetterTitulo>
            <NewsLetterFormContainer>
                <NewsLetterInputContainer>
                <NewsLetterInput type="text" />
                </NewsLetterInputContainer>
                
                <NewsLetterButton>Enviar</NewsLetterButton>
            </NewsLetterFormContainer>
        </NewsLetterContainer>
    )
}
export default NewsLetter