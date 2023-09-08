import * as dotenv from 'dotenv';
import express from "express";
import ViteExpress from "vite-express";
import fs from "fs";

dotenv.config();

const app = express();

// Endpoint pour ajouter un nom au fichier hellos.json
app.get('/hello/:nom', (req, res) => {
  console.log("htfy", req.params.nom)
  res.send("Bonjour " + req.params.nom)
});

const port = parseInt(process.env.PORT as string) || 3030;

ViteExpress.listen(app, port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});
