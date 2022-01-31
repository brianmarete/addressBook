const Contacts = [];

class Contact {
  constructor(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
  }

  fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

// Execute the following code only when the document is ready
$(document).ready(function() {
  // when the #new-contact form is submitted do this...
  $('#new-contact').submit(function(event) {
    // 1. Grab text from the input
    const firstName = $('#new-first-name').val();
    const lastName = $('#new-last-name').val();
    const phoneNumber = $('#phonenumber').val();

    // 2. Create a Contact object and add it to the contacts array
    const contact = new Contact(firstName, lastName, phoneNumber);

    // 3. We'll store the current length of the contacts array which we'll use to identifiy the current contact
    const length = Contacts.push(contact);

    // 4. Append the contact to the contacts list
    $('#contacts').append('<li id=' + length + '>' + contact.fullName() +'</li>');

    // When a list item is clicked, do this...
    $('li').click(function() {

      // Get the id of the current element that was clicked
      const id = this.id;

      // Use the id to access the contact object from the contacts array
      // We subtract 1 from the id to get the correct index (index starts at 0)
      const contact1 = Contacts[id - 1];
      
      //Set the text for displaying the details using the object properties
      $('.first-name').text(contact1.firstName);
      $('.last-name').text(contact1.lastName);
      $('.phone').text(contact1.phoneNumber);

      // Make the contact details visible
      $('#show-contact').show();
    });

    event.preventDefault();
  });

  
});