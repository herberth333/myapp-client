import "./globals.css";
import { Header } from "@/components/header"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header></Header>
        
        {/*AS PAGES SÃO "RODADAS" DENTRO DESSE CHILDREN DO LAYOUT.TSX PORQUE EM CIMA DESSE COMENTARIO VC PODE PADRONIZAR
        UM LAYOUT PARA TODAS AS TELAS DA APLICAÇÃO
        */
        }
        {children}
      </body>
    </html>
  );
}
