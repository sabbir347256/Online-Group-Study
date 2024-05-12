import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MarkPage = () => {
    const loadData = useLoaderData();
    const { doc, textarea } = loadData;

    const handleMark = e =>{
        e.preventDefault();
        const form = e.target;
        const mark = form.mark.value;
        const feedback = form.feedback.value;
        const user = {mark,feedback};
        fetch(`http://localhost:5000/updateMark/${loadData._id}`, {
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
        // console.log(user)
    }

    // console.log(loadData)
    return (
        <div className="mt-10">
            <form onSubmit={handleMark} className="flex">
                <div className="relative flex">
                    <iframe src={doc} width="640" height="380" allow="autoplay"></iframe>
                    <h2 className="relative left-40"><span className="text-lg font-bold">Examinee Note</span> <input type="text" defaultValue={textarea} /></h2>
                </div>
                <div className="flex items-center relative right-28 mt-16 ">
                    <div>
                        <h2 className="font-bold text-lg">Give Mark</h2>
                        <input className="p-2 border-2 border-gray-300 rounded-md" type="number" name="mark" id="" placeholder="mark here" />
                    </div>
                    <div className="ml-16">
                        <h2 className="font-bold text-lg">Feedback </h2>
                        <input className="p-2 border-2 border-gray-300 rounded-md" type="text" name="feedback" id="" placeholder="feedback" />
                    </div>
                </div>
                <input className="btn btn-ghost bg-yellow-200 relative right-[575px] top-80 w-[460px]" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default MarkPage;
