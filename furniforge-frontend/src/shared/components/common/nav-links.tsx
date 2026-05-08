import { NavLink as RouterNavLink } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "../../utils/cn";

const NavLink = forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<typeof RouterNavLink> & {
    activeClassName?: string;
  }
>(({ className, activeClassName, ...props }, ref) => {
  return (
    <RouterNavLink
      ref={ref}
      {...props}
      className={({ isActive }) =>
        cn(className, isActive && activeClassName)
      }
    />
  );
});

NavLink.displayName = "NavLink";

export default NavLink;