import '../css/header.css';

function Header(){
    return(
        <div>
            <header>
                <div className="inner">
                 <nav>
                    <a className="logo"><strong>FreshDream</strong></a> 
                    <a className="active" href="#">MENU</a>
                    <a href="#">STORE</a>
                    <a href="#">ABOUT</a>
                    <a href="#">CONTACT</a>
                </nav>
                </div>
            </header>
        </div>
    );
}
export default Header;
