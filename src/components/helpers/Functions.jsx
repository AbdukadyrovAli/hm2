export const Button = (props) => {
  return (
    <div>
      <button style={{backgroundColor:props.backgroundColor, width:props.width, height:props.height, color:props.color}}>{props.children}</button>
    </div>
  );
};

