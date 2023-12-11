const { connectDB } = require("./Database/Connection");
const app = require("./app");
connectDB();
app.listen(process.env.PORT , ()=>{
    console.log(`Server is running on port : ${process.env.PORT}`);
})