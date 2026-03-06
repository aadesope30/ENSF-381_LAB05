function Delete() {
   return (
      <div>
         <input type="text" id="textbox" placeholder="Enter text here" />
         <label htmlFor="textbox"></label>
         <button id="Delete">Delete</button>
      </div>
   );
}

function Controls(){
   return(
      <div>
         <Delete />
         <button> Sort by Group</button>
         <button> Sort by ID</button>
         <button> Grid / List</button>
      </div>
   );
}

export default Controls;
