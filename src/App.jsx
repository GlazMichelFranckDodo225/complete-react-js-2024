import List from "./components/List"
import Profile from "./components/Profile"

function App() {
  const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathématicienne',
    accomplishment: 'ses calculs pour vol spatiaux',
    imageId: 'MK3eW3A'
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chimiste',
    accomplishment: 'sa découverte du trou dans la couche d’ozone au-dessus de l’Arctique',
    imageId: 'mynHUSa'
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicien',
    accomplishment: 'sa théorie de l’électromagnétisme',
    imageId: 'bE7W1ji'
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chimiste',
    accomplishment: 'ses travaux pionniers sur la cortisone, les stéroïdes et les pilules contraceptives',
    imageId: 'IOjWm71'
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicien',
    accomplishment: 'son calcul de la masse des naines blanches',
    imageId: 'lrWQx8l'
  }];

  return (
    <div>
      <h1>Hello from React and Vite App !</h1>
      <h2>How are You ?</h2> <br />
      <Profile
        fullName="John Dogherty DOE"
        email="johndoe@gmail.com"
        phone="0152146912"
      />
      <List people={people}/>
    </div>
  )
}

export default App
