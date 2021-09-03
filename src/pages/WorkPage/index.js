import './style.scss'

import HeroImg from '../../assets/images/WorkPage/CoverImg.png'
import WorkImg1 from '../../assets/images/WorkPage/WorkImg1.png'
import WorkImg2 from '../../assets/images/WorkPage/WorkImg2.png'
import WorkImg3 from '../../assets/images/WorkPage/WorkImg3.png'
import WorkImg4 from '../../assets/images/WorkPage/WorkImg4.png'
import WorkImg5 from '../../assets/images/WorkPage/WorkImg5.png'
import WorkImg6 from '../../assets/images/WorkPage/WorkImg6.png'
import WorkImg7 from '../../assets/images/WorkPage/WorkImg7.png'
import WorkImg8 from '../../assets/images/WorkPage/WorkImg8.png'
import WorkImg9 from '../../assets/images/WorkPage/WorkImg9.png'

const WorkPage = () => {
	return (
		<div className="work_page">
			{/*  HeroCard */}
			<div className="hero_card">
				<div className="img_container">
					<img src={HeroImg} alt="CoverImg" />
				</div>

				<div className="content container_padding">
					<div className="heading">
						<h1>Helping brands to create experiences that’s people love</h1>
					</div>
				</div>
			</div>

			{/* WorkPage Navabr */}
			<div className="work_navbar container_padding ">
				<ul>
					<li className="active">Show everything</li>
					<li>Branding & Identity</li>
					<li>Websites & Digital Platforms</li>
					<li>eCommerce Experiences</li>
					<li>Performance Marketing</li>
				</ul>
			</div>

			{/* Content */}
			<div className="main_section_content container_padding">
				<div className="row ">
					<div className="col-12 ">
						<div className="img_container_lg">
							<img src={WorkImg1} alt="WorkImg1" />
						</div>
						<p>Branding & Identify, website & ECommerce experience</p>
						<h2>The Ordinary colour — Evolving the experience between the brand and the user</h2>
					</div>
				</div>

				<div className="row custom_margin">
					<div className="col-lg-6 col-12 ">
						<div className="img_container_sm">
							<img src={WorkImg2} alt="WorkImg2" />
						</div>
						<p>Performance Marketing</p>
						<h2>David Beckham "Respect"</h2>
					</div>

					<div className="col-lg-6 col-12 sm_margin">
						<div className="img_container_sm">
							<img src={WorkImg3} alt="WorkImg3" />
						</div>
						<p>Ecommerce experience, Websites & Digital Platforms</p>
						<h2>Umbro Kaixi — Improving the online digital presence of this brand</h2>
					</div>
				</div>

				<div className="row custom_margin">
					<div className="col-12 ">
						<div className="img_container_lg">
							<img src={WorkImg4} alt="WorkImg1" />
						</div>
						<p>Website & Ecommerce experience</p>
						<h2>Nove watches — Reinventing the luxury watch experience</h2>
					</div>
				</div>

				<div className="row custom_margin">
					<div className="col-lg-6 col-12 ">
						<div className="img_container_sm">
							<img src={WorkImg5} alt="WorkImg2" />
						</div>
						<p>Branding & identify</p>
						<h2>Li Cheng — Interior decoration</h2>
					</div>

					<div className="col-lg-6 col-12 sm_margin">
						<div className="img_container_sm">
							<img src={WorkImg6} alt="WorkImg3" />
						</div>
						<p>Branding & identify</p>
						<h2>Habit cold brew coffee</h2>
					</div>
				</div>

				<div className="row custom_margin">
					<div className="col-12 ">
						<div className="img_container_lg">
							<img src={WorkImg7} alt="WorkImg1" />
						</div>
						<p>Performance Marketing</p>
						<h2>Play brew.co — Innovating the idea of Soft drinks</h2>
					</div>
				</div>

				<div className="row custom_margin">
					<div className="col-lg-6 col-12 ">
						<div className="img_container_sm">
							<img src={WorkImg8} alt="WorkImg2" />
						</div>
						<p>Branding & identify</p>
						<h2>25 Cofee Roasters.UA</h2>
					</div>

					<div className="col-lg-6 col-12 sm_margin">
						<div className="img_container_sm">
							<img src={WorkImg9} alt="WorkImg3" />
						</div>
						<p>Branding & identify</p>
						<h2>Lampa Foods</h2>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WorkPage
