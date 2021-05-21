import React from 'react';

interface ChildProps {
  color: string;
  onClick: () => void;
}

// export const Child = ({ color, onClick }: ChildProps) => {
//   return (
//     <div>
//       <h1>{color}</h1>
//       <button type="button" onClick={onClick}>
//         Click me
//       </button>
//     </div>
//   );
// };

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      <h1>{color}</h1>
      {children}
      <button type="button" onClick={onClick}>
        Click me
      </button>
    </div>
  );
};
