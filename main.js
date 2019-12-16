// Paste the code from Firebase 
var config = {
apiKey: "AIzaSyAEIpbnJAHQTnoWSvS023nispOKGM9McNw",
    authDomain: "project-6627984544680450544.firebaseapp.com",
    databaseURL: "https://project-6627984544680450544.firebaseio.com",
    projectId: "project-6627984544680450544",
    storageBucket: "project-6627984544680450544.appspot.com",
    messagingSenderId: "236584147592"
    
   
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('contact77');

$('#contactForm2').submit(function (e) {
  e.preventDefault();

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: $('.name').val(),
	address: $('.add99').val(),
    sex: $('.sex99').val(),
    email: $('.email').val(),
    product1: $('.product1').val(),
    product2: $('.product2').val(),
    product3: $('.product3').val(),
    select: $('.select99').val(),
	

  });

  $('.success-message').show();

  $('#contactForm2')[0].reset();
});