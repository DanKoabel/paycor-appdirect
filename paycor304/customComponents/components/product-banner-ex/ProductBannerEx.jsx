import React from "react"
// import Rating from "@appdirect/sfb-theme-components/src/atoms/rating/Rating"
import Ribbon from "../ribbon/Ribbon"
import Promotion from "../promotion/Promotion"
import Button from "@appdirect/sfb-theme-components/src/atoms/button/Button"
import Image from "@appdirect/sfb-theme-components/src/atoms/image/Image"

export function ProductBannerEx(props) {
  const { data = { config, meta, application }, settings = {} } = props
  return (
    <div
      className="roomy" id="pycwProductBanner"
    >
      <div className="row">
        <div className="col-sm-6">
          <div className="row">
            <div className="col-md-4 col-sm-8">
              <div className="col-sm-12 logoslot">
                <Image class="logo" src={data.meta.image} />
              </div>
              <div className="col-sm-12">
                {/* <Rating rating={4.5} displayRatingNumber={false} /> */}
              </div>
            </div>
            <div className="promotion col-sm-2">
              <Promotion merchandising={data.application.summary.merchandisingBadges} />
            </div>
            <div className="col-sm-2">
              <Ribbon merchandising={data.application.summary.merchandisingBadges} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
                <div className="headline paycor-brand-grey-900">{data.meta.title}</div>
                <p className="paycor-text-6d6e71">{data.meta.description}</p>
                <div>
                  <a href="https://paycor.com">
                    <Button className="navy_button" type="primary" wide>Contact Us</Button>
                  </a>
                </div>
              </div>
          </div>
        </div>
        <div className="col-sm-6">
          <Image src="https://d3bql97l1ytoxn.cloudfront.net/channel_custom_style_resources/img5854441524244150397?614f6b19d0f12a524f7797e100600bd2" />
        </div>
      </div>
    </div>
  )
}

ProductBannerEx.schema = () => ({
  name: "ProductBannerEx",
  title: "Banner",
  form: {
  },
  marketplaceData:{
    config:"config",
    meta:"meta",
    application:"application",
  }
})

export default ProductBannerEx
