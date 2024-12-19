export default function AvatarColorSelectionBtn({color, isActive, setSelectedAvatarItemsIndexes, index, activeMainCategory}) {
    const handleColorSelection = () => {
        // setSelectedAvatarItemsIndexes((prevState) => ({...prevState, colorIndex: index}))
        setSelectedAvatarItemsIndexes((prevObj) => {
            return {...prevObj, [activeMainCategory]: { ...prevObj[activeMainCategory], colorIndex: index
                }
            }
        })
    }

    return (<button onClick={handleColorSelection}
        className={`create-avatar-color-btn rounded-circle ${isActive ? "border border-5 border-lightest" : "border-0"}`}
        style={{backgroundColor: color}}>
    </button>)
}