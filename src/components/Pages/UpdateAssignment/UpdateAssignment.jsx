import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateAssignment = () => {
    const update = useLoaderData();
    // const navigate = useNavigate();


    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const mark = form.mark.value;
        const imageurl = form.imageurl.value;
        const inputField = form.inputField.value;
        const user ={title, mark, imageurl, inputField};
        // console.log(user)
        // console.log(_id)
        fetch(`http://localhost:5000/updateAssignment/${update._id}`, {
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
                    // navigate(location?.state ? location.state : '/assignment')
                }
            })
    }
    
    return (
        <div>
            <form onSubmit={handleUpdate} className="p-16 pl-20">
                <div>
                    <input type="text" name='title' className="w-96 p-2 border-2 border-black rounded-md" placeholder="Title here" required />
                    <br />
                    <input type="number" className="w-96 p-2 border-2 border-black rounded-md" name='mark' placeholder="Mark" required />
                    <br />
                    <input type="text" name='imageurl' className="my-3 w-96 p-2 border-2 border-black rounded-md" placeholder="Image Url" required />
                    <br />
                    <select className="p-2 border-2 border-black rounded-md" name="inputField" id="" required>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                    <br />
                </div>
                <div className="mt-3">
                    <button className="btn btn-outline bg-[#FFC55A]">Update Assignment</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateAssignment;