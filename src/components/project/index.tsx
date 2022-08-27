import { createBEM } from "@oly_op/bem"
import Button from "@oly_op/react-button"
import { Metadata } from "@oly_op/react-metadata"
import { createElement, Fragment, useEffect, useState, FC } from "react"

import { Project as ProjectType } from "../../types"

import "./index.scss"

const bem =
	createBEM("Project")

const Project: FC<PropTypes> = ({
	project: {
		link,
		name,
		stack,
		imageURL,
		description,
		sourceCodeURL,
	},
}) => {
	const [ isExpanded, setIsExpanded ] =
		useState(false)

	const [ isStackExpanded, setIsStackExpanded ] =
		useState(false)

	const handleExpandToggle =
		() => setIsExpanded(prevState => !prevState)

	const handleStackExpandToggle =
		() => setIsStackExpanded(prevState => !prevState)

	useEffect(() => () => {
		setIsExpanded(false)
		setIsStackExpanded(false)
	}, [])

	return (
		<Metadata title="Projects">
			<div className="Padding FlexColumnCenterGap Border Rounded">
				<img
					src={imageURL}
					alt="Musicloud"
					className={bem("image", "Border Rounded")}
				/>
				<div className="FlexColumnGapQuart">
					<h3 className="HeadingFive">
						{name}
					</h3>
					<a
						target="_blank"
						rel="noreferrer"
						href={link.url}
						children={link.text}
						className={bem("link", "BodyTwo")}
					/>
					<a
						target="_blank"
						rel="noreferrer"
						href={sourceCodeURL}
					>
						<Button
							icon="code"
							transparent
							text="Source Code"
							className={bem("button")}
							textClassName={bem("button-text")}
						/>
					</a>
				</div>
				<div className={bem("description", "FlexColumnCenterGapHalf")}>
					{(isExpanded ? description : description.slice(0, 1)).map(
						(paragraph, index, array) => (
							<p
								key={paragraph}
								className="BodyTwo"
								children={index + 1 === array.length ? (
									<Fragment>
										{paragraph}
										<br/>
										<button
											type="button"
											onClick={handleExpandToggle}
											className={bem("description-expand")}
											children={isExpanded ? "Show less" : "Show more"}
										/>
									</Fragment>
								) : paragraph}
							/>
						),
					)}
				</div>
				<div className="FlexColumnGapHalf">
					<Button
						transparent
						text="Stack"
						icon="segment"
						onClick={handleStackExpandToggle}
						title={isStackExpanded ? "Hide Stack" : "Show Stack"}
						rightIcon={isStackExpanded ? "expand_less" : "expand_more"}
					/>
					{isStackExpanded && (
						<ul className={bem("stack")}>
							{stack.map(technology => (
								<li
									key={technology}
									children={technology}
									className={bem("stack-technology", "BodyTwo")}
								/>
							))}
						</ul>
					)}
				</div>
			</div>
		</Metadata>
	)
}

interface PropTypes {
	project: ProjectType,
}

export default Project