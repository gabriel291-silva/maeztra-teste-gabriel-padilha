import styled from "styled-components";
const fontTitillium =" 'Titillium Web',sans-serif;`"


export const NewsLetterContainer = styled.div`
    height: 120px;
    align-items: center;
    justify-content: center;
    display: flex;
    border-top: solid 1px #EFEFEF;
    border-bottom: solid 1px #EFEFEF;
    margin-top: 78px;
    gap: 15px;
    background: var(--color-3-500, #FAFAFA);
    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`
export const NewsLetterTitulo = styled.span`
    color: var(--color-2-900, #000);
    font-family: ${fontTitillium};
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
export const NewsLetterFormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const NewsLetterInputContainer = styled.div`
    border-radius: 4px;
    border: 1px solid var(--color-2-500, #353535);
    background: var(--color-5-500, #FFF);
    display: inline-flex;
    height: 40px;
    padding: 0px 138px 0px 24px;
    align-items: center;
    flex-shrink: 0;
    @media only screen and (max-width: 600px) {
        padding: 0;
        height: auto;

    }
    `
export const NewsLetterInput = styled.input`
    display: flex;
    width: 100%;
    height: 27px;
    flex-direction: column;
    justify-content: center;
    border: none;
    @media only screen and (max-width: 600px) {
        padding: 8px 17px;
        height: auto;
    }
    `
export const NewsLetterButton = styled.button`
    display: flex;
    width: 131px;
    padding: 0px 43px 0px 44px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: none;
    background: var(--color-1500-faa-500, #FAA500);
    color: var(--color-5-500, #FFF);
    font-family: Titillium Web;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: -15px;
    height: 45px;
    @media only screen and (max-width: 600px) {
        padding: 8px 17px;
        width: 100%;
        height: auto;
    }
`