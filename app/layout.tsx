import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Toaster} from '@/components/ui/toaster';
import {ThemeProvider} from "@/components/providers/ThemeProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Or Hasson - Next.js with shadcn-ui",
    description: "Admin dashboard",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem={true} storageKey='dashboard-theme'>
            {children}
            <Toaster/>
        </ThemeProvider>
        </body>
        </html>
    );
}
