import React from 'react';
import Link from 'next/link';
const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className='flex w-full bg-green text-light'>
			<div className='flex flex-col w-full m-4 font-light text-sm lg:m-8'>
				<Link href='/Contact'>
					<h3 className='tracking-widest font-light text-3xl'>Kontakt</h3>
				</Link>
				<div className='h-[2px] bg-bronze w-1/2 mt-1 sm:w-1/3 md:w-1/4 lg:mb-4'></div>
				<div className='grid grid-cols-1 md:grid-cols-3 font-normal'>
					<div className='mt-4'>
						<h4 className='text-xl mb-2 tracking-wider text-lightGreen'>
							Adres
						</h4>
						<div className='text-light'>
							<p className='mt-1'>MS DENT Praktyka stomatologiczna</p>
							<p className='mt-1'>Nowy Nikiszowiec ul. Gospodarcza 46</p>
							<p className='mt-1'>40-432 Katowice</p>
						</div>
					</div>
					<div className='mt-4'>
						<h4 className='text-xl mb-2 tracking-wider text-lightGreen'>
							Godziny przyjęć
						</h4>
						<div className='text-light grid grid-cols-2'>
							<div>
								<p className='mt-1'>Pon. - Czw.</p>
								<p className='mt-1'>Pt.</p>
							</div>
							<div>
								<p className='mt-1'>9:00 - 19:00</p>
								<p className='mt-1'>9:00 - 14:00</p>
							</div>
						</div>
					</div>
					<div className='grid grid-cols-1 items-center mt-6 lg:mt-0'>
						<a
							href='tel:+48602434674'
							className='col-span-2 flex items-center justify-center bg-white text-green rounded-md px-2 py-2 text-center border border-green transition-colors duration-200 hover:bg-green hover:text-white hover:border-white active:bg-green active:text-white active:border-white'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='flex items-center h-6 w-6'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
								/>
							</svg>
							<span className='ml-2 font-normal'>+48 602 434 674</span>
						</a>
					</div>
				</div>
				<div className='h-[1px] bg-light w-full mt-6 lg:mt-10'></div>
				<div className='flex justify-center text-xs text-light mt-6 mb-2 lg:mt-10'>
					<div className='mr-4'>{`© ${currentYear}, MS Dent`}</div>
					<div>Design by Bartosz Gicala</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
