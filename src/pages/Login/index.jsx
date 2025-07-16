import { Link } from "react-router";
import logo from "../../assets/logo.png";
export default function Login() {
  return (
    <div className="gradient-bg h-dvh flex items-center justify-center">
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl w-full max-w-md flex flex-col gap-4">
        <div className="text-center">
          <div className="flex justify-center items-center h-15 mb-6">
            <img src={logo} alt={logo} className="w-24 h-24" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mt-2">
            Welcome Back!
          </h1>
          <p className="text-gray-600 mt-2">Login to continue to Cinemaflow.</p>
        </div>
        <form action="" method="POST">
          <div className="mb-6">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              for="email"
            >
              Email
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                className="focus:ring-yellow-500 focus:border-yellow-500 block w-full  sm:text-sm border-gray-300 rounded-lg py-3 px-4"
                type="email"
                name="username"
                id="id_email"
                required
                placeholder="email"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              for="password"
            >
              Password
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                className="focus:ring-yellow-500 focus:border-yellow-500 block w-full  sm:text-sm border-gray-300 rounded-lg py-3 px-4"
                type="password"
                name="password"
                id="id_password"
                required
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <Link
              to={"/"}
              className="custom-btn inline-block mx-auto w-full text-center"
              type="submit"
            >
              Login
            </Link>
          </div>
        </form>
        <p>
          Don't have an account{" "}
          <Link to="/register" className="text-blue-500 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
