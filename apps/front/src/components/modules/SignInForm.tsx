"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/authAction";
import { SignInFormState } from "@/types/formState";
import { toast } from "sonner";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import SubmitButton from "../elements/SubmitButton";

const SignInForm = () => {
  const [state, action] = useActionState<SignInFormState, FormData>(
    signIn,
    undefined
  );
  const router = useRouter();

  useEffect(() => {
    if (!state) return;
    if (
      !state.error ||
      Object.keys(state.error).every(
        (key) => state.error?.[key as keyof typeof state.error]?.length === 0
      )
    ) {
      toast.success("Welcome back!");
      router.push("/");
    } else {
      if (state.message) toast.error(state.message);
      if (state.error.email?.[0]) toast.error(`Email: ${state.error.email[0]}`);
      if (state.error.password?.[0])
        toast.error(`Password: ${state.error.password[0]}`);
    }
  }, [state, router]);

  return (
    <form className="space-y-5" action={action}>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          required
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          required
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          autoComplete="current-password"
        />
      </div>

      <SubmitButton>Sign In</SubmitButton>
    </form>
  );
};

export default SignInForm;
