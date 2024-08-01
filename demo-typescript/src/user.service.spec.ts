import { UserService } from './user.service';

jest.mock('./user.service', () => {
    return {
      UserService: jest.fn().mockImplementation(() => {
        return {
          getUser: jest.fn().mockResolvedValue({ id: '1', name: 'John Doe' }),
          updateUser: jest.fn().mockResolvedValue({ id: '1', name: 'Jane Doe' })
        };
      })
    };
  });