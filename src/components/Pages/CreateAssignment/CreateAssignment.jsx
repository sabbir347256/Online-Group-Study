import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const CreateAssignment = () => {
    const [startDate, setStartDate] = useState(new Date());

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const title = form.title.value;
        const descrip = form.descrip.value;
        const mark = form.mark.value;
        const imageurl = form.imageurl.value;
        const inputField = form.inputField.value;
        const calender = form.calender.value;
        const user ={title, descrip, mark, imageurl, inputField, calender,email};
        fetch('http://localhost:5000/assignment',{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data))


    }
    return (
        <div className='createBg h-screen raleway'>
            <h2 className="text-5xl font-extrabold relative top-10 left-20 text-[#D9EDBF]">Create Your Assignment</h2>
            <form onSubmit={handleSubmit} className="p-16 pl-20">
                <div>
                    <input type="text" name='title' className="w-96 p-2 border-2 border-black rounded-md" placeholder="Title here" required />
                    <br />
                    <input type="email" name='email' className="w-96 p-2 border-2 border-black rounded-md mt-3" placeholder="Email" required />
                    <br />
                    <input type="text" name='descrip' className='p-10 my-3  w-96 border-2 border-black rounded-md' placeholder="Description" required />
                    <br />
                    <input type="number" className="w-96 p-2 border-2 border-black rounded-md" name='mark' placeholder="Mark" required />
                    <br />
                    <input type="text" name='imageurl' className="my-3 w-96 p-2 border-2 border-black rounded-md" placeholder="Image Url" required />
                    <br />
                    <select className="p-2 border-2 border-black rounded-md"  name="inputField" id="" required>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                    <br />
                    <div className="mt-3 ">
                        <DatePicker type='text' name="calender" className="p-2 border-2 border-black rounded-md" required selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                </div>
                <div className="mt-3">
                    <button className="btn btn-outline bg-[#FFC55A]">Create Assignment</button>
                </div>
            </form>
        </div>
    );
};

export default CreateAssignment;