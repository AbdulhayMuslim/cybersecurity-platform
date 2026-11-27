import { Inter, JetBrains_Mono, Oxanium } from "next/font/google";
import "./globals.css";
const inter=Inter({variable:"--font-inter",subsets:["latin"]}); const oxanium=Oxanium({variable:"--font-oxanium",subsets:["latin"]}); const jetbrainsMono=JetBrains_Mono({variable:"--font-jetbrains-mono",subsets:["latin"]});
const siteIcon={url:"/site icon.webp",type:"image/webp",sizes:"800x318"};
export const metadata={title:"AM Security | Cybersecurity Awareness Training",description:"Build better security habits with practical, engaging cybersecurity awareness training.",icons:{icon:siteIcon,shortcut:siteIcon,apple:siteIcon}};
const themeInit = `(function(){try{var stored=localStorage.getItem("theme");var prefersDark=window.matchMedia("(prefers-color-scheme: dark)").matches;var theme=stored||(prefersDark?"dark":"light");document.documentElement.classList.remove("light","dark");document.documentElement.classList.add(theme);}catch(e){document.documentElement.classList.add("dark");}})()`;
export default function RootLayout({children}){return <html lang="en" className={`${inter.variable} ${oxanium.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning><body><script dangerouslySetInnerHTML={{__html:themeInit}} />{children}</body></html>}
