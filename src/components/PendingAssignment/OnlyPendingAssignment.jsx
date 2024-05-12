import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
const OnlyPendingAssignment = ({ data }) => {
    const {_id, title, num, name, email } = data;
    return (
        <div className="overflow-x-auto">
            <table className="table mt-5">
                {/* head */}
                <thead>
                    <tr>
                        <th>Assignment Name</th>
                        <th>Assignment Mark</th>
                        <th>Examinee Name</th>
                        <th>User Email</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                </div>
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
                        <td className='font-bold'>Pending</td>
                        <th>
                            <NavLink to={`/markpage/${_id}`}><button className="btn btn-ghost bg-yellow-300">Give Mark</button></NavLink>
                        </th>
                    </tr>
                </tbody>
                {/* foot */}

            </table>
        </div>
    );
};

OnlyPendingAssignment.propTypes = {
    data: PropTypes.object
}
export default OnlyPendingAssignment;