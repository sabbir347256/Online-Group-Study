import bannerImage from '../../../image/banner Image.jpg.png'
import bannerImage2 from '../../../image/banner2.jpg'
import bannerImage3 from '../../../image/banner4.jpeg'
import bannerImage4 from '../../../image/banner5.jpg'
import bannerImage5 from '../../../image/banner6.jpg'
const Banner = () => {
    return (
        <div className='bannerBg h-screen nunito'>
            <div>
                <div className='flex'>
                    <div className='relative left-[620px] mt-5'>
                        <img className='rounded-full h-48 w-48 border-4 shadow-2xl' src={bannerImage} alt="" />
                        <img className='rounded-full h-48 w-48 border-4 mt-16 shadow-2xl' src={bannerImage2} alt="" />
                    </div>
                    <img className='relative rounded-full h-48 w-48 border-4 left-[655px] mt-36 shadow-2xl' src={bannerImage3} alt="" />
                    <div className='relative left-[680px] mt-5'>
                        <img className='rounded-full h-48 w-48 border-4 shadow-2xl' src={bannerImage4} alt="" />
                        <img className='rounded-full h-48 w-48 border-4 shadow-2xl mt-12' src={bannerImage5} alt="" />
                    </div>
                </div>
                <div className='relative bottom-[366px] ml-10'>
                    <h2 className='text-white text-5xl font-bold'>Assignment Help <br /> <span className='relative top-4'>Service In The World.</span></h2>
                    <p className='text-white text-2xl mt-4'>Looking For Help From Premier Assignment.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;