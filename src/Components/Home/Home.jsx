import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.png'
import CardSlider from '../CardSlider/CardSlider';
import DiscountProducts from '../DiscountProducts/DiscountProducts';
import FeatureCategories from '../FeatureCategories/FeatureCategories';
import Slides from '../Slides/Slides';

const Home = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 my-6'>
                <div className='lg:h-[400px]  lg:col-span-2'>
                    <Slides></Slides>
                </div>
                <div className="grid grid-flow-row md:grid-flow-col lg:grid-flow-row gap-6 h-[400px] md:auto-rows-fr">
                    <div>
                        <img src={banner2} alt="Banner 2" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div>
                        <img src={banner3} alt="Banner 3" className="w-full h-full object-cover rounded-lg" />
                    </div>
                </div>

            </div>

            <FeatureCategories></FeatureCategories>

            <DiscountProducts></DiscountProducts>

            <CardSlider></CardSlider>
        </div>
    );
};

export default Home;