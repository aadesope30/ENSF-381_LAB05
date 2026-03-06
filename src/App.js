// import logo from './logo.svg';
import './App.css';
import Controls from './Control.js';
import Footer from './Footer.js';
import UserList from './UserList.js';

function App() {
   const currentYear = new Date();
   const currentYearString = currentYear.getFullYear();
   let isLoggedIn = true;
   return (
      <div className="App">
      <h1> ENSF-381: Full Stack Web Development</h1>
      <p> React Components</p>
      <p> {currentYearString}</p>
      {isLoggedIn ? (
         <div>
            <section>
               <Controls />
               j<h1> User List</h1>
               <UserList />
            </section>
            <Footer />
         </div>
      ): (
         <p> Please Log in first.</p>
      )
      }
      </div>
   );
}

export default App;
