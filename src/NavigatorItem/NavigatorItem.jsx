function NavigatorItem({ name, href }) {
  return (
    <div className="nav-item">
      <a href={href}>{name}</a>
    </div>
  );
}

export default NavigatorItem;
