import { createBEM } from "@oly_op/bem";
import { ChangeEventHandler, createElement, useEffect, useState, FC } from "react";

import Heading from "../../components/heading";
import { SettingsTransitions } from "../../types";

import "./index.scss";

const determineTransitionsDuration = (
	transitions: SettingsTransitions,
): Parameters<CSSStyleDeclaration["setProperty"]>[1] => {
	switch (transitions) {
		case SettingsTransitions.ON:
			return null;
		case SettingsTransitions.OFF:
			return "0";
		case SettingsTransitions.SYSTEM:
			if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
				return "0.2s";
			} else {
				return null;
			}
		default:
			return null;
	}
};

const normalizeStringCase = (value: string) => {
	const toLower = value.toLowerCase();
	return toLower.charAt(0).toUpperCase() + toLower.slice(1);
};

const bem = createBEM("SettingsPage");

const SettingsPage: FC = () => {
	const [transitions, setTransitions] = useState(SettingsTransitions.SYSTEM);

	const handleTransitionsChange: ChangeEventHandler<HTMLSelectElement> = event =>
		setTransitions(event.target.value as SettingsTransitions);

	useEffect(() => {
		document.documentElement.style.setProperty(
			"--transition-duration",
			determineTransitionsDuration(transitions),
		);
	}, [transitions]);

	return (
		<div>
			<Heading>Settings (W.I.P.)</Heading>
			<div className="FlexColumnCenterGap">
				<div className="FlexColumnCenterGapQuart">
					<p className="BodyTwoBold">Transitions:</p>
					<select
						value={transitions}
						onChange={handleTransitionsChange}
						className={bem("select", "BodyTwo Border Rounded PaddingFifth")}
					>
						{Object.keys(SettingsTransitions).map(setting => (
							<option key={setting} value={setting} children={normalizeStringCase(setting)} />
						))}
					</select>
				</div>
				<div className="FlexColumnCenterGapQuart">
					<p className="BodyTwoBold">Theme:</p>
					<select
						disabled
						value="Light"
						className={bem("select", "BodyTwo Border Rounded PaddingFifth")}
					>
						<option key="light" value="Light" children="Light" />
					</select>
				</div>
				<p className="BodyTwo">v{VERSION}</p>
			</div>
		</div>
	);
};

export default SettingsPage;
