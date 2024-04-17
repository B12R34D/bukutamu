const pool = require('../config/database');


async function getBukuTamu() {
    const connection = await pool.getConnection();
    try {
        const [rows] = await connection.query('SELECT * FROM bukutamu');
        return rows;
    } finally {
        connection.release();
    }
}

async function createBukuTamu(bukutamu) {
    const connection = await pool.getConnection();
    try {
        const [rows] = await connection.query(
            'INSERT INTO bukutamu (name, phone, institution, purpose, meeting_with, date, time_in, time_out) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [bukutamu.name, bukutamu.phone, bukutamu.institution, bukutamu.purpose, bukutamu.meeting_with, bukutamu.date, bukutamu.time_in, bukutamu.time_out]
        );
        return rows.insertId;
    } finally {
        connection.release();
    }
}

async function getBukuTamuById(bukutamuId) {
    const connection = await pool.getConnection();
    try {
        const [rows] = await connection.query('SELECT * FROM bukutamu WHERE bukutamu_id = ?', [bukutamuId]);
        return rows[0];
    } finally {
        connection.release();
    }
}

async function updateBukuTamuById(bukutamuId, updatedbukutamu) {
    const connection = await pool.getConnection();
    try {
        await connection.query(
            'UPDATE bukutamu SET name = ?, phone = ?, institution = ? WHERE bukutamu_id = ?',
            [updatedbukutamu.name, updatedbukutamu.phone, updatedbukutamu.institution, bukutamuId]
        );
        return true;
    } finally {
        connection.release();
    }
}

async function deleteBukuTamuById(bukutamuId) {
    const connection = await pool.getConnection();
    try {
        await connection.query('DELETE FROM bukutamu WHERE bukutamu_id = ?', [bukutamuId]);
        return true;
    } finally {
        connection.release();
    }
}

module.exports = {
    getBukuTamu,
    createBukuTamu,
    getBukuTamuById,
    updateBukuTamuById,
    deleteBukuTamuById,
};
