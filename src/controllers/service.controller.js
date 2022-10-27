import * as servicesServices from "../services/services.services.js"

export const getServices = (req, res) => {
    servicesServices
    .getServices()
    .then((result) => {
        res.status(200).json({
            message: "Servicios recuperados satisfactoriamente",
            data: result[0]
        });
    })
    .catch((err) => {
        res.status(500).send(err);
    });
};

export const getService = (req, res) => {
    const {id} = req.params;
    servicesServices
    .getService(id)
    .then((result) => {
        res.status(200).json({
            message: "Servicio recuperado satisfactoriamente",
            data: result[0]
        });
    })
    .catch((err) => {
        res.status(500).send(err);
    });
};

export const createService = (req, res) => {
    const servicio = req.body;
    servicesServices
    .createService(servicio)
    .then(() => {
        res.status(200).json({
            message: "Servicio creado satisfactoriamente",
            data: servicio,
        });
    })
    .catch((err) => {
        res.status(500).send(err);
    });
};

export const updateService = (req, res) => {
    const servicio = req.body;
    const {id} = req.params;
    servicesServices
    .updateService(id, servicio)
    .then(() => {
        res.status(200).json({
            message: "Servicio actualizado satisfactoriamente",
            data: servicio,
        });
    })
    .catch((err) => {
        res.status(500).send(err);
    });
};


export const deleteService = (req, res) => {
    const {id} = req.params;
    servicesServices
    .deleteService(id)
    .then(() => {
        res.status(200).json({
            message: "Servicio Borrado satisfactoriamente"
        });
    })
    .catch((err) => {
        res.status(500).send(err);
    });
};