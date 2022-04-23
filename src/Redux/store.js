import dialogsReducer from './dialogs_reducer'
import profileReducer from './profile_reducer'

let store = {
	_state: {
		profilePage: {
			posts: [
				{ key: 1, message: 'hi, Ilon' },
				{ key: 2, message: 'hi' },
			],
			newPostText: ['it-kamasutra.com']
		},
		dialogsPage: {
			dialogs: [
				{ key: 1, name: 'Dimych' },
				{ key: 2, name: 'Andrey' },
				{ key: 3, name: 'Sveta' },
				{ key: 4, name: 'Sasha' },
				{ key: 5, name: 'Viktor' },
			],
			messages: [
				{ key: 1, message: 'Hi' },
				{ key: 2, message: 'hey hey!' },
				{ key: 3, message: 'Yo' },
				{ key: 4, message: 'Yo' },
				{ key: 5, message: 'Yo' },
			],
			newMessageBody: ''
		}
	},
	getState() {
		return this._state
	},
	_callSubscriber() {
		console.log('state changes')
	},
	addPost() {
		let newPost = {
			key: 5,
			message: this._state.profilePage.newPostText
		}
		this._state.profilePage.posts.push(newPost)
		this._state.profilePage.newPostText = ''
		this._callSubscriber(this._state)
	},
	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText
		this._callSubscriber(this._state)
	},
	subscribe(observer) {
		this._callSubscriber = observer
	},
	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

		this._callSubscriber(this._state)
	}
}
window.state = store._state




export default store
window.store = store