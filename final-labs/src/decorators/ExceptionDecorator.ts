export function HandleException(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value!;
    descriptor.value = function (...args: any[]) {
        try {
            return method.apply(this, args);
        } catch (error) {
            console.error(`Exception in ${propertyName}: ${error}`);
        }
    };
}