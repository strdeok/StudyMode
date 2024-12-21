import styled, { createGlobalStyle } from "styled-components";
import Clock from "./clock";
import Photo from "./photos";
import { useEffect, useRef, useState } from "react";

const GlobalStyle = createGlobalStyle`
 * {
  font-family: "Do Hyeon", sans-serif;
  font-weight: 400;
  font-style: normal;
}

html,
body,
#root {
  width: 100%;
  height: 100%;
  margin: 0px;  
}
`;

const Main = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  background-size: cover;
  transition: all 1s;
`;

const Time = styled.h1`
  position: absolute;
  left: 40px;
  bottom: 10px;
  color: white;
  margin: 0;
  font-size: 100px;
  text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;
`;

function App() {
  const [photo, setPhoto] = useState([]);
  const [backPhoto, setBackphoto] = useState();
  const [count, setCount] = useState(0);
  const interval = useRef();
  const countRef = useRef(count);

  useEffect(() => {
    // countRef 동기화
    countRef.current = count;
  }, [count]);

  useEffect(() => {
    interval.current = setInterval(() => {
      if (countRef.current === photo.length - 1) {
        setCount(0);
        countRef.current = 0; // 동기화
      } else {
        setCount(countRef.current + 1);
        countRef.current += 1 // 동기화
      }
      setBackphoto(photo[countRef.current]);
    }, 10000);

    return () => {
      clearInterval(interval.current);
    };
  }, [photo]);

  return (
    <>
      <GlobalStyle />
      <Main
        className="main"
        style={backPhoto ?{
          backgroundImage: `url(${backPhoto})`,
        } : null}
      >
        <Photo photo={photo} setPhoto={setPhoto} />
        <Time>
          <Clock></Clock>
        </Time>
      </Main>
    </>
  );
}

export default App;
