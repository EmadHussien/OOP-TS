class Invoice 
{
    private Name : string ; 
    private item_number : string;
    private price : number ;
    private quantity : number ; 

    constructor(Name ?: string , item_number ?: string , price ?: number , quantity ?: number)
    {
        this.Name =  Name  || "";
        this.item_number = item_number || "" ;
        this.price = price ||  0; 
        this.quantity = quantity || 0;
    }
    


    set setName (Name : string) 
    {
        this.Name = Name;
    }
    get getName ():string
    {
        return this.Name;
    }

    set setItem_Number (item_number: string)
    {
        this.item_number = item_number ;
    }
    get getItem_Number () : string
    {
        return this.item_number ;
    }

    set setPrice (price : number)
    {
        this.price = price ;
    }
    get getPrice () : number
    {
        return this.price ;
    }

    set setQuantity (quantity: number)
    {
        this.quantity = quantity ;
    }
    get getQuantity () : number
    {
        return this.quantity ;
    }
    public GetTotalPrice () : number
    {
        return this.getPrice * this.getQuantity;
    }
    
    public Print (): void
    {
        console.log(this.Name +" " + this.getItem_Number + " " + this.price + " " + this.quantity);
    }
    public ToString(): string
    {
        return this.Name +" " + this.getItem_Number + " " + this.price + " " + this.quantity;
    }

}



let invoice:Invoice , invoice2 : Invoice;

invoice = new Invoice("Lenovo" , "Ideapad500C" , 6500 , 2) ;
console.log(invoice.GetTotalPrice())
