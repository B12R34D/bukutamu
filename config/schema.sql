CREATE DATABASE IF NOT EXISTS combi;

CREATE TABLE IF NOT EXISTS bukutamu (
  bukutamu_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  institution VARCHAR(255) NOT NULL,
  purpose VARCHAR(255) NOT NULL,
  meeting_with VARCHAR(255) NOT NULL,
  date DATE,
  time_in TIME,
  time_out TIME
);

CREATE TABLE IF NOT EXISTS izin (
  izin_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  divisi VARCHAR(255) NOT NULL,
  purpose VARCHAR(255) NOT NULL,
  date DATE,
  time_in TIME,
  time_out TIME
);
INSERT INTO bukutamu (name, phone, institution, purpose, meeting_with, date, time_in, time_out) VALUES
  ('johndoe', '081546172173', 'unjani', 'rapat dengan produksi', 'bapak combi', '2024-04-15', '03:20', '04:21');

INSERT INTO izin (name, phone, divisi, purpose, date, time_in, time_out) VALUES
  ('johndoe', '081546172173', 'IT', 'rapat dengan produksi', '2024-04-15', '03:20', '04:21');