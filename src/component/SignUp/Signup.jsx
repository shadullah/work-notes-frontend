import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { useContext } from "react";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
// import { AuthContext } from "../../../providers/AuthProvider";
import signImg from "../../assets/signUp.gif";

const Signup = () => {
  //   const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();
  //   const { createUser, updateUserProfile } = useContext(AuthContext);
  //   const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    // createUser(data.email, data.password).then((result) => {
    //   const loggedUser = result.user;
    //   console.log(loggedUser);
    //   updateUserProfile(data.name)
    //     .then(() => {
    //       // create user entry in the database
    //       const userInfo = {
    //         name: data.name,
    //         email: data.email,
    //         role: data.role,
    //       };
    //       axiosPublic.post("/users", userInfo).then((res) => {
    //         if (res.data.insertedId) {
    //           console.log("user added to the database");
    //           reset();
    //           navigate("/");
    //         }
    //       });
    //     })
    //     .catch((error) => {
    //       if (error.code === "auth/email-already-in-use") {
    //         errors.email = "email already in use";
    //       } else {
    //         console.error(error);
    //       }
    //     });
    // });
  };

  return (
    <div className=" h-full w-full">
      <div className="block md:flex justify-center items-center">
        <div className="w-full md:w-1/2">
          <img src={signImg} className="mx-auto" alt="img" />
        </div>
        <div className="w-full md:w-1/2 bg-gray-800">
          <p className="ml-6 md:ml-16 mt-6 md:mt-12 text-3xl font-bold text-violet-600">
            Work Notes
          </p>
          <h1 className="text-3xl font-bold text-gray-100 mt-6 ml-6 md:ml-16">
            SIGN UP
          </h1>
          <p className="ml-6 md:ml-16 text-gray-100">
            Sign up To Enter a New World
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-6 md:px-16 py-8 md:py-8"
          >
            <div>
              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                  username
                </label>
                <input
                  className="appearance-none border-b-2 bg-gray-800 border-gray-500 w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline rounded-lg"
                  name="name"
                  placeholder="John Doe"
                  {...register("username", { required: true })}
                  type="text"
                />
                {errors.username && (
                  <span className="text-red-700">Name is required</span>
                )}
              </div>
              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                  Email
                </label>
                <input
                  className="appearance-none border-b-2 bg-gray-800 border-gray-500 w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline  rounded-lg"
                  placeholder="abc@gmail.com"
                  {...register("email", { required: true })}
                  name="email"
                  type="email"
                />
                {errors.email && (
                  <span className="text-red-700">Email is required</span>
                )}
                {errors.email && (
                  <span className="text-red-700">{errors.email}</span>
                )}
              </div>
              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                  password
                </label>
                <input
                  className="appearance-none border-b-2 bg-gray-800 border-gray-500 w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline rounded-lg"
                  placeholder=""
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  name="password"
                  type="password"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-700">Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-700">
                    Password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-700">
                    Password must be 1 lower case, 1 Uppercase and a special
                    character
                  </span>
                )}
              </div>
              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                  confirm password
                </label>
                <input
                  className="appearance-none border-b-2 bg-gray-800 border-gray-500 w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline rounded-lg"
                  placeholder=""
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  name="password"
                  type="password"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-700">Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-700">
                    Password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-700">
                    Password must be 1 lower case, 1 Uppercase and a special
                    character
                  </span>
                )}
              </div>
            </div>
            <div className="text-center mt-6">
              <input
                className="bg-violet-600 text-white w-full py-3 cursor-pointer rounded-lg font-bold"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="pb-12 text-white ml-16">
            Have account?{" "}
            <Link to="/login" className="underline">
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
