import { useEffect, useState } from "react";
import AllFeatureCard from "./AllFeatureCard";

const Feature = () => {
    const [featureData, setFeatureData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/feature')
            .then(res => res.json())
            .then(data => setFeatureData(data))
    }, [])
    return (
        <div className="featureBg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10">
            {
                featureData.map(data => <AllFeatureCard key={data._id} data={data}></AllFeatureCard>)
            }
        </div>
    );
};

export default Feature;