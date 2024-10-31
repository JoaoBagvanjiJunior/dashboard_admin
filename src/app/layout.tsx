
import "./globals.css";
import Providers from "@/components/Providers";
import AppBar from "@/components/AppBar";

interface Props {
  children: React.ReactNode;
}


export default function RootLayout(props: Props){

  return (
    <html lang="en">
      <body>
        <Providers>
          <AppBar />
          {props.children}
        </Providers>
      </body>
    </html>
  );
}
