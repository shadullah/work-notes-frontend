// import { useContext } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProvider";
// import toast from "react-hot-toast";
import loginImg from "../../assets/man-hands-hold-touch-tablet-pc-with-login-box-travel-concept.jpg";

const Login = () => {
  //   const { signIn } = useContext(AuthContext);
  //   const navigate = useNavigate();
  //   const location = useLocation();

  //   const from = location.state?.form?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // signIn(email, password).then((res) => {
    //   toast("Hello World");

    //   const user = res.user;
    //   localStorage.setItem("email", JSON.stringify(email));
    //   console.log(user);
    //   navigate(from, { replace: true });
    // });
  };
  return (
    <div>
      <div className="w-full h-screen block md:flex">
        <div className="w-full md:w-1/2 h-48 md:h-full">
          <img src={loginImg} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-sm text-nowrap md:text-xl font-bold ml-6 md:ml-16 text-violet-600 my-6 md:my-12">
            Welcom To Work Notes
          </h1>

          <h1 className="text-2xl md:text-3xl text-gray-700 font-bold ml-6 md:ml-16 mt-6 md:mt-12">
            LOGIN
          </h1>
          <p className="text-xs md:text-sm text-nowrap text-gray-700 font-bold ml-6 md:ml-16">
            Work Notes wants you to be Login
          </p>

          <form onSubmit={handleLogin} className="mx-4 md:mx-14 py-6 md:py-16">
            <div>
              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-violet-600 text-xs font-bold mb-2">
                  username
                </label>
                <input
                  className="appearance-none border-b-2 border-violet-500 w-full py-2 px-3 text-gray-700 "
                  name="username"
                  type="text"
                />
              </div>
              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-violet-500 text-xs font-bold mb-2">
                  password
                </label>
                <input
                  className="appearance-none border-b-2 border-violet-500 w-full py-2 px-3 text-gray-700"
                  name="password"
                  type="password"
                />
              </div>
            </div>
            <div className="text-center mt-6">
              <input
                className="bg-violet-400 w-full py-3 cursor-pointer rounded-lg font-bold"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className="ml-16">
            New Here?{" "}
            <Link to="/signup" className="underline">
              Signup here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
