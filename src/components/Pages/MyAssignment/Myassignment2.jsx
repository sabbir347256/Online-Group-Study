import PropTypes from 'prop-types'

const Myassignment2 = ({ data }) => {
    const { title, num, feedback, name, email } = data;
    return (
        <div className='mt-5 overflow-x-auto'>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Assignment Name</th>
                        <th>Assignment Mark</th>
                        <th>Examinee Name</th>
                        <th>User Email</th>
                        <th>Status</th>
                        <th>FeedBack</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <td>
                            <div className="flex items-center gap-3">
                                <div>
                                    <div className="font-bold">{title}</div>
                                </div>
                            </div>
                        </td>
                        <td className='font-bold'>
                            {num}
                        </td>
                        <td className='font-bold'>
                            {name}
                        </td>
                        <td className='font-bold'>
                            {email}
                        </td>
                        <td className='font-bold'>{
                            num > 0 ? <h2 className='text-green-500'>Complete</h2> : <h2>Pending</h2>
                        }</td>
                        <td className='font-bold'>
                            {feedback}
                        </td>
                        
                    </tr>
                </tbody>
                {/* foot */}

            </table>
        </div>
    );
};

Myassignment2.propTypes = {
    data: PropTypes.object
}

export default Myassignment2;