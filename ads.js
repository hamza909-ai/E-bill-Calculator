function calculateBill() {
  const units = parseFloat(document.getElementById("units").value);
  const result = document.getElementById("result");

  if (isNaN(units) || units < 0) {
    result.innerText = "❌ Invalid units";
    return;
  }

  let bill = 0;

  if (units <= 100) {
    bill = units * 10;
  } 
  else if (units <= 300) {
    bill = (100 * 10) + (units - 100) * 15;
  } 
  else if (units <= 500) {
    bill = (100 * 10) + (200 * 15) + (units - 300) * 20;
  } 
  else {
    bill = (100 * 10) + (200 * 15) + (200 * 20) + (units - 500) * 25;
  }

  result.innerText = `💡 Total Bill: Rs. ${bill}`;
}
