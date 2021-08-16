import './style.scss'
import HeroImg from '../../assets/images/AboutusPage/HeroImg.png'
import CapabilitiesImg from '../../assets/images/AboutusPage/1.png'
import { CgArrowLongRight } from 'react-icons/cg'

// 3D Images
import Img1 from '../../assets/images/AboutusPage/3DImages/1.png'
import Img2 from '../../assets/images/AboutusPage/3DImages/2.png'
import Img3 from '../../assets/images/AboutusPage/3DImages/3.png'
import Img4 from '../../assets/images/AboutusPage/3DImages/4.png'
import Img5 from '../../assets/images/AboutusPage/3DImages/5.png'

import MissionImg from '../../assets/images/AboutusPage/MissionImg.png'

import BrandStory1 from '../../assets/images/AboutusPage/BrandStory1.png'
import BrandStory2 from '../../assets/images/AboutusPage/BrandStory2.png'
import BrandStory3 from '../../assets/images/AboutusPage/BrandStory3.png'
import BrandSection from './../../components/BrandSection/index'

// Brand Cooperation Images Import
import FacebookImg from '../../assets/images/AboutusPage/FacebookImg.png'
import GoogleImg from '../../assets/images/AboutusPage/GoogleImg.png'
import HubSpotImg from '../../assets/images/AboutusPage/HubSpotImg.png'
import MailchimpImg from '../../assets/images/AboutusPage/MailchimpImg.png'
import SnapshotImg from '../../assets/images/AboutusPage/FacebookImg.png'
import YoutubeImg from '../../assets/images/AboutusPage/YoutubeImg.png'
import RightCarusal from './../../components/RightCarusal/index'

import News1 from '../../assets/images/AboutusPage/News1.png'
import News2 from '../../assets/images/AboutusPage/News2.png'
import News3 from '../../assets/images/AboutusPage/News3.png'
import News4 from '../../assets/images/AboutusPage/News4.png'
import News5 from '../../assets/images/AboutusPage/News5.png'
import News6 from '../../assets/images/AboutusPage/News6.png'

