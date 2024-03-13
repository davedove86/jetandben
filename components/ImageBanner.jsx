import Image from 'next/image';
import {
	banner2,
	banner3,
	banner4,
	banner5,
	banner6,
	banner7,
	banner8,
	banner9,
	banner10,
} from '@/assets/images';
import '@/assets/styles/banner.css';

const ImageBanner = () => {
	return (
		<section id='banner-container'>
			<div class='photobanner'>
				<Image
					class='first'
					src={banner2}
					alt='Jet as a puppy'
				/>
				<Image
					src={banner3}
					alt='Jet as a puppy'
				/>
				<Image
					src={banner4}
					alt='Jet as a puppy'
				/>
				<Image
					src={banner5}
					alt='Jet as a puppy'
				/>
				<Image
					src={banner6}
					alt='Jet as a puppy'
				/>
				<Image
					src={banner7}
					alt='Jet as a puppy'
				/>
				<Image
					src={banner8}
					alt='Jet as a puppy'
				/>
				<Image
					src={banner9}
					alt='Jet as a puppy'
				/>
				<Image
					src={banner10}
					alt='Jet as a puppy'
				/>
				<Image
					src={banner2}
					alt='Jet as a puppy'
				/>
				<Image
					src={banner3}
					alt='Jet as a puppy'
				/>
				<Image
					src={banner4}
					alt='Jet as a puppy'
				/>
				<Image
					src={banner5}
					alt='Jet as a puppy'
				/>
				<Image
					src={banner6}
					alt='Jet as a puppy'
				/>
				<Image
					src={banner7}
					alt='Jet as a puppy'
				/>
				<Image
					src={banner8}
					alt='Jet as a puppy'
				/>
				<Image
					src={banner9}
					alt='Jet as a puppy'
				/>
				<Image
					src={banner10}
					alt='Jet as a puppy'
				/>
			</div>
		</section>
	);
};

export default ImageBanner;
