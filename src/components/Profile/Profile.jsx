import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = props => {
	// debugger
	return (
		<div className='content'>
			<div className='profile__images'>
				<div className='cover'>
					<img
						src='https://planetofhotels.com/guide/sites/default/files/styles/node__blog_post__bp_banner/public/2020-06/Exotic-tropical-beach-sunse.jpg'
						alt=''></img>
				</div>
				<div className='person'>
					<img
						src='https://sun9-42.userapi.com/impg/q7evsrCa_LRAwVWYLQYFi-JhSjBasPkL8Kk8dQ/bOjgfKihl9Q.jpg?size=1400x1774&quality=95&sign=92cd10ca5baad03f384664677b6c32cf&type=album'
						alt=''></img>
				</div>
			</div>
			<div className='nick'>Danil</div>
			<MyPostsContainer store={props.store} />
		</div>
	)
}
export default Profile
