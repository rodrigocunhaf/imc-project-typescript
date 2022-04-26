abstract class Person {
    constructor(
        protected cpf:string,
        protected name:string,
    ) {};

    abstract get Cpf():string;

    abstract get Name():string;
};

export { Person };