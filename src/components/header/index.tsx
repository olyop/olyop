import { createBEM } from "@oly_op/bem"
import Button from "@oly_op/react-button"
import { NavLink } from "react-router-dom"
import { createElement, Fragment, useEffect, useState, VFC } from "react"

import "../../fonts.scss"
import "@oly_op/css-utilities/index.css"
import "@oly_op/react-button/build/index.css"
import "../../index.scss"

import "./index.scss"

const bem =
	createBEM("Header")

const TITLE =
	"oliver"

const EMAIL =
	"oliver.plummer@outlook.com"

const PHONE_NUMBER =
	"(+61) 435 664 195"

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
			<address className="FlexColumnCenter">
				<Button
					transparent
					icon="email"
					rightIcon="content_copy"
					onClick={handleEmailCopy}
					className={bem("address-email")}
					iconClassName={bem("address-email-icon")}
					rightIconClassName={bem("address-email-icon-right")}
					textClassName={bem(
						isCopied && "address-email-text-copied",
						"address-email-text",
						"address-text",
					)}
					text={(
						<Fragment>
							{isCopied ? "Copied!" : EMAIL}
							<div className={bem("address-email-text-underline")}/>
						</Fragment>
					)}
				/>
				<a
					href={`tel:${PHONE_NUMBER}`}
					children={(
						<Button
							icon="phone"
							transparent
							text={PHONE_NUMBER}
							textClassName={bem("address-text")}
						/>
					)}
				/>
			</address>
		</div>
	)
}

export default Header