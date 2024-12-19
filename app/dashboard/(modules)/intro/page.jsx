"use client";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {useModule} from "@/app/context/ModuleContext";
import BottomButtons from "@/app/dashboard/components/BottomButtons";
import TitleNameHeader from "@/app/dashboard/components/TitleNameHeader";
import IntroInnerBody from "@/app/dashboard/components/IntroInnerBody";

export default function IntroPage() {
    const router = useRouter();
    const {moduleContext} = useModule();

    useEffect(() => {
        if (!moduleContext || !moduleContext.moduleIntro) {
            router.push('/dashboard');
        }
    }, [moduleContext, router]);

    if (!moduleContext || !moduleContext.moduleIntro) {
        return null;
    }

    // console.log(moduleContext.moduleIntro);

    function handleBackNavigate() {
        router.back();
    }

    return (
        <div className="custom-intro-page-height d-flex flex-column justify-content-between overflow-hidden">
            <div className="border-bottom">
                <TitleNameHeader title={moduleContext.moduleCongrats.text} backBtn={true} onClick={handleBackNavigate}/>
            </div>
            <div className="flex-1">
                <IntroInnerBody>
                    <p>{moduleContext.moduleIntro?.text}</p>
                    {moduleContext.moduleIntro?.list &&
                        <ol className="ps-3">
                            {moduleContext.moduleIntro?.list.map((item, index) => (
                                <li key={index} className="mb-2">{item}</li>
                            ))}
                        </ol>
                    }
                    <p>{moduleContext.moduleIntro?.text1}</p>
                    <p>{moduleContext.moduleIntro?.text2}</p>
                    {moduleContext.moduleIntro?.list1 &&
                        <ol className="ps-3">
                            {moduleContext.moduleIntro?.list1.map((item, index) => (
                                <li key={index} className="mb-2">{item}</li>
                            ))}
                        </ol>
                    }
                </IntroInnerBody>
            </div>
            <div className="pb-3">
                <BottomButtons to="/dashboard/steps" onClick={handleBackNavigate}/>
            </div>
        </div>
    )
}
