import Image from "next/image";
import _Hero from "./_components/Hero";
import _Header from "./_components/Header";
import _Footer from "./_components/Footer";



export default function Home() {
  return (
   <div>
     {/* Header */}
     <_Header />
     {/* Hero */}
     <_Hero />
     {/* Footer */}
   
   </div>
  );
}
