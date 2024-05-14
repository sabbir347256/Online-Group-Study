import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types'
import { useContext } from 'react';
import { AuthProvider } from '../../../AuthProvider/AuthContext';
const AllFeatureCard = ({data}) => {
    const{theme} = useContext(AuthProvider);
    const {description,name,Class,image_url} = data;

    return (
        <div className='max-w-6xl mx-auto my-10 b'>
            <Card sx={{ maxWidth: 345 }}>
                <div className='h-[300px]'>
                    <img className='h-72 w-96' src={image_url} alt="" />
                </div>
                <CardContent className={theme === 'light' ?' border-2  border-white' : 'bg-black text-white border-2 border-white'}>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        {Class}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className=''>
                        <h2 className={theme === 'light'?'font-bold text-black' :'font-bold text-white'}>Description:</h2>
                        {
                                <p className={theme === 'light'?'text block':'text-white'}>{description.slice(0,200)}</p>
                        }
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

AllFeatureCard.propTypes ={
    data : PropTypes.object
}

export default AllFeatureCard;