let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = { 
    id: 1,
    name: "Laura",
    retire: (date: Date) => {
        console.log(date);
    }
};

//employee.name = "Laura";
//employee.id = 3; //you cant modify id as id property is readonly.