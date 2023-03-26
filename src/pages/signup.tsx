import axios from "axios";
import { useRouter } from "next/router";
import * as React from "react";
import toast from "react-hot-toast";

export interface ISignUpProps {}

export default function SignUp(props: ISignUpProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const router = useRouter();
  const onClick = async (e: any) => {
    if (!isLoading && email && password) {
      e.preventDefault();
      setIsLoading(true);
      try {
        const res = await axios.post("http://localhost:3000/v1/players", {
          email,
          password,
          password_confirmation: password,
        });
        console.log(res.data);
        router.push("/");
        toast.success("Account is created successfully", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      } catch (e: any) {
        switch (e.response.status) {
          case 400:
            toast.error("Try again later", {
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
              },
            });
            break;
          case 409:
            toast.error("Email already exists", {
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
              },
            });
            break;
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  const setEmailValue = (e: any) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const setPasswordValue = (e: any) => {
    setPassword(e.target.value);
  };
  return (
    <div className="flex justify-center w-full items-center">
      <div className="flex flex-col w-full max-w-7xl mt-10 items-center">
        <h1 className="text-center text-white text-4xl font-bold">
          Register your account
        </h1>
        <p className="px-4 max-w-4xl text-center text-sm text-gray-400 py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          deleniti nisi magnam dignissimos consequatur eligendi ipsam veniam
          voluptate nobis sint expedita ratione at, suscipit rem qui aut sed.
          Fugit, itaque.
        </p>
        <div className="py-10 px-4 w-full flex justify-center">
          <form className="flex flex-col gap-4 w-full max-w-[600px]">
            <div>
              <input
                className="py-4 px-6 w-full bg-zinc-800 rounded text-zinc-300 outline-none focus:shadow-xl transition-all ease-in-out"
                placeholder="Email"
                type="email"
                name="email"
                onKeyUp={setEmailValue}
              ></input>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                className="py-4 px-6 flex-1 bg-zinc-800 rounded text-zinc-300 outline-none focus:shadow-xl transition-all ease-in-out"
                placeholder="Password"
                onKeyUp={setPasswordValue}
                type="password"
                name="password"
              ></input>
              <input
                className="py-4 px-6 flex-1 bg-zinc-800 rounded text-zinc-300 outline-none focus:shadow-xl transition-all ease-in-out"
                placeholder="Confirm Password"
                type="password"
                name="confirmPassword"
              ></input>
            </div>
            <button
              className="w-full bg-purple-600 py-4 mt-10 px-4 rounded-md text-white font-semibold text-lg transition-all ease-out hover:-translate-y-1 hover:shadow-lg disabled:opacity-20"
              onClick={onClick}
              disabled={isLoading}
            >
              <p>Sign Up</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
