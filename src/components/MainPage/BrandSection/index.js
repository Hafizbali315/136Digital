import { useState } from 'react'
import ArrowNext from '../../../assets/images/next-icon.svg'
import ArrowPrevious from '../../../assets/images/previous-icon.svg'
import './style.scss'

import Image1 from '../../../assets/images/mainPage/brand/1.svg'
import Image2 from '../../../assets/images/mainPage/brand/2.svg'
import Image3 from '../../../assets/images/mainPage/brand/3.svg'
import Image4 from '../../../assets/images/mainPage/brand/4.svg'
import Image5 from '../../../assets/images/mainPage/brand/5.svg'
import Image6 from '../../../assets/images/mainPage/brand/6.svg'

const BrandSection = () => {
	const [currentSlide, setCurrentSlide] = useState(0)

	const BrandContent = [
		{
			id: 0,
			content:
				'"We partnered with to transform our branding from what it was during our first few months as a company, to what it is today (Seed to Series A). They were able to articulate our brand requirements into a perfect vision."',
			tag: 'Jared Schwitzke, product marketing manager in Spring',
		},
		{
			id: 1,
			content:
				'"That partnered with to transform our branding from what it was during our first few months as a company, to what it is today (Seed to Series A). They were able to articulate our brand requirements into a perfect vision."',
			tag: 'Jared Schwitzke, product marketing manager in Spring',
		},
		{
			id: 2,
			content:
				'"You partnered with to transform our branding from what it was during our first few months as a company, to what it is today (Seed to Series A). They were able to articulate our brand requirements into a perfect vision."',
			tag: 'Jared Schwitzke, product marketing manager in Spring',
		},
		{
			id: 3,
			content:
				'"I partnered with to transform our branding from what it was during our first few months as a company, to what it is today (Seed to Series A). They were able to articulate our brand requirements into a perfect vision."',
			tag: 'Jared Schwitzke, product marketing manager in Spring',
		},
		{
			id: 4,
			content:
				'"Us partnered with to transform our branding from what it was during our first few months as a company, to what it is today (Seed to Series A). They were able to articulate our brand requirements into a perfect vision."',
			tag: 'Jared Schwitzke, product marketing manager in Spring',
		},
	]

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? BrandContent.length - 1 : currentSlide - 1)
	}

	const nextSlide = () => {
		setCurrentSlide(currentSlide === BrandContent.length - 1 ? 0 : currentSlide + 1)
	}

	console.log(currentSlide)

	return (
		<div className="brand_section">
			<div className="heading">
				<h1>Brand cooperation</h1>
			</div>

			<div className="slider_container">
				<img src={ArrowPrevious} className="arrow_previous" alt="" onClick={prevSlide} />

				{BrandContent.map((brand, index) => (
					<div className={index === currentSlide ? 'slide active' : 'slide'} key={index}>
						{index === currentSlide && (
							<div className="content">
								<p>{brand.content}</p>
								<h6>{brand.tag}</h6>
							</div>
						)}
					</div>
				))}

				<img src={ArrowNext} className="arrow_next" alt="" onClick={nextSlide} />
			</div>

			<div className="container-fluid">
				<div className="row branding_images">
					<div className="px-0 col-lg-2 col-4 ">
						<img src={Image1} alt="" />
					</div>
					<div className="px-0 col-lg-2 col-4">
						<img src={Image2} alt="" />
					</div>
					<div className="px-0 col-lg-2 col-4">
						<img src={Image3} alt="" />
					</div>
					<div className="px-0 col-lg-2 col-4">
						<img src={Image4} alt="" />
					</div>
					<div className="px-0 col-lg-2 col-4">
						<img src={Image5} alt="" />
					</div>
					<div className="px-0 col-lg-2 col-4">
						<img src={Image6} alt="" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default BrandSection
