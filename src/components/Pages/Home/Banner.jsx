import { useContext } from 'react'
import bannerImage from '../../../image/banner Image.jpg.png'
import bannerImage2 from '../../../image/banner2.jpg'
import bannerImage3 from '../../../image/banner4.jpeg'
import bannerImage4 from '../../../image/banner5.jpg'
import bannerImage5 from '../../../image/banner6.jpg'
import { AuthProvider } from '../../../AuthProvider/AuthContext'
const Banner = () => {
    const {theme} = useContext(AuthProvider);
    return (
        <div className={theme === 'light' ? 'bannerBg h-screen ': 'bg-black'}>
            <div className='nunito'>
                <div className='flex relative pl-4 md:pl-0 lg:pl-0 top-96 md:top-96 lg:top-0 md:left-0 lg:left-0'>
                    <div className='relative md:left-[120px] lg:left-[620px] mt-5'>
                        <img className='rounded-full h-32 md:h-40 lg:h-48 w-32 md:w-40 lg:w-48 border-4 shadow-2xl' src={bannerImage} alt="" />
                        <img className='rounded-full h-32 md:h-40 lg:h-48 w-32 md:w-40 lg:w-48 border-4 mt-16 shadow-2xl' src={bannerImage2} alt="" />
                    </div>
                    <img className='relative rounded-full h-32 md:h-40 lg:h-48 w-32 md:w-40 lg:w-48 border-4 md:left-[180px] lg:left-[655px] mt-28 lg:mt-36 shadow-2xl' src={bannerImage3} alt="" />
                    <div className='relative md:left-[230px] lg:left-[680px] mt-5'>
                        <img className='rounded-full h-32 md:h-40 lg:h-48 w-32 md:w-40 lg:w-48 border-4 shadow-2xl' src={bannerImage4} alt="" />
                        <img className='rounded-full h-32 md:h-40 lg:h-48 w-32 md:w-40 lg:w-48 border-4 shadow-2xl mt-12' src={bannerImage5} alt="" />
                    </div>
                </div>
                <div className='relative md:left-0 lg:left-0 bottom-[300px] lg:bottom-[366px] ml-10'>
                    <h2 className='text-white text-5xl font-bold'>Assignment Help <br /> <span className='relative top-4'>Service In The World.</span></h2>
                    <p className='text-white text-2xl mt-4'>Looking For Help From Premier Assignment.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;