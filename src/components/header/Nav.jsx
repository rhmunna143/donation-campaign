import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <nav className="py-10 flex gap-8 md:gap-0 justify-between items-center">
            <div className="logo">
                <img className="w-40" src="./Logo.png" alt="" />
            </div>

            <div className="nav">
                <ul className="flex gap-8 text-lg">
                    <li><NavLink to="/" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""
                    }>Home</NavLink></li>
                    <li><NavLink to="/donation" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""
                    }>Donation</NavLink></li>
                    <li><NavLink to="/statistics" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""
                    }>Statistics</NavLink></li>
                    
                </ul>
            </div>
        </nav>
    );
};

export default Nav;