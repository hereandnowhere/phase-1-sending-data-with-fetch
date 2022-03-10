function submitData(nameString, emailString){
    const formData = {
        name: nameString,
        email: emailString,
    };

    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
    };

    const fetchRequest = () => {
        fetch("http://localhost:3000/users", configurationObject)
        .then(function(response){
            return response.json();
        })
        .then(function(object){
            console.log(object);
            document.body.innerHTML = object.id;
        })
        .catch(function(error){
            alert('Unauthorized Access');
            console.log(error);
            document.body.innerHTML = error.message;
            console.log(error.message);
        });
    };
    return fetchRequest();
}

document.addEventListener('DOMContentLoaded', submitData);