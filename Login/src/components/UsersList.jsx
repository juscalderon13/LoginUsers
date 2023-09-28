import { UserRow } from "./UserRow"

//Maquetacion html de la lista de usuarios obtiene los valores de la lista creada en AppUsers.jsx
export const UsersList = ({handlerUserSelectedForm, handlerRemoveUser, users = []}) => {
  return (
  <table className = "table table-hover table-striped">
    <thead>
        <tr>
            <th>#</th>
            <th>username</th>
            <th>email</th>
            <th>update</th>
            <th>remove</th>
        </tr>
    </thead>
    <tbody>
        {
            users.map( ({id, username, email}) => (
                <UserRow 
                key={id} 
                id={id} 
                username={username} 
                email={email} 
                handlerUserSelectedForm={handlerUserSelectedForm} 
                handlerRemoveUser={handlerRemoveUser}/>
            ))
        }
    </tbody>
  </table>
  )
}
