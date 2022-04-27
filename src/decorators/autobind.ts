function Autobind ( target: any , functionName: string, description: PropertyDescriptor ){
    const originalFunction = description.value;
    const adjustedFuntion:PropertyDescriptor = {
        get() {
            return originalFunction.bind(this);
        },
    };
    return adjustedFuntion;
};

export { Autobind };