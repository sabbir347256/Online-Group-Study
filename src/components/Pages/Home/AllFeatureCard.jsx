import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types'
const AllFeatureCard = ({data}) => {
    const {name,Class,image_url} = data;

    return (
        <div className='max-w-6xl mx-auto my-10'>
            <Card sx={{ maxWidth: 345 }}>
                <div className='h-[300px]'>
                    <img className='h-72 w-96' src={image_url} alt="" />
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        {Class}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
};

AllFeatureCard.propTypes ={
    data : PropTypes.object
}

export default AllFeatureCard;