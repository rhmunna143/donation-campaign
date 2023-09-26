import { useLoaderData } from "react-router-dom";
import Banner from "../components/header/Banner";
import HomeCard from "../components/HomeCard/HomeCard";
import { useState } from "react";



const Home = () => {
    const data = useLoaderData()
    const [searchResult, setSearchResult] = useState(data)

    const handleSearchClick = (value) => {
        const searchFilter = data?.filter(item => item.category == value)
        
        setSearchResult(searchFilter)
    }

    return (
        <div className="rounded-md">
            <Banner handleSearchClick={handleSearchClick}></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto my-20 p-4 lg:p-0">
                {searchResult?.map(item => <HomeCard key={item.id} data={item}></HomeCard>
                )}
            </div>
        </div>
    );
};

export default Home;