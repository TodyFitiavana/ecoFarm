import { Response } from "@/helpers/types/status";
import { LoginformSchema, SignupformSchema } from "@/lib/formValidation";
import { getSession } from "@/lib/sessions";
import axios from "axios";

class authServices {
  async login<T>(data: LoginformSchema): Promise<Response<T>> {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_DJANGO_URI}/users/login/`,
        { ...data },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        return { status: 200, rest: response.data as T };
      } else {
        throw new Error("Erreur lors de la connexion");
      }
    } catch (err) {
      console.error(err);
      throw new Error("Erreur lors de la connexion: " + err.message);
    }
  }

  async signup<T>(data: SignupformSchema): Promise<Response<T>> {
    const session = await getSession();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_DJANGO_URI}/users/register/`,
        {
          email: session.email,
          password: data.password,
          phone_number: data.mobileNumber,
          firstname: data.firstnameUser,
          name: data.nameUser,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        return { status: 200, rest: response.data as T };
      } else {
        throw new Error("Erreur lors de l'inscription");
      }
    } catch (err) {
      console.error(err);
      throw new Error("Erreur lors de l'inscription: " + err.message);
    }
  }
}

export default new authServices();
