const pool = require('../config/database');

async function fetchIzin() {
    const connection = await pool.getConnection();
    try {
        const [rows] = await connection.query('SELECT * FROM izin');
        return rows;
    } finally {
        connection.release();
    }
}

async function insertIzin(izin) {
    const connection = await pool.getConnection();
    try {
        const [rows] = await connection.query(
            'INSERT INTO izin (name, phone, divisi, purpose, date, time_in, time_out) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [izin.name, izin.phone, izin.divisi, izin.purpose, izin.date, izin.time_in, izin.time_out]
        );
        return rows.insertId;
    } finally {
        connection.release();
    }
}

async function fetchIzinById(izinId) {
    const connection = await pool.getConnection();
    try {
        const [rows] = await connection.query('SELECT * FROM izin WHERE izin_id = ?', [
            izinId,
        ]);
        return rows[0];
    } finally {
        connection.release();
    }
}

async function modifyIzinById(izinId, updatedizin) {
    const connection = await pool.getConnection();
    try {
        await connection.query(
            'UPDATE izin SET name = ?, phone = ?, divisi = ? WHERE izin_id = ?',
            [updatedizin.name, updatedizin.phone, updatedizin.divisi, izinId]
        );
        return true;
    } finally {
        connection.release();
    }
}

async function removeIzinById(izinId) {
    const connection = await pool.getConnection();
    try {
        await connection.query('DELETE FROM izin WHERE izin_id = ?', [izinId]);
        return true;
    } finally {
        connection.release();
    }
}

module.exports = {
    fetchIzin,
    insertIzin,
    fetchIzinById,
    modifyIzinById,
    removeIzinById,
};
