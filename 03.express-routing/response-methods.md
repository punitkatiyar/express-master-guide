## Response Methods

## send( )  :: text , html , object , array , Buffer 

```

res.send("Hello")
res.send("<h1>Hello</h1>");

let data = "hello string";
res.send(`<h1>${data}</h1>`);

res.send(
  {
    "name": "punit",
    "course": "Node"
  }
);

res.send([1, 2, 3, 4, 5]);

let data = [
  { name: "punit", course: "Node" },
  { name: "punit", course: "Node" },
  { name: "punit", course: "Node" },
  { name: "punit", course: "Node" },
]
res.json(data)

```











- json()  :: JSON

- redirect()  :: 

- render()  ::

- download()

- sendFile()
