import { Outlet } from 'react-router-dom'
import Footer from './Layout/footer'
import Navbar from './Layout/navbar'

function App() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	)
}

export default App
