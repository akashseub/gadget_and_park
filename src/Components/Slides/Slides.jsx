import React from 'react';

const Slides = () => {
    return (
        <div className="bg-base-200 h-full">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://i.ibb.co.com/qFp1YNHz/samsung-S25-Ultra.png"
                    className="max-w-sm rounded-lg" />
                <div>
                    <h1 className="text-4xl font-bold">Featured Phone</h1>
                    <div className='py-6'>
                        <h2 className='text-2xl font-semibold'>Samsung Galaxy S25 Ultra</h2>
                        <p className="">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Slides;