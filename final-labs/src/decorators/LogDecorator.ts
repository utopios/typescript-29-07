export function Log(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value!;
    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${propertyName} with arguments: ${JSON.stringify(args)}`);
        const result = method.apply(this, args);
        console.log(`Called ${propertyName} and returned: ${JSON.stringify(result)}`);
        return result;
    };
}