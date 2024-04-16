'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { linksSevices } from '../components/types';

const Services = () => {
	const [showDescription, setShowDescription] = useState<null | string>(null);

	return (
		<section className='flex flex-col items-center w-full px-4 pt-28 pb-12 sm:px-12 md:pt-32 lg:px-20'>
			<h2 className='tracking-widest text-4xl text-yellow text-center mb-8 md:mb-12'>
				Usługi
			</h2>
			<p className='mb-8 text-sm text-dark tracking-wide md:text-xl md:mb-16 md:font-light'>
				Prezentujemy szeroką gamę usług, zapewniając kompleksową opiekę
				stomatologiczną dla naszych pacjentów. Nasze usługi obejmują badania
				stomatologiczne, konsultacje w celu ustalenia planu leczenia, wizyty
				adaptacyjne dla dzieci, różnorodne procedury stomatologiczne jak
				wypełnienia, odbudowy zębów, leczenie kanałowe, usuwanie kamienia
				nazębnego oraz profesjonalne zabiegi higienizacyjne takie jak
				piaskowanie czy lakowanie zębów. Ponadto, oferujemy również usługi z
				zakresu protetyki stomatologicznej oraz ortodoncji, zapewniając
				kompleksową opiekę nad zdrowiem jamy ustnej i estetyką uśmiechu. Nasz
				zespół doświadczonych specjalistów służy pomocą i troską o zdrowie oraz
				piękny uśmiech każdego pacjenta.
			</p>
			<ul className='grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24 md:gap-y-12'>
				{linksSevices.map(link => {
					return (
						<li key={link.href}>
							<div
								onMouseEnter={() => setShowDescription(link.name)}
								onMouseLeave={() => setShowDescription(null)}
								className='relative overflow-hidden'>
								<Image
									className='rounded-lg w-[450px]'
									src={link.image}
									alt={link.name}
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
								/>
								<div
									className={`absolute flex w-full items-center top-0 h-full bg-white bg-opacity-90 p-2 rounded-lg transition-all duration-200 ${
										showDescription === link.name ? 'left-0' : 'left-full'
									} sm:p-4`}>
									<p className='text-dark text-sm lg:text-base'>
										{link.description}
									</p>
								</div>
							</div>
							<div className='flex flex-col sm:flex-row sm:justify-between'>
								<h4 className='my-4 text-2xl tracking-wider text-yellow md:my-8'>
									{link.name}
								</h4>
								<Link
									href={link.href}
									className='flex items-center text-lightBlue text-lg hover:opacity-80 duration-200'>
									Cennik
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='w-4 h-4 ml-2'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='m8.25 4.5 7.5 7.5-7.5 7.5'
										/>
									</svg>
								</Link>
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Services;
