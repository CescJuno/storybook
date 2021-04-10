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
    <section style={{ display:'flex', justifyContent:'flex-end' }}>
      <Button
        onClick={handleClick}
        color={'inherit'}
        variant={'outline'}
        options={null}
      >
        aaaa
      </Button>
      </section>
    </>
  );
};

export default Main;
