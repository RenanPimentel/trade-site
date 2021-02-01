function Items(props) {
  return (
    <>
    <div className="container-item" id={props.name}>
      <h1>{props.name}</h1>
      <div className="wrapper" 
        dangerouslySetInnerHTML={{__html: props.html}}>
      </div>
    <div className="line"></div>
    </div>
    </>
  );
}

export default Items;
