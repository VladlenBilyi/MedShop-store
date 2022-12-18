import { Link } from "react-router-dom";
import "./Home_Styles/HomePage_Navbar.css";


const HomePage_Navbar = () => {
  
    return (
      <>
        <section className="sahil_home_navbar">
            <div>
                <div className="sahil_home_nav_first-section">
                    <Link to="/ordermedicine"><div>Medicine</div></Link>
                    <Link to="/"><div>Lab Tests</div></Link>
                    <Link to="/category"><div>Healthcare</div></Link>
                    <Link to="/category"><div>Health Blogs</div></Link>
                    <Link to="/"><div>Plus</div></Link>
                    <Link to="/"><div>Offers</div></Link>
                    <Link to="/"><div>Surgeries</div></Link>
                    <Link to="/"><div>Value Store</div></Link>
                </div>
            </div>
            <div>
                <div className="sahil_home_nav_second-section">
                <Link to="/category"><div>Navigate to</div></Link>
                    <Link to="/category"><div>Categories</div></Link>
                    <Link to="/"><div>Deals of the day</div></Link>
                    <Link to="/category"><div>Featured Brands</div></Link>
                    <Link to="/category"><div>Lab Tests by Concern</div></Link>
                </div>
            </div>
        </section>

      </>
    );
  }

export {HomePage_Navbar};