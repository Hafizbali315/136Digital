import { CgArrowLongRight } from 'react-icons/cg'

const CoverPage = () => {
	return (
		<div className="cover_page">
			<div className="content">
				<h1>EXPERTLY TAKING BRANDS ON A DIGITAL JOURNEY</h1>

				<button>
					Discuss project <CgArrowLongRight className="arrow" />
				</button>

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
	)
}

export default CoverPage
