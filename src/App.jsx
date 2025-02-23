import { Outlet } from 'react-router-dom'
import Navbar from './Layout/navbar'

function App() {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	)
}

export default App
