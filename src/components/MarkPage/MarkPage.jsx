import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MarkPage = () => {
    const loadData = useLoaderData();
    const { doc, textarea } = loadData;
    const navigate = useNavigate();


    const handleMark = e => {
        e.preventDefault();
        const form = e.target;
        const mark = form.mark.value;
        const feedback = form.feedback.value;
        const user = { mark, feedback };
        fetch(`https://online-group-study-server-site.vercel.app/updateMark/${loadData._id}`, {
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
                        title: "Mark Give Done",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(location?.state ? location.state : '/pendingassignment')
                }
            })
    }

    return (
        <div className="mt-10 my-10">
            <Helmet>
                <title>E-Group Study - MarkPage</title>
            </Helmet>
            <form onSubmit={handleMark} className="flex flex-col lg:flex-row">
                <div className="relative flex flex-col lg:flex-row">
                    <iframe src={doc} className="w-80 ml-7 md:ml-10 lg:ml-0 h-60  md:w-[680px] md:h-[380px]" allow="autoplay"></iframe>
                    <h2 className="relative ml-11 md:ml-48 lg:ml-0 lg:left-40 mt-5 md:mt-7 lg:mt-0"><span className="text-lg font-bold">Examinee Note</span> <br /> <input type="text" defaultValue={textarea} /></h2>
                </div>
                <div className="flex flex-col lg:flex-row items-center relative lg:right-28 mt-16 ">
                    <div>
                        <h2 className="font-bold text-lg">Give Mark</h2>
                        <input className="p-2 w-72 md:w-96 lg:w-40 border-2 border-gray-300 rounded-lg" type="number" name="mark" id="" placeholder="mark here" required />
                    </div>
                    <div className="lg:ml-16">
                        <h2 className="font-bold text-lg">Feedback </h2>
                        <input className="p-2 w-72 md:w-96 lg:w-40 border-2 border-gray-300 rounded-lg" type="text" name="feedback" id="" placeholder="feedback" required />
                    </div>
                </div>
                <input className="btn btn-ghost bg-yellow-200 relative  my-5 ml-11 md:ml-48 lg:ml-0  lg:right-[490px]  lg:top-80 w-72 md:w-[387px]" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default MarkPage;
