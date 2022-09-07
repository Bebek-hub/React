import "./Container.css";

const Container = ({ children }) => {
  return (
    <div className="Wrapper">
        {children}
    </div>
  );
};

export default Container;