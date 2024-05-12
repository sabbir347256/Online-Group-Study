import { useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthProvider } from "../../AuthProvider/AuthContext";

const ViewAssignmentDetails = () => {
    const{user} = useContext(AuthProvider)
    const detailsData = useLoaderData();
    const navigate = useNavigate();
    const { id } = useParams();
    const details = detailsData.find(data => data._id == id);
    const { title, imageurl, descrip, mark, inputField, calender, email } = details;
    // console.log(details)

    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const num = form.num.value;
        const name = form.name.value;
        const textarea = form.textarea.value;
        const doc = form.doc.value;
        const email = user?.email;
        const user1 = {title,num,doc,email,textarea,name}
        console.log(user1)
        fetch('http://localhost:5000/submitAssignment',{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(user1)
        })
        .then(res =>res.json())
        .catch(error => {
            console.error(error)
        })
        navigate(location?.state ? location.state :'/allassignment')
        
    }

    return (
        <div className="bg-gray-200 h-screen">
            <h2 className="text-center text-4xl font-extrabold mt-5">Assignment Details Information</h2>
            <div className="grid grid-cols-5 p-12">
                <div className="col-span-2">
                    <img src={imageurl} alt="" />
                </div>
                <div className="col-span-3 ml-10">
                    <h2>{title}</h2>
                    <h2>{descrip}</h2>
                    <h2>{mark}</h2>
                    <h2>{inputField}</h2>
                    <h2>{calender}</h2>
                    <h2>{email}</h2>
                    <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Take Assignment</button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box h-96 bg-gray-200 pl-32">
                            <form onSubmit={handleSubmit}>
                                <h2 className="font-bold text-lg">Assignment Name</h2>
                                <input className="p-2 rounded-lg border-2 border-black" type="text" name="title" placeholder="Assignment Title" />
                                <br />
                                <h2 className="font-bold text-lg">Mark</h2>
                                <input className="p-2 rounded-lg border-2 border-black" type="number" name="num" placeholder="Mark here" />
                                <br />
                                <h2 className="font-bold text-lg">Your Name :</h2>
                                <input className="p-2 rounded-lg border-2 border-black"  type="text" name="name" placeholder="Your Name here" id="" />
                                <br />
                                <h2 className="font-bold text-lg">Submit Your Doc Link</h2>
                                <input className="p-2 rounded-lg border-2 border-black"  type="url" name="doc" placeholder="doc link" />
                                <br />
                                <h2 className="font-bold text-lg">Note</h2>
                                <input type="text" name="textarea" placeholder="textarea" className="h-16 w-[198px] border-2 border-black rounded-lg" />
                                <br />
                                <button className="btn w-48 ml-1 btn-primary mt-4"> <input type="submit" value="Submit" /></button>
                            </form>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default ViewAssignmentDetails;