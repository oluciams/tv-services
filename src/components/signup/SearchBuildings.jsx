import { Button } from '../Button';

export const SearchBuildings = () => {
	return (
		<>
			<h4 className='mt-5'>Buscar edificio</h4>

			<form className='row mt-5 pt-4 justify-content-center'>
				<div className='col-4'>
					<input className='form-control' type='text' placeholder='search' />
					<Button
						type='submit'
						className='btn btn-primary btn-lg my-5 py-2 px-5'
						text={'search'}
					/>
				</div>
			</form>
		</>
	);
};
