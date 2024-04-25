const handleFormSubmission = (Modal) => {
  const form = document.querySelector(".form");
  const formControls = form.querySelectorAll(".form__control");
  const modal = document.getElementById("modal-thank");

  if (!form || !formControls || !modal) {
    console.error("Один или несколько обязательных элементов не найдены");
    return;
  }

  formControls.forEach(function (control) {
    control.addEventListener("blur", handleBlur);
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    formControls.forEach(function (control) {
      const value = control.value.trim();

      if (control.name === "name" && value.length < 2) {
        addErrorClass(control);
        isValid = false;
      }

      if (control.name === "email" && !validateEmail(value)) {
        addErrorClass(control);
        isValid = false;
      }
    });

    if (isValid) {
      formControls.forEach(function (control) {
        removeErrorClass(control);
      });

      new Modal(modal).show();

      console.log("Форма отправлена:");
    } else {
      console.log("Форма не отправлена:");
    }

    const formData = new FormData(form);
    formData.forEach(function (value, key) {
      console.log(`${key}: ${value}`);
    });
  });
};

function addErrorClass(control) {
  control.classList.add("error");
}

function removeErrorClass(control) {
  control.classList.remove("error");
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function handleBlur(event) {
  const control = event.target;
  const value = control.value.trim();

  if (value !== "") {
    control.classList.add("filled");
  } else {
    control.classList.remove("filled");
  }
}

export default handleFormSubmission;
