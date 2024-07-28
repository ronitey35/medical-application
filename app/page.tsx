import Appoinment from "@/components/Appoinment";
import Doctors from "@/components/Doctors";
import Hero from "@/components/Hero";
import KnowUs from "@/components/KnowUs";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-1 max-w-screen-xl mx-auto ">
       <Navbar/>
       <main className="flex flex-col min-h-screen ">
       <Hero/>
       <Appoinment/>
       </main>
       <KnowUs/>
       <Doctors/>
       
    </div>
  );
}
