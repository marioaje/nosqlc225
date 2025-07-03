//Declarar nuestra librerias
const express = require('express');
const router = express.Router();
const Curso = require('../models/Curso');


//Post sirve para insertar datos
//Equivalencia db.getCollection('NEW_COLLECTION_NAME').insertOne({
router.post('/', async (req, res) => {
        try {
            const datosCurso = new Curso(req.body);
            await datosCurso.save();
            res.status(201).json(datosCurso);
            
        } catch (err) {
            res.status(400).json({error: err.message });
        }
    }
);

router.get('/', async(req, res) =>{
        const listaDatos = await Curso.find();
        res.json(listaDatos);


    }
);


module.exports = router;


// {
//  "id": 123,
// "nombre": "NoSQL",
// "descripcion": "Curso de base de datos no relacionales.",
// "estado": "Activo"
// }