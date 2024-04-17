const bukutamuService = require('../services/bukutamuService');

const getBukuTamu = async (req, res) => {
    try {
        const bukutamu = await bukutamuService.getBukuTamu();
        res.status(200).json({
            message: "Berhasil mengambil semua data buku tamu",
            data: bukutamu
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const createBukuTamu = async (req, res) => {
    try {
        const bukutamuId = await bukutamuService.createBukuTamu(req.body);
        res.status(201).json({ bukutamuId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const getBukuTamuById = async (req, res) => {
    const { bukutamuId } = req.params;
    try {
        const bukutamu = await bukutamuService.getBukuTamuById(bukutamuId);
        if (!bukutamu) {
            return res.status(404).json({ error: 'Buku Tamu tidak ditemukan' });
        }
        res.status(200).json({
            message: "Berhasil mengambil data buku tamu",
            data: bukutamu
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const updateBukuTamuById = async (req, res) => {
    const { bukutamuId } = req.params;
    try {
        const bukutamu = await bukutamuService.getBukuTamuById(bukutamuId);
        if (!bukutamu) {
            return res.status(404).json({ error: 'Buku Tamu tidak ditemukan' });
        }

        // Logika update...

        await bukutamuService.updateBukuTamuById(bukutamuId, bukutamu);
        res.status(200).json({
            message: "Berhasil memperbarui Buku Tamu",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const deleteBukuTamuById = async (req, res) => {
    const { bukutamuId } = req.params;
    try {
        const bukutamu = await bukutamuService.getBukuTamuById(bukutamuId);
        if (!bukutamu) {
            return res.status(404).json({ error: 'Buku Tamu tidak ditemukan' });
        }
        const deleted = await bukutamuService.deleteBukuTamuById(bukutamuId);
        res.status(200).json({
            message: "Berhasil menghapus Buku Tamu",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getBukuTamu,
    createBukuTamu,
    getBukuTamuById,
    updateBukuTamuById,
    deleteBukuTamuById,
};
