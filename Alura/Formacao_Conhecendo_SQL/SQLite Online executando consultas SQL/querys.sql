SELECT * FROM Treinamento
WHERE curso LIKE 'O poder%';

SELECT * from Treinamento
where curso LIKE '%realizar%';

SELECT * from Colaboradores
where nome LIKE 'Isadora%';

SELECT * FROM HistoricoEmprego
WHERE cargo = 'Professor' AND
datatermino NOT NULL;

SELECT * FROM HistoricoEmprego
WHERE cargo = 'Oftalmologista' OR
cargo = 'Dermatologista';

SELECT * FROM HistoricoEmprego 
WHERE cargo IN ('Oftalmologista', 'Dermatologista', 'Professor');

SELECT * FROM HistoricoEmprego 
WHERE cargo NOT IN ('Oftalmologista', 'Dermatologista', 'Professor');

SELECT * FROM Treinamento
WHERE (curso LIKE 'O direito%' AND instituicao = 'da Rocha')
OR (curso LIKE 'O conforto%' AND instituicao = 'das Neves')
