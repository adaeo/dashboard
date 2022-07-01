import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function DevTest(props) {
  const url = "https://adaeo-server.herokuapp.com/devtest";

  const [text, setText] = useState("Nothing");

  async function getData() {
    try {
      setText("Loading...");
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      let dataString = await JSON.stringify(data);
      setText(dataString);
    } catch (err) {
      setText("Failed to fetch...");
      console.log(err);
    }
  }

  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();

    formData.append("file", selectedFile);

    fetch("https://adaeo-server.herokuapp.com/devtest/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const millisecondsToDate = (milliseconds) => {
    let date = new Date(milliseconds).toLocaleString();
    return date;
  };

  return (
    <main>
      <div className="container-generic pb-2">
        <h1>{text}</h1>
        <Button
          onClick={() => {
            getData();
          }}
        >
          Press Me
        </Button>
      </div>
      <div className="container-generic">
        <div>
          <Form.Group controlId="formFile" className="mb-2">
            <Form.Label>File submission</Form.Label>
            <Form.Control type="file" onChange={changeHandler} />
          </Form.Group>
          {isSelected ? (
            <div>
              <p>Filename: {selectedFile.name}</p>
              <p>Filetype: {selectedFile.type}</p>
              <p>Size in bytes: {selectedFile.size}</p>
              <p>
                lastModifiedDate:{" "}
                {millisecondsToDate(selectedFile.lastModified)}
              </p>
            </div>
          ) : (
            <p>Select a file to show details</p>
          )}
          <div>
            <Button onClick={handleSubmission}>Submit</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
