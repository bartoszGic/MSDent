import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LinksServices from './LinksServices';
import { useRef } from 'react';
import { linksNav } from './types';

type LinksProps = {
	setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
	setShowServices: React.Dispatch<React.SetStateAction<boolean>>;
	showServices: boolean;
};

const Links = ({ setShowNav, setShowServices, showServices }: LinksProps) => {
	const pathname = usePathname();
	const containerRef = useRef<HTMLDivElement>(null);

	const servicesHandler = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		e.stopPropagation();
		setShowServices(state => !state);
		if (!showServices) {
			setShowServices(true);
		}
	};
	const closeNavs = () => {
		setShowNav(false);
		setShowServices(false);
	};
	const handleMouseEnter = (name: string) => {
		if (name === 'USŁUGI') {
			setShowServices(true);
		}
	};

	const handleMouseLeave = (name: string) => {
		if (name === 'USŁUGI') {
			setShowServices(false);
		}
	};

	return (
		<ul className='relative flex flex-col w-full p-2 justify-between md:flex-row md:h-full'>
			{linksNav.map(link => {
				const isActive = link.href === pathname;
				return (
					<li
						onMouseEnter={() => handleMouseEnter(link.name)}
						onMouseLeave={() => handleMouseLeave(link.name)}
						className={`flex relative my-3 md:my-0 md:mb-0 ${
							link.name === 'USŁUGI'
								? 'mr-1 ml-0 flex-row-reverse'
								: 'mx-1 flex-row justify-end'
						} `}
						key={link.name}>
						<Link
							onClick={closeNavs}
							href={link.href}
							className='z-10 flex mx-0 text-white relative group md:mb-0 md:mx-2'>
							<p className='flex justify-center items-center text-center tracking-wider font-light text-xl'>
								{link.name}
							</p>
							<span
								className={`absolute ${
									isActive ? 'w-1/2' : 'w-0'
								} left-1/2 -bottom-[1px] h-[1px] bg-white group-hover:w-1/2 group-hover:transition-all md:-bottom-1`}></span>
							<span
								className={`absolute ${
									isActive ? 'w-1/2' : 'w-0'
								} right-1/2 -bottom-[1px] h-[1px] bg-white group-hover:w-1/2 group-hover:transition-all md:-bottom-1`}></span>
						</Link>
						{link.name === 'USŁUGI' && (
							<div className='mr-3 md:relative md:mr-0 ml-2'>
								<button
									onClick={servicesHandler}
									className={`flex hover:scale-95 active:scale-95 h-full items-center -rotate-180 transition-transform duration-200 ${
										showServices && 'rotate-0'
									}`}>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='w-6 h-6 text-white md:hidden'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='m8.25 4.5 7.5 7.5-7.5 7.5'
										/>
									</svg>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='hidden w-6 h-6 text-white md:block'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='m19.5 8.25-7.5 7.5-7.5-7.5'
										/>
									</svg>
								</button>
								<nav
									ref={containerRef}
									className={`hidden bg-green top-8 -left-3 items-center justify-center transition-transform duration-100 rounded-lg md:absolute md:flex md:w-[224px] md:flex-col ${
										showServices
											? 'scale-y-100 origin-top'
											: 'scale-y-0 origin-top'
									}`}>
									<LinksServices
										setShowNav={setShowNav}
										setShowServices={setShowServices}
									/>
								</nav>
							</div>
						)}
					</li>
				);
			})}
		</ul>
	);
};

export default Links;
