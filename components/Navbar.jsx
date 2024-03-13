'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { close, logo, menu } from '@/assets/images';
import { navLinks } from '../constants';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		// Desktop Navbar
		<div className='w-full overflow-hidden shadow-md'>
			<div className='container mx-auto px-10'>
				<nav className='w-full flex py-2 justify-between items-center navbar'>
					<Image
						src={logo}
						alt='Jet & Ben Logo'
						className='w-[74px] h-[81px]'
					/>
					<ul className='list-none sm:flex hidden justify-end items-center flex-1'>
						{navLinks.map((nav, index) => (
							<li
								key={nav.id}
								className={`font-poppins font-normal cursor-pointer text-[16px] ${
									index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
								} text-black`}>
								<Link href={`${nav.id}`}>{nav.title}</Link>
							</li>
						))}
					</ul>

					{/* Mobile Navbar */}
					<div className='sm:hidden flex flex-1 justify-end items-center'>
						<Image
							src={toggle ? close : menu}
							alt='menu'
							className='w-[28px] h-[28px] object-contain cursor-pointer'
							onClick={() => setToggle((prev) => !prev)}
						/>
						<div
							className={`${
								toggle ? 'flex' : 'hidden'
							} py-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
							<ul className='list-none flex flex-col justify-end items-center flex-1'>
								{navLinks.map((nav, index) => (
									<li
										key={nav.id}
										className={`font-poppins font-normal cursor-pointer text-[16px] ${
											index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
										} text-black`}>
										<Link href={`${nav.id}`}>{nav.title}</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
