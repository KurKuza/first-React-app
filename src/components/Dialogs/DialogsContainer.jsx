import React from 'react'
import {
	sendMessageCreator,
	updateNewMessageBodyCreator,
} from '../../Redux/dialogs_reducer'
import Dialogitem from './Dialog'

const Dialogs = props => {
	// debugger
	let state = props.store

	let dialogsElements = state.dialogs.map(d => (
		<Dialogitem key={d.key} name={d.name} href={d.key} />
	))
	let messagesElements = state.messages.map(m => (
		<li key={m.key}>{m.message}</li>
	))
	let newMessageBody = state.newMessageBody // пустая строка

	let onSendMessageClick = () => {
		props.dispatch(sendMessageCreator())
	}
	let onNewMessageChange = e => {
		let body = e.target.value
		props.dispatch(updateNewMessageBodyCreator(body))
	}
	// debugger
	return (
		<div className='diologs'>
			<div className='users'>{dialogsElements}</div>
			<div className='messeges'>
				<ul>{messagesElements}</ul>
				<div className='messeges__input'>
					<div>
						<div>
							<input
								value={newMessageBody}
								onChange={onNewMessageChange}
								placeholder='Add message'
								type='text'
								className='messeges__input input'
							/>
						</div>
						<div>
							<button onClick={onSendMessageClick}>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'>
									<g
										id='send_24__Page-2'
										stroke='none'
										strokeWidth='1'
										fill='none'
										fillRule='evenodd'>
										<g id='send_24__send_24'>
											<path id='send_24__Rectangle-76' d='M0 0h24v24H0z'></path>
											<path
												d='M5.74 15.75a39.14 39.14 0 00-1.3 3.91c-.55 2.37-.95 2.9 1.11 1.78 2.07-1.13 12.05-6.69 14.28-7.92 2.9-1.61 2.94-1.49-.16-3.2C17.31 9.02 7.44 3.6 5.55 2.54c-1.89-1.07-1.66-.6-1.1 1.77.17.76.61 2.08 1.3 3.94a4 4 0 003 2.54l5.76 1.11a.1.1 0 010 .2L8.73 13.2a4 4 0 00-3 2.54z'
												id='send_24__Mask'
												fill='currentColor'></path>
										</g>
									</g>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
// key={props.state.dialogs.key}
export default Dialogs
