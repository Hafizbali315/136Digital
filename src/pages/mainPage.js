import CapabillitiesSection from '../components/MainPage/CapabillitiesSection'
import CoverPage from '../components/MainPage/CoverPage/CoverPage'
import WorkSection from '../components/MainPage/WorkSection/WorkSection'
import JourneySection from './../components/MainPage/JourneySection/index'
import NewsSection from './../components/MainPage/NewsSection/index'
import BrandSection from './../components/MainPage/BrandSection/index'
const MainPage = () => {
	return (
		<div className="main_page">
			<CoverPage />

			<WorkSection />

			<CapabillitiesSection />

			<JourneySection />

			<NewsSection />

			<BrandSection />
		</div>
	)
}

export default MainPage
