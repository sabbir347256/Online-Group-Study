import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types'
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthProvider } from '../../../AuthProvider/AuthContext';
const Assignment = ({ data, getData }) => {
    const { user } = useContext(AuthProvider);
    const { email, _id, title, mark, imageurl, inputField } = data;

    const handleDelete = (_id) => {
        if (email !== user.email) return alert('not allowed');

         Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://online-group-study-server-site.vercel.app/deleteassignment/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        getData();
                    })

            }
        })
    }


    return (
        <div>
            <div className='max-w-6xl mx-auto py-10 nunito'>
                <Card sx={{ maxWidth: 345 }}>
                    <div className='h-[300px]'>
                        <img className='h-72 w-96' src={imageurl} alt="" />
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <h2 >Assignment Name : <span className='font-extrabold'>{title}</span> </h2>
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            <h2>Mark :{mark}</h2>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h2>Assignment Difficulty Level : <br /> {inputField}</h2>
                        </Typography>
                    </CardContent>
                    <div className='mb-3 pl-3 text-white'>
                        <button onClick={() => handleDelete(_id)} className='p-2 rounded-lg bg-[#C40C0C]' size="small">Delete</button>
                        <NavLink to={`/updateassignment/${data._id}`}><button className='p-2 rounded-lg mx-3 bg-[#87A922]' size="small">Update</button></NavLink>
                        <NavLink to={`/assignmentDetails/${data._id}`}><button className='p-2 rounded-lg bg-[#7743DB]' size="small">View Assignment</button></NavLink>
                    </div>
                </Card>
            </div>
        </div>
    );
};
Assignment.propTypes = {
    data: PropTypes.object,
    getData: PropTypes.object
}

export default Assignment;