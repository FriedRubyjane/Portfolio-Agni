import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import corpcommentImg from '@/public/screen_1.png'
import rmtdevImg from '@/public/screen_1.png'
import wordanalyticsImg from '@/public/screen_3.png'

export const links = [
	{
		name: 'Главная',
		hash: '#main',
	},
	{
		name: 'Биография',
		hash: '#biography',
	},
	{
		name: 'Работа',
		hash: '#work',
	},
	{
		name: 'Навыки',
		hash: '#skills',
	},
	{
		name: 'Опыт',
		hash: '#experience',
	},
	{
		name: 'Контакты',
		hash: '#contact',
	},
] as const

export const experiencesData = [
	{
		title: 'Graduated bootcamp',
		location: 'Miami, FL',
		description:
			'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
		icon: React.createElement(LuGraduationCap),
		date: '2019',
	},
	{
		title: 'Front-End Developer',
		location: 'Orlando, FL',
		description:
			'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
		icon: React.createElement(CgWorkAlt),
		date: '2019 - 2021',
	},
	{
		title: 'Full-Stack Developer',
		location: 'Houston, TX',
		description:
			"I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
		icon: React.createElement(FaReact),
		date: '2021 - present',
	},
] as const

export const worksData = [
	{
		title: 'Title 1',
		description:
			'Привет, как дела? Это отличный сайт, который будет привлекать клиентов. И это мой первый сайт.',
		tags: ['Tag', 'Tag', 'Tag', 'Tag', 'Tag'],
		imageUrl: corpcommentImg,
	},
	{
		title: 'Title 2',
		description:
			'Привет, как дела? Это отличный сайт, который будет привлекать клиентов. И это мой первый сайт.',
		tags: ['Tag', 'Tag', 'Tag', 'Tag', 'Tag'],
		imageUrl: rmtdevImg,
	},
	{
		title: 'Title 3',
		description:
			'Привет, как дела? Это отличный сайт, который будет привлекать клиентов. И это мой первый сайт.',
		tags: ['Tag', 'Tag', 'Tag', 'Tag', 'Tag'],
		imageUrl: wordanalyticsImg,
	},
] as const

export const skillsData = [
	'HTML',
	'CSS',
	'JavaScript',
	'TypeScript',
	'React',
	'Next.js',
	'Node.js',
	'Git',
	'Tailwind',
	'Prisma',
	'MongoDB',
	'Redux',
	'GraphQL',
	'Apollo',
	'Express',
	'PostgreSQL',
	'Python',
	'Django',
	'Framer Motion',
] as const
