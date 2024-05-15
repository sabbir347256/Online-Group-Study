import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateAssignment = () => {
    const update = useLoaderData();
    const navigate = useNavigate();


    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const mark = form.mark.value;
        const imageurl = form.imageurl.value;
        const inputField = form.inputField.value;
        const user = { title, mark, imageurl, inputField };
        fetch(`https://online-group-study-server-site.vercel.app/updateAssignment/${update._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Update Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(location?.state ? location.state : '/allassignment')
                }
            })
    }

    return (
        <div className=' min-h-screen raleway bg-gray-100'>
            <Helmet>
                <title>E-Group Study - UpdateAssignment</title>
            </Helmet>
            <h2 className="text-5xl font-extrabold relative text-center top-10  text-[#1e1a4b]">Update  Assignment</h2>
            <form onSubmit={handleUpdate} className="top-10 md:top-10 lg:top-0 p-10 lg:p-16 lg:pl-20    ml-5 md:ml-0 lg:ml-0 lg:left-20 relative">
                <div className="flex flex-col md:flex-row lg:flex-row border-2 w-[300px] md:w-[690px] lg:w-[1000px] rounded-lg bg-white justify-center  pb-32  lg:pb-28 pt-10 lg:pt-28">
                    <div className="mr-4 relative top-3">
                        <input type="text" name='title' className="relative left-5 w-64 lg:w-96 p-2 border-2 border-black rounded-md" placeholder="Title here" required />
                        <br />
                        <input type="number" className="relative left-5 w-64 lg:w-96 my-9 p-2 border-2 border-black rounded-md" name='mark' placeholder="Mark" required />
                        <br />
                        <input type="text" name='imageurl' className="my-3 relative left-5 w-64 lg:w-96 p-2 border-2 border-black rounded-md" placeholder="Image Url" required />
                    </div>
                    <div>
                        <select className="p-2 border-2 relative mt-8 md:mt-3 lg:mt-3 left-5 w-64 lg:w-96 border-black rounded-md" name="inputField" id="" required>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                </div>
                <div className="mt-3 text-center relative bottom-20 mr-9 md:mr-0 lg:mr-0 lg:right-16">
                    <button className="btn btn-outline w-64 lg:w-96 font-bold bg-[#a8df43]">Update Assignment</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateAssignment;

