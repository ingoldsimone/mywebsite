import Link from "next/link";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <header className="border-b border-[var(--border)]">
      <Container>
        <nav className="flex items-center justify-between py-5">

          {/* Logo / Name */}
          <Link href="/" className="font-semibold text-lg">
            Simon Goldin
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link href="/about">About</Link>
            <Link href="/#projects">Projects</Link>
            <Link href="/#contact">Contact</Link>
            <ThemeToggle />
          </div>

          {/* Mobile navigation */}
          <MobileNav />

        </nav>
      </Container>
    </header>
  );
}