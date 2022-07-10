import { Route, Routes } from 'react-router-dom';
import { UserForm } from './components/signup/UserForm';

function App() { 
	return (
		<>
			<Routes>
				<Route path='/' element={<UserForm />} />		
			</Routes>
		</>
	);
}

export default App;
