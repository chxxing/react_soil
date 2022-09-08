const NavDB = [
    {
        navid: 1, title: "Company", link: "#!", submenu: [
            { title: "CEO", link: "#!" },
            { title: "회사현황", link: "#!" },
            { title: "연혁", link: "#!" },
            { title: "인재채용", link: "#!" }
        ],
        subcont: [
            {
                stitle01: [
                    { content: "메세지", link: "#!" },
                    { content: "프로필", link: "#!" },
                    { content: "경영활동", link: "#!" }
                ],
                link: "#!"
            },
            {
                stitle02: [
                    { content: "aaa", link: "#!" },
                    { content: "bbb", link: "#!" },
                    { content: "ccc", link: "#!" }
                ],
                link: "#!"
            },
            {
                stitle03: [
                    { content: "ddd", link: "#!" },
                    { content: "eee", link: "#!" },
                    { content: "fff", link: "#!" }
                ],
                link: "#!"
            },
        ]
    },
    // {
    //     navid: 2, title: "Business", link: "#!", submenu: [{ title: "회사현황", link: "#!" }], subcont: [
    //         { stitle: "개요", link: "#!" },
    //         { stitle: "경쟁력", link: "#!" },
    //         { stitle: "기업지배구조", link: "#!" },
    //         { stitle: "CI", link: "#!" }
    //     ]
    // },
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
                                (<li key={idx}><a href={smenu.link}>{smenu.title}</a>
                                    <ul>
                                        {
                                            it.subcont.map((scont, idx) =>
                                            (<li key={idx}><a href={scont.link}>{scont.stitle01?.content}
                                            </a></li>))
                                        }
                                    </ul>
                                </li>)
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