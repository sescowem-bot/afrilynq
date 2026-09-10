import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'AfriLynq | B2B Agricultural Trade',description:'Structured B2B sourcing for African agricultural products.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
