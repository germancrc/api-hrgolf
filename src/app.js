import express from "express"; //para importar express luego de instalarlo
import cors from "cors";
import db from "./config/db.js"
import indexRouter from "./routes/index.route.js";

const app = express(); //asignar express a una constante, en este caso "app"

app.use(cors())

app.set("port", process.env.PORT || 3000); //setear puerto para que lo tome desde la variable de ambiente o si no encuentra use un puerto especifico

// middleware
app.use(express.json()); 


//rutas
app.use("/", indexRouter);
app.use("*", (req, res) => {
    res.send("404 - Not Found")
})


//iniciar servidor
app.listen(app.get("port"), () => {
    console.log("Servidor corriendo en puerto", app.get("port"));
});


//conexion a la DB con Planetscale
db.connect().then(() => {
    console.log("Conectado a la Base de Datos GOLF");
}).catch((err) => {
    console.log("Error: ", err);
})