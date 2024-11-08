import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/Navbar";
import {FaHome} from "react-icons/fa"

export default function Home() {
  
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="w-full">
        <FloatingNav navItems={[
          {name:"Home",link:"/",icon:<FaHome/>}
        ]}/>
        <Hero/>
        <Grid/>
      </div>
    </main>
  );
}
