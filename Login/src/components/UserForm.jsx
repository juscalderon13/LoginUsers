import { useEffect, useState } from "react"

//Maquetacion html del registro de usuarios
export const UserForm = ( {handlerAddUser, userSelected, initialUserForm}) => {

    const [UserForm, setUserForm] = useState(initialUserForm);

    const {id, username, password, email} = UserForm;

    useEffect(() => {
        setUserForm({...userSelected, password : '',
    });
    }, [userSelected]);

    const onInputChange = ({target}) =>{
        //console.log(target.value )
        const {name, value} = target;
        setUserForm({
            ...UserForm,
            [name]: value,

        })

    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if(!username || (!password && id === 0) || !email){
            alert("Debe completar los datos del formulario!");
            return;
        }
        //console.log(UserForm);

        //guardar el userForm en el listado de usuarios
        handlerAddUser(UserForm);
        setUserForm(initialUserForm);
    }

    return(
        <form onSubmit={onSubmit}>
            <input className="form-control my-3 w-75" placeholder="Username" name="username" value={username} onChange={onInputChange}/>
            {id > 0 || <input className="form-control my-3 w-75" placeholder="Password" type="password" name="password" value={password} onChange={onInputChange}/>}
            <input className="form-control my-3 w-75" placeholder="Email" name="email" value={email} onChange={onInputChange}/>
            <input type="hidden" name="id" value={id} />
            <button className="btn btn-primary" type="submit">{id > 0? 'Editar' : 'Crear'}</button>
        </form>
    )

}