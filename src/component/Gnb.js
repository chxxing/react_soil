const NavDB = [
    {
        navid: 1, title: "Company", link: "#!", submenu: [
            { title: "CEO", link: "#!" },
            { title: "회사현황", link: "#!" },
            { title: "연혁", link: "#!" },
            { title: "인재채용", link: "#!" }
        ]
    },
    {
        navid: 2, title: "Business", link: "#!", submenu: [
            { title: "정유", link: "#!" },
            { title: "윤활", link: "#!" },
            { title: "석유화학", link: "#!" },
            { title: "연구개발", link: "#!" }
        ]
    },
    {
        navid: 3, title: "Sustainability", link: "#!", submenu: [
            { title: "ESG경영체계", link: "#!" },
            { title: "ESG성과", link: "#!" },
            { title: "지속가능성보고서", link: "#!" },
            { title: "ESG경영", link: "#!" }
        ]
    },
    {
        navid: 4, title: "Relation", link: "#!", submenu: [
            { title: "S-OIL소식", link: "#!" },
            { title: "사회공헌", link: "#!" },
            { title: "PR", link: "#!" },
            { title: "IR", link: "#!" }
        ]
    }
]

const Gnb = () => {
    return (
        <nav className="Gnb">
            <ul className="menu">
                {
                    NavDB.map((it) => (<li key={it.navid}>
                        <a href={it.link}>{it.title}</a>
                        <ul className="submenu">
                            {
                                it.submenu.map((smenu, idx) =>
                                    (<li key={idx}><a href={smenu.link}>{smenu.title}</a></li>)
                                )
                            }
                        </ul>
                    </li>)
                    )
                }
            </ul>
        </nav>
    )
}

export default Gnb;