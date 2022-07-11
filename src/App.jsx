import { Route, Routes } from 'react-router-dom';
import { SelectPlan } from './components/signup/SelectPlan';
import { SearchList } from './components/signup/SearchList';
import { UserDetails } from './components/signup/UserDetails';
import { UserForm } from './components/signup/UserForm';
import { Confirmation } from './components/signup/Confirmation';

function App() { 
	return (
		<>
		<section className='container-fluid col-8 text-center mx-auto my-4 py-3'>
			<Routes>
				<Route path='/' element={<UserForm />} />	
				<Route path='userDetails' element={<UserDetails />} />		
				<Route path='searchList' element={<SearchList />} />	
				<Route path='selectPlan' element={<SelectPlan />} />	
				<Route path='confirmation' element={<Confirmation />} />	
			</Routes>
		</section>
		</>
	);
}

export default App;
