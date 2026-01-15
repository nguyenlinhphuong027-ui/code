import express from "express";
import cors from "cors";
import admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json" assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/drugs", async (req, res) => {
  const snap = await db.collection("drugs").get();
  const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  res.json(data);
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
