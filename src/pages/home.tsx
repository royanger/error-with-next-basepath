import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => (
  <>

    <p>Home page</p>
    <SignedIn>
      <UserButton />
    </SignedIn>
    <SignedOut>
      <SignInButton />
    </SignedOut>


  </>
);

export default Home;
