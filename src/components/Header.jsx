const Header = () => {
  let student = ["rohan", "rihan", "rihab", "foysal"];

  return (
    <div>
      {student.map((item, i) => {
        return <li key={i.toString()}>{item}</li>;
      })}
    </div>
  );
};

export default Header;
