// Requirements
// 1. Create an interface called Person that contains the following properties
//      <> a firstName property of type string that is required.
//      <> an optional lastName property of type string.
// 2. Create a second interface named Contact that contains the following properties:
//      <> a phoneNumber property of type number that is required.
//      <> an optional email property of type string.
// 3. Create a class named ContactCard that implements both the Person and Contact interfaces.
// 4. Add a constructor to the ContactCard class that uses both the firstName and phoneNumber fields.
//      <> Don't forget to define the types of firstName and phoneNumber within ContactCard.
// 5. Add a method named sendMessage to the ContactCard class.
// 6. Add a console.log to the sendMessage method that sends a message to the console that uses firstName and phoneNumber.
// 7. Create a new instance of ContactCard and set it to the variable name of newPerson.
//      <> Define the firstName and phoneNumber fields as "Henry" and "1234567890"
// 8. Using the newPerson instance, call the sendMessage method.

interface Person {
    firstName: String;
    lastName?: string;

   }

interface Contact  {
    phoneNumber: number;
    email?: string;
}
class ContactCard implements Person, Contact {
    firstName: String;
    phoneNumber: number;

    constructor(firstName: String, phoneNumber: number ) {
            
            this.firstName = firstName
            this.phoneNumber = phoneNumber
    }
    sendMessage(): void {
        console.log( "First name: " + this.firstName + " Phone Number: " + this.phoneNumber)
    }
}

let henry = new ContactCard("Henry" , 1234567890);
henry.sendMessage()