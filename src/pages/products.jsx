import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import open from '../assets/opens.png'
import ren from '../assets/picture/ren1.png'
import ren2 from '../assets/picture/ren2.png'
import ren3 from '../assets/picture/ren3.png'
import ren4 from '../assets/picture/ren4.png'

// import required modules
import { Navigation, Pagination } from 'swiper/modules'
import Cards from '../Layout/cards'

const Products = () => {
	return (
		<div>
			<div className='container min-h-[70vh] flex justify-center  items-center'>
				<Swiper
					pagination={{
						type: 'fraction',
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					className='mySwiper h-[500px] text-white'
				>
					<SwiperSlide>
						<img
							src={open}
							alt='rasm'
							className='object-cover w-full h-full rounded-lg'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={open}
							alt='rasm'
							className='object-cover w-full h-full rounded-lg'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={open}
							alt='rasm'
							className='object-cover w-full h-full rounded-lg'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={open}
							alt='rasm'
							className='object-cover w-full h-full rounded-lg'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={open}
							alt='rasm'
							className='object-cover w-full h-full rounded-lg'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={open}
							alt='rasm'
							className='object-cover w-full h-full rounded-lg'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={open}
							alt='rasm'
							className='object-cover w-full h-full rounded-lg'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={open}
							alt='rasm'
							className='object-cover w-full h-full rounded-lg'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							src={open}
							alt='rasm'
							className='object-cover w-full h-full rounded-lg'
						/>
					</SwiperSlide>
				</Swiper>
			</div>
			<div
				className='container pb-10 flex justify-between items-center
			'
			>
				<img src={ren} alt='rasm' className='w-[24%]' />
				<img src={ren2} alt='rasm' className='w-[24%]' />
				<img src={ren3} alt='rasm' className='w-[24%]' />
				<img src={ren4} alt='rasm' className='w-[24%]' />
			</div>
			<Cards />
		</div>
	)
}

export default Products
