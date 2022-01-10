import { createBEM } from "@oly_op/bem"
import Button from "@oly_op/react-button"
import { NavLink } from "react-router-dom"
import { createElement, useEffect, useState, VFC } from "react"

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

	useEffect(() => {
		if (isCopied) {
			const timer = setTimeout(() => {
				setIsCopied(false)
			}, 2000)
			return () => clearTimeout(timer)
		} else {
			return () => {}
		}
	}, [isCopied])

	return (
		<div className={bem("", "FlexColumn")}>
			<NavLink to="">
				<h1 className={bem("title", "HeadingOne")}>
					olyop
				</h1>
			</NavLink>
			<div className="FlexColumnGapHalf">
				<div className={bem("email", "FlexRowGapHalf")}>
					<Button
						transparent
						icon="email"
						title="Email"
						iconClassName={bem("email-icon-icon")}
						className={bem("email-email", "email-icon")}
					/>
					<address className={bem("email-text", "BodyTwo")}>
						<a
							children={EMAIL}
							title="Send Email"
							href={`mailto:${EMAIL}`}
							className={bem("email-link")}
						/>
					</address>
					<Button
						transparent
						title="Copy"
						icon="content_copy"
						onClick={handleEmailCopy}
						iconClassName={bem("email-icon-icon")}
						className={bem("email-copy", "email-icon")}
					/>
				</div>
				{isCopied && (
					<p className={bem("email-copied", "BodyTwo")}>
						Copied!
					</p>
				)}
			</div>
		</div>
	)
}

export default Header