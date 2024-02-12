import {SubmitHandler, useForm} from "react-hook-form";
import {Button, Paragraph} from "../atoms";
import {FaFacebook} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";
import {Link} from "react-router-dom";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

type FormFields = z.infer<typeof schema>;

const schema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});

export const RegisterScreen = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: {errors, isSubmitting},
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const hanldeSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "This email is already taken",
      });
    }
  };

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="border border-black rounded-lg w-[90%] md:w-[500px] p-5 flex flex-col justify-center items-center">
        <div className="w-32 flex justify-center overflow-hidden">
          <img src="../images/register.svg" alt="register" />
        </div>
        <div>
          <Paragraph variant="title">Register Form</Paragraph>
          <p className="text-[11px] text-center mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
            praesentium sunt neque atque unde omnis. Quia eum voluptates soluta
            nisi mollitia.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(hanldeSubmit)}
          className="mt-5 w-10/12 flex flex-col gap-2"
        >
          {errors.root && (
            <span className="text-[10px] text-red-600">
              {errors.root?.message}
            </span>
          )}
          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="text-sm font-prociono">
              Username
            </label>
            <input
              {...register("username")}
              type="text"
              id="username"
              className="border border-black h-10 pl-4 text-sm font-prociono"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="emial" className="text-sm font-prociono">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              id="emial"
              className="border border-black h-10 pl-4 text-sm font-prociono"
              required
            />
            {errors.email && (
              <span className="text-[9px] text-red-600">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm font-prociono">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              id="password"
              className="border border-black h-10 pl-4 text-sm font-prociono"
              required
            />
            {errors.password && (
              <span className="text-[9px] text-red-600">
                {errors.password.message}
              </span>
            )}
          </div>
          <div>
            <span className="text-[10px]">
              Already have account <Link to="/login">login here</Link>
            </span>
            <Button
              disabled={isSubmitting}
              variant="secondary"
              className="w-full py-2 text-sm"
            >
              {isSubmitting ? "Loading..." : "Register"}
            </Button>
          </div>
        </form>
        <div className="flex gap-5 mt-5">
          <Button className="bg-blue-500 flex items-center gap-2 py-1 pl-1 pr-2 rounded-md">
            <span className="bg-white p-1 rounded-sm">
              <FcGoogle />
            </span>
            <p className="text-[10px] text-white">Sign in with Google</p>
          </Button>
          <Button className="bg-blue-800 flex items-center gap-2 py-1 pl-1 pr-2 rounded-md">
            <span className="bg-white p-1 rounded-sm">
              <FaFacebook />
            </span>
            <p className="text-[10px] text-white">Sign in with Facebook</p>
          </Button>
        </div>
      </div>
    </section>
  );
};
