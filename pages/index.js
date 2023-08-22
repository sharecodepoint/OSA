import FeatchTab from "../components/ecommerce/fetchTab";
import FeatchTab2 from "../components/ecommerce/fetchTabSlider";
import Banner2 from "../components/elements/Banner2";
import Bottom from "../components/elements/Bottom";
import QuickView from "./../components/ecommerce/QuickView";
import Banner3 from "./../components/elements/Banner3";
import Banner4 from "./../components/elements/Banner4";
import Banner5 from "./../components/elements/Banner5";
import BannerFeatures from "./../components/elements/BannerFeatures";
import Deals1 from "./../components/elements/Deals1";
import Deals2 from "./../components/elements/Deals2";
import HomeBlog from "./../components/elements/HomeBlog";
import IntroPopup from "./../components/elements/IntroPopup";
import Layout from "./../components/layout/Layout";
import BrandSlider from "./../components/sliders/Brand";
import CategorySlider from "./../components/sliders/Category";
import Intro1 from "./../components/sliders/Intro1";
import NewArrival from "./../components/sliders/NewArrival";

export default function Home() {
    return (
        <>
            

            <Layout noBreadcrumb="d-none" headerStyle="header-style-1">
            <section className="home-slider position-relative pt-20">
                    <Intro1 />
                </section>
                
                <section className="featured section-padding position-relative">
                    <div className="container">
                        <div className="row">
                            <BannerFeatures />
                        </div>
                    </div>
                </section>

               
                <section className="banner-2 section-padding pb-0">
                    <div className="container">
                        <Banner2 />
                    </div>
                </section>
  

                <section className="section-padding">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-6">
                                <img
                                    src="assets/imgs/page/company-1.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="col-lg-6 align-self-center mb-lg-0 mb-4">
                                <h6 className="mt-0 mb-15 text-uppercase font-sm text-brand wow fadeIn animated">
                                    Our Company
                                </h6>
                                <h1 className="font-heading mb-40">
                                    We are Building The Destination For Getting
                                    Things Done
                                </h1>
                                <p>
                                    Tempus ultricies augue luctus et ut
                                    suscipit. Morbi arcu, ultrices purus dolor
                                    erat bibendum sapien metus.
                                </p>
                                <p>
                                    Tempus ultricies augue luctus et ut
                                    suscipit. Morbi arcu, ultrices purus dolor
                                    erat bibendum sapien metus. Sit mi,
                                    pharetra, morbi arcu id. Pellentesque
                                    dapibus nibh augue senectus.
                                </p>
                            </div>
                           
                        </div>
                    </div>
                </section>

              
             
                <section className="banners mb-15">
                    <div className="container">
                        <div className="row">
                            <Banner5 />
                        </div>
                    </div>
                </section>
 

            

                <section className="section-padding">
                    <div className="container">
                        <h3 className="section-title mb-20 wow fadeIn animated">
                            <span>Featured</span> Brands
                        </h3>
                        <div className="carausel-6-columns-cover position-relative wow fadeIn animated">
                            <BrandSlider />
                        </div>
                    </div>
                </section>
                <QuickView />
            </Layout>
        </>
    );
}
