export function formatDate(date:Date, includeTime?: boolean):String;
export function formatDate(date:string, includeTime?: boolean):String;

export function formatDate(date: Date | string, includeTime:boolean = false) :string {
    let dateObj: Date = (typeof date === 'string') ? new Date(date) : date;
    const year:string = String(dateObj.getFullYear())
    const month: string = String(dateObj.getMonth() + 1)
    const day: string = String(dateObj.getDay())
    const minutes: string = String(dateObj.getMinutes())
    const hours: string = String(dateObj.getHours())
    
    const baseResult:string = `${year}-${month}-${day}`

    // if(includeTime) {
    //     return `${year}-${month}-${day} ${hours}:${minutes}`
    // }
    // return `${year}-${month}-${day}`

    return (includeTime) ? `${baseResult} ${hours}:${minutes}` : baseResult
}

export function greet(name: string, age?: number):string {
    if(age !== undefined) {
        return `Hello ${name} i'm ${age}`
    }
    return `Hello ${name}`
}

export function getFirst<T>(arr: T[]): T | undefined {
    return arr[0];
}

export function isString(obj: any): obj is string {
    return  typeof obj === 'string' 
}
