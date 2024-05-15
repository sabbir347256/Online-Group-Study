import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../../AuthProvider/AuthContext";
import Myassignment2 from "./Myassignment2";
import { Helmet } from "react-helmet-async";

const MyAssignment = () => {
    const { user } = useContext(AuthProvider);
    const [myassignment, setMyAssignment] = useState([]);
    useEffect(() => {
        fetch(`https://online-group-study-server-site.vercel.app/myassignment?email=${user?.email}`, { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                const filterData = data?.filter(singleData => singleData?.email == user?.email)
                setMyAssignment(filterData);
            })
    }, [user?.email])

    return (
        <div className="min-h-screen">
            <Helmet>
                <title>E-Group Study - MyAssignment</title>
            </Helmet>
            {
                myassignment.map(data => <Myassignment2 key={data._id} data={data}></Myassignment2>)
            }
        </div>
    );
};

export default MyAssignment;