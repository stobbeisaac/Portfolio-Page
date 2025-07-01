import './App.css'
import image from '/IsaacImage.jpg'

function App() {
  return (
    <>
    <div class="container text-center">
      <div class="row">
        <div class="col">
        <img src={image} alt="logo" width={350} className="rounded-5 profile-image"></img>
        <h1></h1>
        </div>
        <div class="col text-start align-self-center">
        <h2>Isaac Stobbe</h2>
      </div>
      </div>
    </div>

    </>
  )
}

export default App
