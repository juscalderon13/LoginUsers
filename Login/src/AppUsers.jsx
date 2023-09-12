import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";

const initialUsers = [
        {
            id:1,
            username: "Justin",
            password: "12345",
            email: "jus@gmail.com"
        }
    ];

export const AppUsers = () => {

    const handlerAddUser = (user) =>{
        console.log(user);
    }
    return (
    <div className="container my-4">
        <h2>Users App</h2>
        <div className="row">
            <div className="col">
                <UserForm  handlerAddUser={handlerAddUser}/>
            </div>
            <div className="col">
                <UsersList users={initialUsers}/>
            </div>

        </div>
        
    </div>
    )

}