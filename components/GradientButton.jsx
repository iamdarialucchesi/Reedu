import Link from "next/link";
import Image from "next/image";

function GradientButton({children, to, src, width, height, handleNext}) {

    if (to) {
        return <Link href={to} className="btn custom-btn-background text-white fw-bold px-4 py-2 w-100 d-flex justify-content-center align-items-center">
            {
                src && <Image src={src} alt={src} width={width} height={height} className="me-2"/>
            }
            {children}
        </Link>
    }

    if (handleNext) {
        return <button className="btn custom-btn-background text-white fw-bold px-4 py-2 w-100" onClick={handleNext}>
            {
                src && <Image src={src} alt={src} width={width} height={height}/>
            }
            {children}
        </button>
    }

    return (
        <button className="btn custom-btn-background text-white fw-bold px-4 py-2 w-100">
            {
                src && <Image src={src} alt={src} width={width} height={height}/>
            }
            {children}
        </button>
    )
}

export default GradientButton
