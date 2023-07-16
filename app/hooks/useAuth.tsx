import axios from "axios";

const useAuth = () => {
  const signin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await axios.post(
        "https://localhost:3000/api/auth/signin",
        {
          email,
          password,
        }
      );
      console.log(response);
    } catch (error) {}
  };

  const signup = async () => {
    try {
    } catch (error) {}
  };

  return { signin, signup };
};

export default useAuth;
