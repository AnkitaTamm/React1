const heading= React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"}, React.createElement("h1",{},"this is heading React"))
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)
console.log(heading)