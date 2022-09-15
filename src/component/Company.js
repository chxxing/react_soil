const ComDB = [
    { id: 1, title: "복합석유화학시설 RUC/ODC", desc: "지속성장을 견인하는 에쓰-오일의 경쟁력", link: "#!" },
    { id: 2, title: "DJSI 월드 기업 선정", desc: "12년 연속 DJSI 월드 편입\n 석유정제부분 최우수기업", link: "#!" },
]

const CompanyDB = [
    { id: 1, title: "탄소경영 글로벌 인증", desc: "친환경 생산 및 에너지 저감을 위해\n 선도적 노력", link: "#!" },
    { id: 2, title: "S-OIL 연혁", desc: "창립에서 현재까지", link: "#!" }
]

const Company = () => {
    return (
        <section className="Company sc">
            <h2>COMPANY</h2>
            <p>최고의 경쟁력과 창의성을 갖춘 친환경 에너지 · 화학 기업</p>
            <div className="container">
                <div>
                    {
                        ComDB.map((content) => {
                            return (
                                <figure key={content.id}>
                                    <div className="imgBox">
                                        <a href={content.link}>
                                            <img src={process.env.PUBLIC_URL + "/assets/company0" + content.id + ".png"} alt="" />
                                        </a>
                                    </div>
                                    <div className="txtBox">
                                        <h3>{content.title}</h3>
                                        <p className="desc">{content.desc}</p>
                                    </div>
                                </figure>
                            )
                        })
                    }
                </div>
                <div>
                    {
                        CompanyDB.map((content) => {
                            return (
                                <figure key={content.id}>
                                    <div className="imgBox">
                                        <a href={content.link}>
                                            <img src={process.env.PUBLIC_URL + "/assets/company00" + content.id + ".png"} alt="" />
                                        </a>
                                    </div>
                                    <div className="txtBox">
                                        <h3>{content.title}</h3>
                                        <p className="desc">{content.desc}</p>
                                    </div>
                                </figure>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Company;