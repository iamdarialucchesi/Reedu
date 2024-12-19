export default function InnerBodyHeading({children}) {
    return (
        <div className="px-3 pt-2 pb-1 border rounded-3 bg-whiteLow">
            <h3 className="fw-bold fs-20 text-darkLow">{children}</h3>
        </div>
    )
}
