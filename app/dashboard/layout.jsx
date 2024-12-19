import localFont from "next/font/local";
import "@/styles/global.scss";

import BootstrapClient from "@/components/BootstrapClient";
import ClientLayout from "@/app/dashboard/components/ClientLayout";

const DinRoundPro = localFont({
    src: [
        {
            path: '../fonts/DINRoundPro-Light.woff',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../fonts/DINRoundPro.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/DINRoundPro-Medium.woff',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../fonts/DINRoundPro-Bold.woff',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../fonts/DINRoundPro-Black.woff',
            weight: '900',
            style: 'normal',
        },
    ],
})

export const metadata = {
    title: "ReEdu",
    description: "",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={DinRoundPro.className}>
        <div className="d-flex w-100">
            <ClientLayout>
                {children}
            </ClientLayout>
        </div>
        <BootstrapClient/>
        </body>
        </html>
    )
}
