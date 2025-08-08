import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <header className="w-full border-b shadow-sm px-4 py-2 background-primary">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <img src="/src/assets/images/Prancheta 4.png" alt="Logo" className="h-18" />
        </a>

        {/* Links - desktop */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex space-x-6 gap-12">
            <NavigationMenuItem>
              <a href="/" className="text-lg text-secondary hover-text-white transition-colors">
                Início
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a
                href="/sobre"
                className="text-lg text-secondary hover-text-white transition-colors"
              >
                Sobre
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a
                href="/projetos"
                className="text-lg text-secondary hover-text-white transition-colors"
              >
                Projetos
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a
                href="/membros"
                className="text-lg text-secondary hover-text-white transition-colors"
              >
                Membros
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Menu mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-secondary" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="background-primary border-none [&>button]:text-[#c9a923] "
          >
            <nav className="space-y-4 flex flex-col items-center mt-20 gap-2">
              <a
                href="/"
                className="block text-lg font-medium text-secondary border-2 border-solid border-[#c9a923] px-5 py-2 rounded-md w-50 text-center"
              >
                Início
              </a>
              <a
                href="/sobre"
                className="block text-lg font-medium text-secondary border-2 border-solid border-[#c9a923] px-5 py-2 rounded-md w-50 text-center"
              >
                Sobre
              </a>
              <a
                href="/projetos"
                className="block text-lg font-medium text-secondary border-2 border-solid border-[#c9a923] px-5 py-2 rounded-md w-50 text-center"
              >
                Projetos
              </a>
              <a
                href="/contato"
                className="block text-lg font-medium text-secondary border-2 border-solid border-[#c9a923] px-5 py-2 rounded-md w-50 text-center"
              >
                Contato
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
