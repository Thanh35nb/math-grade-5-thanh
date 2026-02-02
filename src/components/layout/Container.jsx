import './Container.css';

const Container = ({ children, className = '', size = 'xl' }) => {
  return (
    <div className={`container container-${size} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
