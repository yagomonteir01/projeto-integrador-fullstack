const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite');

db.run(`CREATE TABLE IF NOT EXISTS produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    preco REAL
)`);

module.exports = {
    getAll: (req, res) => {
        db.all('SELECT * FROM produtos', [], (err, rows) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(rows);
        });
    },
    create: (req, res) => {
        const { nome, preco } = req.body;
        db.run('INSERT INTO produtos (nome, preco) VALUES (?, ?)', [nome, preco], function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ id: this.lastID, nome, preco });
        });
    }
};
