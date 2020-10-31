describe('To test the customer Details', () => {
    let cust = null;
    it('should check name is of valid format', () => {
        const cust = new customer("shahna", "xyz@gmail.com" , "31-10-2020","1234567890","745");
        expect(cust.name).toMatch("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$");        
        
    });
 
    it('should check whether name has min 5 characters', () => {
        const cust = new customer("ABCDE", "xyz@gmail.com" , "31-10-2020","1234567890","854");
        expect(cust.name.length).toBe(5);
        
    });
    it('should check for valid name',()=>
    {
        const cust = new customer("ABCDE", "xyz@gmail.com" , "31-10-2020","1234567890","100");
        expect(cust.phone.length).toBe(10);
    })
    it('should check for valid Email',()=>
    {
        const cust = new customer("ABCDE", "xyz@gmail.com" , "31-10-2020","1234567890","600");
        expect(cust.email).toMatch("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
    })
    
    it('should check bill amount is min 500', () => {
        const cust = new customer("ABCDE", "happy@gmail.com" , "10-12-2020","8281268966","600");
       expect(cust.billAmount).toBeGreaterThan(500);
        
    });
    it('should check if bill date is not more than one month old', () => {
        const cust = new customer("ABCDE", "xyzy@gmail.com" , "15-10-2020","8281268966","600");
        let date = cust.billDate;
        let x = getDate(date);
        let y = (x-1)*60 * 60 * 1000*24*30;
        let z = 60 * 60 * 1000*24*30;
        expect(y).toBeLesserThan(z);        
        
    });
    
    
});










