const add=(a,b)=>a+b


test("Should add two numbers",()=>{
    const sum=add(3,4)
    expect(sum).toBe(7)
})