import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import HomePage from '../components/HomePage/HomePage'

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<HomePage />
				</Route>
				<Redirect from="*" to="/" />
			</Switch>
		</Router>
	)
}

export default App
