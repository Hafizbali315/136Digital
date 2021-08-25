import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import MainPage from './pages/mainPage'
import Footer from './components/Footer/index'
import AboutUsPage from './pages/AboutusPage'
import CapabilitiesPage from './pages/CapabilitiesPage/index'

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Route exact path="/" component={() => <MainPage />} />
				<Route exact path="/about-us" component={() => <AboutUsPage />} />
				<Route exact path="/capabilities" component={() => <CapabilitiesPage />} />

				<Footer />
			</Router>
		</div>
	)
}

export default App
