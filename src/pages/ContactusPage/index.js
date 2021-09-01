import './style.scss'
import { DarkButton, InputGroup, TextAreaGroup } from './../../components/UI/index'

import MapImg from '../../assets/images/MapImg.png'

const ContactUsPage = () => {
	return (
		<div className="contact_page">
			<div className="form_section container_padding mt-5">
				<div className="heading ">
					<h1>Get in touch</h1>

					<h2>Feel free to contact us. We will try to answer all your questions.</h2>
				</div>

				<form>
					<div className="row mt-4">
						<div className="col-lg-6">
							<div className="row">
								<div className="col-12">
									<InputGroup label="Name" placeholder="Please enter Name" />
								</div>
								<div className="col-12 mt-4">
									<InputGroup label="Email" placeholder="Please enter Email " />
								</div>
							</div>
						</div>
						<div className="col-lg-6 mt-lg-0 mt-4">
							<TextAreaGroup label="Message" placeholder="Please enter Message" />
						</div>
					</div>

					<div className="send_button">
						<DarkButton ButtonText="Send" />
					</div>
				</form>
			</div>

			<div className="map_section container_padding section_margin">
				<div className="row">
					<div className="col-lg-4 col-xl-3 d-lg-flex align-items-lg-center mt-lg-0 mt-5">
						<div className="content">
							<div className="address">
								<p>Discovery@136digital.com</p>
								<p>1st Floor 2 wood berry Avenue, North Finchley, London, N12 0lr</p>
								<p>02031433149</p>
							</div>

							<div className="discuss_project">
								<p>Do you have an interesting project? Let's start a collaboration</p>

								<DarkButton ButtonText="Discuss project" />
							</div>
						</div>
					</div>
					<div className="col-lg-8 col-xl-9 mt-lg-0 mt-5">
						<div className="img_container">
							<img src={MapImg} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactUsPage
