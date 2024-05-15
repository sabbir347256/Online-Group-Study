import { useContext, useEffect, useState } from "react";
import AllFeatureCard from "./AllFeatureCard";
import { AuthProvider } from "../../../AuthProvider/AuthContext";

const Feature = () => {
    const {theme} = useContext(AuthProvider);
    const [featureData, setFeatureData] = useState([]);
    useEffect(() => {
        fetch('https://online-group-study-server-site.vercel.app/feature')
            .then(res => res.json())
            .then(data => setFeatureData(data))
    }, [])
    return (
        <div className={theme === 'light' ? 'featureBg' : 'bg-black mt-44 md:mt-0 lg:mt-0'}>
            <div className={theme === 'light' ?"bg-gray-300 text-center py-28 lg:py-10":"bg-gray-300 text-center py-28 lg:py-10 text-black"}>
                <h2 className="text-5xl font-extrabold">Assignment Feature</h2>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10">
                {
                    featureData.map(data => <AllFeatureCard key={data._id} data={data}></AllFeatureCard>)
                }
            </div>
        </div>
    );
};

export default Feature;