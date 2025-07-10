export type SignUpFormState =
  | {
      data: {
        name?: string;
        email?: string;
        password?: string;
      };
      error: {
        name?: string[];
        email: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;
