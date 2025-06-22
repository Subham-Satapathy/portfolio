import { AppleHelloEnglishEffect } from "@/app/components/ui/apple-hello-effect";
import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/app/components/ui/tubelight-navbar"

const AppleHelloEffectDemo = () => {
  return (
    <div className="flex w-full h-screen flex-col justify-center items-center gap-16">
      <AppleHelloEnglishEffect speed={1.1} />
    </div>
  );
};

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'About', url: '#', icon: User },
    { name: 'Projects', url: '#', icon: Briefcase },
    { name: 'Resume', url: '#', icon: FileText }
  ]

  return <NavBar items={navItems} />
}

export { AppleHelloEffectDemo }; 