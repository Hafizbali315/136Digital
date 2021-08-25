import './style.scss'

import HeroCardBackground from '../../assets/images/CapabilitiesPage/HeroCardBackground.png'

import CapabilitiesImg1 from '../../assets/images/CapabilitiesPage/CapabilitiesImg1.png'
import CapabilitiesImg2 from '../../assets/images/CapabilitiesPage/CapabilitiesImg2.png'
import CapabilitiesImg3 from '../../assets/images/CapabilitiesPage/CapabilitiesImg3.png'
import CapabilitiesImg4 from '../../assets/images/CapabilitiesPage/CapabilitiesImg4.png'
import CapabilitiesImg5 from '../../assets/images/CapabilitiesPage/CapabilitiesImg5.png'

import TagsBackgroundImg from '../../assets/images/CapabilitiesPage/TagsBackgroundImg.png'

const CapabilitiesPage = () => {
	return (
		<div className="capabilities_page ">
			<div className="hero_card ">
				<div className="img_container">
					<img src={HeroCardBackground} alt="Hero Card" />
				</div>

				<div className="heading container_padding">
					<h1>
						Our clients share our
						<br /> approach to work
					</h1>
				</div>
			</div>

			<div className="capabilities_content container-fluid section_margin container_padding">
				<div className="row align-items-lg-center">
					<div className="col-lg-6 col-12 order-lg-first order-last mt-lg-0 mt-4">
						<div className="img_container">
							<img src={CapabilitiesImg1} alt="CapabilitiesImg1" />
						</div>
					</div>

					<div className="col-lg-6 col-12 order-lg-last order-first mt-lg-0 mt-4">
						<div className="content">
							<h2>Branding & Identity</h2>
							<p>
								We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption. From
								cultivating new ideas to connecting the dots for customers or users, these are our core principles.
							</p>

							<div className="tags_container">
								<div className="background_img_container">
									<img src={TagsBackgroundImg} alt="TagsBackgroundImg" />
								</div>
								<div className="tags">
									<div className="row ">
										<div className="col-md-6 col-12 text-md-start text-center py-2">
											<span>Brand Strategy & Experience</span>
										</div>
										<div className="col-md-6 col-12 text-md-start text-center py-2">
											<span>Guidelines & Systems</span>
										</div>

										<div className="col-md-6 col-12 text-md-start text-center py-2">
											<span>Trends & Insights</span>
										</div>
										<div className="col-md-6 col-12 text-md-start text-center py-2">
											<span>Content Strategy</span>
										</div>
										<div className="col-md-6 col-12 text-md-start text-center py-2">
											<span>Go-To-Market Strategy</span>
										</div>
										<div className="col-md-6 col-12 text-md-start text-center py-2">
											<span>Identity Design</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row mt-5 pt-3 pt-lg-5 align-items-lg-center">
					<div className="col-lg-6 col-12 mt-lg-0 mt-4">
						<div className="content">
							<h2 className="pe-4">Websites & Digital Platforms</h2>
							<p>
								We design digital platforms to empower users and your brand's tribe. This deep understanding of what motivates them allows
								us to forge and fine-tune the most powerful strategies that generate rapid ROI for your business.
							</p>

							<div className="tags_container">
								<div className="background_img_container">
									<img src={TagsBackgroundImg} alt="TagsBackgroundImg" />
								</div>
								<div className="tags">
									<div className="row ">
										<div className="col-md-6 col-12 text-md-start text-center py-2">
											<span>Digital Strategy</span>
										</div>

										<div className="col-md-6 col-12 text-md-start text-center py-2">
											<span>Digital Activation</span>
										</div>

										<div className="col-md-6 col-12 text-md-start text-center py-2">
											<span>UX & UI Design</span>
										</div>

										<div className="col-md-6 col-12 text-md-start text-center py-2">
											<span>Web & App Development</span>
										</div>

										<div className="col-md-6 col-12 text-md-start text-center py-2">
											<span>Functional Prototyping</span>
										</div>

										<div className="col-md-6 col-12 text-md-start text-center py-2">
											<span>SEO Strategy & Systems</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-6 col-12  mt-lg-0 mt-4">
						<div className="img_container">
							<img src={CapabilitiesImg2} alt="CapabilitiesImg1" />
						</div>
					</div>
				</div>

				<div className="row align-items-lg-center mt-5 pt-3 pt-lg-5">
					<div className="col-lg-6 col-12 order-lg-first order-last mt-lg-0 mt-4">
						<div className="img_container">
							<img src={CapabilitiesImg3} alt="CapabilitiesImg1" />
						</div>
					</div>

					<div className="col-lg-6 col-12 order-lg-last order-first mt-lg-0 mt-4">
						<div className="content">
							<h2>eCommerce Experiences</h2>
							<p>
								eCommerce is all about experience, and we craft and co-create experiences that are both purposeful and equally profitable.
								Digital brand building through eCommerce channels fuels business growth and the bottom-line.
							</p>

							<div className="tags_container">
								<div className="background_img_container">
									<img src={TagsBackgroundImg} alt="TagsBackgroundImg" />
								</div>

								<div className="tags">
									<div className="row ">
										<div className="col-md-6 col-12 text-md-start text-center py-2">
											<span>Digital Strategy</span>
										</div>

										<div className="col-md-6 col-12 text-md-start text-center py-2">
											<span>Design Direction</span>
										</div>

										<div className="col-md-6 col-12 text-md-start text-center py-2">
											<span>Industry & Consumer Research</span>
										</div>

										<div className="col-md-6 col-12 text-md-start text-center py-2">
											<span>eCommerce Platforms</span>
										</div>

										<div className="col-md-6 col-12 text-md-start text-center py-2">
											<span>Rapid Prototyping</span>
										</div>

										<div className="col-md-6 col-12 text-md-start text-center py-2">
											<span>Digital Guidelines</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row mt-5 pt-3 pt-lg-5 align-items-lg-center">
					<div className="col-lg-6 col-12 mt-lg-0 mt-4">
						<div className="content">
							<h2 className="pe-4">Performance Marketing</h2>
							<p>
								With a keen understanding of what's happening in the digital landscape, we leverage the power of marketing platforms to
								connect audiences with contagious content worth sharing & spreading, cross-channel and touchpoint.
							</p>

							<div className="tags_container">
								<div className="background_img_container">
									<img src={TagsBackgroundImg} alt="TagsBackgroundImg" />
								</div>
								<div className="tags">
									<div className="row ">
										<div className="col-md-6 col-12 text-md-start text-center py-2">
											<span>Growth Strategy</span>
										</div>

										<div className="col-md-6 col-12 text-md-start text-center py-2">
											<span>Social Media Marketing</span>
										</div>

										<div className="col-md-6 col-12 text-md-start text-center py-2">
											<span>PPC Campaigns</span>
										</div>

										<div className="col-md-6 col-12 text-md-start text-center py-2">
											<span>Launch Strategies</span>
										</div>

										<div className="col-md-6 col-12 text-md-start text-center py-2">
											<span>Email Marketing</span>
										</div>

										<div className="col-md-6 col-12 text-md-start text-center py-2">
											<span>SEO Enablement</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-6 col-12  mt-lg-0 mt-4">
						<div className="img_container">
							<img src={CapabilitiesImg4} alt="CapabilitiesImg1" />
						</div>
					</div>
				</div>

				<div className="row align-items-lg-center mt-5 pt-3 pt-lg-5">
					<div className="col-lg-6 col-12 order-lg-first order-last mt-lg-0 mt-4">
						<div className="img_container">
							<img src={CapabilitiesImg5} alt="CapabilitiesImg1" />
						</div>
					</div>

					<div className="col-lg-6 col-12 order-lg-last order-first mt-lg-0 mt-4">
						<div className="content">
							<h2>VR & AR Environments</h2>
							<p>
								Reality is a new reality with virtual reality (VR) and augmented reality (AR) being at the forefront of technology adoption.
								With a well-built digital strategy we leverage this stellar tech to propel your brand forward.
							</p>

							<div className="tags_container">
								<div className="background_img_container">
									<img src={TagsBackgroundImg} alt="TagsBackgroundImg" />
								</div>

								<div className="tags">
									<div className="row ">
										<div className="col-md-6 col-12 text-md-start text-center py-2">
											<span>Games & Apps</span>
										</div>

										<div className="col-md-6 col-12 text-md-start text-center py-2">
											<span>Mixed Reality</span>
										</div>

										<div className="col-md-6 col-12 text-md-start text-center py-2">
											<span>Mobile Apps</span>
										</div>

										<div className="col-md-6 col-12 text-md-start text-center py-2">
											<span>VR Streaming</span>
										</div>

										<div className="col-md-6 col-12 text-md-start text-center py-2">
											<span>VR Platform Design</span>
										</div>

										<div className="col-md-6 col-12 text-md-start text-center py-2">
											<span>VR Platform Development</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CapabilitiesPage
