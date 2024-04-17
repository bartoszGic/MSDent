'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import msdent_header from '../../public/msdent-head.png';
import Links from './Links';
import LinksServices from './LinksServices';
const Header = () => {
	const [showNav, setShowNav] = useState(false);
	const [showServices, setShowServices] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setShowNav(false);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<header className='fixed flex w-full h-20 bg-green max-w-7xl z-50'>
			<div className='relative flex items-center justify-between h-full w-full mx-auto'>
				<Link
					href='/'
					className='ml-6 lg:ml-8'>
					<Image
						className='w-[50px] h-auto'
						src={msdent_header}
						alt='logo ms-dent'
					/>
				</Link>
				<nav className='hidden bg-green md:flex md:h-full md:p-4'>
					<Links
						setShowNav={setShowNav}
						setShowServices={setShowServices}
						showServices={showServices}
					/>
				</nav>
				<nav
					className={`absolute right-0 top-20 h-calc w-6/12 bg-green flex flex-col items-center transition-transform duration-200 ${
						showNav ? 'translate-x-0' : 'translate-x-full md:invisible'
					}`}>
					<Links
						setShowNav={setShowNav}
						setShowServices={setShowServices}
						showServices={showServices}
					/>
				</nav>
				<nav
					className={`absolute h-calc left-0 top-20 w-6/12 bg-green flex flex-col items-center transition-transform duration-200 md:invisible ${
						showServices ? 'translate-x-0' : '-translate-x-full'
					}`}>
					<LinksServices
						setShowServices={setShowServices}
						setShowNav={setShowNav}
					/>
				</nav>
				<button
					onClick={() => setShowNav(state => !state)}
					type='button'
					className='p-2 text-sm mr-3 text-white md:hidden'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-10 h-10'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
						/>
					</svg>
				</button>
			</div>
		</header>
	);
};

export default Header;
