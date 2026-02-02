import './Card.css';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover = true,
  onClick
}) => {
  const baseClass = 'card';
  const variantClass = `card-${variant}`;
  const hoverClass = hover ? 'card-hover' : '';
  
  return (
    <div 
      className={`${baseClass} ${variantClass} ${hoverClass} ${className}`}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {children}
    </div>
  );
};

export default Card;
