import CapabillitiesSection from '../components/MainPage/CapabillitiesSection'
import CoverPage from '../components/MainPage/CoverPage/CoverPage'
import WorkSection from '../components/MainPage/WorkSection/WorkSection'
import JourneySection from './../components/MainPage/JourneySection/index'
import NewsSection from './../components/MainPage/NewsSection/index'
import BrandSection from '../components/BrandSection/index'

import Image1 from '../assets/images/mainPage/brand/1.svg'
import Image2 from '../assets/images/mainPage/brand/2.svg'
import Image3 from '../assets/images/mainPage/brand/3.svg'
import Image4 from '../assets/images/mainPage/brand/4.svg'
import Image5 from '../assets/images/mainPage/brand/5.svg'
import Image6 from '../assets/images/mainPage/brand/6.svg'

const MainPage = () => {
	return (
		<div className="main_page">
			<CoverPage />

			<WorkSection />

			<CapabillitiesSection />

			<JourneySection />

			<NewsSection />

			<BrandSection Image1={Image1} Image2={Image2} Image3={Image3} Image4={Image4} Image5={Image5} Image6={Image6} />
		</div>
	)
}

export default MainPage
