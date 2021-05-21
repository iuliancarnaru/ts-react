import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="green" onClick={() => console.log('clicked')}>
      <p>Children</p>
    </ChildAsFC>
  );
};

export default Parent;
