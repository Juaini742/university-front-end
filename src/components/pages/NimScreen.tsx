import {useForm} from "react-hook-form";
import {Button, Paragraph} from "../atoms";
import {NimType} from "../../contents";
import {useMutation} from "react-query";
import {verifyNim} from "../../utils";

function NimScreen() {
  const {
    register,
    formState: {errors},
    handleSubmit,
    setError,
  } = useForm<NimType>();

  const mutation = useMutation((data: NimType) => verifyNim(data), {
    onError: () => {
      setError("root", {
        message: "Your nim is wrong, please try again",
      });
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    await mutation.mutate(data);
    if (mutation.isSuccess) {
      await verifyNim(data);
    }
  });
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="border border-black rounded-lg w-[90%] md:w-[500px] p-5 flex flex-col justify-center items-center">
        <div className="w-32 flex justify-center overflow-hidden">
          <img src="../images/register.svg" alt="register" />
        </div>
        <div>
          <Paragraph variant="title">Welcome to UkomUniversity</Paragraph>
          <p className="text-[11px] text-center mt-3">
            Please inter your nim bellow this fill
          </p>
        </div>
        <form onSubmit={onSubmit} className="mt-5 w-10/12 flex flex-col gap-2">
          {errors.root && (
            <span className="text-[10px] text-red-600 text-center">
              {errors.root?.message}
            </span>
          )}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="emial"
              className="text-sm font-prociono text-center"
            >
              Nim
            </label>
            <input
              {...register("nim")}
              type="password"
              id="emial"
              className="border border-black h-10 pl-4 text-sm font-prociono"
              required
            />
            {errors.nim && (
              <span className="text-[9px] text-red-600">
                {errors.nim.message}
              </span>
            )}
          </div>
          <div>
            <Button variant="secondary" className="w-full py-2 text-sm">
              Save
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default NimScreen;
