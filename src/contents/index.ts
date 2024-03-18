import {NavigateFunction} from "react-router-dom";
import {z} from "zod";

export type FormFields = z.infer<typeof schema>;

export const schema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});

export type FormFieldsLogin = z.infer<typeof schema2> & {
  navigate: NavigateFunction;
};

export const schema2 = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type UserType = {
  id: string;
};

export type NimType = {
  nim?: string;
  userId: string;
};

type MimbersType = {
  id: string;
  username: string;
};

export type CourseType = {
  id: string;
  title: string;
  name: string;
  rate: number;
  mimber: number;
  mimbers?: MimbersType[];
  description: string;
};
