import Image from "next/image";
import {useRouter} from "next/navigation";
import {useModule} from "@/app/context/ModuleContext";
import congrats from "@/public/icons/congrats.svg";

export default function CongratsModal({text, setShowCongrats}) {
    const router = useRouter();
    const {count, setCount} = useModule();

    const {title, value} = text;

    const handleCongratsButton = () => {
        if (value === count) {
            setCount((v) => v + 1);
        }
        setShowCongrats(false);
        router.push('/dashboard');
    }

    return (
        <div className="modal fade border-0" data-bs-backdrop="static" data-bs-keyboard="false" id="congratsModal"
             tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered justify-content-center">
                <div className="modal-content px-2 py-3 w-75 bg-white custom-background-congrats-modal">
                    <div className="modal-header border-0 mx-auto pb-2 d-flex flex-column">
                        <Image src={congrats} alt="congrats Image" width={120} height={120} className="mb-5"/>
                    </div>
                    <div className="modal-body py-0">
                        <h3 className="text-darkLow fs-27 fw-bold mb-2 text-center mb-3">Congratulations!</h3>
                        <p className="text-secondaryHigh fw-bold fs-12 text-uppercase text-center mb-1"
                           style={{letterSpacing: "2px"}}>You have successfully
                            completed
                            the <br/>{title}</p>
                    </div>
                    <div className="modal-footer border-0 justify-content-center">
                        <div>
                            <button className="btn custom-btn-background text-white fw-bold px-4 py-2"
                                    data-bs-dismiss="modal" onClick={handleCongratsButton}>Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
