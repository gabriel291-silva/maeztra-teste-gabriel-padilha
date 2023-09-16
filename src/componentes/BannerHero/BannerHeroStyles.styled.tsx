import styled from "styled-components";
const fontMontserrat700 =" 'Montserrat', sans-serif"
const fontMontserrat400 =" 'Montserrat', sans-serif"


export const ContainerBannerHero = styled.div`
    width: 100%; 
  height: 100%; 
  max-width: 1921px;
  max-height: 600px;
  background-image: url('https://s3-alpha-sig.figma.com/img/11dd/ca00/5e093beef96796f5f41acf9580c9c580?Expires=1695600000&Signature=jcE~MJbrb9aTHEN81rRBVpvTCXRMkgU3uKC2asWe5b0CQEj-a~ezY~NZVLC5GDa-rvVCIojporBFJL-p1A4Ued3uZEKDLDkJVTm267LI-8fh6mg~1TgN40mugTYi03HG3iOT6-S~IUyyeBBNHbzWM17WO7~9pZycwHZei1nyepZCfO2emDSImI5TPgldLuaEO8FRqFrgmtabcHp8AOgCIQ942b-ARaDUM6oCpQ2WODPmNXGyWhFG342~AuSZqoO0UriqkCyGL2j0VnsMDKlWBio8Sl7ey2FtYUkznk4GPd~M5cLL9B-fb4Am8d4EUBMoXMpF~kR9cWPTCa~U8GGkEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'); 
  background-size: cover; 
  background-position: 0px -193px;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    max-height: 320px;
    background-position: 0px 0px;

    }
  
`

export const ContentBannerHero = styled.div`
    height: 600px;
    display: flex !important;
    align-items: center;

    @media only screen and (max-width: 600px) {
        height: 320px;
    }
`

export const CardBannerHero = styled.div`
   width: auto;
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    margin: 0 auto;

`

export const TitleCardBannerHero = styled.span`
    color: #FFF;
    font-family: ${fontMontserrat700};
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media only screen and (max-width: 600px) {
        font-size: 30px;
    }
`

export const SubTitleCardBannerHero = styled.span`
    color: #FFF;
    font-family: ${fontMontserrat400};
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 40px;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        margin-top: 18px;
    }
`

export const ButtonCardBannerHero = styled.button`
    border-radius: 10px;
    background:  #FAA500;
    border: none;
    max-width: 128px;
    padding: 14px 30px;
    margin-top: 19px;
    color: #FFF;
    font-family: ${fontMontserrat400};
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media only screen and (max-width: 600px) {
        max-width: 76px;
        max-height: 28px;
        padding: 5px 0px;
        margin-top: 16px;
        font-size: 14px;
    }
`