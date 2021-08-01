import ArrowNext from '../../../assets/images/next-icon.svg'
import ArrowPrevious from '../../../assets/images/previous-icon.svg'

import HandBag from '../../../assets/images/handbag.svg'
import GameController from '../../../assets/images/game-controller.svg'
import VCR from '../../../assets/images/vcr.svg'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

import { CgArrowLongRight } from 'react-icons/cg'

const WorkSection = () => {
	const workRef = useRef(null)

	const WorkArray = [
		{ id: 0, img: HandBag, heading: 'Umbro Kaixi —Elegant Handbags for Elegant Women', tag: 'Performance Marketing' },
		{ id: 1, img: GameController, heading: 'Umbro Kaixi —Elegant Handbags for Elegant Women', tag: 'Performance Marketing' },
		{ id: 2, img: VCR, heading: 'Umbro Kaixi —Elegant Handbags for Elegant Women', tag: 'Performance Marketing' },
		{ id: 3, img: HandBag, heading: 'Umbro Kaixi —Elegant Handbags for Elegant Women', tag: 'Performance Marketing' },
		{ id: 4, img: GameController, heading: 'Umbro Kaixi —Elegant Handbags for Elegant Women', tag: 'Performance Marketing' },
		{ id: 5, img: VCR, heading: 'Umbro Kaixi —Elegant Handbags for Elegant Women', tag: 'Performance Marketing' },
	]

	console.log(WorkArray)

	const scrollLeft = () => {
		if (workRef.current) {
			workRef.current.scrollBy({
				top: 0,
				left: -400,
				behavior: 'smooth',
			})
		}
	}

	const scrollRight = () => {
		if (workRef.current) {
			workRef.current.scrollBy({
				top: 0,
				left: 480,
				behavior: 'smooth',
			})
		}
	}

	return (
		<div className="work_section">
			<div className="heading">
				<div className="title">
					<h1>Work</h1>
				</div>
				<div className="navigation_icon">
					<div className="arrow_previous" onClick={scrollLeft}>
						<img src={ArrowPrevious} alt="ArrowPrevious" />
					</div>
					<div className="arrow_next" onClick={scrollRight}>
						<img src={ArrowNext} alt="ArrowNext" />
					</div>
				</div>
			</div>

			<div className="work_container" ref={workRef}>
				{WorkArray.map((work) => (
					<div className="work_card" key={work.id}>
						<div className="work_img">
							<img src={work.img} alt="work" />
						</div>
						<div className="work_tag">
							<span>{work.tag}</span>
						</div>

						<div className="work_heading">
							<h2>{work.heading}</h2>
						</div>
					</div>
				))}
			</div>

			<button className="work_btn">
				<Link to="/work" className="link text-decoration-none">
					View all work <CgArrowLongRight className="arrow" />
				</Link>
			</button>
		</div>
	)
}

export default WorkSection
