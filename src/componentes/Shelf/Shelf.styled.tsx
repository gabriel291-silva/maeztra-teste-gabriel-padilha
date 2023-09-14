import styled from "styled-components";
const fontTitillium =" 'Titillium Web',sans-serif;`"

export const ShelfContainer = styled.div`
    padding: 0 16px;
    max-width: 1440px;
    margin: 0 auto;
    margin-top: 81px;
    margin-bottom: 40px;
`
export const ShelfTitleContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 21px;
`
export const ShelfTitle = styled.span`
     color: var(--color-2-500, #353535);
    text-align: center;
    font-family: ${fontTitillium};
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media only screen and (max-width: 600px) {
       font-size: 24px;
    }
`