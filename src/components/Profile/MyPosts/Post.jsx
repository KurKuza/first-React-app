import React from 'react'

const Post = props => {
	return (
		<div className='post'>
			<div className='description'>{props.message}</div>
			<img
				src='https://media.vanityfair.com/photos/5c82940e52ce6720b360804c/16:9/w_2207,h_1241,c_limit/elon-musk-security-clearance.jpg'
				alt=''></img>
		</div>
	)
}
export default Post
