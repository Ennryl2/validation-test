const pay = Number(prompt("Please pay."));

if (pay >= 50 && pay <= 300) {
  alert(
    `The bill was $${Math.round(pay)} you have to tip $${Math.round(
      pay * 0.15
    )} your total is: $${Math.round(pay + pay * 0.15)}`
  );
} else if (isNaN(pay) || pay == "") {
  alert("Please insert a number.");
} else {
  alert(
    `The bill was $${Math.round(pay)} you have to tip $${Math.round(
      pay * 0.2
    )} your total is: $${Math.round(pay + pay * 0.2)}`
  );
}
