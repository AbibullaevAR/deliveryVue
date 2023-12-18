
export function textValidator(value: string){
    return true
}

export function numberValidator(value: string){
    return !Number.isNaN(Number(value))
}

export function emailValidator(value: string){
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return validRegex.test(value)
}

export function phoneValidator(value: string){
    const phonePattern = /^[0-9]{10}$/
    return phonePattern.test(value)
}