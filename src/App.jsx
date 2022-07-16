// import { Route, Routes } from 'react-router-dom';
// import { SelectPlan } from './components/signup/SelectPlan';
// import { SearchList } from './components/signup/SearchList';
// import { UserDetails } from './components/signup/UserDetails';
// import { UserForm } from './components/signup/UserForm';
// import { Confirmation } from './components/signup/Confirmation';
// import { Success } from './components/signup/Success';
import { useSelector } from 'react-redux';
import { UserForm } from './components/signup/UserForm';
import { UserDetails } from './components/signup/UserDetails';
import { SearchList } from './components/signup/SearchList';

function App() {

	const page = useSelector( (state) => state.signup.page )


	const pageDisplay = () => {
		switch( page ) {
			case 0:
				return <UserForm />
			case 1: 
				return <UserDetails  />
			case 2:
				return <SearchList  />			
			// case 3:
			// 	return <SelectPlan  />
			// case 4:
			// 	return <Confirmation  />
			// case 5:
			// return <Success  />
			default:
		} 
	}
	return (
		<>
			<section className='container-fluid col-8 text-center mx-auto my-4 py-3'>
				<div>{pageDisplay()}</div>			
			</section>
		</>
	);
}

export default App;
