import { createBEM } from "@oly_op/bem"
import Button from "@oly_op/react-button"
import { NavLink } from "react-router-dom"
import { createElement, useEffect, useState, VFC } from "react"

import "../../fonts.scss"
import "@oly_op/css-utilities/index.css"
import "@oly_op/react-image/build/index.css"
import "@oly_op/react-button/build/index.css"
import "../../index.scss"

import "./index.scss"

const bem =
	createBEM("Header")

const TITLE =
	"oliver"

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
		<div className={bem("", "FlexColumnCenterGapHalf")}>
			<NavLink to="" className="PaddingBottomHalf">
				<h1 className={bem("title", "HeadingOne")}>
					{TITLE}
				</h1>
			</NavLink>
			<div className={bem("separator")}/>
			<address
				title="Copy Email"
				onClick={handleEmailCopy}
				className={bem("email", "PaddingHalf Rounded FlexRowGapHalf")}
			>
				<Button
					transparent
					icon="email"
					iconClassName={bem("email-button-icon")}
					className={bem("email-email", "email-button")}
				/>
				<div className={bem("email-address")}>
					<p
						children={isCopied ? "Copied!" : EMAIL}
						className={bem("email-address-text", "BodyTwo")}
					/>
					<div className={bem("email-address-underline")}/>
				</div>
				<Button
					transparent
					icon="content_copy"
					iconClassName={bem("email-button-icon")}
					className={bem("email-copy", "email-button")}
				/>
			</address>
		</div>
	)
}

export default Header