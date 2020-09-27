const tombolItung = document.getElementById("itung");

tombolItung.addEventListener("click", () => {
  console.log("pressed");
  //variable angka satu
  angkaSatu = parseFloat(document.getElementById("angkaSatu").value);

  angkaDua = parseFloat(document.getElementById("angkaDua").value);

  op = document.getElementById("operator").value;
  console.log(op);

  if (isNaN(angkaSatu) || isNaN(angkaDua)) {
    alert("isi form dengan angka!");
  } else {
    if (op == "+") {
      total = angkaSatu + angkaDua;
    } else if (op == "-") {
      total = angkaSatu - angkaDua;
    } else if (op == "x") {
      total = angkaSatu * angkaDua;
    } else {
      total = angkaSatu / angkaDua;
    }
  }

  hasil.value = total;
});
