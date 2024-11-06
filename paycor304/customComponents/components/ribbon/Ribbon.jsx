import React from "react"
import Image from "@appdirect/sfb-theme-components/src/atoms/image/Image"

export function Ribbon(props) {

	const { merchandising } = props;

	return (
		<div id="pycwRibbon">
			{ merchandising?.length && <div style={{ display:"inline-flex",alignItems:"center" }}>
				<div>
					<Image src={merchandising[0].image} />
				</div>
				{merchandising[0].name != "0" && <div id="ribbonColor">{merchandising[0].name}</div>}
			</div>
			}
		</div>
	)
}

export default Ribbon
