import users from './users.js';

function UserList(){
   return (
      <ul>
         {users.map(user => (
            <article>
               <h3>{user.first_name}</h3>
               <p>User Group: {user.user_group}</p>
               <p>ID: {user.id}</p>
            </article>
         ))}
      </ul>
   );
}

export default UserList;
