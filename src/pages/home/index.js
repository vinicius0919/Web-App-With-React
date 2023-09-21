import { MyButton } from "../../components/ui/login/btnLogin";

export default function Home() {
  return (
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-12">
          <h1 id="tittle">Home</h1>
          <div className="col">
            <MyButton id="Sair" text="Sair" />
          </div>
        </div>
      </div>
    </div>
  );
}
