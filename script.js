        document.addEventListener("DOMContentLoaded", () => {
            const form = document.getElementById("form");
            const ageInput = document.getElementById("age");
            const nameInput = document.getElementById("name");
            const submitButton = document.getElementById("btn");

            form.addEventListener("submit", (event) => {
                event.preventDefault(); 

                const age = ageInput.value.trim();
                const name = nameInput.value.trim();

                if (!age || !name) {
                    alert("Both fields are required.");
                    return;
                }

                validateAge(name, parseInt(age))
                    .then((message) => {
                        alert(message);
                    })
                    .catch((errorMessage) => {
                        alert(errorMessage);
                    });
            });

            function validateAge(name, age) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (age > 18) {
                            resolve(`Welcome, ${name}. You can vote.`);
                        } else {
                            resolve(`Oh sorry ${name}. You aren't old enough.`);
                        }
                    }, 1000);
                });
            }
        });