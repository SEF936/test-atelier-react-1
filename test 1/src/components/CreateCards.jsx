import profils from "../datas/profils"

const CreateCards = ({profil}) => {
  

    return (
     
        <li className="card-container">
            <div className="card-profil card-profil-1">
                <img className="image-profil" src={profil.img} alt=""/>
                <div className="description-profil">
                    <h2 className="title-profil">{profil.name}</h2>
                <div className="divider_card"></div>
                    <p className="text-profil">{profil.caracteristiques}</p>
                </div>
                <button id="btn_open1" className="btn_open_profil" data-target={profil.id}>More</button>
            </div>
        </li>
      
    )
  }
  
  export default CreateCards