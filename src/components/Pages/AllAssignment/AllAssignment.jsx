import { useEffect, useState } from "react";
import Assignment from "./Assignment";

const AllAssignment = () => {
    const [assignment,setAssignment] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/assignment')
        .then(res => res.json())
        .then(data => setAssignment(data))
    },[])
    return (
        <div className='assignmentBg h-screen'>
            {
                assignment.map(data => <Assignment key={data._id} data={data}></Assignment>)
            }
        </div>
    );
};

export default AllAssignment;