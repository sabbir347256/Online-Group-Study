import { useContext, useEffect, useState } from "react";
import Assignment from "./Assignment";
import { AuthProvider } from "../../../AuthProvider/AuthContext";
import { Helmet } from "react-helmet-async";

const AllAssignment = () => {
    const { loading ,theme} = useContext(AuthProvider);
    const [assignment, setAssignment] = useState([]);
    const [value, setvalue] = useState("Easy");

    const getData = () => {
        fetch('https://online-group-study-server-site.vercel.app/assignment')
            .then(res => res.json())
            .then(data => {
                if(value === 'All') {
                    setAssignment(data);
                }else if(value === "Easy") {
                    setAssignment(data.filter((a) => a.inputField === 'Easy'));
                } else if (value === "Medium") {
                    setAssignment(data.filter((b) => b.inputField === 'Medium'));
                } else if (value === "Hard") {
                    setAssignment(data.filter((c) => c.inputField === 'Hard'));
                } else {
                    setAssignment(data);
                }

            })
    }


    useEffect(() => {
        getData();
    }, [value])

    if (loading) {
        return <p className="text-red-600 text-center"><span className="loading loading-infinity loading-lg"></span></p>;
    }
    return (
        <div className={theme === 'light' ? 'assignmentBg min-h-screen' : 'bg-gray-800 min-h-screen'}>
            <Helmet>
                <title>E-Group Study || Assignment</title>
            </Helmet>
            <div className="flex justify-center items-center py-14">
                <select
                    className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 text-base font-semibold outline-none"
                    onChange={(e) => setvalue(e.target.value)}
                >
                    <option value="All">All </option>
                    <option value="Easy">Easy </option>
                    <option value="Medium">Medium </option>
                    <option value="Hard">Hard </option>
                </select>
            </div>
            <div className=" grid ml-8 md:ml-8 lg:ml-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {
                    assignment.map(data => <Assignment key={data._id} data={data} getData={getData}></Assignment>)
                }
            </div>
        </div>
    );
};

export default AllAssignment;