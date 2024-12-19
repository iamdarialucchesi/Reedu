"use client";
import AvatarSelectionBoxBtn from "@/app/dashboard/avatar/components/AvatarSelectionBoxBtn";
import AvatarColorSelectionBtn from "@/app/dashboard/avatar/components/AvatarColorSelectionBtn";

export default function AvatarEditControls({
                                               avatarData,
                                               selectedAvatarItemsIndexes,
                                               setSelectedAvatarItemsIndexes,
                                               activeMainCategory,
    setActiveMainCategory
                                           }) {

    return (
        <section className="border border-greyLow rounded-2">
            <div className="border-bottom border-greyLow px-3 py-3">
                <h6 className="fw-bold text-darkLow mb-4">CREATE YOUR AVATAR</h6>

                <div className="create-avatar-selection-btns">
                    {
                        Object.keys(avatarData).map((dataItem, index) => (
                                <AvatarSelectionBoxBtn key={index}
                                                       btnImgSrc={avatarData[dataItem].imgSrc}
                                                       btnName={dataItem}
                                                       // isActive={selectedAvatarItemsIndexes.categoryIndex === dataItem}
                                                       isActive={activeMainCategory === dataItem}
                                                       setSelectedAvatarItemsIndexes={setSelectedAvatarItemsIndexes}
                                                       categoryName={"main-category"}
                                                       setActiveMainCategory={setActiveMainCategory}
                                                       activeMainCategory={activeMainCategory}
                                />
                            )
                        )
                    }
                </div>
            </div>
            <div className="px-3 py-3">
                <h6 className="fw-bold text-darkLow mb-3 text-uppercase">{activeMainCategory} STYLE</h6>

                <div className="create-avatar-selection-btns">
                    {
                        avatarData[activeMainCategory].styles.map((style, index) => (
                            <AvatarSelectionBoxBtn key={index}
                                                   btnImgSrc={style.imgSrc}
                                                   btnName={style.name}
                                                   isActive={index === selectedAvatarItemsIndexes[activeMainCategory].styleIndex}
                                                   setSelectedAvatarItemsIndexes={setSelectedAvatarItemsIndexes}
                                                   activeMainCategory={activeMainCategory}
                                                   index={index}
                                                   categoryName={"style-category"}
                            />
                        ))
                    }
                </div>


                <h6 className="fw-bold text-darkLow mb-3 mt-5 text-uppercase">{activeMainCategory} COLOR</h6>

                <div className="create-avatar-color-btns">
                    {
                        avatarData[activeMainCategory].styles[selectedAvatarItemsIndexes[activeMainCategory].styleIndex].colors.map((color, i) => {
                           return (
                                <AvatarColorSelectionBtn key={i}
                                                         isActive={selectedAvatarItemsIndexes[activeMainCategory].colorIndex === i}
                                                         color={color}
                                                         setSelectedAvatarItemsIndexes={setSelectedAvatarItemsIndexes}
                                                         index={i}
                                                         activeMainCategory={activeMainCategory}
                                />
                            )
                        })
                    }
                </div>

            </div>
        </section>
    )
}
