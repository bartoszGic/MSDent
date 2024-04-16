import React from 'react';
import Image from 'next/image';
import znanyLekarz from '../../public/znanylekarz.jpg';
import facebook from '../../public/facebook_5968764.png';
import Link from 'next/link';
const Contact = () => {
	return (
		<section className='flex flex-col items-center w-full px-4 pt-28 pb-12 sm:px-12 md:pt-32 lg:px-20'>
			<h2 className='tracking-widest text-4xl text-yellow text-center mb-8 md:mb-12 md:text-5xl'>
				Kontak
			</h2>
			<div className='grid gap-8 w-full md:gap-16 text-dark'>
				<div className='grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24'>
					<div className='grid gap-8 md:gap-16'>
						<div className='grid md:gap-1'>
							<h4 className='text-lightGreen text-lg mb-2 md:text-xl lg:text-3xl lg:mb-4'>
								MS DENT Praktyka stomatologiczna
							</h4>
							<p className='lg:text-xl'>Nowy Nikiszowiec ul. Gospodarcza 46</p>
							<p className='lg:text-xl'>40-432 Katowice</p>
						</div>
						<div className='grid'>
							<h4 className='font-medium text-bronze lg:text-xl'>
								Godziny przyjęć:
							</h4>
							<div className='grid grid-cols-2 lg:text-xl'>
								<div>
									<p>Pon - Cz</p>
									<p>Pt</p>
								</div>
								<div className='text-right'>
									<p>9:00 - 19:00</p>
									<p>9:00 - 14:00</p>
								</div>
							</div>
						</div>
						<div>
							<h4 className='font-medium text-bronze lg:text-xl'>
								Rejestracja:
							</h4>
							<div className='grid grid-cols-2 gap-4 mt-4'>
								<a
									href='tel:322093443'
									className='text-center bg-green text-brokenWhite border border-green py-3 px-1 rounded-lg transition-colors duration-200 hover:bg-brokenWhite hover:text-green hover:border-green active:bg-brokenWhite active:text-green active:border-green'>
									<span className=''>32 209 34 43</span>
								</a>
								<a
									href='tel:+48602434674'
									className='text-center bg-green text-brokenWhite border border-green py-3 px-1 rounded-lg transition-colors duration-200 hover:bg-brokenWhite hover:text-green hover:border-green active:bg-brokenWhite active:text-green active:border-green'>
									<span className=''>602 434 674</span>
								</a>
							</div>
						</div>
					</div>
					<div className='grid h-full text-center gap-16'>
						<div>
							<p className='text-yellow mb-4 font-medium text-lg text-center md:text-xl md:mb-8 lg:text-3xl'>
								Oceń nas
							</p>
							<Link
								href='https://www.znanylekarz.pl/placowki/ms-dent-praktyka-stomatologiczna-lek-stom-marzena-smaluch'
								target='_blank'>
								<Image
									className='object-cover'
									src={znanyLekarz}
									alt='znany lekarz'
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
								/>
							</Link>
						</div>
						<div className='flex flex-col items-center'>
							<p className='text-yellow mb-4 font-medium text-lg text-center md:text-xl md:mb-8 lg:text-3xl'>
								Polub nas
							</p>
							<Link
								className='w-1/3 md:w-1/4 p-2'
								href='https://www.facebook.com/msdent.katowice'
								target='_blank'>
								<Image
									className='object-cover'
									src={facebook}
									alt='facebook'
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
								/>
							</Link>
						</div>
					</div>
				</div>
				<div className='w-full'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d758.5569709655389!2d19.072551211871094!3d50.24578038225658!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716cf7e94ddb961%3A0x4f12c0e485660f20!2sMS%20Dent%20Praktyka%20Stomatologiczna%20Marzena%20Smaluch!5e0!3m2!1spl!2spl!4v1712251144585!5m2!1spl!2spl'
						width='600'
						height='450'
						className='border:0 w-full h-[300px] lg:h-[500px]'
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'></iframe>
				</div>
			</div>
		</section>
	);
};

export default Contact;
