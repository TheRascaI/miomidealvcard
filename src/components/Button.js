import styled from 'styled-components';

export const Button = styled.div`
background-color:#fff;
text-align: center;
align-items: center;
justify-content: center;
padding: 15% 15% 15% 15%;
margin: 0 5% 0 5%;
border-radius: 20px;
box-shadow:5px 5px 10px rgba(0,0,0,0.1),
-5px -5px 10px #fff ;

-moz-box-shadow:
5px 5px 10px rgba(0,0,0,0.1),
-5px -5px 10px #fff ;

  box-shadow:
5px 5px 10px rgba(0,0,0,0.1),
-5px -5px 10px #fff ;

&:hover {
  -webkit-box-shadow:
  inset  10px 10px 20px rgba(0,0,0,0.05),
   inset -15px -15px 20px #fff;

-moz-box-shadow:
  inset  10px 10px 20px rgba(0,0,0,0.05),
   inset -15px -15px 20px #fff;

 box-shadow:
  inset  10px 10px 20px rgba(0,0,0,0.05),
   inset -15px -15px 20px #fff;
}

`;

export default Button;
