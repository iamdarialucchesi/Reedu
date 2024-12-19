import Image from "next/image";
import InnerBodyHeading from "@/app/dashboard/components/InnerBodyHeading";
import InnerBodyText from "@/app/dashboard/components/InnerBodyText";

import glassesBoy from "@/public/images/Loop5-2.gif";
import hatBoy from "@/public/images/Loop6-1.gif";

export default function IntroInnerBody({children}) {
    return (
        <div className="p-3 position-relative">
            <InnerBodyHeading>Introduction</InnerBodyHeading>
            <div
                className="position-relative mt-3 flex-1 border p-3 rounded-2 custom-height-inner-body overflow-hidden">
                <InnerBodyText>
                    {children}
                </InnerBodyText>
            </div>

            <Image src={glassesBoy} alt="glasses-kid" width={60} height={100}
                   className="position-absolute inner-body-text-gif-position-1" unoptimized={true}/>
            <Image src={hatBoy} alt="glasses-kid" width={70} height={120}
                   className="position-absolute inner-body-text-gif-position-2" unoptimized={true}/>
        </div>
    )
}
