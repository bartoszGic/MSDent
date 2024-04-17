'use client';
import Image from 'next/image';
import msdent_hero from '../public/msdent-hero.jpg';
import Carousel from './components/Carousel';
import { useEffect, useState } from 'react';

export default function Home() {
	const [loadCarousuel, setLoadCarousel] = useState(false);
	const currentYear = new Date().getFullYear();
	const timePeriod = currentYear - 2000;
	useEffect(() => {
		setLoadCarousel(true);
	}, [setLoadCarousel]);
	return (
		<section className='flex flex-col w-full pt-20 pb-12 sm:pt-32 sm:px-12 md:py-40 lg:px-20'>
			<div className='grid grid-rows-2 h-calc mb-12 sm:grid-cols-2 sm:grid-rows-1 sm:h-96 sm:mb-8'>
				{loadCarousuel ? <Carousel /> : <div className='h-full'></div>}
				<div className='flex flex-col justify-start mt-12 pb-8 items-center text-center sm:py-16'>
					<div className='grid grid-cols-1'>
						<div className='grid grid-rows-2 gap-2 font-bold text-2xl tracking-wider text-green md:text-4xl'>
							<div className='md:text-4xl'>
								<p>LEKARZ</p>
								<p>STOMATOLOG</p>
							</div>
							<div className='font-medium text-xl'>
								<p>Gospodarcza 46</p>
								<p>Katowice</p>
							</div>
						</div>
						<div className='flex flex-col mt-4'>
							<a
								href='tel:+48602434674'
								className='bg-darker text-brokenWhite border border-dark px-10 py-2 rounded-full tracking-wider text-xl font-light transition-colors duration-200 hover:bg-brokenWhite hover:text-dark hover:border-dark active:bg-brokenWhite active:text-dark active:border-dark'>
								<span className='md:text-2xl'>Umów wizytę</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className='sm:mt-16'>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
					<div className='grid grid-cols-1'>
						<h2 className='tracking-widest text-4xl text-yellow text-center mb-8'>
							Witamy
						</h2>
						<p className='text-dark font-normal text-center px-4 sm:text-lg md:px-0 lg:text-2xl'>
							W naszej praktyce od {timePeriod} lat stale rozwijamy się, tworząc
							zespół doświadczonych specjalistów, którzy dbają o każdego
							Pacjenta z indywidualną troską i serdecznością. Nasz priorytet to
							zapewnienie profesjonalnej opieki stomatologicznej na najwyższym
							poziomie, korzystając z najnowocześniejszego wyposażenia i
							sprawdzonych metod leczenia. Cieszymy się, że możemy być Twoim
							partnerem w dbaniu o zdrowie Twojego uśmiechu.
						</p>
					</div>
					<Image
						className='mx-auto w-2/3 h-auto object-cover rounded-lg md:w-64 lg:w-96 sm:my-auto'
						src={msdent_hero}
						alt='logo firmy'
						sizes='(min-width: 1040px) 384px, (min-width: 780px) 256px, (min-width: 640px) calc(66.67vw - 64px), 66.56vw'
					/>
				</div>
			</div>
		</section>
	);
}
