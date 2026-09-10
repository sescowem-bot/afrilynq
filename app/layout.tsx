import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'AfriLynq | B2B Agricultural Trade',description:'A structured marketplace for sourcing agricultural products from verified African suppliers.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
