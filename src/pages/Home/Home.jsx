import Banner from "../../components/Banner/Banner";
import Count from "../../components/Count/Count";

const Home = () => {
    return (
        <div className="">
            {/* Banner */}
            <div>
                <Banner></Banner>
            </div>
            {/* React-Count */}
            <div>
                <Count></Count>
            </div>
            {/* others */}
            <div>
            </div>
        </div>
    );
};

export default Home;