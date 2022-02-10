/* eslint-disable @typescript-eslint/quotes */
import { Project } from "../../types"

const content: Project[] = [
	{
		name: "Musicloud",
		imageURL: "/musicloud.png",
		sourceCodeURL: "https://github.com/olyop/music-app",
		link: {
			text: "musicloud-app.com",
			url: "https://musicloud-app.com/library/songs?userID=7da0c102009c4cdb889cd1782cf11ad5&password=password",
		},
		stack: [
			"React",
			"Redux",
			"Auth0",
			"Apollo",
			"Algolia",
			"WorkBox",
			"GraphQL",
			"Fastify",
			"PostgreSQL",
			"AWS S3",
			"AWS EC2",
			"AWS RDS",
			"AWS ELB",
			"AWS Route53",
		],
		description: [
			`Musicloud is a fully featured music streaming application
			that I built from the ground up.`,

			`The app allows the user to play, queue, shuffle, search,
			and organise their music anytime and anywhere.
			Users can create their own libraries,
			follow artists, create playlists, personalise settings,
			download, and save their music for offline use.`,

			`The app is very similiar to other music streaming services,
			but has an emphasis on the correct display and tagging of the music.`,

			`I built this app across the entire stack, from the
			back-end, to the front-end, to the database,
			all the way to deploying and scaling it in the cloud`,

			`I built this app because I wanted to practice
			implementing new technologies that I have learnt over time.`,

			`By doing this, I have gained experience and knowledge
			in making full-stack applications, including the process of
			designing, building, maintaining,
			and implementing new ideas and technologies.`,
		],
	},
]

export default content