import GoogleSignInButton from "../modules/GoogleSignInBtn";
import SignInForm from "@/components/modules/SignInForm";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Side - Illustration */}
      <div className="bg-gradient-to-br from-indigo-100 to-sky-200 flex items-center justify-center p-8">
        <h1 className="text-4xl font-extrabold text-gray-700 text-center leading-snug animate-fade-in-up">
          Welcome back <br /> to your learning journey 🚀
        </h1>
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-col justify-center px-8 py-12">
        <div className="max-w-md w-full mx-auto space-y-6 animate-fade-in-up">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Sign In</h2>
            <p className="text-sm text-gray-500 mt-1">
              Don’t have an account?{" "}
              <Link
                href="/auth/signup"
                className="text-blue-600 hover:underline"
              >
                Create one
              </Link>
            </p>
          </div>

          <SignInForm />

          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                or continue with
              </span>
            </div>
          </div>

          <GoogleSignInButton />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
