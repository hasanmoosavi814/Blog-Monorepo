import { BACKEND_URL } from "@/utils/constant";

const GoogleSignInButton = () => {
  return (
    <a
      href={`${BACKEND_URL}/auth/google/login`}
      className="mt-6 w-full inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50 py-2 px-4 rounded-md shadow-sm transition duration-150"
    >
      <svg
        className="w-5 h-5"
        viewBox="0 0 533.5 544.3"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M533.5 278.4c0-17.4-1.5-34-4.3-50.2H272v95.1h146.9c-6.3 33.7-25.3 62.2-53.7 81.3v67h86.7c50.8-46.9 81.6-116 81.6-193.2z"
          fill="#4285f4"
        />
        <path
          d="M272 544.3c72.9 0 134-24.1 178.7-65.2l-86.7-67c-24.1 16.1-54.9 25.5-92 25.5-70.7 0-130.6-47.7-152-111.6h-89v70.3C105.8 481.2 182.5 544.3 272 544.3z"
          fill="#34a853"
        />
        <path
          d="M120 325.9c-10.2-30.2-10.2-62.8 0-93l-89-70.3c-39.5 78.1-39.5 170.1 0 248.2l89-70.3z"
          fill="#fbbc04"
        />
        <path
          d="M272 107.7c39.6-.6 77.7 13.6 106.7 39.8l80-80C400.1 22.4 336.8-1.6 272 0 182.5 0 105.8 63.1 71 157.4l89 70.3c21.4-63.9 81.3-111.6 152-120z"
          fill="#ea4335"
        />
      </svg>
      Sign in with Google
    </a>
  );
};

export default GoogleSignInButton;
