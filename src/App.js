function App(){
 const creatdigits =()=>{
 const arr =[]
 for(let i=1; i<10; i++){
  arr.push(
    <button key={i}>{i}</button>
  )
 }
 return arr;

 }
  return (
    <div>
  <div className="calculator">
<div className="display">
  <span>(0)</span>0


</div>
<div className="operators">
    <button>/</button>
    <button>x</button>
    <button>+</button>
    <button>-</button>
    <button>Del</button>
</div>
<div className="digits">
     {creatdigits()}
    <button>0</button>
    <button>.</button>
    <button>=</button>
</div>


</div>

    </div>
  )
}
export default App;