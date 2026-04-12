(function() {
    //find container
    const container=document.getElementById("Book-Now-container");
    if (!container) return;

    //create form
     const form=document.createElement("form");
     form.setAttribute("id","Book-Now-form");

     //form structure
    form.innerHTML= `
    <label>Name:</label><br>
    <input type="text" id="name"required><br>

    <label>Email:</label><br>
    <input type="email" id="email"required><br>

    <label>Date:</label><br>
    <input type="date" id="date"required><br>

    <label>Message:</label><br>
    <textarea id="message" rows="4" required></textarea><br>

    <button type="submit">Submit</button>
  `;
   //Handle submission
   form.addEventListener("submit",function(e) {
    e.preventDefault();

    const data={
       name: document.getElementById("name").value,
       email:document.getElementById("email").value,
       date:document.getElementById("date").value,
       message:document.getElementById("message").value,
       website:window.location.hostname
    };
    
    console.log("Booking submitted:",data);
    alert("Thank you! Your booking request has been submitted.");
   });


   //Attach form to container
    container.appendChild(form);
}());