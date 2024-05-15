import { useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthProvider } from "../../AuthProvider/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ViewAssignmentDetails = () => {
    const { user, theme } = useContext(AuthProvider)
    const detailsData = useLoaderData();
    const navigate = useNavigate();
    const { id } = useParams();
    const details = detailsData.find(data => data._id == id);
    const { title, imageurl, descrip, mark, inputField, calender, email } = details;

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const num = form.num.value;
        const name = form.name.value;
        const textarea = form.textarea.value;
        const doc = form.doc.value;
        const email = user?.email;
        const user1 = { title, num, doc, email, textarea, name }
        fetch('https://online-group-study-server-site.vercel.app/submitAssignment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user1)
        })
            .then(res => {
                res.json();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Submit Successfully",
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {

            })
        navigate(location?.state ? location.state : '/allassignment')

    }

    return (
        <div className={theme === 'light' ? "bg-gray-100 min-h-screen libre-font" : 'bg-gray-700 text-white'}>
            <Helmet>
                <title>E-Group Study - ViewAssignmentDetails</title>
            </Helmet>
            <div className="max-w-6xl mx-auto">
                <h2 className="text-center text-4xl font-extrabold pt-10">Assignment Details Information</h2>
                <div className="grid  md:grid-cols-5 lg:grid-cols-5 pt-16 px-5 ml-8">
                    <div className="col-span-3 pr-12 relative top-52 md:top-0 lg:top-0 left-2 md:left-0 lg:left-0">
                        <h2><span className="text-red-600 font-bold">Assignment Name :</span> <br /> <span className="font-extrabold text-4xl"> {title}</span></h2>
                        <h2 className="my-5"><span className="text-red-600">Description : <br /> </span> <span className="font-bold">{descrip}</span></h2>
                        <h2><span className="text-red-600">Default Mark :</span> <span className="font-bold">{mark}</span></h2>
                        <h2 className="my-5"><span className="text-red-600">Difficulty Level : </span><span className="font-bold">{inputField}</span></h2>
                        <h2><span className="text-red-600">Submitted Date : </span><span className="font-bold">{calender}</span></h2>
                        <h2 className="my-5"><span className="text-red-600">User Email : </span><span className="font-bold">{email}</span></h2>
                        <button className="btn bg-[#F97300] text-white mb-16 md:mb-0 lg:mb-0 relative left-10 md:left-0 lg:left-0" onClick={() => document.getElementById('my_modal_1').showModal()}>Take Assignment</button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box h-96 bg-gray-200 md:pl-32">
                                <form onSubmit={handleSubmit}>
                                    <h2 className="font-bold text-lg">Assignment Name</h2>
                                    <input className="p-2 rounded-lg border-2 border-black" type="text" name="title" placeholder="Assignment Title" required />
                                    <br />
                                    <h2 className="font-bold text-lg">Mark(Please Do not fill up this field, this field fill up  by examiner)</h2>
                                    <input className="p-2 rounded-lg border-2 border-black" type="number" name="num" placeholder="Mark here" />
                                    <br />
                                    <h2 className="font-bold text-lg">Your Name :</h2>
                                    <input className="p-2 rounded-lg border-2 border-black" type="text" name="name" placeholder="Your Name here" id="" required />
                                    <br />
                                    <h2 className="font-bold text-lg">Submit Your Doc Link</h2>
                                    <input className="p-2 rounded-lg border-2 border-black" type="url" name="doc" placeholder="doc link" required />
                                    <br />
                                    <h2 className="font-bold text-lg">Note</h2>
                                    <input type="text" name="textarea" placeholder="textarea" className="h-16 w-[198px] border-2 border-black rounded-lg" required />
                                    <br />
                                    <button className="btn w-48 ml-1 btn-primary mt-4"> <input type="submit" value="Submit" /></button>
                                </form>
                            </div>
                        </dialog>
                    </div>
                    <div className="col-span-2 relative bottom-[700px] md:bottom-0 lg:bottom-0 left-5 md:left-0 lg:left-0">
                        <img className="border-2 border-black p-5 rounded-lg" src={imageurl} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewAssignmentDetails;