import styled from "styled-components";
const fontTitillium =" 'Titillium Web',sans-serif;`"

export const TarjetaContainer = styled.div`
    max-width: 1440px;
    margin: 24px auto;
    padding: 0px 16px;

`
export const TarjetaPartnersContainer = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    margin-top: 74px;
`

export const TarjetaTitleContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 21px;
`
export const TarjetaTitle = styled.span`
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
export const CardtarjetaPartner = styled.div`
    display: flex;
    gap: 22px;
    max-width: 308px;
    height: 64px;
    padding: 0px 27px;
    align-items: center;
    border-radius: 4px;
    margin: 0 7.5px;
    justify-content: center;

`
