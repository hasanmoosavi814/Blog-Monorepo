"use client";

import { useActionState, useEffect } from "react";
import type { SignUpFormState } from "@/types/formState";
import { useRouter } from "next/navigation";
import { signUp } from "@/lib/authAction";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { toast } from "sonner";

import SubmitButton from "../elements/SubmitButton";

const SignUpForm = () => {
  // ============== Action ================
  const [state, action] = useActionState<SignUpFormState, FormData>(
    signUp,
    undefined
  );

  // ============== Router ================
  const router = useRouter();

  // ============== Effect ================
  useEffect(() => {
    if (!state) return;

    if (
      !state.error ||
      Object.keys(state.error).every(
        (key) => state.error?.[key as keyof typeof state.error]?.length === 0
      )
    ) {
      toast.success("Sign up Created Successfully!");
      router.push("/auth/signin");
    } else {
      if (state.message) toast.error(state.message);
      if (state.error.name?.[0]) toast.error(`Name: ${state.error.name[0]}`);
      if (state.error.email?.[0]) toast.error(`Email: ${state.error.email[0]}`);
      if (state.error.password?.[0])
        toast.error(`Password: ${state.error.password[0]}`);
    }
  }, [state, router]);

  // ============== Rendering ================
  return (
    <form className="space-y-5" action={action}>
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" type="text" name="name" placeholder="Jane Doe" />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
        />
      </div>

      <SubmitButton>Sign Up</SubmitButton>
    </form>
  );
};

export default SignUpForm;
