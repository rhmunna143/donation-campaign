import { useLoaderData } from "react-router-dom";
import Banner from "../components/header/Banner";
import HomeCard from "../components/HomeCard/HomeCard";



const Home = () => {
    const data = useLoaderData()

    return (
        <div className="rounded-md">
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto my-20 p-4 lg:p-0">
                {data?.map(item => <HomeCard key={item.id} data={item}></HomeCard>
                )}
            </div>
        </div>
    );
};

export default Home;