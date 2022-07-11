export const Card = () => {
	return (
		<>
			<div className='row my-4 py-4'>
				<div className='col-sm-6'>
					<div className='card'>
						<div className='card-body'>
							<h2 className='card-title'>Basic</h2>
							<small>Service</small>
							<h1 className='card-text text-primary'>30</h1>
							<form>
								<input
									className='form-check-input justify-content-center'
									type='radio'
									name='plan'
									value={true}
								/>
							</form>
						</div>
					</div>
				</div>
				<div className='col-sm-6'>
					<div className='card'>
						<div className='card-body'>
							<h2 className='card-title'>Premium</h2>
							<small>Service</small>
							<h1 className='card-text text-primary'>50</h1>
							<input className='form-check-input' type='radio' />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
