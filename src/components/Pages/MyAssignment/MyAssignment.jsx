import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../../AuthProvider/AuthContext";
import Myassignment2 from "./Myassignment2";

const MyAssignment = () => {
    const{user} = useContext(AuthProvider);
    const[myassignment,setMyAssignment] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myassignment`)
        .then(res => res.json())
        .then(data => {
            const filterData = data?.filter(singleData => singleData?.email == user?.email)
            setMyAssignment(filterData);
        })
    },[user?.email])
    console.log(myassignment)

    return (
        <div>
            {
                myassignment.map(data => <Myassignment2 key={data._id} data={data}></Myassignment2>)
            }
        </div>
    );
};

export default MyAssignment;