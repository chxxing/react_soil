const BsnDB = [
    { id: 1, title: "정유부문 (Oil Refining Business)", desc: "하루 정제능력 669,000 B/D", link: "#!" },
    { id: 2, title: "윤활부문 (Lube Oil Business)", desc: "윤활기유 하루 생산능력 44,700 B/D", link: "#!" },
    { id: 3, title: "석유화학부문 (Petrochemical Business)", desc: "파라자일렌 연간 생산능력 1,850,000t", link: "#!" },
    { id: 4, title: "올레핀부문 (Olefin Business)", desc: "몰레핀 하류제품 생산능력 705,000t", link: "#!" },
]

const Business = () => {
    return (
        <section className="Business sc">
            <h2>BUSINESS</h2>
            <p>균형 잡힌 사업 포트폴리오를 통해 높은 효율성을 추구합니다.</p>
            <div className="container">
                {
                    BsnDB.map((content) => {
                        return (
                            <div className="flexBox" key={content.id}>
                                <figure>
                                    <a href={content.link}>
                                        <img src={process.env.PUBLIC_URL + "/assets/business0" + content.id + ".jpg"} alt="" />
                                    </a>
                                    <div className="txtBox">
                                        <h3>{content.title}</h3>
                                        <p className="desc">{content.desc}</p>
                                    </div>
                                </figure>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Business;