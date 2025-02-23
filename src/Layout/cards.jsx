import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Cards = () => {
	const [data, setData] = useState([])

	const GetProduct = () => {
		axios
			.get('https://dummyjson.com/products')
			.then(res => {
				// if (res.status === 200) {
				// }
				setData(res.data.products)
			})
			.catch(err => {
				console.log(err)
			})
	}

	console.log(data)
	useEffect(() => {
		GetProduct()
	}, [])

	return (
		<div>
			<div className='container '>
				<h2 className='font-bold text-[24px] py-3'>Maxsulotlar:</h2>
				<div className='w-full grid-cols-4 grid gap-4'>
					<div className='w-full grid grid-cols-4 gap-4 min-h-[700px] col-span-3'>
						{data.map(items => {
							return (
								<Link to={`/card-about/${items.id}`}>
									<div
										className=' h-[400px] shadow-2xl border rounded-md overflow-hidden border-black/30'
										key={items.id}
									>
										<div className='w-full h-[70%] '>
											<img
												src={items.images}
												alt={items.title}
												className='w-full h-full object-cover'
											/>
										</div>
										<div className='w-full  h-[30%] flex flex-col items-start justify-center gap-1 p-3'>
											<p className='font-bold text-[15px] '>
												{items.title.length < 20
													? items.title
													: items.title.slice(0, 20) + '...'}
											</p>
											<p className='font-medium'>{items.price} $</p>
											<button className=' px-3 py-2 rounded-md bg-amber-600 text-white'>
												<FaCartShopping />
											</button>
										</div>
									</div>
								</Link>
							)
						})}
					</div>
					<div className='w-full border border-black/30 rounded-lg col-span-1'></div>
				</div>
			</div>
		</div>
	)
}

export default Cards
