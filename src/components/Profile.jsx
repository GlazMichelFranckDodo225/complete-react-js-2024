const Profile = (props) => {
    /* const fullName = "John Dogherty DOE";
    const email = "johndoe@gmail.com";
    const phone = "0152146912"; */

    console.log(props);

    /* <h1>Fullname : {fullName}</h1>
        <p>Email : {email}</p>
        <article>Phone : {phone}</article>
     */

    return (
        <div>
            <h1>Fullname : {props.fullName}</h1>
            <p>Email : {props.email}</p>
            <article>Phone : {props.phone}</article>
        </div>
    )
}

export default Profile
