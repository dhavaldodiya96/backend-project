import express from "express";

const app = express();
const port = process.env.PORT || 5000;

const data = {
  employees: ["John", 30, "Peter"],
};

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "a joke",
      content: "this is a juoke",
    },
    {
      id: 2,
      title: "a next joke",
      content: "this is a another joke",
    },
    {
      id: 3,
      title: "a joke",
      content: "this is a juoke",
    },
    {
      id: 4,
      title: "a joke",
      content: "this is a juoke",
    },
    {
      id: 5,
      title: "a joke",
      content: "this is a juoke",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
