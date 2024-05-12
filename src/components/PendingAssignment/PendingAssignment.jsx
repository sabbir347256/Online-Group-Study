// import { useLoaderData } from "react-router-dom";

import {useEffect, useState } from "react";
// import { AuthProvider } from "../../AuthProvider/AuthContext";
import OnlyPendingAssignment from "./OnlyPendingAssignment";

const PendingAssignment = () => {
    // const { user } = useContext(AuthProvider);
    const [pendingAssignment, setpendingAssignment] = useState([]);
    // const [isloading,setIsLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/submitAssignment')
            .then(res => res.json())
            .then(data => {
                setpendingAssignment(data)
                // const filterData = data?.filter(singleData => singleData?.email == user?.email)
                // setpendingAssignment(filterData);
                // setIsLoading(false);
            })
    }, [])
    // console.log(pendingAssignment)
    return (
        <div>
            {
                pendingAssignment.map(data => <OnlyPendingAssignment key={data._id} data={data}></OnlyPendingAssignment>)
            }
        </div>
    );
};

export default PendingAssignment;