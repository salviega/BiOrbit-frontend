import React from 'react'
import { useSelector } from 'react-redux'
import './BiorbitHome.scss'
import { ProtectedAreaForm } from './ProtectedAreaForm'

export function BioOrbitHome() {
	const user = useSelector(state => state.auth)
	console.log(user)

	return (
		<>
			<section className='py-5 text-center container'>
				<div className='row py-lg-5'>
					<div className='col-lg-6 col-md-8 mx-auto'>
						<h1 className='fw-light'>Eyes on the forest</h1>
						<p className='lead text-muted'>
							SMonitor the forest areas you want, we help you combat
							deforestation in green areas, together we will protect the planet
							through data of scientific value; Once you select the desired
							area, return in 24 hours and you will have available the NFT's
							resulting from the assigned monitoring.
						</p>
						<div className='home-buttons'>
							<a
								href='https://geojson.io/#map=2/0/20'
								target='_blank'
								className='btn btn-primary my-2'
								rel='noreferrer'
							>
								Get coordinates
							</a>
							<ProtectedAreaForm user={user}></ProtectedAreaForm>
						</div>
					</div>
				</div>
			</section>
			<div className='album py-5 bg-light'>
				<div className='container'>
					<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
						<div className='col'>
							<div className='card shadow-sm'>
								<img
									className='bd-placeholder-img card-img-top'
									src='http://bp0.blogger.com/_4iqVd8IGT28/R1cZA9Z4vrI/AAAAAAAAAFk/MbRZgG9zcAQ/w1200-h630-p-k-no-nu/fotos+rigoberto+008.jpg'
								/>
								<div className='card-body'>
									<strong>
										<p className='card-title'>
											El Parque Nacional Natural Selva de Florencia
										</p>
									</strong>
									<p className='card-text'>
										Posee una extensión 10.019 hectáreas con un gradiente
										altitudinal que va desde los 850 hasta los 2400 m.s.n.m,
										presenta un relieve escarpado, una precipitación media anual
										de 6.270 mm y una temperatura promedio de 19° C.
									</p>
									<div className='d-flex justify-content-between align-items-center'>
										<div className='btn-group'>
											<button
												type='button'
												className='btn btn-sm btn-outline-secondary'
											>
												View
											</button>
										</div>
										<small className='text-muted'>9 mins</small>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
