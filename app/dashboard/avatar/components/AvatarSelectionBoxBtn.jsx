import Image from "next/image";

export default function AvatarSelectionBoxBtn({
                                                  btnName,
                                                  btnImgSrc,
                                                  isActive,
                                                  setSelectedAvatarItemsIndexes,
                                                  categoryName,
                                                  index,
                                                  setActiveMainCategory,
                                                  activeMainCategory
                                              }) {

    const handleMainCategorySelection = () => {
        setActiveMainCategory(btnName)
    }
    const handleMainCategoryStyleSelection = () => {
        setSelectedAvatarItemsIndexes((prevObj) => ({
            ...prevObj, [activeMainCategory]: {...prevObj[activeMainCategory], styleIndex: index}
        }))
    }

    return (
        <button onClick={categoryName === "main-category" ? handleMainCategorySelection : handleMainCategoryStyleSelection} className="create-avatar-selection-btn p-0 border-0 bg-transparent">
            <div
                className={`create-avatar-selection-btn-box border-0 ${isActive ? "bg-square-red-white-gradient" : "bg-grayishWhite"} rounded-3 w-100`}>
                <div
                    className="bg-white rounded-4 h-100 d-flex align-items-center justify-content-center p-1">
                    <Image className="" width={55} height={55} src={btnImgSrc} alt={"hats"}/>
                </div>
            </div>
            <div className="fw-bold text-darkLow text-center mt-2">{btnName}</div>
        </button>
    )
}
