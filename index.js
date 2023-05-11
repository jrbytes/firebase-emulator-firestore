const db = firebase.initializeApp(config).firestore()
if (location.hostname === "localhost") {
  db.settings({
    host: "localhost:8080",
    ssl: false
  });
}

