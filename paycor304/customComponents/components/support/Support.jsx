import React from "react"
import { createNamespace } from "@appdirect/sfb-theme-components/src/tools/namingTools"
// import Grid from "@appdirect/sfb-theme-components/src/atoms/grid/Grid"
import Image from "@appdirect/sfb-theme-components/src/atoms/image/Image"

const n = createNamespace("pycwSupport")

export function Support(props) {

	const { data = { application }, settings = {} } = props

	const lexicons = [ // Article
		"https://d3bql97l1ytoxn.cloudfront.net/channel_custom_style_resources/img8837332250399626258?54ae56af5106dea0a0ea6b812ddf2ec0",
	]

	const SupportLinkRenderer = ({item}) => {
		return (
			<div className="row" key={item.title}>
				{/* <div className="col-sm-2">
					<Image style={{ height:"3em", width:"5em !important" }} src={lexicons[0]} />
				</div>
				<div className="col-sm-10">
					{item.title}
				</div> */}
				<div id="supportlinkblock">
					<Image src={lexicons[0]} />
					<span>{item.title}</span>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
						<path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708"/>
					</svg>
				</div>
			</div>
		)
	}

	const DocumentTileRenderer = () => {
		return (
			<div className="row">
				<div className="col-sm-1">
					<div id="documenttileblock">
						<Image src={lexicons[0]} />
					</div>
				</div>
				<div className="col-sm-11">
					<div className="doctitle paycor-h2-bold">Lorem ipsum dolor sit amet, consectetur.</div>
					<div className="docsummary">Suspendisse et semper quam. Duis at lacinia enim. Quisque in leo finibus, semper ex ac, sodales ante. Curabitur congue sollicitudin nibh, sed tempor arcu.</div>
				</div>
			</div>
		)
	}

	// const SupportLinks = () => {
	// 	return (
	// 		<Grid maxCol={1}>
	// 			{
	// 				mock.map(item => <SupportLinkRenderer item={item} />)
	// 			}
	// 		</Grid>
	// 	)
	// }

	const ContactInformation = (props) => {
		const { support } = props.support
		return (support.email &&
			<div>
				<h2 className="headline30 paycor-brand-grey-900">Contact</h2>
				<blockquote className="paycor-brand-grey-300">
				{ support.email || "" }<br />
				{ support.phone || "" }<br />
				</blockquote>
			</div>
		)
	}

	// const Documentation = () => {
	// 	return (
	// 		<div>
	// 			<h2 className="headline30 paycor-brand-grey-900">Documentation</h2>
	// 			<Grid maxCol={1}>
	// 				{
	// 					[0,1,2].map(item => <DocumentTileRenderer />)
	// 				}
	// 			</Grid>
	// 		</div>
	// 	)
	// }

	return (
		<div
			id="pycwSupportContainer"
			{...n("container")}
		>
			<div className="row">
				<div className="col-sm-12">
					<h3 className="headline40 paycor-brand-grey-900">Support</h3>
					<div className="row">
						<div className="col-sm-12">
							<div>{data.application.support.description}</div>
							<ContactInformation support={data.application} />
							{/* <Documentation /> */}
						</div>
						{/* <div className="sidebar col-sm-4">
							<h2 className="title paycor-brand-orange-700">Support Links</h2>
							<SupportLinks />
						</div> */}
					</div>
				</div>
			</div>
		</div>
	)
}

Support.schema = () => ({
  name: "Support",
  title: "Support",
  form: {
  },
  marketplaceData:{
		application:"application",
  }
})

export default Support
