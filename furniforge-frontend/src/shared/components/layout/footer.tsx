import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl gradient-rose flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold font-display tracking-wide">
                <span className="tracking-[0.05em]">FURNI</span>Forge
              </span>
            </div>
            <p className="text-sm opacity-60 leading-relaxed font-body">
              Custom furniture design platform. From wardrobes to office desks, crafting dream interiors with precision.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold mb-5 font-body uppercase tracking-[0.2em] opacity-50">Company</h4>
            <div className="flex flex-col gap-3">
              <Link to="/about" className="text-sm opacity-60 hover:opacity-100 transition-opacity font-body">About Us</Link>
              <Link to="/our-work" className="text-sm opacity-60 hover:opacity-100 transition-opacity font-body">Our Work</Link>
              <Link to="/how-it-works" className="text-sm opacity-60 hover:opacity-100 transition-opacity font-body">How It Works</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold mb-5 font-body uppercase tracking-[0.2em] opacity-50">Services</h4>
            <div className="flex flex-col gap-3">
              <span className="text-sm opacity-60 font-body">Wardrobe</span>
              <span className="text-sm opacity-60 font-body">TV Unit</span>
              <span className="text-sm opacity-60 font-body">Office Desk</span>
              <span className="text-sm opacity-60 font-body">Sofa</span>
              <span className="text-sm opacity-60 font-body">Bed & More</span>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold mb-5 font-body uppercase tracking-[0.2em] opacity-50">Contact</h4>
            <div className="flex flex-col gap-3">
              <span className="text-sm opacity-60 font-body">hello@furniforge.in</span>
              <span className="text-sm opacity-60 font-body">+91 98765 43210</span>
              <span className="text-sm opacity-60 font-body">Mumbai, India</span>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-40 font-body">© 2026 FURNIForge. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-xs opacity-40 hover:opacity-70 cursor-pointer font-body transition-opacity">Privacy Policy</span>
            <span className="text-xs opacity-40 hover:opacity-70 cursor-pointer font-body transition-opacity">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
