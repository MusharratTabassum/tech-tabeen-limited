import React from 'react';
import './About.css'
import image1 from './methodology.jpg'
import image2 from './missions.jpg'
import image3 from './vision.jpg'

const About = () => {
    return (
        <div className=''>
            <div className="mission-vision-mytho container">
                <h3 className="pb-4">Our Mythology</h3>
                <div className='row'>
                    <div className='d-flex col-md-6 col-sm-12 col-12'>
                        <div>
                            <img className='mytho-image' src={image1} alt="" />
                        </div>
                        <div className="methodology m-3 col-md-6 col-sm-12 col-12">

                            <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem error accusamus quia fuga illum! Quasi nisi, quaerat eaque optio cum asperiores ullam sequi reprehenderit laudantium minus illum soluta sapiente ut perspiciatis commodi praesentium tempora. Nesciunt quas nostrum corporis, officiis iste, doloribus adipisci necessitatibus qui culpa architecto suscipit obcaecati error minima. Blanditiis voluptas omnis esse quidem. Id vel fugit quae commodi hic. Quis harum molestias magni facilis eveniet veniam ab sit officia, porro minus! Quia, itaque?</p>

                        </div>
                    </div>
                </div>

                <div className='pt-3 mt-4  pb-5'>
                    <h3 className="pb-4">Our Mission</h3>
                    <div className='d-flex'>

                        <div className="mission m-3">

                            <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem error accusamus quia fuga illum! Quasi nisi, quaerat eaque optio cum asperiores ullam sequi reprehenderit laudantium minus illum soluta sapiente ut perspiciatis commodi praesentium tempora. Nesciunt quas nostrum corporis, officiis iste, doloribus adipisci necessitatibus qui culpa architecto suscipit obcaecati error minima. Blanditiis voluptas omnis esse quidem. Id vel fugit quae commodi hic. Quis harum molestias magni facilis eveniet veniam ab sit officia, porro minus! Quia, itaque?</p>

                        </div>
                        <div>
                            <img className='mytho-image' src={image2} alt="" />
                        </div>
                    </div>
                </div>
                <div className=' pt-5 pb-5'>
                    <h3 className="pb-4">Our Vision</h3>
                    <div className='d-flex'>
                        <div>
                            <img className='mytho-image' src={image3} alt="" />
                        </div>
                        <div className="vision m-3 justify-content-center align-items-center ">
                            <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem error accusamus quia fuga illum! Quasi nisi, quaerat eaque optio cum asperiores ullam sequi reprehenderit laudantium minus illum soluta sapiente ut perspiciatis commodi praesentium tempora. Nesciunt quas nostrum corporis, officiis iste, doloribus adipisci necessitatibus qui culpa architecto suscipit obcaecati error minima. Blanditiis voluptas omnis esse quidem. Id vel fugit quae commodi hic. Quis harum molestias magni facilis eveniet veniam ab sit officia, porro minus! Quia, itaque?</p>

                        </div>
                    </div>
                </div>



            </div>
            <div className="from-client mb-5 mt-4 ">
                <div className="row">
                    <div className="d-flex align-items-center container ms-5 pt-5 col-md-6 col-sm-12 col-12">
                        <div className="heading-border mr-4"></div>
                        <h3 className="font-weight-bold text-left ms-4">Words From Our Clients</h3>
                    </div>
                    <div className="container mt-4 col-md-6 col-sm-12 col-12">
                        <p className='text-left'><small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum perspiciatis earum impedit dolore, minus asperiores error sapiente at veritatis recusandae odit rem laboriosam doloremque ratione cupiditate. Aperiam voluptatibus iste animi! Quia excepturi fuga dolor pariatur soluta sapiente iure reprehenderit, nemo delectus ab, ducimus esse beatae? Eum magnam magni dolorem eveniet?</small>
                            <h6>Mollah Mohammad Forhad</h6>
                            <h6>Hater Nagale Limited</h6>
                        </p>

                    </div>

                </div>
            </div>

        </div>



    );
};

export default About;