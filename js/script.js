const form = document.querySelector("#credit-card-form");
const fields = document.querySelectorAll(".required");
const fieldsMessages = document.querySelectorAll(".spans");

const cardNumberRegex = /^\d{4} \d{4} \d{4} \d{4}$/;

const monthRegex = /^(0[1-9]|1[0-2])$/; // MM (01-12)
const yearRegex = /^([0-9]{2})$/; //YY (00-99)
const cvcRegex = /^[0-9]{3,4}$/; //CVC (000 - 9999)

/** Functions */
function setError(index, message) {
  fields[index].style.border = "1px solid #bf0000";
  fieldsMessages[index].style.display = "block";
  fieldsMessages[index].textContent = `${message}`;
}

function setSuccess(index) {
  fields[index].style.border = "1px solid #006400";
  fieldsMessages[index].style.display = "none";
}

// NAME VALIDATE
function nameValidate() {
  if (fields[0].value === "") {
    setError(0, "Can't be blank");
    return false;
  } else {
    setSuccess(0);
    return true;
  }
}

//NUMBER CARD VALIDATE
function cNumberValidate() {
  if (fields[1].value === "") {
    setError(1, "Can't be blank");
    return false;
  }
  if (!cardNumberRegex.test(fields[1].value)) {
    setError(1, "Wrong format, numbers only");
    return false;
  } else {
    setSuccess(1);
    return true;
  }
}

// MONTH VALIDATE
function monthValidate() {
  if (fields[2].value === "") {
    setError(2, "Can't be blank");
    return false;
  }
  if (!monthRegex.test(fields[2].value)) {
    setError(2, "Wrong format, numbers only(MM)");
    return false;
  } else {
    setSuccess(2);
    return true;
  }
}

// YEAR VALIDATE
function yearValidate() {
  if (fields[3].value === "") {
    setError(3, "Can't be blank");
    return false;
  }
  if (!yearRegex.test(fields[3].value)) {
    setError(3, "Wrong format, numbers only (YY)");
    return false;
  } else {
    setSuccess(3);
    return true;
  }
}

// CVC
function cvcValidate() {
  if (fields[4].value === "") {
    setError(4, "Can't be blank");
    return false;
  }
  if (!cvcRegex.test(fields[4].value)) {
    setError(4, "Wrong format, numbers only");
    return false;
  } else {
    setSuccess(4);
    return true;
  }
}

// SUBMIT FORM
function confirmSubmit(event) {
  event.preventDefault();

  if (nameValidate() && cNumberValidate() && yearValidate() && cvcValidate()) {
    console.log("FORMULARIO VALIDO");
  }
}

/** Events */
document.querySelector("#btnConfirm").addEventListener("click", confirmSubmit);
