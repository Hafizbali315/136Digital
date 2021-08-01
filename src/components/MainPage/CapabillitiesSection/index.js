import './style.scss'

import Branding from '../../../assets/images/mainPage/capabillities/branding.png'
import Website from '../../../assets/images/mainPage/capabillities/websites.png'
import Ecommerce from '../../../assets/images/mainPage/capabillities/ecommerce.png'
import VR from '../../../assets/images/mainPage/capabillities/vr.png'
import Performance from '../../../assets/images/mainPage/capabillities/performance.png'
import { Link } from 'react-router-dom'
import { CgArrowLongRight } from 'react-icons/cg'

const CapabillitiesSection = () => {
	return (
		<div className="capabillities_section">
			<div className="heading">
				<h1>Our capabilities</h1>
			</div>

			<div className="container-fluid">
				<div className="row">
					<div className="col-md-4 capabilities_card col-12">
						<div className="img_container">
							<img src={Branding} alt="img" />
						</div>
						<h2>Branding & Identity</h2>
					</div>
					<div className="col-md-4 capabilities_card col-12">
						<div className="img_container">
							<img src={Website} alt="img" />
						</div>
						<h2>Websites & Digital Platforms</h2>
					</div>
					<div className="col-md-4 capabilities_card col-12 ">
						<div className="img_container">
							<img src={Ecommerce} alt="img" />
						</div>
						<h2>eCommerce Experiences</h2>
					</div>
				</div>

				<div className="row">
					<div className="col-md-6 capabilities_card col-12 ">
						<div className="img_container">
							<img src={VR} alt="img" />
						</div>
						<h2>Performance Marketing</h2>
					</div>

					<div className="col-md-6 capabilities_card col-12 ">
						<div className="img_container">
							<img src={Performance} alt="img" />
						</div>
						<h2>VR & AR Environments</h2>
					</div>
				</div>
			</div>

			<button className="capabilities_btn">
				<Link to="/capabilities" className="link text-decoration-none">
					More about capabilities <CgArrowLongRight className="arrow" />
				</Link>
			</button>
		</div>
	)
}

export default CapabillitiesSection
