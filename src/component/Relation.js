import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
const NEWS = [
    { id: 1, title: "S-OIL, 월드비전에 방글라데시 식수 위생 사업 후원금 지원", desc: "S-OIL(대표: 후세인 알 카타니)은 14일 서울 영등포 월드비전 본부에 방글라데시 식수 위생사업 후원금 7천만원을 전달했다. S-OIL의 후원금은 방글라데시 샤키라(Satkhira) 지역의 주민 4만 5천여명에게 식수 용기를 지원하여 위생 환경을 개선하고, 지역 주민 주도의 식수위생 사업을 진행하는 데에 사용될 계획이다.", date: "SEP 2022", link: "#!" },
    { id: 2, title: "S-OIL, 수원 KT 위즈와 공동 마케팅 제휴 협약", desc: "S-OIL(대표: 후세인 알 카타니)은 지난 8일 KT위즈와 함께 올해 프로야구 정규 시즌 동안 브랜드 PR과 프로모션을 결합한 공동 마케팅 제휴 협약식을 갖고 수원 KT위즈파크에서 ‘S-OIL 스폰서 데이’ 행사를 열었다.", date: "SEP 2022", link: "#!" },
    { id: 3, title: "S-OIL, 추석 맞이 '송편 나누기'", desc: "S-OIL(대표: 후세인 알 카타니)은 7일 서울 마포구 이대 성산종합사회복지관(관장 : 심정원)에서 ‘S-OIL과 함께하는 사랑의 송편나눔’ 전달식을 갖고 마포 지역 저소득가정에 5천만원 상당의 추석 선물 꾸러미를 제공했다.", date: "SEP 2022", link: "#!" },
    { id: 4, title: "S-OIL, 순직소방관 유자녀 장학금 전달", desc: "S-OIL(대표: 후세인 알 카타니)은 소방청(청장: 이흥교), 한국사회복지협의회(회장: 서상목)와 함께 25일 마포 소재 본사 사옥에서 순직소방관 유자녀 70명에게 총 2억 1천만 원의 장학금을 전달했다.", date: "AUG 2022", link: "#!" },
    { id: 5, title: "S-OIL, 울산공장 협력사 직원 자녀 상생장학금 기탁", desc: "S-OIL(대표: 후세인 알 카타니)은 24일 울산공장 본관에서 울산공장 협력사 직원 자녀를 위한 상생 장학금 전달식을 개최하고, 울산사회복지협의회에 1억 7천만원을 기탁했다. S-OIL의 장학금은 장학위원회를 통해 선발된 대학생 장학생 33명에게 전달했다.", date: "AUG 2022", link: "#!" },
    { id: 6, title: "S-OIL, 협력업체 9곳에 우수 협력업체 인증서 수여", desc: "S-OIL(대표: 후세인 알 카타니)은 17일 울산시 온산 공장에서 ‘2022년 우수 협력업체 인증서 수여식’을 열고, 자재·용역 부문에서 우수 협력업체로 선정된 총 9개사에 대해 인증서를 수여했다.", date: "AUG 2022", link: "#!" },
]
const INFORM = [
    { id: 1, title: "IR공지", src: "/assets/icon01.png", link: "#!" },
    { id: 2, title: "IR자료", src: "/assets/icon02.png", link: "#!" },
    { id: 3, title: "주가정보", src: "/assets/icon03.png", link: "#!" },
]

const Relation = () => {
    const [slideNum, setSlideNum] = useState(0);
    const SLIDE = useRef(null);
    const setting = {
        arrows: false,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 2,
    }
    return (
        <section className="Relation sc">
            <h2>RELATION</h2>
            <p>S-OIL의 다양한 소식을 전달합니다.</p>
            <div className="container">
                <div className="left">
                    <div className="NewsSlider">
                        <Slider {...setting} afterChange={index => setSlideNum(index)} ref={SLIDE}>
                            {
                                NEWS.map((content) => {
                                    return (
                                        <figure key={content.id}>
                                            <a href={content.link}>
                                                <img src={process.env.PUBLIC_URL + "/assets/news0" + content.id + ".jpg"} alt="" />
                                                <div className="box">
                                                    <span>{content.date}</span>
                                                    <div className="tit">{content.title}</div>
                                                    <div className="desc">{content.desc}</div>
                                                </div>
                                            </a>
                                        </figure>
                                    )
                                })
                            }
                        </Slider>
                        <div className="slideArrows">
                            <button onClick={() => SLIDE.current.slickPrev()}><i className="xi-angle-left-thin"></i></button>
                            <button onClick={() => SLIDE.current.slickNext()}><i className="xi-angle-right-thin"></i></button>
                        </div>
                    </div>
                </div>
                <div className="right">
                    {
                        INFORM.map((content, idx) => {
                            return (
                                <div className="box">
                                    <div>
                                        <a href={content.link}>
                                            <img src={process.env.PUBLIC_URL + content.src} alt="" />{content.title}
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Relation;