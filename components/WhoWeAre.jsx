import Image from "next/image";
import WhoWeAreHome from "@/public/images/who-we-are-home.png";
import WhoWeAreKid from "@/public/images/who-we-are-kid.gif";
import WhoWeAreKidShadow from "@/public/images/who-we-are-kid-shadow.png";

function WhoWeAre() {
    return (
        <section className="who-we-are py-5">
            <div className="container">
                <div className="who-we-are-inner">
                    <div className="position-relative order-lg-0 order-1">
                        <Image className="w-100 h-100" src={WhoWeAreHome} alt=""/>
                        <div className="who-we-are-kid">
                            <Image className="w-100 h-100" src={WhoWeAreKid} alt="" unoptimized={true}/>
                            <Image className="who-we-are-kid-shadow" src={WhoWeAreKidShadow} alt="shadoe-image" unoptimized={true}/>
                        </div>
                    </div>
                    <div className="order-lg-1 order-0">
                        <h2 className="who-we-are-h2 text-dark fw-semibold">
                            Who We Are
                        </h2>
                        <div className="fs-18 text-light">
                            <p className="mb-2">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                Ipsum has been the industry standard dummy text ever since the 1500s,
                            </p>

                            <p className="mb-2">
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged. It was popularised in the
                                1960s
                            </p>

                            <p className="mb-2">
                                with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                recently with desktop publishing software like Aldus PageMaker including versions of
                                Lorem Ipsum.
                            </p>

                            <ul className="mb-0">
                                <li> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </li>
                                <li> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </li>
                                <li> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </li>
                                <li> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </li>
                                <li> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhoWeAre;
