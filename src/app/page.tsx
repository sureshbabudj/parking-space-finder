import Link from "next/link";
import { Button } from "@/components/ui/button";

import { validateAuth } from "@/lib/auth";
import Logout from "./auth/[slug]/components/logout";

export default async function Home() {
  const { session } = await validateAuth();

  return (
    <div>
      {session?.userId ? (
        <>
          <Link href="dashboard" passHref>
            <Button variant="ghost">Dashboard</Button>
          </Link>
          <Logout />
        </>
      ) : (
        <>
          <Link href="auth/signin" passHref>
            <Button variant="ghost">Login</Button>
          </Link>

          <Link href="/auth/signup" passHref>
            <Button>Sign Up</Button>
          </Link>
        </>
      )}
    </div>
  );
}
