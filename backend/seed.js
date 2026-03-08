const db = require('./database');

const seedData = () => {
  db.serialize(() => {
    // Verifica se os pacientes já existem
    db.get('SELECT COUNT(*) as count FROM patients', (err, row) => {
      if (err) {
        console.error(err.message);
        db.close();
        return;
      }

      if (row.count === 0) {
        console.log('Populando banco de dados com dados iniciais...');

        // Inserir Pacientes
        const insertPatient = db.prepare('INSERT INTO patients (name, age, gender, room, priority, diagnosis, admission_date) VALUES (?, ?, ?, ?, ?, ?, ?)');
        insertPatient.run('Alberto Souza', 68, 'M', '204', 'Crítico', 'Insuficiência Cardíaca Congestiva', '2023-12-05');
        insertPatient.run('Maria Clara Dias', 45, 'F', '301', 'Moderado', 'Pneumonia', '2023-12-07');
        insertPatient.run('João Pedro Neves', 22, 'M', '102', 'Estável', 'Apendicite em recuperação', '2023-12-08');
        insertPatient.finalize();

        // Inserir Rotinas
        const insertRoutine = db.prepare('INSERT INTO routines (patient_id, description, scheduled_time, status, responsible) VALUES (?, ?, ?, ?, ?)');
        insertRoutine.run(1, 'Sinais Vitais', '10:30', 'Concluído', 'Enf. Ana');
        insertRoutine.run(1, 'Administração Insulina NPH 10UI', '14:00', 'Pendente', 'Enf. Carlos');
        insertRoutine.run(2, 'Troca de Curativo', '09:00', 'Concluído', 'Téc. João');
        insertRoutine.run(3, 'Medicação EV', '08:15', 'Concluído', 'Enf. Ana');
        insertRoutine.run(3, 'Avaliação Médica', '16:00', 'Pendente', 'Dr. Roberto');
        insertRoutine.finalize();

        // Inserir Observações
        const insertObs = db.prepare('INSERT INTO observations (patient_id, type, description, created_at) VALUES (?, ?, ?, ?)');
        insertObs.run(1, 'Evolução Médica', 'Paciente mantém quadro estável. Dieta aceita bem. Aguarda novos exames laboratoriais amanhã.', '2023-12-09T08:30:00Z');
        insertObs.finalize();

        console.log('Dados iniciais inseridos com sucesso!');
      } else {
        console.log('Banco de dados já contém informações.');
      }
      db.close();
    });
  });
};

// Executa (fechamento do db é feito dentro do callback do db.get)
seedData();
