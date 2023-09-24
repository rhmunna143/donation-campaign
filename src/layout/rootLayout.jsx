import { Outlet } from "react-router-dom";
import Nav from "../components/header/Nav";


const RootLayout = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Nav></Nav>


            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;