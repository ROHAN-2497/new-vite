let btnStatus = false;
const Header = () => {
  return (
    <div>{btnStatus ? <button>LogOout</button> : <button>Login</button>}</div>
  );
};

export default Header;
