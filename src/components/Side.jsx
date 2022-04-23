import React from 'react'
import { Link } from 'react-router-dom'
const Side = props => {
	return (
		<div className='side'>
			<ul>
				<li>
					<Link to='/'>Profile</Link>
				</li>
				<li>
					<Link to='/messeges'>Messeges</Link>
				</li>
			</ul>
		</div>
	)
}
export default Side
