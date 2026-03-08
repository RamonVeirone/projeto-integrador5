const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'caretrack.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados SQLite', err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite.');
    
    // Configura foreign keys
    db.run("PRAGMA foreign_keys = ON");
    
    db.serialize(() => {
      // 1. Tabela de Pacientes
      db.run(`CREATE TABLE IF NOT EXISTS patients (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        age INTEGER,
        gender TEXT,
        room TEXT NOT NULL,
        priority TEXT NOT NULL,
        diagnosis TEXT,
        admission_date TEXT NOT NULL
      )`);

      // 2. Tabela de Rotinas/Procedimentos
      db.run(`CREATE TABLE IF NOT EXISTS routines (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        patient_id INTEGER,
        description TEXT NOT NULL,
        scheduled_time TEXT,
        status TEXT DEFAULT 'Pendente',
        responsible TEXT,
        FOREIGN KEY (patient_id) REFERENCES patients (id) ON DELETE CASCADE
      )`);

      // 3. Tabela de Observações
      db.run(`CREATE TABLE IF NOT EXISTS observations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        patient_id INTEGER,
        type TEXT NOT NULL,
        description TEXT NOT NULL,
        created_at TEXT NOT NULL,
        FOREIGN KEY (patient_id) REFERENCES patients (id) ON DELETE CASCADE
      )`);
    });
  }
});

module.exports = db;
