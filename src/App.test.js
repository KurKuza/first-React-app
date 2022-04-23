import './App.css'
import Header from './components/Header'
import Side from './components/Side'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import {
	BrowserRouter, Route, Routes
} from "react-router-dom"

function App(props) {
	// debugger
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Side />
				<Routes>
					<Route path="/messeges" element={<Dialogs
						state={props.state} />} />
					<Route path="/profile" element={<Profile
						state={props.state}
						addPost={props.addPost}
						updateNewPostText={props.updateNewPostText} />} />
					<Route path="/" element={<Profile
						state={props.state.profilePage}
						addPost={props.addPost}
						updateNewPostText={props.updateNewPostText} />} />
				</Routes >
			</div >
		</BrowserRouter >
	)
}
export default App