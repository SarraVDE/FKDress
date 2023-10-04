// Récupérer les données du formulaire depuis contact_me.js
var name = $("input#name").val();
var email = $("input#email").val();
var phone = $("input#phone").val();
var message = $("textarea#message").val();

// Créer un Blob à partir des données récupérées
var formData = "Nom: " + name + "\nEmail: " + email + "\nTéléphone: " + phone + "\nMessage:\n" + message;
var blobData = new Blob([formData], { type: 'text/plain;charset=utf-8' });

// Utilisez FileSaver.js pour télécharger le Blob sous forme de fichier .txt
saveAs(blobData, 'donnees_formulaire.txt');

// Affichez le lien de téléchargement et simulez un clic
document.getElementById('downloadLink').style.display = 'block';
document.getElementById('downloadLink').click();