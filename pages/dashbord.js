import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function dashpordAddProdect() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [title, setTitle] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [description, setDescription] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [image, setImage] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [price, setPrice] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [category, setCategory] = useState("");
  const dataPush = {
    title,
    description,
    image,
    price,
    category,
  };
  const addProdect = async () => {
    //  axios({
    //   method: "post",
    //   url: "./api/home",
    //   data: {
    //     title,
    //     description,
    //     image,
    //     price,
    //     category,
    //   },
    // });
    const resProdect = await fetch(`./api/home`, {
      method: "POST",
      body: JSON.stringify({ dataPush }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await resProdect.json()
    console.log(data);
  };

  // useEffect(() => {
  //   // Send a POST request

  // },[])

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>title</Form.Label>
        <Form.Control
          type="text"
          placeholder="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <Form.Text className="text-muted">
          We ll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>description</Form.Label>
        <Form.Control
          type="text"
          placeholder="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>URL</Form.Label>
        <Form.Control
          type="URL"
          placeholder="Url"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
      </Form.Group>

      <Button variant="primary" onClick={addProdect}>
        Submit
      </Button>
    </Form>
  );
}

export default dashpordAddProdect;
