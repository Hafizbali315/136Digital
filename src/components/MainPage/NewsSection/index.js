import ArrowNext from '../../../assets/images/next-icon.svg'
import ArrowPrevious from '../../../assets/images/previous-icon.svg'

import HandBag from '../../../assets/images/handbag.svg'
import GameController from '../../../assets/images/game-controller.svg'
import VCR from '../../../assets/images/vcr.svg'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

import { CgArrowLongRight } from 'react-icons/cg'

import './style.scss'

const NewSection = () => {
	const newsRef = useRef(null)

	const NewsArray = [
		{ id: 0, img: HandBag, heading: '136 DIGITAL. Company news headline', date: 'March 10, 2021 ' },
		{ id: 1, img: GameController, heading: '136 DIGITAL. Company news headline', date: 'March 10, 2021 ' },
		{ id: 2, img: VCR, heading: '136 DIGITAL. Company news headline', date: 'March 10, 2021 ' },
		{ id: 3, img: HandBag, heading: '136 DIGITAL. Company news headline', date: 'March 10, 2021 ' },
		{ id: 4, img: GameController, heading: '136 DIGITAL. Company news headline', date: 'March 10, 2021 ' },
		{ id: 5, img: VCR, heading: '136 DIGITAL. Company news headline', date: 'March 10, 2021 ' },
	]

	const scrollLeft = () => {
		if (newsRef.current) {
			newsRef.current.scrollBy({
				top: 0,
				left: -490,
				behavior: 'smooth',
			})
		}
	}

	const scrollRight = () => {
		if (newsRef.current) {
			newsRef.current.scrollBy({
				top: 0,
				left: 490,
				behavior: 'smooth',
			})
		}
	}

	return (
		<div className="news_scetion">
			<div className="heading">
				<div className="title">
					<h1>News</h1>
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

			<div className="news_container" ref={newsRef}>
				{NewsArray.map((news) => (
					<div className="news_card" key={news.id}>
						<div className="news_img">
							<img src={news.img} alt="news" />
						</div>
						<div className="news_tag">
							<span>{news.date}</span>
						</div>

						<div className="news_heading">
							<h2>{news.heading}</h2>
						</div>
					</div>
				))}
			</div>

			<button className="news_btn">
				<Link to="/news" className="link text-decoration-none">
					View all news <CgArrowLongRight className="arrow" />
				</Link>
			</button>
		</div>
	)
}

export default NewSection
