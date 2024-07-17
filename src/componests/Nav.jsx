

function Nav() {
  return (
    <div>
  <nav class="navbar navbar-expand-lg bg-transparent">
  <div class="container-fluid">
    <div className="container">
    <a class="navbar-brand text-light m-4" href="#">WebFILM</a>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse me-4" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#Trending">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#Superhero">Superhero</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav
