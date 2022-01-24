import { SkillSection, SkillExperience } from "../../types"

const content: SkillSection[] = [
	{
		initialExpand: true,
		content: "",
		title: "JavaScript",
		imagePath: "/js.png",
		skills: [
			{
				level: 5,
				experience: SkillExperience.TWO_YEARS,
				title: "TypeScript",
				imagePath: "/ts.png",
				content: `
					I use TypeScript everywhere I can.
					Always in strict mode to take full
					advantage of the added type saftey.
					This helps me catch type errors
					in development before runtime!
				`,
			},
			{
				level: 4,
				title: "Node",
				experience: SkillExperience.THREE_YEARS,
				imagePath: "/node.png",
				content: `
					I use Node.js for all server side applications I create.
					I am well versed in creating web servers and writing scripts
					for any scenario.
				`,
			},
			{
				level: 5,
				title: "React",
				imagePath: "/react.png",
				experience: SkillExperience.TWO_YEARS,
				content: `
					I am highly experienced in making single-page
					applications with the React framework. I 
					exclusively use hooks and create highly re-usable
					and performant DRY components that take full
					advantage of React's compositionabilty. 
				`,
			},
			{
				level: 3,
				title: "Fastify/Express",
				imagePath: "/fastify.png",
				experience: SkillExperience.TWO_YEARS,
				content: `
					I used Express for ages but recently switched to
					Fastify as I find it has a better developer experience
					and generally less buggy.
				`,
			},
			{
				level: 4,
				title: "Redux",
				imagePath: "/redux.png",
				experience: SkillExperience.TWO_YEARS,
				content: `
					I am very familiar with managing application
					state in Redux. I mostly use Redux Toolkit
					these days as it makes writing actions,
					reducers, and selectors and breeze and also
					assists you in implementing Redux best practises.
					
				`,
			},
			{
				initialExpand: true,
				level: 3,
				title: "Workbox",
				imagePath: "/workbox.png",
				experience: SkillExperience.SIX_MONTHS,
				content: `
					I use WorkBox when making single-page applications
					and have general knowledge in creating rules and routes
					for offline application usage. But I have defiently have
					much more to learn.
				`,
			},
		],
	},
	{
		content: "",
		title: "AWS",
		imagePath: "/aws.png",
		skills: [
			{
				level: 5,
				content: "",
				title: "Route53",
				imagePath: "/route-53.svg",
				experience: SkillExperience.TWO_YEARS,
			},
			{
				level: 5,
				content: "",
				title: "CloudFront",
				imagePath: "/cloudfront.svg",
				experience: SkillExperience.TWO_YEARS,
			},
			{
				level: 5,
				content: "",
				title: "Lambda",
				imagePath: "/lambda.svg",
				experience: SkillExperience.TWO_YEARS,
			},
			{
				level: 5,
				content: "",
				title: "S3",
				imagePath: "/s3.svg",
				experience: SkillExperience.TWO_YEARS,
			},
			{
				level: 5,
				content: "",
				title: "EC2",
				imagePath: "/ec2.svg",
				experience: SkillExperience.TWO_YEARS,
			},
			{
				level: 5,
				content: "",
				title: "ECS",
				imagePath: "/ecs.svg",
				experience: SkillExperience.TWO_YEARS,
			},
			{
				level: 5,
				content: "",
				title: "RDS",
				imagePath: "/rds.svg",
				experience: SkillExperience.TWO_YEARS,
			},
			{
				level: 5,
				content: "",
				title: "VPC",
				imagePath: "/vpc.svg",
				experience: SkillExperience.TWO_YEARS,
			},
		],
	},
	{
		content: "",
		title: "DevOps",
		icon: "settings_applications",
		skills: [
			{
				level: 5,
				content: "",
				title: "Webpack",
				imagePath: "/webpack.png",
				experience: SkillExperience.TWO_YEARS,
			},
			{
				level: 5,
				content: "",
				title: "ESLint",
				imagePath: "/eslint.png",
				experience: SkillExperience.TWO_YEARS,
			},
			{
				level: 5,
				content: "",
				title: "VSCode",
				imagePath: "/vscode.png",
				experience: SkillExperience.TWO_YEARS,
			},
			{
				level: 5,
				content: "",
				title: "StyleLint",
				imagePath: "/stylelint.png",
				experience: SkillExperience.TWO_YEARS,
			},
			{
				level: 5,
				content: "",
				title: "Jest",
				imagePath: "/jest.png",
				experience: SkillExperience.TWO_YEARS,
			},
			{
				level: 5,
				content: "",
				title: "Docker",
				imagePath: "/docker.png",
				experience: SkillExperience.TWO_YEARS,
			},
		],
	},
	{
		content: "",
		icon: "code",
		title: "HTML/CSS",
		skills: [
			{
				level: 5,
				content: "",
				title: "HTML5",
				imagePath: "/html.png",
				experience: SkillExperience.TWO_YEARS,
			},
			{
				level: 5,
				content: "",
				title: "CSS3",
				imagePath: "/css.png",
				experience: SkillExperience.TWO_YEARS,
			},
			{
				level: 5,
				content: "",
				title: "Sass",
				imagePath: "/sass.png",
				experience: SkillExperience.TWO_YEARS,
			},
		],
	},
	{
		content: "",
		icon: "storage",
		title: "Database",
		skills: [
			{
				level: 5,
				content: "",
				title: "Algolia",
				imagePath: "/algolia.png",
				experience: SkillExperience.TWO_YEARS,
			},
			{
				level: 5,
				content: "",
				title: "PostgreSQL",
				imagePath: "/postgresql.png",
				experience: SkillExperience.TWO_YEARS,
			},
			{
				level: 5,
				content: "",
				title: "Redis",
				imagePath: "/redis.png",
				experience: SkillExperience.TWO_YEARS,
			},
		],
	},
	{
		content: "",
		icon: "build",
		title: "Miscellaneous",
		skills: [
			{
				level: 5,
				content: "",
				title: "Word",
				imagePath: "/word.png",
				experience: SkillExperience.TWO_YEARS,
			},
			{
				level: 5,
				content: "",
				title: "PowerPoint",
				imagePath: "/powerpoint.png",
				experience: SkillExperience.TWO_YEARS,
			},
			{
				level: 5,
				content: "",
				title: "Windows",
				imagePath: "/windows.png",
				experience: SkillExperience.TWO_YEARS,
			},
			{
				level: 5,
				content: "",
				title: "Linux",
				imagePath: "/linux.svg",
				experience: SkillExperience.TWO_YEARS,
			},
			{
				level: 5,
				content: "",
				title: "Photoshop",
				imagePath: "/photoshop.png",
				experience: SkillExperience.TWO_YEARS,
			},
		],
	},
]

export default content