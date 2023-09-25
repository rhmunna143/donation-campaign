import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";


const Details = () => {
    const [detailsCard, setDetailsCard] = useState([])
    const { id } = useParams()
    const cards = useLoaderData()

    useEffect(() => {
        const findCard = cards?.find(card => card.id == id)

        setDetailsCard(findCard)
    }, [id, cards, detailsCard])

    return (
        <div className="max-w-6xl mx-auto my-14 px-4 lg:px-0">
            <DetailsCard detailsCard={detailsCard}></DetailsCard>
        </div>
    );
};

export default Details;