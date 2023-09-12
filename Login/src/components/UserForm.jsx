import { useState } from "react"

const initialUserForm = {
    username: "",
    password: "",
    email: "",
}

//Maquetacion html del registro de usuarios
export const UserForm = () => {

    const [UserForm, setUserForm] = useState(initialUserForm);

    const {username, password, email} = UserForm;

    const onInputChange = ({target}) =>{
        console.log(target.value )
        const {name, value} = target;
        setUserForm({
            ...UserForm,
            [name]: value,

        })

    }
    return(
        <form>
            <input className="form-control my-3 w-75" placeholder="Username" name="username" value={username} onChange={onInputChange}/>
            <input className="form-control my-3 w-75" placeholder="Password" type="password" name="password" value={password} onChange={onInputChange}/>
            <input className="form-control my-3 w-75" placeholder="Email" name="email" value={email} onChange={onInputChange}/>
            <button className="btn btn-primary" type="submit">Crear</button>
        </form>
    )

}