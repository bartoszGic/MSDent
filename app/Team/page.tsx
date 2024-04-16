import React from 'react';
import Image from 'next/image';
import mSmaluch from '../../public/msdent-ms.jpg';
import dPopiolek from '../../public/msdent-dp.jpg';
const Team = () => {
	return (
		<section className='flex flex-col w-full px-4 pt-28 pb-12 sm:px-12 md:pt-32 lg:px-20'>
			<h2 className='tracking-widest text-4xl text-yellow text-center mb-8 md:mb-12'>
				Zespół
			</h2>
			<div className='grid grid-cols-1 gap-16 md:gap-32'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					<div className='md:order-2'>
						<Image
							className='mx-auto w-2/3 h-auto object-cover rounded-lg md:w-64 lg:w-96'
							src={mSmaluch}
							alt='Marzena Smaluch'
							sizes='(min-width: 1040px) 384px, (min-width: 780px) 256px, (min-width: 640px) calc(66.67vw - 64px), calc(66.56vw - 21px)'
						/>
					</div>
					<div className='md:order-1'>
						<h4 className='text-lg text-lightBlue mb-4 md:text-2xl'>
							Lek. stom. Marzena Smaluch
						</h4>
						<p className='text-sm text-darker font-light tracking-wide md:text-xl md:text-dark'>
							Jestem doświadczonym lekarzem, którego droga zawodowa zaczęła się
							po ukończeniu Wydziału Stomatologii Śląskiej Akademii Medycznej w
							1996 roku. Od 2000 roku jestem właścicielką i głównym lekarzem w
							Praktyce Stomatologicznej MS DENT. Moja specjalizacja koncentruje
							się głównie na estetycznej odbudowie uśmiechu, co sprawia, że
							​​stomatologia estetyczna i protetyka są nie tylko moją pracą, ale
							również pasją. Jestem zaangażowana w nieustanne doskonalenie
							swoich umiejętności poprzez uczestnictwo w kursach, szkoleniach i
							sympozjach prowadzonych przez wiodących specjalistów zarówno z
							kraju, jak i z zagranicy.
						</p>
					</div>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					<div className='md:order-1'>
						<Image
							className='mx-auto w-2/3 h-auto object-cover rounded-lg md:w-64 lg:w-96'
							src={dPopiolek}
							alt='Dorota Popiołek'
							sizes='(min-width: 1040px) 384px, (min-width: 780px) 256px, (min-width: 640px) calc(66.67vw - 64px), calc(66.56vw - 21px)'
						/>
					</div>
					<div className='md:order-2'>
						<h4 className='text-lg text-lightBlue mb-4 md:text-2xl'>
							Lek. stom. Dorota Popiołek
						</h4>
						<p className='text-sm text-darker font-light tracking-wide md:text-xl md:text-dark'>
							Ukończyłam Śląską Akademię Medyczną w 2003 roku. Moja praktyka
							obejmuje leczenie zarówno dorosłych, jak i dzieci. Interesuję się
							szeroko pojętą stomatologią estetyczną i odtwórczą. W mojej pracy
							kładę szczególny nacisk na dokładność i precyzję wykonywanych
							zabiegów. Nieustannie poszerzam swoją wiedzę, biorąc udział w
							licznych kursach i szkoleniach.{' '}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team;
