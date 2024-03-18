import axios from "axios";
import {FormFields, FormFieldsLogin, NimType} from "../contents";

export const register = async (data: FormFields) => {
  const response = await axios.post(
    "http://localhost:8080/api/public/register",
    data
  );

  return response.data;
};

export const login = async (data: FormFieldsLogin) => {
  const response = await axios.post(
    "http://localhost:8080/api/public/login",
    data,
    {
      withCredentials: true,
    }
  );
  const userId = response.data;
  const nimResponse = await axios.get("http://localhost:8080/api/secured/nim", {
    withCredentials: true,
  });
  const newNim = nimResponse.data;
  const filterNim = newNim.filter(
    (data: NimType) => data.userId === userId.userId
  );

  if (filterNim.length > 0) {
    window.location.href = "/";
  } else {
    window.location.href = "/nim";
  }

  return userId;
};

export const verifyNim = async (data: NimType) => {
  const response = await axios.post(
    "http://localhost:8080/api/secured/nim",
    data,
    {
      withCredentials: true,
    }
  );

  if (!response) {
    throw new Error("Erro fetching Data");
  } else {
    window.location.href = "/";
  }

  return response.data;
};

export const logout = async () => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/secured/logout",
      null,
      {
        withCredentials: true,
      }
    );

    window.location.reload();

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async () => {
  const response = await axios.get("http://localhost:8080/api/secured/user", {
    withCredentials: true,
  });

  if (!response) {
    throw new Error("Erro fetching Data");
  }

  return response.data;
};

export const getAllCourse = async () => {
  const response = await axios.get(
    "http://localhost:8080/api/secured/getAllCourse",
    {
      withCredentials: true,
    }
  );

  if (!response) {
    throw new Error("Erro fetching Data");
  }

  return response.data;
};

export const getOneCourse = async (id?: string) => {
  const response = await axios.get(
    `http://localhost:8080/api/secured/getOneCourse/${id}`,
    {
      withCredentials: true,
    }
  );

  if (!response) {
    throw new Error("Erro fetching Data");
  }

  return response.data;
};

export const addMimberCourse = async (id?: string) => {
  const response = await axios.post(
    `http://localhost:8080/api/secured/addMimberCourse/${id}`,
    null,
    {
      withCredentials: true,
    }
  );

  if (!response) {
    throw new Error("Erro fetching Data");
  }

  return response.data;
};
