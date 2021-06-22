export function validateForm(keys, object) {
    return keys.map((value) => {
        let error = rulesValidation(value, object[value])
        return {
            [value]: error
        }
    })
}

function rulesValidation(key, value) {
    if(key === 'name' || key === 'designation') {
        return specialCharValidation(key, value)
    }
    return true;
}

function specialCharValidation(key, value) {
    if(value.includes('@')) {
        return 'Should not contain @'
    } else if(!value) {
        return `Please fill the ${key}`
    }
    return true;
}