const AboutUsPage = () => {
	const NewsLinkdinContentArray = [
		{
			id: 1,
			img: News1,
			date: 'March 10, 2021',
			heading: '136 DIGITAL. Company news headline',
			description: 'Brief description of the article. Perhaps 2-3 lines. No more than that.',
		},
		{
			id: 2,
			img: News2,
			date: 'March 10, 2021',
			heading: '136 DIGITAL. Company news headline',
			description: 'Brief description of the article. Perhaps 2-3 lines. No more than that.',
		},
		{
			id: 3,
			img: News3,
			date: 'March 10, 2021',
			heading: '136 DIGITAL. Company news headline',
			description: 'Brief description of the article. Perhaps 2-3 lines. No more than that.',
		},
		{
			id: 4,
			img: News4,
			date: 'March 10, 2021',
			heading: '136 DIGITAL. Company news headline',
			description: 'Brief description of the article. Perhaps 2-3 lines. No more than that.',
		},
	]

	const NewsMediumContentArray = [
		{
			id: 1,
			img: News1,
			date: 'March 10, 2021 ',
			heading: '136 DIGITAL. Company news headline',
			description: 'Brief description of the article. Perhaps 2-3 lines. No more than that.',
		},
		{
			id: 2,
			img: News2,
			date: 'March 10, 2021 ',
			heading: '136 DIGITAL. Company news headline',
			description: 'Brief description of the article. Perhaps 2-3 lines. No more than that.',
		},
		{
			id: 3,
			img: News3,
			date: 'March 10, 2021 ',
			heading: '136 DIGITAL. Company news headline',
			description: 'Brief description of the article. Perhaps 2-3 lines. No more than that.',
		},
		{
			id: 4,
			img: News4,
			date: 'March 10, 2021 ',
			heading: '136 DIGITAL. Company news headline',
			description: 'Brief description of the article. Perhaps 2-3 lines. No more than that.',
		},
		{
			id: 5,
			img: News5,
			date: 'March 10, 2021 ',
			heading: '136 DIGITAL. Company news headline',
			description: 'Brief description of the article. Perhaps 2-3 lines. No more than that.',
		},
		{
			id: 6,
			img: News6,
			date: 'March 10, 2021 ',
			heading: '136 DIGITAL. Company news headline',
			description: 'Brief description of the article. Perhaps 2-3 lines. No more than that.',
		},
	]

	const NewsInstagramContentArray = [
		{ id: 1, img: News4 },
		{ id: 2, img: News5 },
		{ id: 3, img: News6 },
		{ id: 4, img: News1 },
		{ id: 5, img: News2 },
		{ id: 6, img: News3 },
	]

	return (
		<div className="aboutus_page">
			<div className="hero_card">
				<div className="hero_card_img">
					<img src={HeroImg} alt="Hero" />
				</div>

				<div className="content">
					<h1>Work that matters for people who care</h1>
				</div>
			</div>

			<div className="capabilities_card container-fluid">
				<div className="row">
					<div className="col-lg-6 col-12">
						<div className="content">
							<p>
								136 Digital is a Full-service Branding and Marketing agency that helps businesses create lead generation and relationships
								with targeted audiences through powerful emotionally-driven storytelling.
							</p>
							<p>
								Working closely with Brands to help establish themselves in the digital marketplace and differentiate themselves from their
								competition with tailored narrative-driven branding that shows through the way they present every aspect of their business.
							</p>

							<button>
								Our capabilities <CgArrowLongRight className="arrow" />
							</button>
						</div>
					</div>
					<div className="col-lg-6 col-12">
						<div className="img_container">
							<img src={CapabilitiesImg} alt="" />
						</div>
					</div>
				</div>

				<div className="lg_content ">
					<h1>Entertaining and informative content creation helps generated leads for creative Brands </h1>

					<div className="images">
						<img src={Img1} className="img1" alt="" />
						<img src={Img2} className="img2" alt="" />
						<img src={Img3} className="img3" alt="" />
						<img src={Img4} className="img4" alt="" />
						<img src={Img5} className="img5" alt="" />
					</div>
				</div>
			</div>

			{/* Mission Section */}
			<div className="mission_section">
				<div className="img_container">
					<img src={MissionImg} alt="" />
				</div>

				<div className="content">
					<div>
						<h1>Mission</h1>
						<p>
							Our Mission is to take brands on a journey providing work that matters for people who care through the art of digital story
							telling helping businesses tell their unique stories in a way that connects and relates to communities.
						</p>
					</div>
				</div>
			</div>

			{/* Brand Copration */}
			<div className="brand_story_section">
				<div className="heading">
					<h1>Brand Story</h1>
				</div>

				<div className="content container-fluid">
					<div className="row">
						<div className="col-lg-6">
							<div className="text">
								<p>
									Branding and marketing have always been something that I have been aware of my whole life being a black boy that grew up
									in South East London communicating between two rival gang postcodes.
								</p>
								<p>
									Storytelling would be a daily thing whether it would be going to school during the week day or to family on the weekend
									everyday was colorful. Most of these stories would occur on the 136 bus, taking us through all the gang’s hotspots
									observing a collection of colorful characters. After getting off you always had a story to tell. The power of branding
									became evident on these bus rides. The cool kids who had street cred would “market” themselves differently from those that
									didn't. Same with the tough guys who would promote themselves in a way so that nobody would mess with them.{' '}
								</p>
							</div>

							<div className="image">
								<img src={BrandStory1} alt="" />
							</div>

							<div className="text">
								<p>The Customers experience is the base of everything we do.</p>

								<p>Relationships are built on trust, which is developed through consistently and promise.</p>

								<p>Let us take your brand on a digital journey to reach your audience.</p>
							</div>
						</div>

						<div className="col-lg-6">
							<div className="image">
								<img src={BrandStory2} alt="" />
							</div>

							<div className="content_heading">
								<h1>Ideas are a result of having to overcome challanges</h1>
							</div>

							<div className="text">
								<p>Its these people-experiences. That’s what we’re here for.</p>

								<p>
									Improving our level of service over the last 10 years through championing people to create an ethical but highly
									productive advantage finding new ways of engaging with audiences turning client-ships into strong partnerships supporting
									and maintaining Work that matters for people who care.
								</p>
							</div>

							<div className="image">
								<img src={BrandStory3} alt="" />
							</div>
						</div>

						<div className="text-center content_heading">
							<h1>This raw, early exposure to personal branding fueled the creation of our agency</h1>
						</div>
					</div>
				</div>
			</div>

			{/* Brand Cooperation */}
			<BrandSection
				Image1={FacebookImg}
				Image2={GoogleImg}
				Image3={HubSpotImg}
				Image4={MailchimpImg}
				Image5={SnapshotImg}
				Image6={YoutubeImg}
			/>

			{/* News from Medium */}
			<RightCarusal title="News from Medium" buttonText="Our Medium" ContentArray={NewsMediumContentArray} />

			{/* News From Instagram */}
			<RightCarusal title="News from Instagram" buttonText="Our Instagram" ContentArray={NewsInstagramContentArray} />

			{/* News from Linkdin */}
			<RightCarusal title="News from LinkedIn" buttonText="Our Linkdin" ContentArray={NewsLinkdinContentArray} />
		</div>
	)
}

export default AboutUsPage
