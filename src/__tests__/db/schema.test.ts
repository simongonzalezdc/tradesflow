import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

describe('Database Schema', () => {
  const projectRoot = join(__dirname, '../../..');
  const schemaPath = join(projectRoot, 'prisma/schema.prisma');
  let schemaContent: string;

  beforeAll(() => {
    schemaContent = readFileSync(schemaPath, 'utf-8');
  });

  describe('Schema File', () => {
    it('should have prisma/schema.prisma file', () => {
      expect(existsSync(schemaPath)).toBe(true);
    });

    it('should define PostgreSQL provider', () => {
      expect(schemaContent).toContain('provider = "postgresql"');
    });

    it('should configure Prisma client output', () => {
      expect(schemaContent).toContain('output');
    });
  });

  describe('User Model', () => {
    it('should define User model', () => {
      expect(schemaContent).toContain('model User');
    });

    it('should have required User fields', () => {
      expect(schemaContent).toMatch(/id\s+String\s+@id/);
      expect(schemaContent).toContain('email');
      expect(schemaContent).toContain('password');
      expect(schemaContent).toContain('name');
      expect(schemaContent).toContain('role');
      expect(schemaContent).toContain('createdAt');
      expect(schemaContent).toContain('updatedAt');
    });

    it('should have unique email constraint', () => {
      expect(schemaContent).toContain('@unique');
    });
  });

  describe('Business Model', () => {
    it('should define Business model', () => {
      expect(schemaContent).toContain('model Business');
    });

    it('should have required Business fields', () => {
      expect(schemaContent).toContain('name');
      expect(schemaContent).toContain('slug');
      expect(schemaContent).toContain('phone');
    });

    it('should have relationship to User', () => {
      expect(schemaContent).toContain('users');
      expect(schemaContent).toContain('businessId');
    });
  });

  describe('Customer Model', () => {
    it('should define Customer model', () => {
      expect(schemaContent).toContain('model Customer');
    });

    it('should have required Customer fields', () => {
      expect(schemaContent).toContain('name');
      expect(schemaContent).toContain('phone');
      expect(schemaContent).toMatch(/email\s+String\?/);
    });

    it('should have relationship to Business', () => {
      expect(schemaContent).toContain('business Business');
    });
  });

  describe('Appointment Model', () => {
    it('should define Appointment model', () => {
      expect(schemaContent).toContain('model Appointment');
    });

    it('should have required Appointment fields', () => {
      expect(schemaContent).toContain('scheduledAt');
      expect(schemaContent).toContain('status');
      expect(schemaContent).toMatch(/notes\s+String\?/);
    });

    it('should have relationship to Customer', () => {
      expect(schemaContent).toMatch(/customer\s+Customer/);
    });

    it('should define AppointmentStatus enum', () => {
      expect(schemaContent).toContain('enum AppointmentStatus');
      expect(schemaContent).toContain('PENDING');
      expect(schemaContent).toContain('CONFIRMED');
      expect(schemaContent).toContain('COMPLETED');
      expect(schemaContent).toContain('CANCELLED');
    });
  });

  describe('Invoice Model', () => {
    it('should define Invoice model', () => {
      expect(schemaContent).toContain('model Invoice');
    });

    it('should have required Invoice fields', () => {
      expect(schemaContent).toContain('invoiceNumber');
      expect(schemaContent).toContain('status');
      expect(schemaContent).toContain('total');
      expect(schemaContent).toContain('issuedAt');
      expect(schemaContent).toContain('dueAt');
    });

    it('should define InvoiceStatus enum', () => {
      expect(schemaContent).toContain('enum InvoiceStatus');
      expect(schemaContent).toContain('DRAFT');
      expect(schemaContent).toContain('SENT');
      expect(schemaContent).toContain('PAID');
      expect(schemaContent).toContain('OVERDUE');
    });

    it('should define InvoiceItem model', () => {
      expect(schemaContent).toContain('model InvoiceItem');
    });
  });

  describe('Equipment Model (Equipment Passport)', () => {
    it('should define Equipment model', () => {
      expect(schemaContent).toContain('model Equipment');
    });

    it('should have required Equipment fields', () => {
      expect(schemaContent).toContain('type');
      expect(schemaContent).toContain('serialNumber');
      expect(schemaContent).toMatch(/installDate\s+DateTime\?/);
      expect(schemaContent).toContain('photos');
    });

    it('should define EquipmentType enum', () => {
      expect(schemaContent).toContain('enum EquipmentType');
      expect(schemaContent).toContain('HVAC');
      expect(schemaContent).toContain('PLUMBING');
      expect(schemaContent).toContain('ELECTRICAL');
      expect(schemaContent).toContain('APPLIANCE');
      expect(schemaContent).toContain('OTHER');
    });
  });

  describe('PriceBook Model', () => {
    it('should define PriceBookItem model', () => {
      expect(schemaContent).toContain('model PriceBookItem');
    });

    it('should have required PriceBookItem fields', () => {
      expect(schemaContent).toContain('serviceType');
      expect(schemaContent).toContain('description');
      expect(schemaContent).toContain('flatRate');
      expect(schemaContent).toContain('estimatedMinutes');
      expect(schemaContent).toContain('isActive');
    });
  });

  describe('Notification Model', () => {
    it('should define Notification model', () => {
      expect(schemaContent).toContain('model Notification');
    });

    it('should have required Notification fields', () => {
      expect(schemaContent).toContain('type');
      expect(schemaContent).toContain('status');
      expect(schemaContent).toContain('scheduledFor');
      expect(schemaContent).toMatch(/sentAt\s+DateTime\?/);
    });

    it('should define NotificationType enum', () => {
      expect(schemaContent).toContain('enum NotificationType');
      expect(schemaContent).toContain('REMINDER_24H');
      expect(schemaContent).toContain('REMINDER_48H');
      expect(schemaContent).toContain('CONFIRMATION');
    });

    it('should define NotificationStatus enum', () => {
      expect(schemaContent).toContain('enum NotificationStatus');
      expect(schemaContent).toContain('PENDING');
      expect(schemaContent).toContain('SENT');
      expect(schemaContent).toContain('FAILED');
    });
  });

  describe('ServiceHistory Model', () => {
    it('should define ServiceHistory model', () => {
      expect(schemaContent).toContain('model ServiceHistory');
    });

    it('should have required ServiceHistory fields', () => {
      expect(schemaContent).toContain('performedAt');
      expect(schemaContent).toContain('description');
      expect(schemaContent).toMatch(/technicianNotes\s+String\?/);
    });

    it('should link Equipment to Appointments', () => {
      expect(schemaContent).toMatch(/equipment\s+Equipment/);
      expect(schemaContent).toMatch(/appointment\s+Appointment/);
    });
  });

  describe('Indexes and Constraints', () => {
    it('should have index on Customer businessId', () => {
      expect(schemaContent).toContain('@@index([businessId])');
    });

    it('should have index on Appointment scheduledAt', () => {
      expect(schemaContent).toContain('@@index([scheduledAt])');
    });

    it('should have index on Invoice status', () => {
      expect(schemaContent).toContain('@@index([status])');
    });
  });
});
