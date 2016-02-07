if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  Session.setDefault('sum', 0);


  
  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });


  Template.calc.helpers({
    sum: function () {
      return Session.get('sum');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });


    Template.calc.events({

    "submit form": function (event) {


      event.preventDefault();

      var a = parseInt(event.target.a.value);

       var b = parseInt(event.target.b.value);

      // Clear form

      Session.set('sum',  a + b);


      console.log(a);


      event.target.a.value = "";
      event.target.b.value = "";

     Meteor.call("calc", function(error, results) {
        console.log(results.content); //results.data should be a JSON object
    });

    }

  });
}

if (Meteor.isServer) {

  Meteor.startup(function () {
<<<<<<< HEAD
  /*HTTP.call( 'POST', 'http://jsonplaceholder.typicode.com/posts', { headers: { 'Content-Type' : 'application/json;charset=UTF-8'  } }, function( error, response ) {
    console.log(response)
  });*/
=======
>>>>>>> cacbfe8af9fe0c32511b7b6fc5d5acf81c159c75

  console.log("Server started")
});

  Meteor.methods({


  'calc': function (a, b) {

<<<<<<< HEAD
  var url = 'https://palbyp.pmservice.ibmcloud.com/pm/v1/score/addition?accesskey=xTPKrR8J/rEBEHzVoGfKZsI1ZxFoP6idoPkIojJMxupqvncuZFzmoBCP7iTHwY5HHxGxQ3pIogjgEOjN0TGDTcL0h32gVzPkwMbmHXNpi+GkQgZ6p+lt2AGo/g8p66bV3nWkl/5WtqQaT01IrXihgzKJ6iSsYCKch1YtvJeVcE0='
=======
  var url = 'https://palbyp.pmservice.ibmcloud.com/pm/v1/score/addition?accesskey=xTPKrR8J/rEBEHzVoGfKZsI1ZxFoP6idoPkIojJMxupqvncuZFzmoBCP7iTHwY5HHxGxQ3pIogjgEOjN0TGDTcL0h32gVzPkwMbmHXNpi+EeiOOg65iU48SsfY8Mnv2a9wLWhajGNS2stuWToEpRSjCk2/tVsJWBfDpmkYJAdbM=';

  var req = {"tablename":"additionInput.txt","header":'["A","B"]',"data":'[["3", "2"]]'};



  var input = {
    tablename : 'additionInput.txt',
    header : ['A', 'B'],
    data : [['1', '2']]
  };


  var options = {
    headers: {'Content-Type': 'application/json'},
    params: JSON.stringify(input)
  };
>>>>>>> cacbfe8af9fe0c32511b7b6fc5d5acf81c159c75

  
  
        

<<<<<<< HEAD
  var input = {
        tablename: 'additionInput.txt',
        header: [ 'A',  'B'],
        data: [[ 1,2]]
      };
  console.log(JSON.stringify(input))
  var header= { 'Content-Type' : 'application/json;charset=UTF-8'  }
  HTTP.call( 'POST', url, { headers: { 'Content-Type' : 'application/json;charset=UTF-8'  },data:input }, function( error, response ) {
        console.log("====================>")
=======
  HTTP.call( 'POST', url, { options }, function( error, response ) {
        console.log("YES WERE ARE SWAG")
>>>>>>> cacbfe8af9fe0c32511b7b6fc5d5acf81c159c75
        console.log(response)
        //console.log(error)

  });



  }

});


}
