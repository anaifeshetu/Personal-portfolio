
import { useState } from "react";
import { useEffect } from "react";
// import { Button } from "../Component/Button";
import{ Menu, X} from "lucide-react";
const navLinks = [

   { href:"#about", label:"About"},
   { href:"#projects", label:"Projects"},

   { href:"#skills", label: "Skills" },
{ href:"#approach", label: "Approach" },];



export const Navbar = () => {
    const[isMobileMenuOpen, setIsMobileMenuOpen]= useState(false);
 const[isscrolled, setIsScrolled]= useState(false);
    
 useEffect(()=>{
const handleScroll = () => {
setIsScrolled(window.scrollY > 50);
};
window.addEventListener("scroll", handleScroll);

return () => window.removeEventListener("scroll", handleScroll);
}, []);
 
 
 return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500
    ${ isscrolled ? "glass-strong py-3" : "bg-transparent py-5" } z-50`}
    >
        <nav className='container mx-auto px-6 flex item-center justify-between'>
            <a href="#" className='text-xl font-bold tracking-light hover:text-primary'>
                AE
                <span className='text-primary'>.</span>
            </a>
            {/*desktop nav*/}
 <div className="hidden md:flex item-center gap-1">
    <div className="glass rounded-full px-3 py-1 flex item-center gap-1">
        {navLinks.map((link=>(
            <a href={link.href} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-ful hover:bg-surface">
            {link.label}
        </a>)))}
 </div>
 </div>
 {/* CTA Button*/}
 <div className="hidden md:block">
    <button Size="sm" className="relative overflow-hidden rounded-full flex item-center justify-center gap-5 font-medium focus:outline-none focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25  p-3">
        <div className="relative flex item-center justify-center gap-5">
            Contact Me
        </div>
    </button>
 </div>
 {/*mobile menu button*/}

 <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setIsMobileMenuOpen ((prev) => !prev)}>
    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
 </button>
        </nav>
        {/* mobile menu */}
        
   {isMobileMenuOpen && (
    <div className="md:hidden glass-strong animate-fade-in">
<div className=" container mx-auto px-6 py-6 flex flex-col gap-4">
    {navLinks.map((link=>(
            <a href={link.href} className="text-lg text-muted-foreground hover:text-foreground py-2 ">
            {link.label}
        </a>)))}

            <Link 
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary/90"
            >
              Contact Me
            </Link>
        {/* <a href="#contacts">
        <button className=" flex item-center justify-center  font-medium focus:outline-none focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 ">
            Contact me
        </button></a> */}
</div>
      </div>
      )}
    </header>
  )
}

export default Navbar
