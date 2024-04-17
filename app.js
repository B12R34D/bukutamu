require('dotenv').config();
const express = require('express');
const cors = require ( 'cors' );
const path = require('path');
const { bukutamuRoutes } = require ('./routes/bukutamuRoutes')
const { izinRoutes } = require ('./routes/izinRoutes')
const { logger } = require('./middleware/logger');
const app = express();
const PORT = 3000 || process.env.PORT;


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get("/", async (req, res) => {
	res.send("here is the response");
});

app.get("/hello", async (req, res) => {
	res.send("hello");
});

// buku tamu routes
app.use("/bukutamu", bukutamuRoutes);

// izin routes
app.use("/izin", izinRoutes);

// routes middleware
app.use(logger)

// Routes
const apiRouter = express.Router();
app.use('/api', apiRouter);

// /api/users
apiRouter.use('/bukutamu', bukutamuRoutes);
apiRouter.use('/izin', izinRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.all("*", async (req, res) => {
	res.json({
		message: "Routes you're looking is not found",
	});
});


app.listen(PORT, () => console.log('Server ready on port:', PORT));