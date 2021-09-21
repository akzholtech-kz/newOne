export class City {
    public name: string;
    public discription: string;
    public imgPath: string;

    constructor(name: string, desc: string, imgpath: string){
        this.name = name;
        this.discription = desc;
        this.imgPath = imgpath;
    }
}