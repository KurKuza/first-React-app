import React from 'react'
import { NavLink } from 'react-router-dom'

const Dialogitem = props => {
	return (
		<div className='dialog__item'>
			<NavLink to={`/dialogs/${props.href}`}>{props.name}</NavLink>
		</div>
	)
}
export default Dialogitem
