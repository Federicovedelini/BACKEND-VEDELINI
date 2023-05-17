import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1/companydb",{
    
   
   

})

.then(db => console.log('db is connected'))
.catch(error => console.log(error))

