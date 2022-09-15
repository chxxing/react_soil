const SusDB = [
    { id: 1, title: "ESG 경영체계", link: "#!" },
    { id: 2, title: "ESG 성과", link: "#!" },
    { id: 3, title: "지속가능성보고서", link: "#!" },
    { id: 4, title: "ESG 경영", link: "#!" },
]

const Sustainability = () => {
    return (
        <section className="Sustainability sc">
            <h2>SUSTAINABILITY</h2>
            <p>에쓰-오일의 ESG 경영은 고객(Customers), 임직원(Employees), 주주와<br />그 밖의 이해관계자(Owners &amp; Other Stakeholders)의 기대로부터 출발합니다.<br />앞으로도 회사는 이해관계자인 C.E.O.의 기대를 반영하여<br />경제적, 환경적, 사회적으로 다양한 부가가치를 창출하고 국가경제와 사회의 지속가능한 성장에 기여하겠습니다.</p>
            <div className="container">
                <ul>
                    {
                        SusDB.map((content) => {
                            return (
                                <li><a href={content.link}>{content.title}</a></li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default Sustainability;