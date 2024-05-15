
import { useContext, useEffect, useState } from "react";
import OnlyPendingAssignment from "./OnlyPendingAssignment";
import { AuthProvider } from "../../AuthProvider/AuthContext";
import { Helmet } from "react-helmet-async";

const PendingAssignment = () => {
    const { user, theme } = useContext(AuthProvider);
    const [pendingAssignment, setpendingAssignment] = useState([]);
    useEffect(() => {
        fetch(`https://online-group-study-server-site.vercel.app/submitAssignment?email=${user?.email}`, { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                setpendingAssignment(data)
            })
    }, [])
    return (
        <div className={theme === 'light' ? "bg-gray-100 min-h-screen" : "bg-gray-700 min-h-screen"}>
            <Helmet>
                <title>E-Group Study - PendingAssignment</title>
            </Helmet>
            {
                pendingAssignment.map(data => <OnlyPendingAssignment key={data._id} data={data}></OnlyPendingAssignment>)
            }
        </div>
    );
};

export default PendingAssignment;