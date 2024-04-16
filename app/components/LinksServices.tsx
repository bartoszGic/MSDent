import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { linksSevicesNav } from './types';

type LinksServicesProps = {
	setShowServices: React.Dispatch<React.SetStateAction<boolean>>;
	setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
};
const LinksServices = ({ setShowServices, setShowNav }: LinksServicesProps) => {
	const pathname = usePathname();

	const closeMenus = () => {
		setShowServices(false);
		setShowNav(false);
	};
	return (
		<ul className='flex flex-col w-full py-2 px-3 justify-between z-50 md:px-2'>
			<li className='flex justify-center relative my-3 md:justify-start md:my-2 md:mb-0'>
				<div className='flex mx-0 text-white relative group tracking-wider font-light text-xl invisible md:mb-1 md:mx-2 md:hidden'>
					X
				</div>
			</li>
			{linksSevicesNav.map(link => {
				const isActive = link.href === pathname;
				return (
					<li
						className='flex justify-end relative my-3 md:justify-start md:my-2 md:mb-0'
						key={link.name}>
						<Link
							onClick={closeMenus}
							href={link.href}
							className='flex mx-0 text-white relative group md:mb-1 md:mx-2'>
							<p className='flex tracking-wider font-light text-xl'>
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
					</li>
				);
			})}
		</ul>
	);
};

export default LinksServices;
