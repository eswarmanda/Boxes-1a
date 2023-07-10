const Box = (props) => {
  const { className, name } = props;
  const changeBox = `${className}`;
  return <div className={changeBox}>{name}</div>;
};

const element = (
  <div>
    <h1 className="heading">Boxes</h1>
    <div className="main-box">
      <Box className="box1" name="Small" />
      <Box className="box2" name="Medium" />
      <Box className="box3" name="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
