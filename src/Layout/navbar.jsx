import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/shopping.png'
const Navbar = () => {
	return (
		<div className='top-0 sticky z-50'>
			<nav className='bg-black shadow-2xl'>
				<div className='container h-[100px] flex justify-between items-center  '>
					<div>
						<img src={logo} alt='logo' className='w-[80px]' />
					</div>
					<ul className='text-white flex gap-[20px] font-bold uppercase'>
						<li>
							<NavLink
								to={'/'}
								className={({ isActive }) =>
									isActive ? 'text-red-400' : 'text-white'
								}
							>
								Product
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/blog'
								className={({ isActive }) =>
									isActive ? 'text-red-400' : 'text-white'
								}
							>
								Blog
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
