"use server";

import { CREATE_USER_MUTATION } from "./gqlQueries";
import { SignUpformSchema } from "./SignUpFormSchema";
import { SignUpFormState } from "@/types/formState";
import { fetchGraphQL } from "./fetchGraphQL";
import { print } from "graphql";

export const signUp = async (
  state: SignUpFormState,
  formData: FormData
): Promise<SignUpFormState> => {
  const rawValues = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const parsed = SignUpformSchema.safeParse(rawValues);
  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      data: {
        name: String(rawValues.name ?? ""),
        email: String(rawValues.email ?? ""),
        password: String(rawValues.password ?? ""),
      },
      error: {
        name: fieldErrors.name,
        email: fieldErrors.email ?? ["Email is required"],
        password: fieldErrors.password,
      },
      message: "Please correct the highlighted fields",
    };
  }

  try {
    await fetchGraphQL(print(CREATE_USER_MUTATION), {
      input: { ...parsed.data },
    });

    return {
      data: parsed.data,
      error: {
        email: [],
      },
      message: "Account created successfully!",
    };
  } catch (err) {
    console.error(err);
    return {
      data: parsed.data,
      error: {
        email: ["An unexpected error occurred. Try again later."],
      },
      message: "Signup failed",
    };
  }
};
