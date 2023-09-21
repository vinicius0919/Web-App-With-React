import { InputBox } from "../../components/form/login/inputBox";
import { MyButton } from "../../components/ui/login/btnLogin";

export default function Login() {
  return (
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-12">
          <h1 id="tittle">LOGIN</h1>
          <InputBox text="password" place="Digite seu nome" />
        </div>
        <div className="col-3">
          <MyButton id="entrar" text="Entrar" />
        </div>
        <div className="col-3">
          <MyButton text="Entrar" />
        </div>
      </div>
    </div>
  );
}
