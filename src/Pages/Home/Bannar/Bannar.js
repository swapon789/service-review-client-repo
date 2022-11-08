import React from 'react';


const Bannar = () => {
    return (

        <div className="carousel w-full mb-10 ">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/52527/dentist-pain-borowac-cure-52527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
                    <div className="hero-overlay bg-opacity-40"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">TreatMent Now</h1>
                            <p className="mb-5">Treatment carried out by a dental practitioner including examinations, fillings where appropriate, crowns, extractions and surgery.</p>
                            <button className="btn btn-primary w-60">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/6627422/pexels-photo-6627422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
                    <div className="hero-overlay bg-opacity-40"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Treatment carried out by a dental practitioner including examinations, fillings where appropriate, crowns, extractions and surgery.</p>
                            <button className="btn btn-primary w-60">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/3945599/pexels-photo-3945599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
                    <div className="hero-overlay bg-opacity-40"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Treatment carried out by a dental practitioner including examinations, fillings where appropriate, crowns, extractions and surgery.</p>
                            <button className="btn btn-primary w-60">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>

    );
};

export default Bannar;
