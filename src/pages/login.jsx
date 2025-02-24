import React from 'react'

const Login = () => {
	return (
		<div>
			<div className='container min-h-[100vh]  flex flex-col items-center justify-center gap-[30px]'>
				<div className='w-full  '>
					<p className='font-bold text-[30px] text-center'>Login</p>
				</div>
				<div className=' w-full min-h-[400px]'>
					<div className=' flex flex-col items-center gap-[20px]'>
						<input
							type='email'
							placeholder='Email:'
							className='p-2 border border-black/30 shadow-lg rounded-lg w-[400px]'
						/>
						<input
							type='password'
							placeholder='Password:'
							className='p-2 border border-black/30 shadow-lg rounded-lg w-[400px]'
						/>
						<button className='bg-amber-600 rounded-lg shadow-lg w-[400px] py-2 font-bold text-white text-[18px]'>
							Log In
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
