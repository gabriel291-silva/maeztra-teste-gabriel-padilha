import styled from "styled-components";
const fontTitillium =" 'Titillium Web',sans-serif;`"

export const BannerFooterContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 64px;
    max-width: 1440px;
    padding: 0 16px;
    margin: 0 auto;
    @media only screen and (max-width: 600px) {
        flex-direction: column;
        gap: 24px;
    }
`
export const BannerFooterImage = styled.img`
    object-fit: cover;
    max-height: 684px;
    max-width: 1114px;
    width: 100%;
    height: 480px;
    @media only screen and (max-width: 600px) {
        height: 185px;
    }
`

export const BannerFooterTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`
export const BannerFooterTitle = styled.span`
    color: var(--color-2-900, #000);
    font-family: ${fontTitillium};
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
export const BannerFooterText = styled.span`
    color: var(--color-2-900, #000);
    font-family: ${fontTitillium};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    max-width: 420px;
`

