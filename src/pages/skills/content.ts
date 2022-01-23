import { SkillSection, SkillExperience } from "../../types"

const content: SkillSection[] = [
	{
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
				level: 5,
				title: "Node",
				experience: SkillExperience.TWO_YEARS,
				imagePath: "/node.png",
				content: `
					I use Node.js for all server side applications.
				`,
			},
			{
				level: 5,
				content: "",
				title: "React",
				imagePath: "/react.png",
				experience: SkillExperience.TWO_YEARS,
			},
			{
				level: 5,
				content: "",
				title: "Fastify/Express",
				imagePath: "/fastify.png",
				experience: SkillExperience.TWO_YEARS,
			},
			{
				level: 5,
				content: "",
				title: "Redux",
				imagePath: "/redux.png",
				experience: SkillExperience.TWO_YEARS,
			},
			{
				level: 5,
				content: "",
				title: "Workbox",
				imagePath: "/workbox.png",
				experience: SkillExperience.TWO_YEARS,
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