import './App.css'
import Header from './components/Header'
import Side from './components/Side'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import {
	BrowserRouter, Route, Routes
} from "react-router-dom"
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

// function App(props) {
// 	return (
// 		<BrowserRouter basemname={process.env.PUBLIC_URL}>
// 			<div className="App">
// 				<Header />
// 				<Side />
// 				<Routes>
// 					<Route path="/messeges" element={<Dialogs
// 						store={props.state.dialogsReducer}
// 						dispatch={props.dispatch} />} />

// 					<Route path="/" element={<Profile
// 						store={props.store} />} />
// 				</Routes >
// 			</div >
// 		</BrowserRouter >
// 	)
// }
function App(props) {
	return <HashRouter basename={process.env.PUBLIC_URL}>
		<Provider store={store}>
			<div className="App">
				<Header />
				<Side />
				<Routes>
					<Route path="/messeges" element={<Dialogs
						store={props.state.dialogsReducer}
						dispatch={props.dispatch} />} />

					<Route path="/" element={<Profile
						store={props.store} />} />
				</Routes >
			</div >
		</Provider>
	</HashRouter>
}
export default App