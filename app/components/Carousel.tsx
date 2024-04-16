import React from 'react';
import Image from 'next/image';
import msdent_recep1 from '../../public/msdent-recep1.jpg';
import msdent_recep2 from '../../public/msdent-recep2.jpg';
import { TECarousel, TECarouselItem } from 'tw-elements-react';
const Carousel = () => {
	return (
		<TECarousel
			ride='carousel'
			className='w-full'>
			<div className="relative flex h-full overflow-hidden after:clear-both after:block after:content-[''] -z-50 sm:rounded-lg">
				<TECarouselItem
					itemID={1}
					className='relative hidden -mr-[100%] w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none sm:h-96'>
					<Image
						className='object-cover'
						src={msdent_recep1}
						alt='zdjęcie recepcji numer 1'
						fill
						priority
						sizes='(min-width: 1360px) 592px, (min-width: 640px) calc(45.71vw - 21px), 100vw'
					/>
				</TECarouselItem>
				<TECarouselItem
					itemID={2}
					className='relative hidden -mr-[100%] w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none sm:h-96'>
					<Image
						className='object-cover'
						src={msdent_recep2}
						alt='zdjęcie recepcji numer 2'
						fill
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					/>
				</TECarouselItem>
			</div>
		</TECarousel>
	);
};

export default Carousel;
