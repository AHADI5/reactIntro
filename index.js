

function Header () {
  return (
    <nav>
      <img src = "./reactLogo.png"/>
    </nav>
  )
}

function Description () {
  return (
    <h1>Reasons I'm excited to learn React</h1>
  )
}

function Footer() {
  return (
    <p>&copy 20xx A-2G development. All rights reserved</p>
  )
}
function Reasons () {
  return (
    <ol>
      <li>It's pretty librabry</li>
      <li>It's Easier to learn</li>
    </ol>
  )
}

ReactDOM.render(

<div>
  <Header/>
  <Reasons/>
  <Footer/>
</div>
,  document.getElementById("root") )