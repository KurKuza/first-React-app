import React from 'react'
import MyPosts from './MyPosts'
import {
	updateNewPostTextActionCreator,
	addPostActionCreator,
} from '../../../Redux/profile_reducer'

const MypostsContainer = props => {
	let addPost = () => {
		props.store.dispatch(addPostActionCreator())
	}

	let onPostChange = text => {
		let action = updateNewPostTextActionCreator(text)
		props.store.dispatch(action)
	}
	debugger
	return (
		<MyPosts
			updateNewPostText={onPostChange}
			addPost={addPost}
			posts={props.store.getState().profileReducer.posts}
			newPostText={props.store.getState().profileReducer.newPostText}
		/>
	)
}
export default MypostsContainer
