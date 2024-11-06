import React from "react"
import { createNamespace } from "@appdirect/sfb-theme-components/src/tools/namingTools"
import Grid from "@appdirect/sfb-theme-components/src/atoms/grid/Grid"
// import Rating from "@appdirect/sfb-theme-components/src/atoms/rating/Rating"
import Image from "@appdirect/sfb-theme-components/src/atoms/image/Image"

const n = createNamespace("pycwOverview")

export function Overview(props) {

	const { data = { config, meta, application }, settings = {} } = props

	const lexicons = {
		"180 Integration" : "https://d3bql97l1ytoxn.cloudfront.net/channel_custom_style_resources/img4546580053483862497?08539a75d38ca87275ec077d9789bf3a",
		"Security Check" : "https://d3bql97l1ytoxn.cloudfront.net/channel_custom_style_resources/img5517554478534259343?19980c29e4456804922af4e08268b359",
		"Single Sign-on" : "https://d3bql97l1ytoxn.cloudfront.net/channel_custom_style_resources/img8043064748235294299?6e7ab9c3cc2af3bb84c8b52633b7ff28",
		"Custom Integration" : "https://d3bql97l1ytoxn.cloudfront.net/channel_custom_style_resources/img1989191652757545230?8c09de0a4f4d4ae68f88d90744e04a73",
		"360 Integration" : "https://d3bql97l1ytoxn.cloudfront.net/channel_custom_style_resources/img7204571839240481389?9f139eeef773b601acdd11a5f5e9c488",
	}

	const ItemRendererQ = ({item}) => {
		return (
			<div className="row" key={item}>
				<div className="col-sm-2">
					<Image className="lexiQ" src={lexicons[item]} />
				</div>
				<div className="col-sm-10 qref">
					{item}
				</div>
			</div>
		)
	}

	// const ItemRendererR = ({item}) => {
	// 	return (
	// 		<div className="row" key={'k'+item.rating}>
	// 			<div className="col-sm-12">
	// 				<Rating rating={item.rating} displayRatingNumber={false} numRatings={item.numRatings} />
	// 			</div>
	// 		</div>
	// 	)
	// }

	const IntegrationQuickLook = () => {
		const quicklooks = data?.application?.customAttributes.find(e => e["attributeKey"] == "integrationquicklooks");
		return (
			<div>
				{ quicklooks && quicklooks.values?.length &&
					<div>
						<h2 className="title paycor-brand-orange-700">INTEGRATION QUICK LOOK</h2>
						{
							<Grid maxCol={1}>
								{
									quicklooks.values.map(item => <ItemRendererQ item={item} />)
								}
							</Grid>
						}
					</div>
				}
			</div>
		)
	}

	// const Ratings = () => {
	// 	return (
	// 		<div className="ratings_grid">
	// 			<h2 className="title paycor-brand-grey-900">OVERALL RATING ({ mockR.overall })</h2>
	// 			<Grid maxCol={1}>
	// 			{
	// 				mockR.ratings.map(item => <ItemRendererR item={item} />)
	// 			}
	// 			</Grid>
	// 		</div>
	// 	)
	// }

	return (
		<div {...n("container")} className="roomy" id="pycwOverview">
			<div className="row">
				<div className="col-sm-2">
					<h3 className="headline40 paycor-brand-grey-900">Overview</h3>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-8">
					<p class="paycor-text-6d6e71 blocktext">{data.application.overview.description}</p>
					<p>
						{data?.application?.recommendations?.items && data?.application?.recommendations?.items[0].overviewImageUrl &&
							<Image
								className="featuredCustomerImg"
								name="Satisfaction"
								src={data.application.recommendations.items[0].overviewImageUrl}
							/>
						}
					</p>
				</div>
				<div className="col-sm-4 sidebar">
					<IntegrationQuickLook />
					{/* <hr />
					<Ratings /> */}
				</div>
			</div>
		</div>
	)
}

Overview.schema = () => ({
  name: "Overview",
  title: "Overview",
  form: {
  },
  marketplaceData:{
    config:"config",
    meta:"meta",
		application:"application",
  }
})

export default Overview
