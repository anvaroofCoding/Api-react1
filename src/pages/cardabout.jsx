import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaUserSecret } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { useParams } from 'react-router-dom'

const Cardabout = () => {
	const { id } = useParams()
	const [data, Setdata] = useState([])

	const getAboutCards = async () => {
		try {
			let res = await axios.get(`https://dummyjson.com/products/${id}`)
			Setdata(res.data)
		} catch (error) {
			console.error('Xatolik:', error)
		}
	}

	console.log(data)

	useEffect(() => {
		getAboutCards()
	}, [id])

	if (!data) return <p>Loading...</p>

	return (
		<div>
			<div className='container min-h-[100vh] grid grid-cols-2 gap-[50px] pt-[100px]'>
				<div className=' w-full flex justify-center items-center'>
					<div className='w-[600px] h-[600px] object-cover border shadow-lg rounded-e-md border-black/30'>
						<img src={data.images} alt='' />
					</div>
				</div>
				<div className=' w-full flex justify-center items-center'>
					<div className='w-[600px] h-[600px] border border-black/30 shadow-lg rounded-e-md flex flex-col items-start justify-center gap-[10px] px-5'>
						<p className='font-bold text-[25px]'>{data.title}</p>
						<p>Brands: {data.brand}</p>
						<p>Category: {data.category}</p>
						<p>Width: {data.dimensions?.width}</p>
						<p>Height: {data.dimensions?.height}</p>
						<p>
							Price: <span className='font-bold'>{data.price} $</span>
						</p>
						<p>
							Count:{' '}
							<span className='font-bold'>{data.minimumOrderQuantity}</span>
						</p>
						<p>
							Comment: <span className='text-gray-600'>{data.description}</span>
						</p>
						<button className='px-3 py-3 bg-amber-600 text-white shadow-md rounded-md'>
							<FaCartShopping />
						</button>
					</div>
				</div>
				<div className='w-full flex justify-center items-center col-span-2'>
					<div className='w-[600px] h-[600px] border border-black/30 shadow-lg rounded-e-md flex flex-col items-center justify-center gap-[10px] px-5 overflow-scroll'>
						<h2 className='font-bold text-[35px]'>Otzifs:</h2>
						{data.reviews?.map(items => {
							return (
								<div className='flex flex-col items-start w-full'>
									<div className='border w-full shadow-lg border-black/30 rounded-lg min-h-[20px] p-3'>
										<h2 className='font-bold flex items-center gap-[10px]'>
											<FaUserSecret />
											{items.reviewerName}
										</h2>
										<p>{items.comment}</p>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cardabout
