import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illo facere adipisci, similique aliquam'
  },
  {
    id: 2,
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illo facere adipisci, similique aliquam'
  },
  {
    id: 3,
    avatar: AVTR3,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illo facere adipisci, similique aliquam'
  },
  {
    id: 4,
    avatar: AVTR4,
    name: 'Nana',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illo facere adipisci, similique aliquam'
  }
  

]

const Testimonials = () => {
  return (
    <section id="testimonials">
        <h5>Review From clients</h5>
        <h2>Testimonials</h2>

        <Swiper className='container testimonials__container'
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}>
          
          {
              data.map(({id,avatar,name,review})=> {

                return (

                    
                    <SwiperSlide key={id} className="testimonial">
                        <div className="client__avatar">
                            <img src={avatar} alt="Avatar One" />
                        </div>
                        <h5 className='client__name'>{name}</h5>
                        <small className="client__review"> {review} </small>
                    </SwiperSlide>

                )

              } )
          }

        </Swiper>

    </section>
  )
}

export default Testimonials

// Swiper js သည် article တွေတခုနဲ့တခု slide လုပ်ဖို့ဖြစ်တယ်
//https://swiperjs.com/  မှာ သွားရောက်လေ့လာနိုင်ပါတယ်
//swiper ကိုသုံးဖို့အတွက် react terminal မှာ install လုပ်ရပါတယ်: npm install swiper
//