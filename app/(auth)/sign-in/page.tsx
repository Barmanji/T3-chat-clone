"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { RiGoogleFill } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";

const SignInPage = () => {
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);

  const handleSignIn = (provider: "github" | "google") => {
    setLoadingProvider(provider);
    authClient.signIn.social({
      provider,
      callbackURL: "/",
    });
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-background px-4">
      <div className="w-full max-w-md space-y-10">
        {/* Logo & Header */}
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-full blur-xl" />
            <Image
              src="/logo.svg"
              alt="T3 Chat"
              width={80}
              height={80}
              className="relative"
            />
          </div>
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Welcome to T3 Chat
            </h1>
            <p className="text-muted-foreground">
              Sign in to start chatting with AI models
            </p>
          </div>
        </div>

        {/* Sign In Buttons */}
        <div className="space-y-3">
          <Button
            variant="outline"
            className="w-full h-12 text-base font-medium cursor-pointer hover:bg-accent/50 transition-colors"
            onClick={() => handleSignIn("github")}
            disabled={loadingProvider !== null}
          >
            {loadingProvider === "github" ? (
              <Spinner className="mr-3" />
            ) : (
              <Image
                src="/github.svg"
                alt="GitHub"
                width={22}
                height={22}
                className="mr-3"
              />
            )}
            Continue with GitHub
          </Button>

          <Button
            variant="outline"
            className="w-full h-12 text-base font-medium cursor-pointer hover:bg-accent/50 transition-colors"
            onClick={() => handleSignIn("google")}
            disabled={loadingProvider !== null}
          >
            {loadingProvider === "google" ? (
              <Spinner className="mr-3" />
            ) : (
              <RiGoogleFill style={{ width: 22, height: 22 }} className="mr-3" />
            )}
            Continue with Google
          </Button>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground">
          By signing in, you agree to our{" "}
          <Link href="/legal" className="underline hover:text-foreground cursor-pointer">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/legal" className="underline hover:text-foreground cursor-pointer">
            Privacy Policy
          </Link>.
        </p>
      </div>
    </section>
  );
};

export default SignInPage;
