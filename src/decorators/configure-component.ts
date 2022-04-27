function ConfigureComponent (target:any){
    const element =  new target();
    element.configure();
    console.log(target.name)
};

export { ConfigureComponent };