const app = require(".");
const dbConnect = require("./config/db");

const PORT = 3080;

app.listen(PORT, async () => {
    await dbConnect(); 
    console.log(`Server is running on port ${PORT}`);
});