import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import Cards from './Layout/cards'
import Blog from './pages/blog'
import Cardabout from './pages/cardabout'
import Products from './pages/products'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />}>
					<Route path='/' element={<Products />}>
						<Route path='/' element={<Cards />} />
					</Route>
					<Route path='/blog' element={<Blog />}></Route>
					<Route path='/card-about/:id' element={<Cardabout />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
)
