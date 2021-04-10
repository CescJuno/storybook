import React from 'react';
import Button from '../components/Button/Button';
import { palette } from '@material-ui/system';
const Main = (props) => {
  const handleClick = () =>{
    alert(1);
  };
  return (
    <>
    <header style={{background:'inherit'}}>aaa</header>
    <div style={{ display:'flex', justifyContent:'flex-end' }}>
      <Button
        onClick={handleClick}
        color={'inherit'}
        variant={'text'}
        options={null}
      >
        aaaa
      </Button>
      </div>
    </>
  );
};

export default Main;
