console.log(`                  Assignment                    `);

class Bank {
    bank_name
        location
        account_no
        ifsc_code
        interest_rate
    constructor(bank_name,location,account_no,ifsc_code,interest_rate) {
        this.bank_name = bank_name;
        this.location = location;
        this.account_no = account_no;
        this.ifsc_code = ifsc_code;
        this.interest_rate = interest_rate;
    }
}

const axis_bank =  new Bank("Axis Bank", "Mumbai", "12345", "AXIS123", "8%");
const sbi_bank =  new Bank( "SBI Bank", "Pune", "23456", "SBI123", "7%");
const icici_bank =  new Bank( "ICICI Bank", "Islampur", "34567", "ICICI123", "7.5%");
const kotak_bank =  new Bank("Kotak Bank", "Karad", "45678", "KOTAK123", "6%");
const hdfc_bank =  new Bank("HDFC Bank", "Sangli", "56789", "HDFC123", "6.5%");
const panjab_bank =  new Bank("Panjab Bank", "Kolhapur", "67890", "PANJAB123", "7%");

 console.log(axis_bank);
console.log(sbi_bank);
console.log(icici_bank);
console.log(kotak_bank);
console.log(panjab_bank);
const array_bank = [axis_bank , sbi_bank , icici_bank , kotak_bank , hdfc_bank,panjab_bank];
console.log(`====================================================================================================`);
console.log(`1.Add Bank Name And Location using array: `);
for(const bank of array_bank){
    console.log(`${bank.bank_name} ${bank.account_no}`);
}

console.log(`=========================================================================================`);
console.log(`2.Add Bank Name And ifsc code using set: `);
 const set_bank = new Set ();
for(const bank of array_bank){
    set_bank.add(bank);
}
for(const bank of set_bank){
    console.log(`${bank.bank_name} ${bank.ifsc_code}`);

}
console.log(`=========================================================================================`);
console.log(`3.Add All Bank details using Map: `);
const map_bank = new Map ();
map_bank.set(12345, axis_bank);
map_bank.set(23456, sbi_bank);
map_bank.set(34567, icici_bank);
map_bank.set(45678, kotak_bank);
map_bank.set(56789, hdfc_bank);
map_bank.set(67890, panjab_bank);

const map_keys = map_bank.keys();
for(const key of map_keys){
    const bank = map_bank.get(key);
    console.log(`${bank.bank_name} ${bank.location} ${bank.account_no} ${bank.ifsc_code} ${bank.interest_rate}`);
}
console.log(`=========================================================================================`);

console.log(`Q3:==>From the array(Step A) find the object which has name array: `);

for (const bank of array_bank){
    if (bank.bank_name == "Axis Bank"){
    console.log(`${bank.bank_name} ${bank.location} ${bank.account_no} ${bank.ifsc_code} ${bank.interest_rate}`);
}
}