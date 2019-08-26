export const isValidName = (name:string): boolean =>{
  const rules: RegExp = /^[А-Яа-яA-Za-z0-9_-]{3,16}$/; 
  return rules.test(name);
}