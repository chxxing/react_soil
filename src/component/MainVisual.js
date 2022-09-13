import { useRef } from "react";
import MainSlider from "react-slick";
import "slick-carousel/slick/slick.css";

const SlideDB = [
    { id: 1, content: "Global Leader", desc: "아시아 · 태평양을 넘어 글로벌 리더로", p: "새로운 성장의 시대를 열어갑니다." },
    { id: 2, content: "New Quantum Leap", desc: "RUC/ODC 프로젝트 성공으로", p: "한 차원 높은 비전을 실현합니다." },
    { id: 3, content: "Vision 2030", desc: "최고의 경쟁력과 창의성을 갖춘", p: "친환경 에너지 · 화학 기업" }
]


const MainVisual = () => {
    const MAINSLIDE = useRef(null);
    const setting = {
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
    }
    return (
        <section className="MainVisual">
            <MainSlider {...setting} ref={MAINSLIDE}>
                {
                    SlideDB.map((slide, idx) => {
                        return (
                            <figure key={slide.id} className={'itm0' + slide.id}>
                                <div className="inner">
                                    <h2>{slide.content}</h2>
                                    <p>{slide.desc}</p>
                                    <p>{slide.p}</p>
                                </div>
                            </figure>
                        )
                    })
                }
            </MainSlider>
            <ul className="slideDots">

            </ul>
            <div className="slideArrows">
                <button onClick={() => MAINSLIDE.current.slickPrev()}><i className="xi-angle-left-thin"></i></button>
                <button onClick={() => MAINSLIDE.current.slickNext()}><i className="xi-angle-right-thin"></i></button>
            </div>
        </section>
    );
}

export default MainVisual;