import dynamic from "next/dynamic";
import Head from "next/head";
const Footer = dynamic(() => import("./Footer"), { ssr: false });
const Enquirestrip = dynamic(() => import("./Enquirestrip"), { ssr: false });
const Navbar = dynamic(() => import("./Navigation"), { ssr: false });

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Nyayo View Suites</title>
      </Head>
      <div>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          {/* <Enquirestrip/> */}
          <Footer />
        </footer>
      </div>
    </>
  );
}
