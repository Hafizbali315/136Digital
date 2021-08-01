import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import HeaderLogoWhite from '../assets/images/header-logo-white.svg'
import HeaderLogoBlack from '../assets/images/header-logo-black.svg'
import Cancel from '../assets/images/cancel.svg'

import { GiHamburgerMenu } from 'react-icons/gi'
import { CgArrowLongRight } from 'react-icons/cg'

const Header = () => {
	const { pathname } = useLocation()

	const [showSmallScreenMenu, setShowSmallScreenMenu] = useState(false)

	const [headerColor, setHeaderColor] = useState('black')

	useEffect(() => {
		if (pathname === '/') {
			setHeaderColor('white')
		} else {
			setHeaderColor('black')
		}
	}, [pathname])

	useEffect(() => {
		if (showSmallScreenMenu) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	}, [showSmallScreenMenu])

	return (
		<div className="header">
			<div className="header_logo">
				<Link to="/">
					<img src={headerColor === 'white' ? HeaderLogoWhite : HeaderLogoBlack} alt="HeaderLogo" />
				</Link>
			</div>

			<div className="header_links d-none d-lg-flex ">
				<ul>
					<li>
						<Link className={`${headerColor === 'white' ? 'navlinksWhite' : 'navlinksBlack'} text-decoration-none `} to="/about-us">
							About us
						</Link>
					</li>
					<li>
						<Link className={`${headerColor === 'white' ? 'navlinksWhite' : 'navlinksBlack'} text-decoration-none `} to="/work">
							Work
						</Link>
					</li>
					<li>
						<Link className={`${headerColor === 'white' ? 'navlinksWhite' : 'navlinksBlack'} text-decoration-none `} to="/capabilities">
							Capabilities
						</Link>
					</li>
					<li>
						<Link className={`${headerColor === 'white' ? 'navlinksWhite' : 'navlinksBlack'} text-decoration-none `} to="/journey">
							Journey
						</Link>
					</li>
					<li>
						<Link className={`${headerColor === 'white' ? 'navlinksWhite' : 'navlinksBlack'} text-decoration-none `} to="/contact-us">
							Contact
						</Link>
					</li>
				</ul>
			</div>

			<div
				className={`${headerColor === 'white' ? 'hamburger_white' : 'hamburger_black'} hamburger_menu d-lg-none`}
				onClick={() => setShowSmallScreenMenu(true)}
			>
				<GiHamburgerMenu />
			</div>

			{showSmallScreenMenu && (
				<div className="mobile_menu">
					<div className="mobile_menu_header">
						<div className="header_logo">
							<img src={HeaderLogoWhite} alt="headerLogo" />
						</div>

						<div className="cancel" onClick={() => setShowSmallScreenMenu(false)}>
							<img src={Cancel} alt="cancel" />
						</div>
					</div>

					<div className="mobile_menu_links">
						<ul>
							<li>
								<Link className="text-white text-decoration-none" to="/about-us">
									About us
								</Link>
							</li>
							<li>
								<Link className="text-white text-decoration-none" to="/work">
									Work
								</Link>
							</li>
							<li>
								<Link className="text-white text-decoration-none" to="/capabilities">
									Capabilities
								</Link>
							</li>
							<li>
								<Link className="text-white text-decoration-none" to="/journey">
									Journey
								</Link>
							</li>
							<li>
								<Link className="text-white text-decoration-none" to="/contact-us">
									Contact
								</Link>
							</li>
							<li>
								<button>
									Discuss project <CgArrowLongRight className="arrow" />
								</button>
							</li>
						</ul>
					</div>
				</div>
			)}
		</div>
	)
}

export default Header
