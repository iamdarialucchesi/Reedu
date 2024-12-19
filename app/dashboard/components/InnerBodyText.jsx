export default function InnerBodyText({children}) {
    return (
        <div className="h-100 scrollbar-hidden overflow-y-scroll">
            <div className="text-lighter fs-16 fw-normal">
                {children}
            </div>
        </div>
    )
}
