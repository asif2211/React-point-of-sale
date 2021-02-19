import styled from "styled-components";
export const wrapper = styled.div`
margin-left:1px;
margin-top:20px;        
`
export const Span = styled.span`
background:#489EE7;
border-radius:50%; 
padding:3px;   
color:#fff; 
font-size:10px;

`
export const Heading = styled.div`
 background-color: #F9F9F9;
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 4px;
  font-size: 14px;
  text-align: left;
  outline: none;
  border-top:.1px solid #d5dbd9;
  border-left:none;
  border-right:none;
  border-bottom:none;
  transition:all 0.3s ease;
  color:#757575; 
  height:5vh;  
  border-radius:5px;     
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto  auto;
  width: 100%;

  @media (max-width: 800px) {
    grid-template-columns: auto;
    box-shadow:
       inset 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.1);
             height:100vh;
  }
`;
export const Grid_item_heading = styled.div`
  background-color: rgba(255, 255, 255, 225);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 4px;
  font-size: 12px;
  text-align: center;
  outline: none;
  border-top:.1px solid #d5dbd9;
  border-left:none;
  border-right:none;
  border-bottom:none;
  transition:all 0.3s ease;
  color:#757575;
  height:5vh;
`;
export const Grid_item = styled.div`
  outline: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 10px;
  font-size: 14px;
  text-align: center;
  color: #000;
  border-top:.1px solid #d5dbd9;
  border-left:none;
  border-right:none;
  border-bottom:.1px solid #d5dbd9;
`;