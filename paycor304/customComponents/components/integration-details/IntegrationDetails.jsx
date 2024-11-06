import React from "react"
import { createNamespace } from "@appdirect/sfb-theme-components/src/tools/namingTools"
import Grid from "@appdirect/sfb-theme-components/src/atoms/grid/Grid"
import Image from "@appdirect/sfb-theme-components/src/atoms/image/Image"

const n = createNamespace("pycwIntegrationDetails")

export function IntegrationDetails(props) {

	const { data = { config,meta,common,external,productLists,nav,il8n,alert,application }, settings = {} } = props

	const lexicons = [ // Article
		"https://d3bql97l1ytoxn.cloudfront.net/channel_custom_style_resources/img8837332250399626258?54ae56af5106dea0a0ea6b812ddf2ec0",
	]

	const ItemRenderer = ({item}) => {

		const SAMPLE_ITEM = {
			title:"Lorem Ipsum Dolor"
		};

		return (
			<div className="row integrationguideblock" key={item.title}>
				{/* <div className="col-sm-2">
					<Image style={{ height:"3em", width:"5em !important" }} src={lexicons[0]} />
				</div>
				<div className="col-sm-10">
					{item.title}
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
						<path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708"/>
					</svg>
				</div> */}
				<div class="integrationguideslot">
					<Image src={lexicons[0]} />
					<span>{SAMPLE_ITEM.title}</span>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
						<path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708"/>
					</svg>
				</div>
			</div>
		)
	}

	const IntegrationGuides = () => {

		const SAMPLE_SIZE = [1,2,3,4,5,6]; // Swap when we figure out from AD how to get guides into the product data!!!

		return (
			<div>
				<h2 className="title paycor-brand-orange-700">INTEGRATION GUIDES</h2>
				<Grid maxCol={1}>
					{
						SAMPLE_SIZE.map(item => <ItemRenderer item={item} />)
					}
				</Grid>
			</div>
		)
	}

	return (

    <div
      {...n("container")}
			id="pycwIntegrationDetails"
    >
			<div className="row">
				<div className="col-sm-12">
					<h3 className="headline40 paycor-brand-grey-900">Integration Details</h3>
					<div className="row">
					<div className="blocktext col-sm-8">
							<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et semper quam. Duis at lacinia enim. Quisque in leo finibus.</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et semper quam. Duis at lacinia enim. Quisque in leo finibus, semper ex ac, sodales ante. Curabitur congue sollicitudin nibh, sed tempor arcu condimentum ut. Nunc vel lacus id erat aliquet sagittis. Cras ac lectus suscipit, ultricies dui sit amet, elementum nisi. Duis egestas quam lorem, at rutrum dolor condimentum vel. Integer non convallis elit, id tempus odio. Proin convallis ornare mi iaculis semper. Sed dignissim risus ut volutpat rutrum.</p>
							<p>Praesent a odio eu nunc sodales ullamcorper. Sed blandit diam non metus eleifend ultricies. Inquis consectetur mauris,</p>
							<p><b>A laoreet ligula. In vel est cursus, egestas ex in, placerat orci.</b></p>
							<p>
								• Sed quis leo sapien. Nulla lobortis ac erat vitae congue.<br />
								• Vestibulum vehicula vestibulum tellus dapibus bibendum.<br />
								• Nunc placerat felis vel sapien sollicitudin, a condimentum.<br />
								• Arcu vestibulum. Nullam in est dui. Aliquam cursus.<br />
							</p>
							<p>
								{/* <Image src="https://d3bql97l1ytoxn.cloudfront.net/channel_custom_style_resources/img5854441524244150397?614f6b19d0f12a524f7797e100600bd2" /> */}
								<Image src="https://res.cloudinary.com/dzyk5qkpn/image/upload/v1729090877/payc/Alliance-1pager__0012_iStock-1487231759_b8xgd0.jpg" />
							</p>
						</div>
						<div className="sidebar col-sm-4">
							<IntegrationGuides />
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}

IntegrationDetails.schema = () => ({
  name: "IntegrationDetails",
  title: "IntegrationDetails",
  form: {
  },
  marketplaceData:{
    config:"config",
    meta:"meta",
		common:"common",
		external:"external",
		productLists:"productLists",
		nav:"nav",
		il8n:"il8n",
		alert:"alert",
		application:"application",
  }
})

export default IntegrationDetails
