import { Metadata } from "next"; 


export const metadata: Metadata = {
  title: "Home- aula de nextjs",
  description: "aprendendo nextjs",
  openGraph: {
    title: "Aprendendo com o cara do yt",
    description:"teste da descrição pelo whatsapp",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
};

export default function Home(){
  return(
    <div>
    <h1>Hello World</h1>
    </div>
  );
}