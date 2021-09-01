import './style.scss'

import RocketFire from '../../assets/videos/rocket-fire.gif'

import Contentimg from '../../assets/images/JourneyPage/contentBg.png'
import PlanningImg from '../../assets/images/JourneyPage/planning.png'
import BillingImg from '../../assets/images/JourneyPage/billing.png'
import CustomImg from '../../assets/images/JourneyPage/custom.png'
import DiscussImg from '../../assets/images/JourneyPage/discuss.png'
import PriorityImg from '../../assets/images/JourneyPage/priority.png'
import RoddImg from '../../assets/images/JourneyPage/rodd.png'

import { DarkButton, WhiteButton } from './../../components/UI/index'

const JourneyPage = () => {
	return (
		<div className="journey_page">
			<div className="hero_card">
				<div className="background_img_container">
					<img src={RocketFire} alt="RocketFire" />
				</div>

				<div className="content_container container_padding">
					<div className="content">
						<div className="heading">
							<h1>Journey — marketing support subscription for brands</h1>
						</div>

						<p>
							Width 558px Height 125px Top 418px Left 262px Blend Pass through With Journey, every month your brand will get hours of work,
							they will be used for your digital needs that require constant attention.
						</p>
						<p className="mb-5">
							Journey is a great way to regulate digital team and make a contribution to your brand. Pay when you need results.
						</p>

						<WhiteButton ButtonText="Contact about Journey" Route="/contact" />
					</div>
				</div>
			</div>

			<div className="how_journey_works_section section_margin container_padding">
				<div className="heading">
					<h1>How Journey works</h1>
				</div>

				<div className="row">
					<div className="col-lg-4 mt-3 col-md-6 col-12 ">
						<div className="card">
							<div className="top_img_container">
								<img src={PlanningImg} alt="PlanningImg" />
							</div>

							<div className="content_container">
								<div className="content_img_container">
									<img src={Contentimg} alt="contentImg" />
								</div>

								<div className="content">
									<div>
										<h5>Month-to-Month Commitment</h5>
										<p>
											No long-term commitments. 30 day planning with a renewal option included. Built for the modern brand and modern team.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-4 mt-3 col-md-6 col-12">
						<div className="card">
							<div className="top_img_container">
								<img src={BillingImg} alt="PlanningImg" />
							</div>

							<div className="content_container">
								<div className="content_img_container">
									<img src={Contentimg} alt="contentImg" />
								</div>

								<div className="content">
									<div>
										<h5>Real-Time Billing</h5>
										<p>
											Forget Estimates and Proposals. We move quick. We’re results focused and bill in real-time as we map new solutions and
											strategies.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-4 mt-3 col-md-6 col-12">
						<div className="card">
							<div className="top_img_container">
								<img src={RoddImg} alt="PlanningImg" />
							</div>

							<div className="content_container">
								<div className="content_img_container">
									<img src={Contentimg} alt="contentImg" />
								</div>

								<div className="content">
									<div>
										<h5>Return On Design & Digital (RODD)</h5>
										<p>
											We believe in creating an RODD: where your brand can monetize and become highly marketable from our cross-collective
											design and digital strategies.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-4 mt-3 col-md-6 col-12">
						<div className="card">
							<div className="top_img_container">
								<img src={DiscussImg} alt="PlanningImg" />
							</div>

							<div className="content_container">
								<div className="content_img_container">
									<img src={Contentimg} alt="contentImg" />
								</div>

								<div className="content">
									<div>
										<h5>No Scope Creep</h5>
										<p>
											Change happens, we get it. Knowing that, we work with you and not against you. Everything is discussed and agreed so
											we avoid friction points.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-4 mt-3 col-md-6 col-12">
						<div className="card">
							<div className="top_img_container">
								<img src={PriorityImg} alt="PlanningImg" />
							</div>

							<div className="content_container">
								<div className="content_img_container">
									<img src={Contentimg} alt="contentImg" />
								</div>

								<div className="content">
									<div>
										<h5>Ditch The Line</h5>
										<p>You get priority, every day and always. No waiting for others in queue before you - you’re our first priority. </p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-4 mt-3 col-md-6 col-12">
						<div className="card">
							<div className="top_img_container">
								<img src={CustomImg} alt="PlanningImg" />
							</div>

							<div className="content_container">
								<div className="content_img_container">
									<img src={Contentimg} alt="contentImg" />
								</div>

								<div className="content">
									<div>
										<h5>Interested in custom options?</h5>
										<p>Let’s discuss your business needs — contact us.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="build_for_section section_margin container_padding">
				<div className="heading">
					<h1>Built for</h1>
				</div>
				<div className="row">
					<div className="col-lg-6 mt-3 col-12">
						<div className="card">
							<div className="content">
								<h5>Teams</h5>
								<ul>
									<li> — Marketing Teams</li>
									<li> — UX & Product Teams</li>
									<li> — Sales Teams</li>
									<li> — Leadership & Management</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="col-lg-6 mt-3 col-12">
						<div className="card">
							<div className="content">
								<h5>Brands</h5>
								<ul>
									<li> — Funded Startups</li>
									<li> — B2B & B2C Brands</li>
									<li> — eCommerce Companies</li>
									<li> — Growth-Focused Organizations</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="services_section section_margin container_padding">
				<div className="heading">
					<h1>Services you get</h1>
				</div>

				<div className="row mb-lg-5 mb-4">
					<div className="col-lg-6 mt-3">
						<h2>Branding & Identity</h2>

						<div className="content_card mt-3">
							<div className="img_container">
								<img src={Contentimg} alt="" />
							</div>

							<div className="content">
								<div className=" row">
									<div className="col-md-6">
										<p>Brand Strategy & Experience</p>
									</div>

									<div className="col-md-6">
										<p>Guidelines & Systems</p>
									</div>

									<div className="col-md-6">
										<p>Trends & Insights</p>
									</div>

									<div className="col-md-6">
										<p>Content Strategy</p>
									</div>

									<div className="col-md-6">
										<p>Go-To-Market Strategy</p>
									</div>

									<div className="col-md-6">
										<p>Identity Design</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-6 mt-4 mt-lg-3">
						<h2>Websites & Digital Platforms</h2>

						<div className="content_card mt-3">
							<div className="img_container">
								<img src={Contentimg} alt="" />
							</div>

							<div className="content">
								<div className=" row">
									<div className="col-md-6">
										<p>Digital Strategy</p>
									</div>

									<div className="col-md-6">
										<p>Digital Activation</p>
									</div>

									<div className="col-md-6">
										<p>UX & UI Design</p>
									</div>

									<div className="col-md-6">
										<p>Web & App Development</p>
									</div>

									<div className="col-md-6">
										<p>Functional Prototyping</p>
									</div>

									<div className="col-md-6">
										<p>SEO Strategy & Systems</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-6 mt-4">
						<h2>eCommerce Experiences</h2>

						<div className="content_card mt-3">
							<div className="img_container">
								<img src={Contentimg} alt="" />
							</div>

							<div className="content">
								<div className=" row">
									<div className="col-md-6">
										<p>Digital Strategy</p>
									</div>

									<div className="col-md-6">
										<p>Design Direction</p>
									</div>

									<div className="col-md-6">
										<p>Industry & Consumer Research</p>
									</div>

									<div className="col-md-6">
										<p>eCommerce Platforms</p>
									</div>

									<div className="col-md-6">
										<p>Rapid Prototyping</p>
									</div>

									<div className="col-md-6">
										<p>Digital Guidelines</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-6 mt-4">
						<h2>Performance Marketing</h2>

						<div className="content_card mt-3">
							<div className="img_container">
								<img src={Contentimg} alt="" />
							</div>

							<div className="content">
								<div className=" row">
									<div className="col-md-6">
										<p>Growth Strategy</p>
									</div>

									<div className="col-md-6">
										<p>Social Media Marketing</p>
									</div>

									<div className="col-md-6">
										<p>PPC Campaigns</p>
									</div>

									<div className="col-md-6">
										<p>Launch Strategies</p>
									</div>

									<div className="col-md-6">
										<p>Email Marketing</p>
									</div>

									<div className="col-md-6">
										<p>SEO Enablement</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<DarkButton ButtonText="More about capabilities" Route="/capabilities" />
			</div>
		</div>
	)
}

export default JourneyPage
