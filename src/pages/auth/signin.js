import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Siginin() {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className="sign-wrapper">
      {session ? (
        <div>
          <div>Signed in as {session.user.name}</div>
          <button onClick={() => router.push("/")}>Go to Home</button>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      ) : (
        <div>
          <div>Not signed in</div>
          <button onClick={() => signIn()}>Sign In</button>
        </div>
      )}
    </div>
  );
}