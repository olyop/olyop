import { createBEM } from "@oly_op/bem";
import { Link } from "react-router-dom";
import Button from "@oly_op/react-button";
import { createElement, FC } from "react";

import Header from "../header";
import Footer from "../footer";
import Pages from "../../pages";

import "./index.scss";

const bem = createBEM("Index");

const Index: FC = () => (
	<div className={bem("", "FullWidthAndHeight")}>
		<Link to="/settings" className={bem("settings")}>
			<Button transparent icon="settings" />
		</Link>
		<div className={bem("inner", "FlexColumnCenter BorderLeft BorderRight")}>
			<Header />
			<Pages />
			<Footer />
		</div>
	</div>
);

export default Index;
