const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body
			return state
		case SEND_MESSAGE:
			let body = state.newMessageBody
			state.newMessageBody = ''
			state.messages.push({ key: 6, message: body })
			return state
		default: return state
	}
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE, })
export const updateNewMessageBodyCreator = body => ({
	type: UPDATE_NEW_MESSAGE_BODY, body: body,
})


export default dialogsReducer