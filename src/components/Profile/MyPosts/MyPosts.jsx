import React from 'react'
import Post from './Post'

const Myposts = props => {
	let postItems = props.posts.map(p => <Post key={p.key} message={p.message} />)

	let newPostElement = React.createRef()

	let onAddPost = () => {
		props.addPost()
	}

	let onPostChange = () => {
		let text = newPostElement.current.value
		props.updateNewPostText(text)
	}

	return (
		<div className='posts'>
			<div className='post__create'>
				<input
					placeholder='Create post'
					className='input'
					type='text'
					onChange={onPostChange}
					ref={newPostElement}
					value={props.newPostText}
				/>
				<button onClick={onAddPost}>Add post</button>
			</div>
			{postItems}
		</div>
	)
}
export default Myposts
