import { Link } from "react-router";
import { Dumbbell } from "lucide-react";
import { Button } from "../ui/Button";

const Navbar = () => {
  const user = false; // Temporary
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-black/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-foreground">
          <Dumbbell className="w-6 h-6 text-accent" />
          <span className="font-semibold text-lg">Gym AI</span>
        </Link>

        <nav>
          {user ? (
            <>
              <Link to="/profile">
                <Button size="sm" variant="ghost">
                  My Plan
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/auth/sign-in">
                <Button size="sm" variant="ghost">
                  Sign In
                </Button>
              </Link>
              <Link to="/auth/sign-up">
                <Button size="sm">Sign Up</Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
