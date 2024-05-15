import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

const Errorpage = () => {
    return (
        <div>
            <Helmet>
                <title>E-Group Study - ErrorPage</title>
            </Helmet>
            <div className="border w-80 bg-green-200 rounded-lg p-10 text-center ml-[30rem] my-[6rem]">
                <h2 className="text-2xl font-bold text-red-600">Opps !! This page is not found</h2>
                <butto className='btn mt-3 font-semibold'><NavLink to='/'>Back to Home</NavLink></butto>
            </div>
        </div>
    );
};

export default Errorpage;