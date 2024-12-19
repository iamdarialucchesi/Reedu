import Image from "next/image";

export default function ModuleHead({src, children, onClick}) {
    return (
        <div
            className="mb-6 rounded-4 bg-secondary overflow-hidden border-bottom border-3 border-primary position-sticky top-0 start-0 z-5 cursor-pointer"
            onClick={onClick}>
            <div
                className="px-4 py-2 rounded-4 bg-secondary border border-bottom-0 border-primary d-flex gap-4">
                <Image src={src} alt={`image-${src}`} width={60} height={60}/>
                {children}
            </div>
        </div>
    )
}
