import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <nav className="py-10 flex justify-between items-center">
            <div className="logo">
                <img className="w-40" src="./Logo.png" alt="" />
            </div>

            <div className="nav">
                <ul className="flex gap-8">
                    <li><NavLink to="/" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                    }>Home</NavLink></li>
                    <li><NavLink to="/donation" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                    }>Donation</NavLink></li>
                    <li><NavLink to="/statistics" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                    }>Statistics</NavLink></li>
                    
                </ul>
            </div>
        </nav>
    );
};

export default Nav;