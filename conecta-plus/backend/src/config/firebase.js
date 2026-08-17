import admin from "firebase-admin";

let firebaseApp = null;

export function iniciarFirebase() {
    if (firebaseApp) {
        return firebaseApp;
    }

    if (!process.env.FIREBASE_PROJECT_ID) {
        console.log(
            "Firebase ainda não configurado. Utilizando modo local."
        );

        return null;
    }

    try {
        firebaseApp = admin.initializeApp({
            credential: admin.credential.cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(
                    /\\n/g,
                    "\n"
                )
            })
        });

        console.log("Firebase conectado com sucesso.");

        return firebaseApp;
    } catch (error) {
        console.error("Erro ao conectar ao Firebase:", error);

        return null;
    }
}