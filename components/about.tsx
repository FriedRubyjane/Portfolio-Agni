'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading'

export default function About() {
	return (
		<motion.section
			className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
		>
			<SectionHeading>Обо мне</SectionHeading>
			<p className='mb-3'>
				<span className='italic'>Информация</span>
			</p>
			<p>
				<span className='italic'>Информация</span>
			</p>
		</motion.section>
	)
}
