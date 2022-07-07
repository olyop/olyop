import { createBEM } from "@oly_op/bem"
import Button from "@oly_op/react-button"
import { createElement, FC } from "react"

import "./index.scss"

const bem =
	createBEM("Footer")

const Footer: FC = () => (
	<div className="FlexColumnCenterGapHalf">
		<div className="FlexRowGapHalfCenter">
			<a
				target="_blank"
				rel="noreferrer"
				className={bem("github")}
				href="https://github.com/olyop"
			>
				<Button
					transparent
					text="GitHub"
					className={bem("github-link")}
					image={{
						src: "/github.png",
						description: "GitHub",
						crossOrigin: "anonymous",
					}}
				/>
			</a>
			<a
				target="_blank"
				href="/resume.pdf"
				children={(
					<Button
						transparent
						text="Résumé"
						icon="download"
						title="See résumé"
						className={bem("résumé", "Border")}
						iconTextClassName={bem("résumé-icon-text")}
					/>
				)}
			/>
		</div>
		<a
			target="_blank"
			rel="noreferrer"
			href="https://github.com/olyop/olyop"
			children={(
				<Button
					icon="code"
					transparent
					text="Source Code"
					rightIcon="open_in_new"
					className={bem("source-code")}
					title="View olyop.com source code"
					textClassName={bem("source-code-text")}
					leftIconClassName={bem("source-code-left-icon")}
					rightIconClassName={bem("source-code-right-icon")}
				/>
			)}
		/>
	</div>
)

export default Footer