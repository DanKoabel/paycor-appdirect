import React from "react"
import { createNamespace } from "@appdirect/sfb-theme-components/src/tools/namingTools"
import Button from "@appdirect/sfb-theme-components/src/atoms/button/Button"

const n = createNamespace("pycwRequestApp")

const stringTable = {
	text: "Introduce Us To Your Favorite Partner",
	label: "REQUEST AN APP",
	link: "https://partnerportal.paycor.com/prm/English/s/applicant",
}

export function Introduction() {
	return (
		<div {...n()} id="pycwRequestApp">
				<div class="topSpacer">
					<div class="pycwRequestAppInnerWrap">
						<span className="text">{stringTable.text}</span>
						<a href={stringTable.link} target="_blank">
							<Button class="navy_button" type="primary" wide>{stringTable.label}</Button>
						</a>
					</div>
				</div>
		</div>
	)
}

export default Introduction
