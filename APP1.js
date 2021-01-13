$("form").submit(function (event) {
  let name = $("#name").val();
  let email = $("#email").val();
  let message = $("#message").val();
  console.log(name, email, message);

  localStorage.setItem("name", name);
  localStorage.getItem("name");

  localStorage.setItem("email", email);
  localStorage.getItem("email");

  localStorage.setItem("message", message);
  localStorage.getItem("message");
});
