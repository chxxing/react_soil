import Gnb from "./Gnb";

const Header = () => {
    return (
        <header>
            <div className="Container">
                <h1>
                    <a href="./">
                        <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="" />
                    </a>
                </h1>
            </div>

            <Gnb />

            <div className="head_icon">
                <ul>
                    <li><a href="#!"><i className="xi-search"></i></a></li>
                    <li><a href="#!"><i className="xi-bars"></i></a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;