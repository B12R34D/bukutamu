const izinService = require('../services/izinService');

const getIzin = async (req, res) => {
    try {
        const izin = await izinService.getIzin();
        res.status(200).json({
            message: "Berhasil mengambil semua data izin",
            data: izin
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const createIzin = async (req, res) => {
    try {
        const izinId = await izinService.createIzin(req.body);
        res.status(201).json({ izinId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const getIzinById = async (req, res) => {
    const { izinId } = req.params;
    try {
        const izin = await izinService.getIzinById(izinId);
        if (!izin) {
            return res.status(404).json({ error: 'Izin tidak ditemukan' });
        }
        res.status(200).json({
            message: "Berhasil mengambil data izin",
            data: izin
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const updateIzinById = async (req, res) => {
    const { izinId } = req.params;
    try {
        const izin = await izinService.getIzinById(izinId);
        if (!izin) {
            return res.status(404).json({ error: 'Izin tidak ditemukan' });
        }

        // Logika update...

        await izinService.updateIzinById(izinId, izin);
        res.status(200).json({
            message: "Berhasil memperbarui Izin",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const deleteIzinById = async (req, res) => {
    const { izinId } = req.params;
    try {
        const izin = await izinService.getIzinById(izinId);
        if (!izin) {
            return res.status(404).json({ error: 'Izin tidak ditemukan' });
        }
        const deleted = await izinService.deleteIzinById(izinId);
        res.status(200).json({
            message: "Berhasil menghapus Izin",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getIzin,
    createIzin,
    getIzinById,
    updateIzinById,
    deleteIzinById,
};
