/* eslint-disable @typescript-eslint/quotes */
import { SkillSection, SkillExperience } from "../../types";

const content: SkillSection[] = [
	{
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
			I am very familiar with creating types
			and using them throughout my codebase.
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
			Proficient in creating web servers for any application. 
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
			state in Redux. I use the Redux Toolkit package
			as it makes writing actions, reducers,
			and selectors and breeze to write and also
			assists you in following Redux best practises.
			
		`,
			},
			{
				level: 3,
				title: "Workbox",
				imagePath: "/workbox.png",
				experience: SkillExperience.SIX_MONTHS,
				content: `
			I use WorkBox when making single-page applications
			and have general knowledge in creating routes and caching strategies.
			I am able to add application offline functionality with fallback strategies
			My knowledge is sound and I have much more to learn with this framework.
		`,
			},
		],
	},
	{
		title: "AWS",
		imagePath: "/aws.png",
		skills: [
			{
				level: 3,
				title: "EC2",
				imagePath: "/ec2.svg",
				experience: SkillExperience.ONE_YEAR,
				content: `
			I have knowledge in launching instances
			for both development and production environments.
			I am familiar with many aspects of EC2 instances including;
			instance types, elastic IPs, AMIs, Key Pairs, and EBS storage.
			I am familiar with creating security groups, and
			configuring load balancers & target groups.
		`,
			},
			{
				level: 4,
				title: "S3",
				imagePath: "/s3.svg",
				experience: SkillExperience.TWO_YEARS,
				content: `
			I can create and configure
			S3 buckets and have knowledge in uploading files
			through the terminal, SDK, and Console.
			I have some understanding in configuring Bucket
			CORS and security policies.
			I also have knowledge in creating and serving static websites
			with S3 for example, this website.
		`,
			},
			{
				level: 3,
				title: "Route53",
				imagePath: "/route-53.svg",
				experience: SkillExperience.RECENTLY_LEARNED,
				content: `
			I have knowledge in registering domains and sub-domains,
			creating and configuring hosted zones,
			and creating records that route traffic to other AWS rescources.

		`,
			},
			{
				level: 3,
				title: "CloudFront",
				imagePath: "/cloudfront.svg",
				experience: SkillExperience.SIX_MONTHS,
				content: `
			I have knowledge in deploying CloudFront distributions
			from S3 buckets region specific or not. 
		`,
			},
			{
				level: 3,
				title: "RDS",
				imagePath: "/rds.svg",
				experience: SkillExperience.TWO_YEARS,
				content: `
			I am familiar with setting up databases with RDS
			and is the way I set up my databases for my own projects.
		`,
			},
			{
				level: 4,
				title: "VPC",
				imagePath: "/vpc.svg",
				experience: SkillExperience.ONE_YEAR,
				content: `
			I am proficent in creating a secure VPC
			with subnets, ACLs, Gateways, and Route Tables
			that are resilient to outages. 
		`,
			},
		],
	},
	{
		title: "DevOps",
		icon: "settings_applications",
		skills: [
			{
				level: 5,
				title: "Webpack",
				imagePath: "/webpack.png",
				experience: SkillExperience.TWO_YEARS,
				content: `
			I am very familiar with Webpack and use it all my projects.
			I have extensive knowledge in confguring Webpack for a variaty
			of development & production environments.
			Webpack assists me in bundling my JavaScript applications
			and making them production ready. I take full advantage
			of the many third-party plugins and loaders
			which allow me to functionally do a lot more.
		`,
			},
			{
				level: 5,
				title: "ESLint",
				imagePath: "/eslint.png",
				experience: SkillExperience.TWO_YEARS,
				content: `
			I use ESLint anytime I'm writing JavaScript or TypeScript.
			I am very knowledgable in configuring rules and using ESLint plugins.
			I created my own eslint config npm package that I use and update reguarly.
			ESLint allows me to implement JavaScript language
			best practises without much thought and also helps me catch problems
			before runtime.
		`,
			},
			{
				level: 5,
				title: "VSCode",
				imagePath: "/vscode.png",
				experience: SkillExperience.TWO_YEARS,
				content: `
			VSCode is my weapon of choice! It integrates well
			with many of the tools I use and allows me to configure
			the editor just the way I want. 
		`,
			},
			{
				level: 4,
				title: "StyleLint",
				imagePath: "/stylelint.png",
				experience: SkillExperience.ONE_YEAR,
				content: `
			I use StyleLint anytime I'm writing CSS or SCSS.
			I have knowledge in configuring and have created my own
			configuration npm package.
		`,
			},
			{
				level: 2,
				title: "Docker",
				imagePath: "/docker.png",
				experience: SkillExperience.SIX_MONTHS,
				content: `
			I have knowledge in Docker but my experience is limited.
			I am able to build an application in a Docker container
			and deploy it in a container service such as AWS ECS.  
		`,
			},
		],
	},
	{
		icon: "code",
		title: "HTML/CSS",
		skills: [
			{
				level: 5,
				title: "HTML5",
				imagePath: "/html.png",
				experience: SkillExperience.FOUR_YEARS,
				content: `
			I am very experienced in writing HTML and am very
			knowledgable in all areas of the language. I use semantic elements
			and always use HTML best practises.
		`,
			},
			{
				level: 5,
				title: "CSS3",
				imagePath: "/css.png",
				experience: SkillExperience.FOUR_YEARS,
				content: ``,
			},
			{
				level: 5,
				title: "SCSS",
				imagePath: "/sass.png",
				experience: SkillExperience.THREE_YEARS,
				content: ``,
			},
		],
	},
	{
		icon: "storage",
		title: "Database",
		skills: [
			{
				level: 4,
				title: "Algolia",
				imagePath: "/algolia.png",
				experience: SkillExperience.SIX_MONTHS,
				content: ``,
			},
			{
				level: 4,
				title: "PostgreSQL",
				imagePath: "/postgresql.png",
				experience: SkillExperience.TWO_YEARS,
				content: ``,
			},
		],
	},
	{
		icon: "build",
		title: "Miscellaneous",
		skills: [
			{
				level: 4,
				title: "Word",
				imagePath: "/word.png",
				experience: SkillExperience.FOUR_YEARS,
				content: ``,
			},
			{
				level: 3,
				title: "PowerPoint",
				imagePath: "/powerpoint.png",
				experience: SkillExperience.FOUR_YEARS,
				content: ``,
			},
			{
				level: 5,
				title: "Windows",
				imagePath: "/windows.png",
				experience: SkillExperience.FOUR_YEARS,
				content: ``,
			},
			{
				level: 3,
				title: "Linux",
				imagePath: "/linux.jpg",
				experience: SkillExperience.ONE_YEAR,
				content: ``,
			},
			{
				level: 3,
				title: "Photoshop",
				imagePath: "/photoshop.png",
				experience: SkillExperience.TWO_YEARS,
				content: ``,
			},
		],
	},
];

export default content;
