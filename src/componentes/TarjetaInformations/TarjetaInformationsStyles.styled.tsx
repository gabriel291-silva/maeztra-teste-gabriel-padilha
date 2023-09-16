import styled from "styled-components";
const fontTitillium =" 'Titillium Web',sans-serif;`"

export const TarjetaContainer = styled.div`
    max-width: 1440px;
    margin: 24px auto;
    padding: 0px 16px;

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
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

`

export const IconTarjetaInfor = styled.img`
    width: 32px;
    height: 32px;

`
export const CardtarjetaInfor = styled.div`
    display: flex;
    gap: 22px;
    max-width: 308px;
    height: 64px;
    padding: 0px 27px;
    align-items: center;
    border-radius: 4px;
    background: var(--color-4-500, #EFEFEF);
    margin: 0 7.5px;
    justify-content: center;


`
export const TitleTarjetaInfor = styled.span`
    color: var(--color-2-500, #353535);
    font-family: ${fontTitillium};
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

`
export const TextTarjetaInfor = styled.span`
color: var(--color-2-900, #000);
    font-family: ${fontTitillium};
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const TextContainerTarjetaInfor = styled.div`
    display: flex;
    flex-direction: column;
`