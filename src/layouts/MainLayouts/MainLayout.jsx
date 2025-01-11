import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="">
            {/* Navbar */}
            <div className="bg-[#F1F5F9] sticky top-0 z-50">
                <div className="w-11/12 mx-auto">
                    <Navbar></Navbar>
                </div>
            </div>
            {/* Outlet */}
            <div className="">
                <Outlet>
                </Outlet>
            </div>
            {/* ---Footer--- */}
            <div className="bg-slate-800 mt-20">
                <div className="w-11/12 mx-auto">
                    <Footer></Footer>
                </div>
                {/* Divider */}
                <div className="border-b border-solid border-[#5EEAD4]"></div >
                {/* CopyRight */}
                <footer className="footer footer-center text-white py-2">
                    <aside>
                        <p className="text-base">Copyright © {new Date().getFullYear()} - All right reserved by MODERN HOTEL Ltd</p>
                    </aside>
                </footer>
            </div>
        </div>
    );
};

export default MainLayout;