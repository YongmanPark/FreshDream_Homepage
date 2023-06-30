import '../css/style.css';
import logo from '../img/logo.jpg';

function Header(){
    return(
        <div>
            <header className='header'>
                <div className='header_logo'>
                    <img src={logo} alt='logo' className='header_logo_img'/>
                    <h1 className='header_logo_title'>FreshDream</h1>
                </div>
                <nav>
                    <ul className='header_menu'>
                        <li><a className='header_menu_item active'>Home</a></li>
                        <li><a className='header_menu_item'>Menu</a></li>
                        <li><a className='header_menu_item'>Store</a></li>
                        <li><a className='header_menu_item'>News</a></li>
                        <li><a className='header_menu_item'>Contact</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
export default Header;
