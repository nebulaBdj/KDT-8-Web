import "../src/App.css"


function App() {
  // const name = '로이';
  // const animal = '개';
  // const title = "Hello World"
  const list = ['k', 'd', 't', 'w', 'e', 'b'];
  const users =[
    {id : 1, name : "John", age : 25 , vip : true},
    {id : 2, name : "Jane", age : 19 , vip : false},
    {id : 3, name : "Alice", age : 30 , vip : true},
    {id : 4, name : "Bob", age : 18 , vip : false},
    {id : 5, name : "Charlie", age : 35 , vip : true},
  ]

  let fi = users.map((value)=>{
    return value.age > 20 && value.name
  })

  return (
    <>
        {/* <div className="red"></div>
        <div className="oran"></div>
        <div className="yell"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="na"></div>
        <div className="pu"></div> */}
        {/* {users.filter((last) => last.age > 20 ).map((value,index) => {
          return <div key={value.id}> -  {value.name}</div>
        })} */}

        {fi}
    </>
  );
}

export default App;
