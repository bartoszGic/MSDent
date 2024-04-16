import React from 'react';
import { warranty } from '../components/types';
import { warrantyNot } from '../components/types';
import { warrantyNotDamages } from '../components/types';
const Warranty = () => {
	return (
		<section className='flex flex-col items-center w-full px-4 pt-28 pb-12 sm:px-12 md:pt-32 lg:px-20'>
			<div>
				<h2 className='tracking-widest text-4xl text-yellow text-center mb-8 md:mb-12'>
					Gwarancja
				</h2>
				<p className='mb-8 text-sm text-dark tracking-wide md:text-xl md:mb-16 md:font-light'>
					W leczeniu zawsze dokładamy wszelkich starań, aby wykonywane przez nas
					zabiegi były perfekcyjne oraz spełniały oczekiwania naszych Pacjentów.
					W pełni odpowiadamy za jakość naszej pracy i dlatego na wykonywane w
					MS DENT usługi Pacjent otrzymuje 24-miesięczną gwarancję.
					Jednocześnie, abyśmy mogli kontrolować stan zdrowia zębów, należy
					systematycznie - co 6 miesięcy - zgłaszać się na wizyty kontrole w
					naszych gabinecie, podczas których lekarz prowadzący wykona przegląd i
					badanie jamy ustnej. Wizyty te są warunkiem naszej gwarancji. W
					przeciwnym wypadku gwarancja ulega skróceniu do 12 miesięcy.
				</p>
				<h3 className='my-4 px-2 text-xl text-blue md:my-12 md:text-2xl'>
					Okres gwarancji liczony w miesiącach
				</h3>
				<ul className='grid grid-cols-1 gap-2 text-sm font-normal md:gap-4 lg:grid-cols-1 md:text-lg md:font-medium lg:gap-6'>
					{warranty.map(item => {
						return (
							<li
								key={item.name}
								className='grid grid-cols-5 gap-2 items-center p-2 text-dark bg-brokenWhite rounded-lg md:p-4'>
								<h4
									className={`col-span-4 ${
										item.time && 'col-span-4'
									} font-light`}>
									{item.name}
								</h4>
								<p className='col-span-1 text-right my-auto text-green'>
									{item.time}
								</p>
								{item.case && (
									<ul className='col-span-5'>
										{item.case.map(type => {
											return (
												<li
													key={type.caseName}
													className='grid grid-cols-5 mb-2 md:mb-4'>
													<h4
														className={`${
															type.caseTime === '' ? 'col-span-5' : 'col-span-4'
														} col-span-4 font-light`}>
														{type.caseName}
													</h4>
													<p
														className={`col-span-1 text-right my-auto text-green`}>
														{type.caseTime}
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
				<h3 className='my-4 px-2 text-xl text-blue md:my-12 md:text-2xl'>
					Gwarancja nie obejmuje
				</h3>
				<ul className='grid grid-cols-1 gap-2 text-sm font-normal md:gap-4 md:text-lg md:font-medium lg:gap-6'>
					{warrantyNot.map(item => {
						return (
							<li
								key={item}
								className='grid grid-cols-1 gap-2 items-center p-2 text-dark bg-brokenWhite rounded-lg md:p-4'>
								<h4 className='font-light'>{item}</h4>
							</li>
						);
					})}
				</ul>
				<h3 className='my-4 px-2 text-xl text-blue md:my-12 md:text-2xl'>
					Nie podlegają gwarancji uszkodzenia
				</h3>
				<ul className='grid grid-cols-1 gap-2 text-sm font-normal md:gap-4 md:text-lg md:font-medium lg:gap-6'>
					{warrantyNotDamages.map(item => {
						return (
							<li
								key={item}
								className='grid grid-cols-1 gap-2 items-center p-2 text-dark bg-brokenWhite rounded-lg md:p-4'>
								<h4 className='font-light'>{item}</h4>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default Warranty;
