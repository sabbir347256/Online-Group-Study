import { useContext } from 'react';
import faqimage from '../../../image/faq.jpg'
import { AuthProvider } from '../../../AuthProvider/AuthContext';
const FaqSection = () => {
    const { theme } = useContext(AuthProvider);
    return (
        <div className='max-w-6xl mx-auto inter lg:ml-28 my-20'>
            <div className='grid md:grid-cols-4'>
                <div className='col-span-2 ml-16 md:ml-20 lg:ml-0'>
                    <img className={theme === 'light' ? 'h-[250px] lg:h-[450px]   left-16 lg:left-10' : 'h-[250px] lg:h-[450px]  left-16 lg:left-10 rounded-full'} src={faqimage} alt="" />
                </div>
                <div className={theme === 'light' ? 'col-span-2 px-5 lg:ml-7' : 'col-span-2 lg:ml-7 text-white '}>
                    <h2 className='font-extrabold text-5xl '>Have question <br /> Get you <span className='text-yellow-500'>answer!</span></h2>
                    <div>
                        <input className='lg:px-20 lg:py-2 rounded-2xl mt-6 bg-gray-300' placeholder='Type your search' type="text" name="" id="" />
                        <p></p>
                    </div>
                    <div className='ml-4 md:ml-0 lg:ml-0'>
                        <h2 className='lg:ml-2 font-bold text-xl mt-4'>What type of service?</h2>
                        <hr className='lg:ml-2 my-4' />
                        <h2 className='lg:ml-2 font-bold text-xl'>How is it service?</h2>
                        <hr className='lg:ml-2 mt-4' />
                        <h2 className='lg:ml-2 font-bold text-xl'>Can I subscribe to this service?</h2>
                        <hr className='lg:ml-2 my-4' />
                        <h2 className='lg:ml-2 font-bold text-xl'>Where can I try this service?</h2>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;