import Image from "next/image";
import Link from "next/link";

function ContactInfo({src, heading, text, refernce}) {
    return (
        <div className="border px-3 py-2 rounded-3 mb-3 mb-md-0">
            <Link href={`${refernce}:${text}`} className="d-flex align-items-center justify-content-between text-decoration-none">
                <div className="contact-info d-flex align-items-center gap-2">
                    <Image src={src} alt={src} className="img-fluid" height={50} width={50}/>
                    <p className="fw-semibold m-0 text-darkLower">{heading}</p>
                </div>
                <p className="m-0 fs-5 text-lighter">{text}</p>
            </Link>
        </div>
    )
}

export default ContactInfo;
