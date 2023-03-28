import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { BioOrbitHome } from './pages/BiorbitHome'
import { Footer } from './shared/Footer'
import { Menu } from './shared/Menu'

function App() {
	return (
		<>
			<Menu />
			<main>
				<Routes>
					<Route path='/' element={<BioOrbitHome />} />
				</Routes>
			</main>
			<Footer />
		</>
	)
}

export default App
