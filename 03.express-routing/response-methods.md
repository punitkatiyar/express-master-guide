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
```

## json()  :: JSON

```
res.json({ name: "punit", course: "node" }


let data = [
  { name: "punit", course: "Node" },
  { name: "punit", course: "Node" },
  { name: "punit", course: "Node" },
  { name: "punit", course: "Node" },
]
res.json(data)
```

- redirect()  :: 

- render()  ::

## download()

```
res.download("./download/mern.pdf", "mern-with-ai.pdf")
```


## sendFile()

```
res.sendFile(__dirname + "/download/mern.pdf")
```

## set() and get()

```
    res.set('custom-header', "Punit")
    console.log(res.get("custom-header"))
    res.send("header Set");
```
