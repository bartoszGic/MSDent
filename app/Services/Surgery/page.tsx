import React from 'react';
import { surgery } from '@/app/components/types';
const Surgery = () => {
	return (
		<section className='flex flex-col items-center w-full px-4 pt-28 pb-12 sm:px-12 md:pt-32 lg:px-20'>
			<div>
				<h2 className='tracking-widest text-4xl text-yellow text-center mb-8 md:mb-12'>
					Chirurgia stomatologiczna
				</h2>
				<p className='mb-8 text-dark tracking-wide md:text-xl md:mb-16 md:font-light'>
					Oferujemy różnorodne procedury chirurgii stomatologicznej, które
					obejmują usuwanie zębów, zarówno standardowe jak i skomplikowane
					przypadki, oraz inne zabiegi chirurgiczne, takie jak plastyka
					połączenia ustno-zatokowego i resekcja. Nasz doświadczony zespół
					zapewnia profesjonalną opiekę i bezpieczne procedury chirurgiczne.
				</p>
				<h3 className='my-4 px-2 text-2xl text-blue md:my-12'>Cennik</h3>
				<ul className='grid grid-cols-1 gap-2 font-normal md:gap-4 lg:grid-cols-2 md:text-lg md:font-medium lg:gap-6'>
					{surgery.map(item => {
						return (
							<li
								key={item.name}
								className='grid grid-cols-5 gap-2 items-center p-2 text-dark bg-brokenWhite rounded-lg md:p-4'>
								<h4
									className={`col-span-3 ${
										item.types && 'col-span-4'
									} font-light`}>
									{item.name}
								</h4>
								<p className='col-span-2 text-right my-auto text-green'>
									{item.price}
								</p>
								{item.types && (
									<ul className='col-span-5'>
										{item.types.map(type => {
											return (
												<li
													key={type.name}
													className='grid grid-cols-5'>
													<h4 className='col-span-3 font-light'>{type.name}</h4>
													<p className='col-span-2 text-right my-auto text-green'>
														{type.price}
													</p>
												</li>
											);
										})}
									</ul>
								)}
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default Surgery;
