import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="">
            {/* Navbar */}
            <div className="bg-[#F1F5F9]">
                <div className="w-10/12 mx-auto">
                    <Navbar></Navbar>
                </div>
            </div>
            {/* Outlet */}
            <div className="w-10/12 mx-auto">
                <Outlet>
                </Outlet>
            </div>
            {/* Footer */}
            <div className="bg-slate-800 mt-24">
            <div className="w-10/12 mx-auto">
                <Footer></Footer>
            </div>
            </div>
        </div>
    );
};

export default MainLayout;