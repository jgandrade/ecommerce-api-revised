module.exports.capitalizeName = (name) => {
    let newName = name.split(" ").filter(e => e).map(e => e[0].toUpperCase().concat(e.slice(1, e.length))).join(" ").trim();
    return newName;
}

// https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
module.exports.validateEmail = (email) => {
    if (email.length > 50) {
        return false;
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

module.exports.validateNumber = (number) => {
    const re = /^(\+\d{1,3}[- ]?)?\d{11}$/;
    return re.test(String(number));
}


module.exports.createSlug = (str) => {
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2")
    str = str.replace(/[\W_]/g, " ");
    str = str.replace(/\s+/g, " ").trim();
    str = str.replace(/[ ]/g, "-").toLowerCase();
    return str + Math.floor(Math.random() * 9999);
}

