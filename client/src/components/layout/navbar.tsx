import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Star } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Modules", href: "/modules" },
    { name: "Analytics", href: "/analytics" },
    { name: "AI Features", href: "/ai-features" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="bg-white professional-shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <Star className="text-blue-600 text-2xl mr-3 group-hover:scale-110 transition-transform" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold stellar-deep-blue">StellarOne Health</span>
                <span className="text-xs stellar-gray font-medium">AI-Powered RCM Platform</span>
              </div>
            </Link>
            <div className="hidden md:block ml-12">
              <div className="flex items-baseline space-x-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? "stellar-deep-blue bg-gradient-to-r from-blue-50 to-purple-50 professional-shadow"
                        : "stellar-gray hover:stellar-primary hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="gradient-professional text-white hover:opacity-90 transition-opacity px-6 py-2 font-medium">
              Request Demo
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? "stellar-deep-blue bg-gradient-to-r from-blue-50 to-purple-50"
                          : "stellar-gray hover:stellar-primary hover:bg-gray-50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
