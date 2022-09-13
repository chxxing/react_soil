import Gnb from "./Gnb";

const Header = () => {
    return (
        <header className="Header">
            <div className="container">
                <h1>
                    <a href="./">
                        <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="" />
                    </a>
                </h1>

                <Gnb />

                <div className="head_icon">
                    <ul>
                        <li><a href="#!"><i className="xi-search"></i></a></li>
                        <li><a href="#!"><i className="xi-bars"></i></a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;