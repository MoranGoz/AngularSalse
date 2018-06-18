export default class Company {
    private company_id: number;
    private name: string;
    private adrress: string;
    private country: string;
    constructor(company_id: number, name: string, adrress: string,country: string) {
        this.company_id = company_id;
        this.name = name;
        this.adrress = adrress;
        this.country = country;
    }
}