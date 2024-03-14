import Image from 'next/image';
import {
	heroImage,
	pawIcon,
	communityIcon,
	schoolsIcon,
	weDoImage,
	officerSupport,
	communityEvents,
	schoolBadge,
} from '@/assets/images';
import Link from 'next/link';
import ImageBanner from '@/components/ImageBanner';
import ContactForm from '@/components/ContactForm';

export const metadata = {
	title: 'Home | Jet & Ben | Durham Constabulary',
	description:
		'Durham Police’s Safety Dogs, we visit educational settings and other community engagement events.',
	keywords:
		'Durham Police, Safety Dogs, Educational, Community, Engagement, Events',
	// image: '/images/preview.png',
	url: 'https://jetandben.com,',
};

const HomePage = () => {
	return (
		<>
			<header>
				<div className='w-full overflow-hidden'>
					<div className='container mx-auto px-10'>
						<div className='block py-10 lg:py-0 md:flex w-full gap-[40px]'>
							<div className='flex flex-col justify-center items-start pb-10 md:w-1/2'>
								<h1 className='text-5xl font-bold mb-8'>
									Jet & Ben Are The Durham Police Community Dogs
								</h1>
								<p className='mb-8 text-gray-800 max-w-[500px]'>
									Durham Police’s Safety Dogs, we visit educational settings and
									other community engagement events.
								</p>
								<Link
									type='button'
									class='text-white text-[16px] bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
									href='/contact'>
									Contact Us
								</Link>
							</div>
							<div className='md:w-1/2'>
								<Image
									src={heroImage}
									alt='Jet and Ben'
									height={500}
								/>
							</div>
						</div>
					</div>
				</div>
			</header>

			<section className={`bg-grey-bg w-full overflow-hidden`}>
				<div className='container mx-auto px-10 py-20'>
					<div className='block lg:flex justify-between gap-4'>
						<div className='bg-white p-8 shadow-md rounded-md lg:mb-0 mb-4 flex flex-col'>
							<Image
								src={schoolsIcon}
								alt='Jet and Ben'
								className='mb-4'
							/>
							<h2 className='text-3xl font-bold mb-4'>Schools</h2>
							<p className='mb-4'>
								Jet & Ben would like to help all schools and early years
								providers to keep children safe.
							</p>
							<Link
								className='mt-auto'
								href='/schools'>
								Learn More
							</Link>
						</div>
						<div className='bg-white p-8 shadow-md rounded-md lg:mb-0 mb-4 flex flex-col'>
							<Image
								src={communityIcon}
								alt='Jet and Ben'
								className='mb-4'
							/>
							<h2 className='text-3xl font-bold mb-5'>Community</h2>
							<p>
								We attend a range of organised events, visiting day centres,
								care homes or out of school groups.
							</p>
							<Link
								className='mt-auto'
								href='/community'>
								Learn More
							</Link>
						</div>
						<div className='bg-white p-8 shadow-md rounded-md lg:mb-0 mb-4 flex flex-col'>
							<Image
								src={pawIcon}
								alt='Jet and Ben'
								className='mb-4'
							/>
							<h2 className='text-3xl font-bold mb-5'>About Us</h2>
							<p>
								If you would like to know more about us; who we are and what we
								do, then this section has it all for you.
							</p>
							<Link
								className='mt-auto'
								href='/about'>
								Learn More
							</Link>
						</div>
					</div>
				</div>
			</section>

			<ImageBanner />

			<section className={`w-full overflow-hidden`}>
				<div className='container mx-auto px-10 py-20'>
					<div className='block py-10 lg:py-0 lg:flex w-full gap-[40px]'>
						<div className='flex flex-col justify-center items-start pb-10 lg:w-1/2'>
							<h2 className='text-3xl font-bold mb-5'>What We Do</h2>
							<p className='mb-8 text-gray-800 max-w-[500px]'>
								We have various roles within Durham Constabulary and if you
								would like to know more please contact us.
							</p>
							<div className='flex gap-4 mb-8 items-start'>
								<Image
									src={schoolBadge}
									alt='School Badge'
									height={100}
								/>
								<div className='flex flex-col'>
									<h3 className='text-2xl font-bold mb-5'>School Visits</h3>
									<p>
										Are you a Primary School teacher or Early years provider,
										then we can visit you & deliver topics including Personal
										Safety, internet safety and people who help us.
									</p>
								</div>
							</div>
							<div className='flex gap-4 mb-8 items-start'>
								<Image
									src={communityEvents}
									alt='School Badge'
									height={100}
								/>
								<div className='flex flex-col'>
									<h3 className='text-2xl font-bold mb-5'>Community Events</h3>
									<p>
										Organising a local event, then consider Jet & Ben as a fun &
										informative addition to your event. Scouts, Brownies, Cubs
										or out of school groups, we’ll attend them all.
									</p>
								</div>
							</div>
							<div className='flex gap-4 mb-8 items-start'>
								<Image
									src={officerSupport}
									alt='School Badge'
									height={100}
								/>
								<div className='flex flex-col'>
									<h3 className='text-2xl font-bold mb-5'>Officer Support</h3>
									<p>
										Police officers & staff do a demanding and sometimes
										dangerous job, and are frequently exposed to trauma, we come
										in to support and listen to the officers.
									</p>
								</div>
							</div>
						</div>
						<div className='lg:w-1/2'>
							<Image
								src={weDoImage}
								alt='Jet and Ben'
								height={500}
							/>
						</div>
					</div>
				</div>
			</section>

			<ContactForm />
		</>
	);
};

export default HomePage;
