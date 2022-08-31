var selectedRow = null; 
function onFormSubmit(e) {
  event.preventDefault();
  
  var formData = readFormData();
  if (selectedRow === null) {
    
    insertNewRecord(formData);
  }
  else {
    insertNewRecord(formData);
  }
  console.log(formData)
  resetForm();
}

//Retrieving Data
function readFormData() {
  var formData = {};
  
  formData["quantity"] = document.getElementById('quantity').value;
  formData["unitCost"] = document.getElementById("unitCost").value;
  formData["totalCost"] = document.getElementById("totalCost").value;
  formData["description"] = document.getElementById("description").value;

  return formData;
}

//Inserting Data
function insertNewRecord(data) {
  var table = document.getElementById("rfqLine").getElementsByTagName('tbody')[0];
  console.log(document.getElementById("rfqLine"))

  var newRow = table.insertRow(table.length);
  var cell1 = newRow.insertCell(0);
      cell1.innerHTML = data.quantity;
  var cell2 = newRow.insertCell(1);
      cell2.innerHTML = data.unitCost;
  var cell3 = newRow.insertCell(2);
      cell3.innerHTML = data.totalCost;
  var cell4 = newRow.insertCell(3);
      cell4.innerHTML = data.description;
  var cell5 = newRow.insertCell(4);
      cell5.innerHTML = `<button class="btn btn-sm text-white"
                         style="background-color:#ea3d2f;" onClick="onDelete(this)">
                          <i class="fa-solid fa-trash-can"></i>
                        </button>`
}

//Deleting Data
function onDelete(td) {
  if (confirm('Do you want to delete this record?')) {
    row = td.parentElement.parentElement;
    document.getElementById('rfqLine').deleteRow(row.rowIndex);
  }
  resetForm();
}

//Resetting the Data
function resetForm() {
  document.getElementById('quantity').value = '';
  document.getElementById('unitCost').value = '';
  document.getElementById('totalCost').value = '';
  document.getElementById('description').value = '';
}