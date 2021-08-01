import './style.scss'
import FooterImage from '../../assets/images/footerImage.png'
import { CgArrowLongRight } from 'react-icons/cg'

import FooterLogo from '../../assets/images/header-logo-white.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer_content_row">
				<img src={FooterImage} alt="footerimage" />

				<div className="content">
					<div>
						<h1>Let's cooperate</h1>
						<p>
							We are always on hand to help brands communicate effectively with their targeted audiences. Drop us a line about your project.
							Our team will contact you shortly
						</p>

						<button>
							Discuss project <CgArrowLongRight className="arrow" />
						</button>
					</div>
				</div>
			</div>

			<div className="footer_links_row container-fluid">
				<div className="row">
					<div className="col-lg-3 col-md-4 col-6">
						<Link to="/" className="text-decoration-none">
							<img className="footer_logo" src={FooterLogo} alt="" />
						</Link>
						<p className="privacy_policy">Privacy Policy | Terms of Use</p>
					</div>
					<div className="col-lg-3 col-md-4 col-6">
						<p className="email">Discovery@136digital.com</p>
						<p className="map">map</p>
					</div>
					<div className="col-lg-6 col-md-8 col-12">
						<div className="links_sm_screeen">
							<div className="pages_links">
								<ul>
									<li>
										<Link to="/about-us" className="text-decoration-none link">
											About us
										</Link>
									</li>
									<li>
										<Link to="" className="text-decoration-none link">
											Work
										</Link>
									</li>
									<li>
										<Link to="" className="text-decoration-none link">
											Capabilities
										</Link>
									</li>
									<li>
										<Link to="" className="text-decoration-none link">
											Journey
										</Link>
									</li>
									<li>
										<Link to="" className="text-decoration-none link">
											Contact
										</Link>
									</li>
								</ul>
							</div>

							<div className="social_links">
								<ul>
									<li>
										<a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
											Instagram
										</a>
									</li>
									<li>
										<a href="https://twitter.com/" target="_blank" rel="noreferrer">
											Twitter
										</a>
									</li>
									<li>
										<a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
											Facebook
										</a>
									</li>
									<li>
										<a href="https://www.medium.com/" target="_blank" rel="noreferrer">
											Medium
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
