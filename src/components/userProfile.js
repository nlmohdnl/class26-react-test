import React from 'react';
const UserProfile = ({user}) =>{
 const {picture ,name,email,phone,location}=user;
 return(
   <div> 
     <div> 
       <img src={picture.large} alt="pic"/>
     </div>
     <div> 
       {name.first} {name.last}
     </div>
     <div> 
       {email}
     </div>
     <div> 
       {phone}
     </div>
     <div> 
       {location.city},{location.country}
     </div>

   </div>


 );

};
export default UserProfile; 