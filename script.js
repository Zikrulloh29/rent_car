function getFormValues() {
  return {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    address: document.getElementById("address").value,
    phone: document.getElementById("phone").value,
    //Abteilung_ID: document.getElementById("Abteilung_ID").value,
  };
}

async function add_data() {
  const formData = getFormValues();

  try {
    const response = await fetch("http://localhost:8000/add_data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data);

    get_data();
  } catch (error) {
    console.error("Fehler beim Senden der Daten:", error);
  }
}

async function get_data() {
  try {
    const dataUrl = "http://localhost:8000/get_data/my_table";
    const response = await fetch(dataUrl);
    const data = await response.json();

    const tbody = document.getElementById("data-id");
    let tableHtml = "";
    console.log(data);
    data.users.forEach((item) => {
      tableHtml += `<tr>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.address}</td>
        <td>${item.phone}</td>
        <td><button class="delete" value="${item.id}" onclick="delete_data(value)"> löschen </button></td>
        </tr>`;
    });
    tbody.innerHTML = tableHtml;
  } catch (error) {
    console.error("Fehler beim Abrufen der Daten:", error);
  }
}

get_data();

async function delete_data(id) {
  try {
    const response = await fetch(`http://localhost:8000/delete_data/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();
    console.log(data);

    get_data();
  } catch (error) {
    console.error("Fehler beim Löschen der Daten:", error);
  }
}
