const fs = require ('fs');
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json','utf-8'))

module.exports = {
    heroes:(req, res)=>{
        res.send(heroes);
    },
    
    detalle:(req, res)=>{
        let heroe = heroes.filter(heroe =>{
            return heroe.id == req.params.id
        })
        if (heroe[0] == undefined){
            res.send('heroe no encontrado')
        } else{
            res.send(`Hola mi nombre es ${heroe[0].nombre} y soy ${heroe[0].profesion}`)
        }
    },
    bio:(req, res)=>{
        let heroe = heroes.filter(heroe => {
            return heroe.id == req.params.id
        });
        if (heroe [0] == undefined){
            res.send ('No encontramos un heroe para mostrar')
        }else if(req.params.ok){
            res.send(`
            Heroe: ${heroe[0].resenia}
            reseña: ${heroe[0].resenia}`)
        }else{
            res.send(`${heroe[0].nombre} dice: lamento que no quieras saber de mi :()`)
        }
    }
}