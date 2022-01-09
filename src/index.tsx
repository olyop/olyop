/* eslint-disable react/jsx-one-expression-per-line */
import ReactDOM from "react-dom"
import { createBEM } from "@oly_op/bem"
import { createElement, VFC } from "react"

import Skill from "./components/skill"
import Heading from "./components/heading"

const bem =
	createBEM("Root")

const Root: VFC = () => (
	<div className={bem("", "FullWidthAndHeight")}>
		<div className="FlexRowCenter FullWidthAndHeight BorderLeft BorderRight">
			<div className={bem("content")}>
				<h1 id="title" className={bem("title", "HeadingOneBold MarginBottomDouble")}>
					olyop
				</h1>
				<p className={bem("title-text-first", "title-text", "body", "BodyOne MarginBottomHalf")}>
					👋 Hello! 👋
					<br/>
					My name is Oliver.
				</p>
				<p className={bem("title-text-second", "title-text", "body", "BodyOne MarginBottomQuart")}>
					I am a fullstack software engineer based in Sydney, Australia.
				</p>
				<p className={bem("title-text-second", "title-text", "body", "BodyOne MarginBottomDouble")}>
					I specializie in single-page application development including the creation of PWAs.
				</p>
				<Heading>
					What I can do for you
				</Heading>
				<Heading>
					Skills
				</Heading>
				<Skill
					icon="/typescript-logo.png"
					title="JavaScript/TypeScript"
				>
					Extensive knowledge and experience programming in this language (5+ years).
					Profficent both in the <b>Browser</b> and <b>Node</b>.
					Comprehensive experience with the ecosystem of
					<b>libraries</b> and <b>frameworks</b>.
					I use <b>TypeScript</b> everywhere and take full advantage
					of added type saftey.
				</Skill>
				<div id="github">
					<a
						data-size="large"
						className="github-button"
						href="https://github.com/olyop"
						aria-label="Follow @olyop on GitHub"
					>
						GitHub
					</a>
				</div>
			</div>
		</div>
	</div>
)

ReactDOM.render(
	<Root/>,
	document.getElementById("Root"),
)