import { LoginformSchema } from "@/lib/formValidation";
import axios from "axios";

class authServices {
  async login(data: LoginformSchema) {
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
        console.log(response.data);
      }
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  }
}

export default new authServices();
