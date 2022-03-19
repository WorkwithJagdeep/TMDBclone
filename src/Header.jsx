import react ,{Component} from 'react'
import { FaBeer, AiOutlineShoppingCart} from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
render() { 
    return ( 
        <div className="header">
            <div className="header-left">
                <div className="logo">
                    {/* <img src="/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="logo" /> */}
                    <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="The Movie Database (TMDB)" />
                </div>
                <div className="list">
                    <Link to="/Movieslist">Movies</Link>
                    <a href="">TV Shows</a>
                    <a href="">People</a>
                    <a href="">More</a>
                </div>
            </div>
            <div className="header-right">
                <a href="">Login</a>
                <a href="">Join me</a>
                <BsSearch color='white' fontSize="20px" />
            </div>

        </div>
        );
}
}
 
export default Header;