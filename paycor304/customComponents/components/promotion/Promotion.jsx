import React from "react"
import Image from "@appdirect/sfb-theme-components/src/atoms/image/Image"

export function Promotion(props) {

	const { merchandising } = props;

	// AD's platform looks to have TWO elements if badge & ribbon, so right now the 'ribbon' is index 1

	return (
		<div id="pycwPromotion">
			{merchandising?.length == 2 && <div>
				<Image src={merchandising[1].image} />
			</div>}
		</div>
	)
}

export default Promotion
