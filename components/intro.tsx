'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'
import { FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa'
import { SlSocialVkontakte } from 'react-icons/sl'

export default function Intro() {
	return (
		<section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
			<div className='flex items-center justify-center'>
				<div className='relative'>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'tween',
							duration: 0.2,
						}}
					>
						<Image
							src='/agni.png'
							alt='Agni'
							width={108}
							height={108}
							quality={95}
							priority={true}
							className='h-36 w-36 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
						/>
					</motion.div>
					<motion.span
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'spring',
							stiffness: 125,
							delay: 0.1,
							duration: 0.7,
						}}
						className='absolute bottom-0 left-0 text-3xl'
					>
						👋🏻
					</motion.span>
				</div>
			</div>
			<motion.h1
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
			>
				<span className='font-bold'>Привет!</span> Меня зовут{' '}
				<span className='font-bold'>Агни.</span> Я заказала{' '}
				<span className='font-bold'>лучший сайт,</span> чтобы{' '}
				<span className='font-bold'>заманивать клиентов.</span>
			</motion.h1>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.1,
				}}
				className='flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium'
			>
				<Link
					href='#contact'
					className='group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer'
				>
					Мои контакты{' '}
					<BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
				</Link>
				<div className='flex flex-col-4 gap-2'>
					<a
						href='https://www.instagram.com/'
						target='_blank'
						className='bg-white text-gray-950 p-4 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10'
					>
						<FaInstagram />
					</a>
					<a
						href='https://web.telegram.org/a/'
						target='_blank'
						className='bg-white text-gray-950 p-4 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10'
					>
						<FaTelegram />
					</a>
					<a
						href='https://vk.com/feed'
						target='_blank'
						className='bg-white text-gray-950 p-4 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10'
					>
						<SlSocialVkontakte />
					</a>
					<a
						href='https://www.youtube.com/'
						target='_blank'
						className='bg-white text-gray-950 p-4 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10'
					>
						<FaYoutube />
					</a>
				</div>
			</motion.div>
		</section>
	)
}
