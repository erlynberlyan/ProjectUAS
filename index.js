import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.get("/", (req,res)=> {
    const sql = "SELECT * FROM `users`";
    db.query(sql, (err,data)=> {
        if(err) return res.json("Error");
        return res.json(data);
    })
})


app.listen(3000, ()=> console.log('Listening Port...'));
