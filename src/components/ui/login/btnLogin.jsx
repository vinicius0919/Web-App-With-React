import { useNavigate } from "react-router-dom";

const styleBtn = {
  backgroundColor: "blue",
  borderRadius: "5rem",
  color: "white",
  padding: "0.35rem",
  marginTop: "0.8rem"
};

export const MyButton = (props) => {
  const navigate = useNavigate();

  const navigateHome = () => {
    // 👇️ navigate to /
    navigate("/home");
  };
  const navigateLogin = () => {
    // 👇️ navigate to /
    navigate("/");
  };
  if (props.id === "entrar") {
    return (
      <button onClick={navigateHome} style={styleBtn} id={props.id}>
        {props.text}
      </button>
    );
  } else {
    return (
      <button onClick={navigateLogin} style={styleBtn} id={props.id}>
        {props.text}
      </button>
    );
  }
};
