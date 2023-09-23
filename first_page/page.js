const firebaseConfig = {
    apiKey: "AIzaSyChuVRY0HkbApAndhwLPDGhqVgfNc26qiI",
    authDomain: "contactform-8aa02.firebaseapp.com",
    databaseURL: "https://contactform-8aa02-default-rtdb.firebaseio.com",
    projectId: "contactform-8aa02",
    storageBucket: "contactform-8aa02.appspot.com",
    messagingSenderId: "388726648624",
    appId: "1:388726648624:web:165a9dbdcec5856417e2f5"
  };

  firebase.initializeApp(firebaseConfig);
  var contactFormDB=firebase.database().ref("contactform");

  document.getElementById('contactform').addEventListener('submit',submitForm);

  function submitForm(e){
    e.preventDefault();

    var ID=getElementVal("ID");
    var name=getElementVal("name"); 
    var email=getElementVal("mail");
    var number=getElementVal("number");
    var detail=getElementVal("detail");
    var credit=getElementVal("credit");
    saveMessage(ID,name,email,number,detail,credit);

     document.getElementById("contactform").reset();
    
  }

const saveMessage=(ID,name,email,number,detail,credit) =>{
    var newContactForm =contactFormDB.push();

    newContactForm.set({
        ID:ID,
        name:name,
        email:email,
        number:number,
        detail:detail,
        credit:credit,
    });










};

  const getElementVal=(id)=>{
    return document.getElementById(id).value;
  }