import React from 'react'

const Slider = () => {
    return (
        <div className='main-slider'>
            <img src="./images/8.png" className='img-fluid' alt="" />
            <div className='slider-text'>
                <h2>کت جین زنانه</h2>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                <button className='slider-main-btn'><span>خرید محصول</span> <i className='fa fa-arrow-left text-danger'></i> </button>
            </div>
        </div>
    )
}

export default Slider