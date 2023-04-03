
import './App.css'
import CreateCards from './components/CreateCards'
import profils from './datas/profils'
import { useState } from 'react'

const App = () => {
  const [search, setSearch] = useState ("");
  const [ typeChosen, setTypeChosen] = useState ("All");
  const [ available, setAvailable] = useState (false);
  

  return (
<div className="gallery">
    <div className= "wrapper">
        <div className="filters">
          <input
            type="text"
            className="search-input"
            id="search-input"
            placeholder="Type to search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select className="select" id="select" name='home' value={typeChosen} onChange={(e) => setTypeChosen(e.target.value)}>
            <option value="All">All</option>
            <option value="Girls">Girls</option>
            <option value="Mens">Mens</option>
          </select>

        <div>

          <label htmlFor='available'>Show only Available</label>
          <input
            type="checkbox"
            className="available-checkbox"
            id="available"
            name="checkbox"
            value={available}
            onChange={(e) => setAvailable(e.target.checked)}
          />
          </div>
        </div>
    </div>
    
      {profils
      .filter((profil) => {
        return (
          profil.name.toLowerCase().includes(search.toLowerCase()) &&
          (profil.sex === typeChosen || typeChosen === "All" ) &&
          (profil.available === available || !available)
        )
      })
      .map((profil) => 
      <CreateCards key={profil.id} profil ={profil}/>
      )}

      
      
    </div>
  )
}

export default App
