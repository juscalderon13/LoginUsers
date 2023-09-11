import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";

export const AppUsers = () => {

    const initialUsers = [
        {
            id:1,
            username: "Justin",
            password: "12345",
            email: "jus@gmail.com"
        }
    ];

    return (
    <div className="container my-4">
        <h2>Users App</h2>
        <div className="row">
            <div className="col">
                <UserForm />
            </div>
            <div className="col">
                <UsersList users={initialUsers}/>
            </div>

        </div>
        
    </div>
    )

}