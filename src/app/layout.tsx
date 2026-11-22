import type {Metadata} from 'next';
import {Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono} from 'next/font/google';
import './globals.css';
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['500', '600', '700', '800'],
    variable: '--font-display',
    display: 'swap',
});

const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-sans',
    display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-mono',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Novix® Studio — Digital Product & Web Engineering',
    description:
        'Independent digital design and web engineering studio crafting high-converting marketing platforms, design systems, and custom web applications.',
    openGraph: {
        title: 'Novix® Studio — Digital Product & Web Engineering',
        description:
            'Independent digital design and web engineering studio crafting high-converting marketing platforms, design systems, and custom web applications.',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Novix® Studio — Digital Product & Web Engineering',
        description:
            'Independent digital design and web engineering studio crafting high-converting marketing platforms, design systems, and custom web applications.',
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`scroll-smooth ${plusJakarta.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
        >
        <body className="bg-[#0a0a0a] text-[#111113] antialiased selection:bg-[#ff3b30] selection:text-white">
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
