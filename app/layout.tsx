// @ts-expect-error CSS side-effect imports aren't declared in this project's TypeScript setup.
import "@/app/ui/global.css";
import { inter, lusitana } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>{children}</body>
    </html>
  );
}
