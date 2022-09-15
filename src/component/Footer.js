const FootDB = [
    { id: 1, title: "개인정보처리방침", link: "#!" },
    { id: 2, title: "RSS", link: "#!" },
    { id: 3, title: "찾아오시는길", link: "#!" }
]
const SNS = [
    { id: 1, icon: "xi-instagram", link: "https://www.instagram.com/s_oil_story/" },
    { id: 2, icon: "xi-facebook", link: "https://www.facebook.com/GoodoilFamily" },
    { id: 3, icon: "xi-youtube-play", link: "https://www.youtube.com/channel/UC2uuI7QxCRyQMnvOEIwPwdg" },
    { id: 4, icon: "xi-home", link: "https://story.s-oil.com/" },
]
const ADDRESS = [
    { id: 1, title: "본사 : (04196) 서울특별시 마포구 백범로 192" },
    { id: 2, title: "공장 : (44995) 울산광역시 울주군 온산읍 온산로 68" },
    { id: 3, title: "S-OIL 고객센터 1644-5151", link: "tel:1644-5151" },
    { id: 4, title: "COPYRIGHT © 2015 S-OIL CORPORATION ALL RIGHTS RESERVED." }
]
const FL = [
    { id: 1, title: "S-OIL 윤리경영", link: "#!" },
    { id: 2, title: "S-OIL 보너스카드", link: "#!" },
    { id: 3, title: "전자구매 시스템", link: "#!" },
    { id: 4, title: "S-OIL 토탈에너지스윤활유", link: "#!" },
    { id: 5, title: "S-OIL SEVEN", link: "#!" }
]
const Footer = () => {
    return (
        <footer className="Footer">
            <div className="top">
                <div className="container">
                    <ul className="Fnb">
                        {
                            FootDB.map((content) => {
                                return (
                                    <li key={content.id}><a href={content.link}>{content.title}</a></li>
                                )
                            })
                        }
                    </ul>
                    <div className="Sns">
                        {
                            SNS.map((content) => {
                                return (
                                    <a href={content.link} target="_blank" key={content.id}><i className={content.icon}></i></a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="container">
                    <ul className="address">
                        {
                            ADDRESS.map((content) => {
                                return (
                                    <li key={content.id}>{content.title}</li>
                                )
                            })
                        }
                    </ul>
                    <div className="familylink">
                        <select id="fl">
                            <option value="#!">FAMILY SITE</option>
                            {
                                FL.map((content) => {
                                    return (
                                        <option value={content.link}>{content.title}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;