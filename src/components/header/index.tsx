import { createBEM } from "@oly_op/bem"
import Button from "@oly_op/react-button"
import { createElement, useState, VFC } from "react"

import "@oly_op/css-utilities/index.css"
import "@oly_op/react-image/build/index.css"
import "@oly_op/react-button/build/index.css"
import "../../index.scss"

import "./index.scss"

const bem =
	createBEM("Header")

const EMAIL =
	"oliver.plummer@outlook.com"

const Header: VFC = () => {
	const [ isCopied, setIsCopied ] =
		useState(false)
	const handleEmailCopy =
		async () => {
			await navigator.clipboard.writeText(EMAIL)
			setIsCopied(true)
		}
	return (
		<div className={bem("", "FlexColumn")}>
			<h1 className={bem("title", "HeadingOne")}>
				olyop
			</h1>
			<div className="FlexColumnGapHalf">
				<div className="FlexRowGapHalf">
					<address className={bem("email-text", "BodyTwo")}>
						oliver.plummer@outlook.com
					</address>
					<Button
						transparent
						title="Copy"
						icon="content_copy"
						onClick={handleEmailCopy}
						className={bem("email-copy")}
						iconClassName={bem("email-copy-icon")}
					/>
				</div>
				{isCopied && (
					<p className="BodyTwo">
						Copied
					</p>
				)}
			</div>
		</div>
	)
}

export default Header