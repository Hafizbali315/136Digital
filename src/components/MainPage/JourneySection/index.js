import './style.scss'
import RocketFire from '../../../assets/videos/rocket-fire.gif'
import { Link } from 'react-router-dom'
import { CgArrowLongRight } from 'react-icons/cg'

const JourneySection = () => {
	return (
		<div className="journey_sectioon">
			<img src={RocketFire} alt="rocket" />

			<div className="content">
				<div>
					<h1>Journey</h1>
					<p>Effective subscriptions for brands for all marketing services.</p>

					<button>
						<Link to="/journey" className="link text-decoration-none">
							Read more <CgArrowLongRight className="arrow" />
						</Link>
					</button>
				</div>
			</div>
		</div>
	)
}

export default JourneySection
