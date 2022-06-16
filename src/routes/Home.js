import { useState } from "react";
import { Button, Container } from "reactstrap";

export default function Home(props) {
  const url = "https://adaeo-server.herokuapp.com/devtest";

  const [text, setText] = useState("Nothing");

  async function getData() {
    try {
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      let dataString = await JSON.stringify(data);
      setText(dataString);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <main>
      <Container>
        <h1>{text}</h1>
        <Button
          onClick={() => {
            getData();
          }}
        >
          Press Me
        </Button>
      </Container>
    </main>
  );
}
