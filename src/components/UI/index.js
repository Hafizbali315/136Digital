import { Link } from 'react-router-dom'
import { CgArrowLongRight } from 'react-icons/cg'
import './style.scss'

export const WhiteButton = ({ ButtonText, Route }) => {
	return (
		<button className="white_button">
			<Link to={Route} className="text-decoration-none link">
				{ButtonText} <CgArrowLongRight className="arrow" />
			</Link>
		</button>
	)
}

export const DarkButton = ({ ButtonText, Route }) => {
	return (
		<button className="dark_button">
			<Link to={Route} className="text-decoration-none link">
				{ButtonText} <CgArrowLongRight className="arrow" />
			</Link>
		</button>
	)
}

export const InputGroup = ({ label, placeholder }) => {
	return (
		<div className="custom_input_group">
			<label>{label}</label>
			<input type="text" placeholder={placeholder} />
		</div>
	)
}

export const TextAreaGroup = ({ label, placeholder }) => {
	return (
		<div className="custom_text_area">
			<label>{label}</label>
			<textarea placeholder={placeholder}></textarea>
		</div>
	)
}
