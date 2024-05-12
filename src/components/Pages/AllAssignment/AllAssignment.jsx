import { useContext, useEffect, useState } from "react";
import Assignment from "./Assignment";
import { AuthProvider } from "../../../AuthProvider/AuthContext";

const AllAssignment = () => {
    const { loading } = useContext(AuthProvider);
    const [assignment, setAssignment] = useState([]);
    const [value, setvalue] = useState("easy");


    useEffect(() => {
        fetch('http://localhost:5000/assignment')
            .then(res => res.json())
            .then(data => setAssignment(data))
    }, [])

    useEffect(() => {
        if (value === "Easy") {
            setAssignment(assignment.sort((a, b) => b.inputField - a.inputField));
        } else if (value === "Hard") {
            setAssignment(assignment.sort((a, b) => a.inputField - b.inputField));
        }
    }, [value, assignment]);


    if (loading) {
        return <p className="text-red-600 text-center"><span className="loading loading-infinity loading-lg"></span></p>;
    }
    return (
        <div className='assignmentBg min-h-screen'>
            <div className="flex justify-center items-center py-14">
                <select
                    className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 text-base font-semibold outline-none"
                    onChange={(e) => setvalue(e.target.value)}
                >
                    <option value="Easy">Easy </option>
                    <option value="Hard">Hard </option>
                </select>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {
                    assignment.map(data => <Assignment key={data._id} data={data}></Assignment>)
                }
            </div>
        </div>
    );
};

export default AllAssignment;