const List = () => {
    const technologies = ["Java", "Spring", "React", "Bootstrap", "JavaScript"];

    return (
        <div>
            <h5>Technologies :</h5>
            <ul>
                {technologies.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default List
