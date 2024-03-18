import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trabajo con appi",
  description: "Tarea :)",
};

export default function RootLayout({ children,users, }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
           {children}
       </AppRouterCacheProvider>
      </body>
    </html>
  );
}
