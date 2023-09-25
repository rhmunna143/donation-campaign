import { useLoaderData } from "react-router-dom";
import Banner from "../components/header/Banner";
import HomeCard from "../components/HomeCard/HomeCard";


const Home = () => {
    const data = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            {data?.map(item => <HomeCard key={item.id} data={item}></HomeCard>
            )}
        </div>
    );
};

export default Home;