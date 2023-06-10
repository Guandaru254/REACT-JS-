import { useState, useEffect } from "react";

const UserProfile = () => {
  
const [user, setUser] = useState(null);

  
useEffect(() => {
    
// Simulating an API call to fetch user data

    
const fetchUser = async () => {
      
const response = await fetch("https://api.example.com/user");
      
const data = await response.json();
      
setUser(data);
    };
    fetchUser();  }, []);
 
return
 (    
<div>className="UserProfile">      
<h2>User Profile</h2>
      {user ? }        
<div>          
<p>Name: {user.name}</p>         
<p>Email: {user.email}</p>        
</div>
      ) : (       
<p>Loading user data...</p>
      )}    
</div>

  );
};

export default UserProfile;