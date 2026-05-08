import 'next-auth';
import { DefaultSession } from 'next-auth';
import { Role } from '@/generated/prisma';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role: Role;
      businessId: string;
    } & DefaultSession['user'];
  }

  interface User {
    id: string;
    role: Role;
    businessId: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role: Role;
    businessId: string;
  }
}
