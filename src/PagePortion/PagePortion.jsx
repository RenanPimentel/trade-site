const capitalize = string => {
  const words = string.split(' ');
  return words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

function Items({ name, html }) {
  return (
    <>
    <div className="container-item" id={name}>
      <h1>{capitalize(name.replace(/-/g, ' '))}</h1>
      <div className="wrapper"
        dangerouslySetInnerHTML={{__html: html}}>
      </div>
      <div className="line"></div>
    </div>
    </>
  );
}

export default Items;
