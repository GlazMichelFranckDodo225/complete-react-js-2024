const List = () => {
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

    // const technologies = ["Java", "Spring", "React", "Bootstrap", "JavaScript", "Python"];

    return (
        <div>
            <h5>People :</h5>
            {people.map(item => (
                <div
                    key={item.id}
                    style={{
                        border: "1px solid black",
                        padding: "10px",
                        borderRadius: "10px",
                        margin: "10px"
                    }}
                >
                    <div>
                        <p>Name : {item.name}</p>
                        <p>Profession : {item.profession}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default List
