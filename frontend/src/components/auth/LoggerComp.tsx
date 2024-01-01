import { useState } from "react";
import { useSigninUserMutation } from "../../services/AuthService";
import "./auth.sass";
import { useAppDispatch } from "../../hooks/redux";

const LoggerComp = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>();
  // const toast = useToast();
  // const navigate = useNavigate();
  const [signinUser, { data, isLoading, error, isError, isSuccess }] =
    useSigninUserMutation();
  console.log(data);
  // if (isError) {
  //   toast({
  //     title: (error as any).data.message,
  //     status: "error",
  //     duration: 5000,
  //   });
  //   if ((error as any).data.message === "User not Verified") {
  //     navigate("/send-verify-mail", {
  //       state: { email },
  //     });
  //   }
  // }
  if (isSuccess) {
    // dispatch(setUser({ token: data.token, name: data.name }));
    // navigate("/");
    localStorage.setItem("token", data.token);
  }

  const handleSignIn = async (e) => {
    e.preventDefault();

    // Отправляем запрос на сервер для входа
    const requestBody = { username: email, password };
    signinUser(requestBody);

    // После успешной аутентификации, вы можете обработать ответ, например, перенаправить пользователя
    // или выполнить другие действия.
  };

  console.log(data);
  console.log(error);

  return (
    <div>
      <h1>Signin</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <Link to="/forgot-password">Forgot Password</Link>
        </div>
        <button type="submit" disabled={isLoading}>
          Signin
        </button>
      </form>
    </div>
  );
};

export default LoggerComp;
