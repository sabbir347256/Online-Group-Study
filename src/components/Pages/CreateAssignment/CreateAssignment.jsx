import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthProvider } from "../../../AuthProvider/AuthContext";
import { Helmet } from "react-helmet-async";

const CreateAssignment = () => {
    const { user, theme } = useContext(AuthProvider);
    const [startDate, setStartDate] = useState(new Date());

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = user.email;
        const title = form.title.value;
        const descrip = form.descrip.value;
        const mark = form.mark.value;
        const imageurl = form.imageurl.value;
        const inputField = form.inputField.value;
        const calender = form.calender.value;
        const user1 = { title, descrip, mark, imageurl, inputField, calender, email };
        fetch(`https://online-group-study-server-site.vercel.app/assignment`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user1)
        })
            .then(res => res.json())
            .then(data => {

            })


    }
    return (
        <div className={theme === 'light' ? ' min-h-screen raleway bg-gray-100' : ' min-h-screen raleway bg-black'}>
            <Helmet>
                <title>E-Group Study - CreateAssignment</title>
            </Helmet>
            <h2 className={theme === 'light' ? "text-5xl font-extrabold relative text-center top-10  text-[#1e1a4b]" : "text-5xl font-extrabold relative text-center top-10  text-[#FFFFFF]"}>Create Your Assignment</h2>
            <form onSubmit={handleSubmit} className="top-10 md:top-10 lg:top-0 p-10 lg:p-16 lg:pl-20 lg:left-20 relative">
                <div className="flex flex-col md:flex-row lg:flex-row border-2 w-[300px] md:w-[690px] lg:w-[1000px] rounded-lg bg-white justify-center  pb-32  lg:pb-28 pt-10 lg:pt-28">
                    <div className="mr-4 relative top-3">
                        <input type="text" name='title' className="relative left-5 w-64 lg:w-96 p-2 border-2 border-black rounded-md" placeholder="Title here" required />
                        <br />
                        <input type="number" className="relative left-5 w-64 lg:w-96 my-9 p-2 border-2 border-black rounded-md" name='mark' placeholder="Mark" required />
                        <br />
                        <input type="text" name='imageurl' className="my-3 relative left-5 w-64 lg:w-96 p-2 border-2 border-black rounded-md" placeholder="Image Url" required />
                    </div>
                    <div>
                        <input type="text" name='descrip' className='p-10 my-3  relative left-5 w-64 lg:w-96 border-2 border-black rounded-md' placeholder="Description" required />
                        <br />
                        <select className="p-2 border-2 relative left-5 w-64 lg:w-96 border-black rounded-md" name="inputField" id="" required>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                        <br />
                        <div className="mt-3">
                            <DatePicker type='text' name="calender" className="p-2 relative left-5 w-64 lg:w-96 border-2 border-black rounded-md" required selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                    </div>
                </div>
                <div className="mt-3 text-center relative bottom-20 lg:right-16">
                    <button className="btn btn-outline w-64 lg:w-96 font-bold bg-[#a8df43]">Create Assignment</button>
                </div>
            </form>
        </div>
    );
};

export default CreateAssignment;