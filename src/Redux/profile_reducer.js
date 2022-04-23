const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
	posts: [
		{ key: 1, message: 'hi, Ilon' },
		{ key: 2, message: 'hi' },
		// { key: 3, message: '444444444444444444444444444444444444444444444444444444444444444444444444444' },
	],
	newPostText: ['new post']
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText
			return state
		case ADD_POST:
			let newPost = {
				key: 5,
				message: state.newPostText
			}
			state.posts.push(newPost)
			state.newPostText = ''
			return state
		default: return state
	}
}
export const addPostActionCreator = () => ({ type: ADD_POST, })
export const updateNewPostTextActionCreator = text => ({
	type: UPDATE_NEW_POST_TEXT, newText: text,
})




export default profileReducer

// state._callSubscriber(this._state)
// this._callSubscriber(this._state)