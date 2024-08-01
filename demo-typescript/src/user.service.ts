export interface User {

}
export class UserService {
    getUser(userId: string): Promise<User> | void {
      // Implementation that fetches a user
    }
  
    updateUser(userId: string, userData: Partial<User>): Promise<User> | void {
      // Implementation that updates a user
    }
  }