abstract class Component <T>{
    typeElement: T ;
    constructor (element:T){
        this.typeElement = element;
    };

    abstract configure():void;
};

export { Component }