'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { worksData } from '@/lib/data'
import Work from './works'
import { motion } from 'framer-motion'

export default function Works() {
	return (
		<section>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.175 }}
			>
				<SectionHeading>Моя работа</SectionHeading>
			</motion.div>
			<div>
				{worksData.map((work, index) => (
					<React.Fragment key={index}>
						<Work {...work} />
					</React.Fragment>
				))}
			</div>
		</section>
	)
}
