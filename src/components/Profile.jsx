const Profile = () => {
    const fullName = "John Dogherty DOE";
    const email = "johndoe@gmail.com";
    const phone = "0152146912";

    return (
        <div>
            <h1>Fullname : {fullName}</h1>
            <p>Email : {email}</p>
            <article>Phone : {phone}</article>
        </div>
    )
}

export default Profile
