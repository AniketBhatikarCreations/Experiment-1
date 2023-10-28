document.getElementById("generateWish").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const wish = document.getElementById("wish").value;
    const result = document.getElementById("result");

    if (name && wish) {
        result.innerHTML = `Happy Diwali, ${name}! ${wish}`;
    } else {
        result.innerHTML = "Please enter your name and Diwali wish.";
    }
});
