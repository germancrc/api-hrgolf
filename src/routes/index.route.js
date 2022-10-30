import { Router } from "express";
import servicesRouter from "./services.route.js";
import ratesRouter from "./rates.route.js";

const indexRouter = Router();

indexRouter.get("/api", (req, res) => {
    res.send("BIENVENIDO");
});

indexRouter.get("/", (req, res) => {
    res.render('index');
});

indexRouter.use(`api/servicios`,  servicesRouter);
indexRouter.use(`api/tarifas`,  ratesRouter);





export default indexRouter;