import React from "react";

const ErrorPage = () => {
  return (
    <div class="flex justify-center items-center min-h-screen text-center ">
      <div>
        <h1 class="text-9xl font-extrabold text-gray-300">404</h1>
        <p class="text-2xl md:text-3xl font-light text-gray-600 mt-4">
          Oops! Page not found.
        </p>
        <p class="mt-2 text-gray-500">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          class="mt-6 inline-block px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
