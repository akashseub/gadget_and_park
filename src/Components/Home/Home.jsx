import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.png'

const Home = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6'>
            <div className='h-[400px] col-span-1 lg:col-span-2'>
                <img src={banner1} alt="" className='w-full h-full object-cover' />
            </div>
            <div className='grid grid-rows-2 gap-6 h-[400px]'>
                <div className=''>
                    <img src={banner2} alt="" className='w-full h-full object-cover' />
                </div>
                <div className=''>
                    <img src={banner3} alt="" className='w-full h-full object-cover' />
                </div>
            </div>
        </div>
    );
};

export default Home;