const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) { return res.status(400, err.message) }
        conn.query('SELECT * FROM books', (err, rows)=> {
            if (err) { return res.status(400, err.message)}
            res.json(rows)
        })
    })
})

routes.post('/', (req, res) => {
    
    req.getConnection((err, conn) => {
        if (err) return res.send(400, err)
        console.log(req.body);
        conn.query('INSERT INTO books set ?',[req.body], (err, rows)=> {
            if (err) { return res.status(400, err.message)}
            res.json("book insert successfully")
        })
    })
})

routes.delete('/:id', (req, res) => {
    
    req.getConnection((err, conn) => {
        if (err) return res.send(400, err)
        console.log(req.body);
        conn.query('DELETE FROM books WHERE id = ?',[req.params.id], (err, rows)=> {
            if (err) { return res.status(400, err.message)}
            res.json("book is deleted successfully")
        })
    })
});

routes.put('/:id', (req, res) => {
    
    req.getConnection((err, conn) => {
        if (err) return res.send(400, err)
        console.log(req.body);
        conn.query('UPDATE books set ? WHERE id = ?',[req.body, req.params.id], (err, rows)=> {
            if (err) { return res.status(400, err.message)}
            res.json("book is update successfully")
        })
    })
});


module.exports = routes;