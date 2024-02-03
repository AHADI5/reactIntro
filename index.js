const container = document.getElementById("root") ;
const page = (
  <div >
    <img src = "./reactLogo.png"/>
    <h1>Fun Facts About React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100k stars on github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of entreprise apps , including mobile apps </li>
    </ul>
  </div>
 
)

ReactDOM.render(page , container)