
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Business
 * 
 */
export type Business = $Result.DefaultSelection<Prisma.$BusinessPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model InvoiceItem
 * 
 */
export type InvoiceItem = $Result.DefaultSelection<Prisma.$InvoiceItemPayload>
/**
 * Model Equipment
 * 
 */
export type Equipment = $Result.DefaultSelection<Prisma.$EquipmentPayload>
/**
 * Model ServiceHistory
 * 
 */
export type ServiceHistory = $Result.DefaultSelection<Prisma.$ServiceHistoryPayload>
/**
 * Model PriceBookItem
 * 
 */
export type PriceBookItem = $Result.DefaultSelection<Prisma.$PriceBookItemPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Consent
 * 
 */
export type Consent = $Result.DefaultSelection<Prisma.$ConsentPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  OWNER: 'OWNER',
  TECHNICIAN: 'TECHNICIAN',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const AppointmentStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  NO_SHOW: 'NO_SHOW'
};

export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus]


export const InvoiceStatus: {
  DRAFT: 'DRAFT',
  SENT: 'SENT',
  PAID: 'PAID',
  OVERDUE: 'OVERDUE',
  CANCELLED: 'CANCELLED'
};

export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus]


export const EquipmentType: {
  HVAC: 'HVAC',
  PLUMBING: 'PLUMBING',
  ELECTRICAL: 'ELECTRICAL',
  APPLIANCE: 'APPLIANCE',
  ROOFING: 'ROOFING',
  OTHER: 'OTHER'
};

export type EquipmentType = (typeof EquipmentType)[keyof typeof EquipmentType]


export const NotificationType: {
  REMINDER_24H: 'REMINDER_24H',
  REMINDER_48H: 'REMINDER_48H',
  CONFIRMATION: 'CONFIRMATION',
  FOLLOW_UP: 'FOLLOW_UP',
  INVOICE: 'INVOICE'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]


export const NotificationStatus: {
  PENDING: 'PENDING',
  SENT: 'SENT',
  FAILED: 'FAILED'
};

export type NotificationStatus = (typeof NotificationStatus)[keyof typeof NotificationStatus]


export const ConsentType: {
  PRIVACY_POLICY: 'PRIVACY_POLICY',
  TERMS_OF_SERVICE: 'TERMS_OF_SERVICE',
  MARKETING: 'MARKETING',
  NOTIFICATIONS_SMS: 'NOTIFICATIONS_SMS',
  NOTIFICATIONS_EMAIL: 'NOTIFICATIONS_EMAIL',
  PHOTO_CAPTURE: 'PHOTO_CAPTURE'
};

export type ConsentType = (typeof ConsentType)[keyof typeof ConsentType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type AppointmentStatus = $Enums.AppointmentStatus

export const AppointmentStatus: typeof $Enums.AppointmentStatus

export type InvoiceStatus = $Enums.InvoiceStatus

export const InvoiceStatus: typeof $Enums.InvoiceStatus

export type EquipmentType = $Enums.EquipmentType

export const EquipmentType: typeof $Enums.EquipmentType

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

export type NotificationStatus = $Enums.NotificationStatus

export const NotificationStatus: typeof $Enums.NotificationStatus

export type ConsentType = $Enums.ConsentType

export const ConsentType: typeof $Enums.ConsentType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.business`: Exposes CRUD operations for the **Business** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Businesses
    * const businesses = await prisma.business.findMany()
    * ```
    */
  get business(): Prisma.BusinessDelegate<ExtArgs>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs>;

  /**
   * `prisma.invoiceItem`: Exposes CRUD operations for the **InvoiceItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvoiceItems
    * const invoiceItems = await prisma.invoiceItem.findMany()
    * ```
    */
  get invoiceItem(): Prisma.InvoiceItemDelegate<ExtArgs>;

  /**
   * `prisma.equipment`: Exposes CRUD operations for the **Equipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipment
    * const equipment = await prisma.equipment.findMany()
    * ```
    */
  get equipment(): Prisma.EquipmentDelegate<ExtArgs>;

  /**
   * `prisma.serviceHistory`: Exposes CRUD operations for the **ServiceHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceHistories
    * const serviceHistories = await prisma.serviceHistory.findMany()
    * ```
    */
  get serviceHistory(): Prisma.ServiceHistoryDelegate<ExtArgs>;

  /**
   * `prisma.priceBookItem`: Exposes CRUD operations for the **PriceBookItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PriceBookItems
    * const priceBookItems = await prisma.priceBookItem.findMany()
    * ```
    */
  get priceBookItem(): Prisma.PriceBookItemDelegate<ExtArgs>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs>;

  /**
   * `prisma.consent`: Exposes CRUD operations for the **Consent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consents
    * const consents = await prisma.consent.findMany()
    * ```
    */
  get consent(): Prisma.ConsentDelegate<ExtArgs>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Business: 'Business',
    Customer: 'Customer',
    Appointment: 'Appointment',
    Invoice: 'Invoice',
    InvoiceItem: 'InvoiceItem',
    Equipment: 'Equipment',
    ServiceHistory: 'ServiceHistory',
    PriceBookItem: 'PriceBookItem',
    Notification: 'Notification',
    Consent: 'Consent',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "business" | "customer" | "appointment" | "invoice" | "invoiceItem" | "equipment" | "serviceHistory" | "priceBookItem" | "notification" | "consent" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Business: {
        payload: Prisma.$BusinessPayload<ExtArgs>
        fields: Prisma.BusinessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findFirst: {
            args: Prisma.BusinessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findMany: {
            args: Prisma.BusinessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          create: {
            args: Prisma.BusinessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          createMany: {
            args: Prisma.BusinessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          delete: {
            args: Prisma.BusinessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          update: {
            args: Prisma.BusinessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          deleteMany: {
            args: Prisma.BusinessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BusinessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          aggregate: {
            args: Prisma.BusinessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusiness>
          }
          groupBy: {
            args: Prisma.BusinessGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      InvoiceItem: {
        payload: Prisma.$InvoiceItemPayload<ExtArgs>
        fields: Prisma.InvoiceItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          findFirst: {
            args: Prisma.InvoiceItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          findMany: {
            args: Prisma.InvoiceItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>[]
          }
          create: {
            args: Prisma.InvoiceItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          createMany: {
            args: Prisma.InvoiceItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>[]
          }
          delete: {
            args: Prisma.InvoiceItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          update: {
            args: Prisma.InvoiceItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          deleteMany: {
            args: Prisma.InvoiceItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InvoiceItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          aggregate: {
            args: Prisma.InvoiceItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoiceItem>
          }
          groupBy: {
            args: Prisma.InvoiceItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceItemCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceItemCountAggregateOutputType> | number
          }
        }
      }
      Equipment: {
        payload: Prisma.$EquipmentPayload<ExtArgs>
        fields: Prisma.EquipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findFirst: {
            args: Prisma.EquipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findMany: {
            args: Prisma.EquipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          create: {
            args: Prisma.EquipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          createMany: {
            args: Prisma.EquipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          delete: {
            args: Prisma.EquipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          update: {
            args: Prisma.EquipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          deleteMany: {
            args: Prisma.EquipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EquipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          aggregate: {
            args: Prisma.EquipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipment>
          }
          groupBy: {
            args: Prisma.EquipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentCountArgs<ExtArgs>
            result: $Utils.Optional<EquipmentCountAggregateOutputType> | number
          }
        }
      }
      ServiceHistory: {
        payload: Prisma.$ServiceHistoryPayload<ExtArgs>
        fields: Prisma.ServiceHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceHistoryPayload>
          }
          findFirst: {
            args: Prisma.ServiceHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceHistoryPayload>
          }
          findMany: {
            args: Prisma.ServiceHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceHistoryPayload>[]
          }
          create: {
            args: Prisma.ServiceHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceHistoryPayload>
          }
          createMany: {
            args: Prisma.ServiceHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceHistoryPayload>[]
          }
          delete: {
            args: Prisma.ServiceHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceHistoryPayload>
          }
          update: {
            args: Prisma.ServiceHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ServiceHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceHistoryPayload>
          }
          aggregate: {
            args: Prisma.ServiceHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceHistory>
          }
          groupBy: {
            args: Prisma.ServiceHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceHistoryCountAggregateOutputType> | number
          }
        }
      }
      PriceBookItem: {
        payload: Prisma.$PriceBookItemPayload<ExtArgs>
        fields: Prisma.PriceBookItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceBookItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceBookItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceBookItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceBookItemPayload>
          }
          findFirst: {
            args: Prisma.PriceBookItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceBookItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceBookItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceBookItemPayload>
          }
          findMany: {
            args: Prisma.PriceBookItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceBookItemPayload>[]
          }
          create: {
            args: Prisma.PriceBookItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceBookItemPayload>
          }
          createMany: {
            args: Prisma.PriceBookItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PriceBookItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceBookItemPayload>[]
          }
          delete: {
            args: Prisma.PriceBookItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceBookItemPayload>
          }
          update: {
            args: Prisma.PriceBookItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceBookItemPayload>
          }
          deleteMany: {
            args: Prisma.PriceBookItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceBookItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PriceBookItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceBookItemPayload>
          }
          aggregate: {
            args: Prisma.PriceBookItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePriceBookItem>
          }
          groupBy: {
            args: Prisma.PriceBookItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceBookItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceBookItemCountArgs<ExtArgs>
            result: $Utils.Optional<PriceBookItemCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Consent: {
        payload: Prisma.$ConsentPayload<ExtArgs>
        fields: Prisma.ConsentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentPayload>
          }
          findFirst: {
            args: Prisma.ConsentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentPayload>
          }
          findMany: {
            args: Prisma.ConsentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentPayload>[]
          }
          create: {
            args: Prisma.ConsentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentPayload>
          }
          createMany: {
            args: Prisma.ConsentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentPayload>[]
          }
          delete: {
            args: Prisma.ConsentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentPayload>
          }
          update: {
            args: Prisma.ConsentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentPayload>
          }
          deleteMany: {
            args: Prisma.ConsentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConsentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsentPayload>
          }
          aggregate: {
            args: Prisma.ConsentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsent>
          }
          groupBy: {
            args: Prisma.ConsentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsentCountArgs<ExtArgs>
            result: $Utils.Optional<ConsentCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    appointments: number
    notifications: number
    serviceHistory: number
    consents: number
    auditLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | UserCountOutputTypeCountAppointmentsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    serviceHistory?: boolean | UserCountOutputTypeCountServiceHistoryArgs
    consents?: boolean | UserCountOutputTypeCountConsentsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountServiceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConsentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type BusinessCountOutputType
   */

  export type BusinessCountOutputType = {
    users: number
    customers: number
    priceBookItems: number
    notifications: number
  }

  export type BusinessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | BusinessCountOutputTypeCountUsersArgs
    customers?: boolean | BusinessCountOutputTypeCountCustomersArgs
    priceBookItems?: boolean | BusinessCountOutputTypeCountPriceBookItemsArgs
    notifications?: boolean | BusinessCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCountOutputType
     */
    select?: BusinessCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountPriceBookItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceBookItemWhereInput
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    appointments: number
    invoices: number
    equipment: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | CustomerCountOutputTypeCountAppointmentsArgs
    invoices?: boolean | CustomerCountOutputTypeCountInvoicesArgs
    equipment?: boolean | CustomerCountOutputTypeCountEquipmentArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountEquipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
  }


  /**
   * Count Type AppointmentCountOutputType
   */

  export type AppointmentCountOutputType = {
    invoices: number
    serviceHistory: number
    notifications: number
  }

  export type AppointmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | AppointmentCountOutputTypeCountInvoicesArgs
    serviceHistory?: boolean | AppointmentCountOutputTypeCountServiceHistoryArgs
    notifications?: boolean | AppointmentCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentCountOutputType
     */
    select?: AppointmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }

  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeCountServiceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceHistoryWhereInput
  }

  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type InvoiceCountOutputType
   */

  export type InvoiceCountOutputType = {
    items: number
  }

  export type InvoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | InvoiceCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceCountOutputType
     */
    select?: InvoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceItemWhereInput
  }


  /**
   * Count Type EquipmentCountOutputType
   */

  export type EquipmentCountOutputType = {
    serviceHistory: number
  }

  export type EquipmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceHistory?: boolean | EquipmentCountOutputTypeCountServiceHistoryArgs
  }

  // Custom InputTypes
  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentCountOutputType
     */
    select?: EquipmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeCountServiceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    businessId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    emailVerified: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    businessId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    emailVerified: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    isActive: number
    businessId: number
    createdAt: number
    updatedAt: number
    emailVerified: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    isActive?: true
    businessId?: true
    createdAt?: true
    updatedAt?: true
    emailVerified?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    isActive?: true
    businessId?: true
    createdAt?: true
    updatedAt?: true
    emailVerified?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    isActive?: true
    businessId?: true
    createdAt?: true
    updatedAt?: true
    emailVerified?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    role: $Enums.Role
    isActive: boolean
    businessId: string
    createdAt: Date
    updatedAt: Date
    emailVerified: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    businessId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerified?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    appointments?: boolean | User$appointmentsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    serviceHistory?: boolean | User$serviceHistoryArgs<ExtArgs>
    consents?: boolean | User$consentsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    businessId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerified?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    businessId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerified?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    appointments?: boolean | User$appointmentsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    serviceHistory?: boolean | User$serviceHistoryArgs<ExtArgs>
    consents?: boolean | User$consentsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      serviceHistory: Prisma.$ServiceHistoryPayload<ExtArgs>[]
      consents: Prisma.$ConsentPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      role: $Enums.Role
      isActive: boolean
      businessId: string
      createdAt: Date
      updatedAt: Date
      emailVerified: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    appointments<T extends User$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany"> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany"> | Null>
    serviceHistory<T extends User$serviceHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$serviceHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceHistoryPayload<ExtArgs>, T, "findMany"> | Null>
    consents<T extends User$consentsArgs<ExtArgs> = {}>(args?: Subset<T, User$consentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "findMany"> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly businessId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.appointments
   */
  export type User$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.serviceHistory
   */
  export type User$serviceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceHistory
     */
    select?: ServiceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceHistoryInclude<ExtArgs> | null
    where?: ServiceHistoryWhereInput
    orderBy?: ServiceHistoryOrderByWithRelationInput | ServiceHistoryOrderByWithRelationInput[]
    cursor?: ServiceHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceHistoryScalarFieldEnum | ServiceHistoryScalarFieldEnum[]
  }

  /**
   * User.consents
   */
  export type User$consentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consent
     */
    select?: ConsentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsentInclude<ExtArgs> | null
    where?: ConsentWhereInput
    orderBy?: ConsentOrderByWithRelationInput | ConsentOrderByWithRelationInput[]
    cursor?: ConsentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsentScalarFieldEnum | ConsentScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Business
   */

  export type AggregateBusiness = {
    _count: BusinessCountAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  export type BusinessMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    phone: string | null
    email: string | null
    address: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    logo: string | null
    primaryColor: string | null
    timezone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    phone: string | null
    email: string | null
    address: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    logo: string | null
    primaryColor: string | null
    timezone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    phone: number
    email: number
    address: number
    city: number
    state: number
    zipCode: number
    logo: number
    primaryColor: number
    timezone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BusinessMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    phone?: true
    email?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    logo?: true
    primaryColor?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    phone?: true
    email?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    logo?: true
    primaryColor?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    phone?: true
    email?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    logo?: true
    primaryColor?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BusinessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Business to aggregate.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Businesses
    **/
    _count?: true | BusinessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessMaxAggregateInputType
  }

  export type GetBusinessAggregateType<T extends BusinessAggregateArgs> = {
        [P in keyof T & keyof AggregateBusiness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusiness[P]>
      : GetScalarType<T[P], AggregateBusiness[P]>
  }




  export type BusinessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessWhereInput
    orderBy?: BusinessOrderByWithAggregationInput | BusinessOrderByWithAggregationInput[]
    by: BusinessScalarFieldEnum[] | BusinessScalarFieldEnum
    having?: BusinessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessCountAggregateInputType | true
    _min?: BusinessMinAggregateInputType
    _max?: BusinessMaxAggregateInputType
  }

  export type BusinessGroupByOutputType = {
    id: string
    name: string
    slug: string
    phone: string
    email: string | null
    address: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    logo: string | null
    primaryColor: string | null
    timezone: string
    createdAt: Date
    updatedAt: Date
    _count: BusinessCountAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  type GetBusinessGroupByPayload<T extends BusinessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessGroupByOutputType[P]>
        }
      >
    >


  export type BusinessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    logo?: boolean
    primaryColor?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Business$usersArgs<ExtArgs>
    customers?: boolean | Business$customersArgs<ExtArgs>
    priceBookItems?: boolean | Business$priceBookItemsArgs<ExtArgs>
    notifications?: boolean | Business$notificationsArgs<ExtArgs>
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    logo?: boolean
    primaryColor?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    logo?: boolean
    primaryColor?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BusinessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Business$usersArgs<ExtArgs>
    customers?: boolean | Business$customersArgs<ExtArgs>
    priceBookItems?: boolean | Business$priceBookItemsArgs<ExtArgs>
    notifications?: boolean | Business$notificationsArgs<ExtArgs>
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BusinessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BusinessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Business"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      customers: Prisma.$CustomerPayload<ExtArgs>[]
      priceBookItems: Prisma.$PriceBookItemPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      phone: string
      email: string | null
      address: string | null
      city: string | null
      state: string | null
      zipCode: string | null
      logo: string | null
      primaryColor: string | null
      timezone: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["business"]>
    composites: {}
  }

  type BusinessGetPayload<S extends boolean | null | undefined | BusinessDefaultArgs> = $Result.GetResult<Prisma.$BusinessPayload, S>

  type BusinessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BusinessFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BusinessCountAggregateInputType | true
    }

  export interface BusinessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Business'], meta: { name: 'Business' } }
    /**
     * Find zero or one Business that matches the filter.
     * @param {BusinessFindUniqueArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessFindUniqueArgs>(args: SelectSubset<T, BusinessFindUniqueArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Business that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BusinessFindUniqueOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Business that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessFindFirstArgs>(args?: SelectSubset<T, BusinessFindFirstArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Business that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Businesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Businesses
     * const businesses = await prisma.business.findMany()
     * 
     * // Get first 10 Businesses
     * const businesses = await prisma.business.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessWithIdOnly = await prisma.business.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessFindManyArgs>(args?: SelectSubset<T, BusinessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Business.
     * @param {BusinessCreateArgs} args - Arguments to create a Business.
     * @example
     * // Create one Business
     * const Business = await prisma.business.create({
     *   data: {
     *     // ... data to create a Business
     *   }
     * })
     * 
     */
    create<T extends BusinessCreateArgs>(args: SelectSubset<T, BusinessCreateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Businesses.
     * @param {BusinessCreateManyArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessCreateManyArgs>(args?: SelectSubset<T, BusinessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Businesses and returns the data saved in the database.
     * @param {BusinessCreateManyAndReturnArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Businesses and only return the `id`
     * const businessWithIdOnly = await prisma.business.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Business.
     * @param {BusinessDeleteArgs} args - Arguments to delete one Business.
     * @example
     * // Delete one Business
     * const Business = await prisma.business.delete({
     *   where: {
     *     // ... filter to delete one Business
     *   }
     * })
     * 
     */
    delete<T extends BusinessDeleteArgs>(args: SelectSubset<T, BusinessDeleteArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Business.
     * @param {BusinessUpdateArgs} args - Arguments to update one Business.
     * @example
     * // Update one Business
     * const business = await prisma.business.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessUpdateArgs>(args: SelectSubset<T, BusinessUpdateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Businesses.
     * @param {BusinessDeleteManyArgs} args - Arguments to filter Businesses to delete.
     * @example
     * // Delete a few Businesses
     * const { count } = await prisma.business.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessDeleteManyArgs>(args?: SelectSubset<T, BusinessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessUpdateManyArgs>(args: SelectSubset<T, BusinessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Business.
     * @param {BusinessUpsertArgs} args - Arguments to update or create a Business.
     * @example
     * // Update or create a Business
     * const business = await prisma.business.upsert({
     *   create: {
     *     // ... data to create a Business
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Business we want to update
     *   }
     * })
     */
    upsert<T extends BusinessUpsertArgs>(args: SelectSubset<T, BusinessUpsertArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCountArgs} args - Arguments to filter Businesses to count.
     * @example
     * // Count the number of Businesses
     * const count = await prisma.business.count({
     *   where: {
     *     // ... the filter for the Businesses we want to count
     *   }
     * })
    **/
    count<T extends BusinessCountArgs>(
      args?: Subset<T, BusinessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessAggregateArgs>(args: Subset<T, BusinessAggregateArgs>): Prisma.PrismaPromise<GetBusinessAggregateType<T>>

    /**
     * Group by Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessGroupByArgs['orderBy'] }
        : { orderBy?: BusinessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Business model
   */
  readonly fields: BusinessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Business.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Business$usersArgs<ExtArgs> = {}>(args?: Subset<T, Business$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    customers<T extends Business$customersArgs<ExtArgs> = {}>(args?: Subset<T, Business$customersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany"> | Null>
    priceBookItems<T extends Business$priceBookItemsArgs<ExtArgs> = {}>(args?: Subset<T, Business$priceBookItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceBookItemPayload<ExtArgs>, T, "findMany"> | Null>
    notifications<T extends Business$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Business$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Business model
   */ 
  interface BusinessFieldRefs {
    readonly id: FieldRef<"Business", 'String'>
    readonly name: FieldRef<"Business", 'String'>
    readonly slug: FieldRef<"Business", 'String'>
    readonly phone: FieldRef<"Business", 'String'>
    readonly email: FieldRef<"Business", 'String'>
    readonly address: FieldRef<"Business", 'String'>
    readonly city: FieldRef<"Business", 'String'>
    readonly state: FieldRef<"Business", 'String'>
    readonly zipCode: FieldRef<"Business", 'String'>
    readonly logo: FieldRef<"Business", 'String'>
    readonly primaryColor: FieldRef<"Business", 'String'>
    readonly timezone: FieldRef<"Business", 'String'>
    readonly createdAt: FieldRef<"Business", 'DateTime'>
    readonly updatedAt: FieldRef<"Business", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Business findUnique
   */
  export type BusinessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findUniqueOrThrow
   */
  export type BusinessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findFirst
   */
  export type BusinessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findFirstOrThrow
   */
  export type BusinessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findMany
   */
  export type BusinessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Businesses to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business create
   */
  export type BusinessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The data needed to create a Business.
     */
    data: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
  }

  /**
   * Business createMany
   */
  export type BusinessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Business createManyAndReturn
   */
  export type BusinessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Business update
   */
  export type BusinessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The data needed to update a Business.
     */
    data: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
    /**
     * Choose, which Business to update.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business updateMany
   */
  export type BusinessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Businesses.
     */
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyInput>
    /**
     * Filter which Businesses to update
     */
    where?: BusinessWhereInput
  }

  /**
   * Business upsert
   */
  export type BusinessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The filter to search for the Business to update in case it exists.
     */
    where: BusinessWhereUniqueInput
    /**
     * In case the Business found by the `where` argument doesn't exist, create a new Business with this data.
     */
    create: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
    /**
     * In case the Business was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
  }

  /**
   * Business delete
   */
  export type BusinessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter which Business to delete.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business deleteMany
   */
  export type BusinessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Businesses to delete
     */
    where?: BusinessWhereInput
  }

  /**
   * Business.users
   */
  export type Business$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Business.customers
   */
  export type Business$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Business.priceBookItems
   */
  export type Business$priceBookItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceBookItem
     */
    select?: PriceBookItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceBookItemInclude<ExtArgs> | null
    where?: PriceBookItemWhereInput
    orderBy?: PriceBookItemOrderByWithRelationInput | PriceBookItemOrderByWithRelationInput[]
    cursor?: PriceBookItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceBookItemScalarFieldEnum | PriceBookItemScalarFieldEnum[]
  }

  /**
   * Business.notifications
   */
  export type Business$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Business without action
   */
  export type BusinessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    address: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    notes: string | null
    businessId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    address: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    notes: string | null
    businessId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    address: number
    city: number
    state: number
    zipCode: number
    notes: number
    businessId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    notes?: true
    businessId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    notes?: true
    businessId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    notes?: true
    businessId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    name: string
    phone: string
    email: string | null
    address: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    notes: string | null
    businessId: string
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    notes?: boolean
    businessId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    appointments?: boolean | Customer$appointmentsArgs<ExtArgs>
    invoices?: boolean | Customer$invoicesArgs<ExtArgs>
    equipment?: boolean | Customer$equipmentArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    notes?: boolean
    businessId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    notes?: boolean
    businessId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    appointments?: boolean | Customer$appointmentsArgs<ExtArgs>
    invoices?: boolean | Customer$invoicesArgs<ExtArgs>
    equipment?: boolean | Customer$equipmentArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
      equipment: Prisma.$EquipmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string
      email: string | null
      address: string | null
      city: string | null
      state: string | null
      zipCode: string | null
      notes: string | null
      businessId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    appointments<T extends Customer$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany"> | Null>
    invoices<T extends Customer$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany"> | Null>
    equipment<T extends Customer$equipmentArgs<ExtArgs> = {}>(args?: Subset<T, Customer$equipmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly city: FieldRef<"Customer", 'String'>
    readonly state: FieldRef<"Customer", 'String'>
    readonly zipCode: FieldRef<"Customer", 'String'>
    readonly notes: FieldRef<"Customer", 'String'>
    readonly businessId: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer.appointments
   */
  export type Customer$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Customer.invoices
   */
  export type Customer$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Customer.equipment
   */
  export type Customer$equipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    cursor?: EquipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    duration: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    duration: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    userId: string | null
    scheduledAt: Date | null
    duration: number | null
    status: $Enums.AppointmentStatus | null
    notes: string | null
    confirmationCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    userId: string | null
    scheduledAt: Date | null
    duration: number | null
    status: $Enums.AppointmentStatus | null
    notes: string | null
    confirmationCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    customerId: number
    userId: number
    scheduledAt: number
    duration: number
    status: number
    notes: number
    confirmationCode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    duration?: true
  }

  export type AppointmentSumAggregateInputType = {
    duration?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    customerId?: true
    userId?: true
    scheduledAt?: true
    duration?: true
    status?: true
    notes?: true
    confirmationCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    customerId?: true
    userId?: true
    scheduledAt?: true
    duration?: true
    status?: true
    notes?: true
    confirmationCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    customerId?: true
    userId?: true
    scheduledAt?: true
    duration?: true
    status?: true
    notes?: true
    confirmationCode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    customerId: string
    userId: string | null
    scheduledAt: Date
    duration: number
    status: $Enums.AppointmentStatus
    notes: string | null
    confirmationCode: string | null
    createdAt: Date
    updatedAt: Date
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    userId?: boolean
    scheduledAt?: boolean
    duration?: boolean
    status?: boolean
    notes?: boolean
    confirmationCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    user?: boolean | Appointment$userArgs<ExtArgs>
    invoices?: boolean | Appointment$invoicesArgs<ExtArgs>
    serviceHistory?: boolean | Appointment$serviceHistoryArgs<ExtArgs>
    notifications?: boolean | Appointment$notificationsArgs<ExtArgs>
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    userId?: boolean
    scheduledAt?: boolean
    duration?: boolean
    status?: boolean
    notes?: boolean
    confirmationCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    user?: boolean | Appointment$userArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    customerId?: boolean
    userId?: boolean
    scheduledAt?: boolean
    duration?: boolean
    status?: boolean
    notes?: boolean
    confirmationCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    user?: boolean | Appointment$userArgs<ExtArgs>
    invoices?: boolean | Appointment$invoicesArgs<ExtArgs>
    serviceHistory?: boolean | Appointment$serviceHistoryArgs<ExtArgs>
    notifications?: boolean | Appointment$notificationsArgs<ExtArgs>
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    user?: boolean | Appointment$userArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
      serviceHistory: Prisma.$ServiceHistoryPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      userId: string | null
      scheduledAt: Date
      duration: number
      status: $Enums.AppointmentStatus
      notes: string | null
      confirmationCode: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends Appointment$userArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    invoices<T extends Appointment$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany"> | Null>
    serviceHistory<T extends Appointment$serviceHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$serviceHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceHistoryPayload<ExtArgs>, T, "findMany"> | Null>
    notifications<T extends Appointment$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Appointment model
   */ 
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly customerId: FieldRef<"Appointment", 'String'>
    readonly userId: FieldRef<"Appointment", 'String'>
    readonly scheduledAt: FieldRef<"Appointment", 'DateTime'>
    readonly duration: FieldRef<"Appointment", 'Int'>
    readonly status: FieldRef<"Appointment", 'AppointmentStatus'>
    readonly notes: FieldRef<"Appointment", 'String'>
    readonly confirmationCode: FieldRef<"Appointment", 'String'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
  }

  /**
   * Appointment.user
   */
  export type Appointment$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Appointment.invoices
   */
  export type Appointment$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Appointment.serviceHistory
   */
  export type Appointment$serviceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceHistory
     */
    select?: ServiceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceHistoryInclude<ExtArgs> | null
    where?: ServiceHistoryWhereInput
    orderBy?: ServiceHistoryOrderByWithRelationInput | ServiceHistoryOrderByWithRelationInput[]
    cursor?: ServiceHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceHistoryScalarFieldEnum | ServiceHistoryScalarFieldEnum[]
  }

  /**
   * Appointment.notifications
   */
  export type Appointment$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    subtotal: Decimal | null
    tax: Decimal | null
    total: Decimal | null
  }

  export type InvoiceSumAggregateOutputType = {
    subtotal: Decimal | null
    tax: Decimal | null
    total: Decimal | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    appointmentId: string | null
    invoiceNumber: string | null
    status: $Enums.InvoiceStatus | null
    subtotal: Decimal | null
    tax: Decimal | null
    total: Decimal | null
    notes: string | null
    issuedAt: Date | null
    dueAt: Date | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    appointmentId: string | null
    invoiceNumber: string | null
    status: $Enums.InvoiceStatus | null
    subtotal: Decimal | null
    tax: Decimal | null
    total: Decimal | null
    notes: string | null
    issuedAt: Date | null
    dueAt: Date | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    customerId: number
    appointmentId: number
    invoiceNumber: number
    status: number
    subtotal: number
    tax: number
    total: number
    notes: number
    issuedAt: number
    dueAt: number
    paidAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    subtotal?: true
    tax?: true
    total?: true
  }

  export type InvoiceSumAggregateInputType = {
    subtotal?: true
    tax?: true
    total?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    customerId?: true
    appointmentId?: true
    invoiceNumber?: true
    status?: true
    subtotal?: true
    tax?: true
    total?: true
    notes?: true
    issuedAt?: true
    dueAt?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    customerId?: true
    appointmentId?: true
    invoiceNumber?: true
    status?: true
    subtotal?: true
    tax?: true
    total?: true
    notes?: true
    issuedAt?: true
    dueAt?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    customerId?: true
    appointmentId?: true
    invoiceNumber?: true
    status?: true
    subtotal?: true
    tax?: true
    total?: true
    notes?: true
    issuedAt?: true
    dueAt?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: string
    customerId: string
    appointmentId: string | null
    invoiceNumber: string
    status: $Enums.InvoiceStatus
    subtotal: Decimal
    tax: Decimal
    total: Decimal
    notes: string | null
    issuedAt: Date | null
    dueAt: Date | null
    paidAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    appointmentId?: boolean
    invoiceNumber?: boolean
    status?: boolean
    subtotal?: boolean
    tax?: boolean
    total?: boolean
    notes?: boolean
    issuedAt?: boolean
    dueAt?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    appointment?: boolean | Invoice$appointmentArgs<ExtArgs>
    items?: boolean | Invoice$itemsArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    appointmentId?: boolean
    invoiceNumber?: boolean
    status?: boolean
    subtotal?: boolean
    tax?: boolean
    total?: boolean
    notes?: boolean
    issuedAt?: boolean
    dueAt?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    appointment?: boolean | Invoice$appointmentArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    customerId?: boolean
    appointmentId?: boolean
    invoiceNumber?: boolean
    status?: boolean
    subtotal?: boolean
    tax?: boolean
    total?: boolean
    notes?: boolean
    issuedAt?: boolean
    dueAt?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    appointment?: boolean | Invoice$appointmentArgs<ExtArgs>
    items?: boolean | Invoice$itemsArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    appointment?: boolean | Invoice$appointmentArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      appointment: Prisma.$AppointmentPayload<ExtArgs> | null
      items: Prisma.$InvoiceItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      appointmentId: string | null
      invoiceNumber: string
      status: $Enums.InvoiceStatus
      subtotal: Prisma.Decimal
      tax: Prisma.Decimal
      total: Prisma.Decimal
      notes: string | null
      issuedAt: Date | null
      dueAt: Date | null
      paidAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    appointment<T extends Invoice$appointmentArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$appointmentArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    items<T extends Invoice$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invoice model
   */ 
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'String'>
    readonly customerId: FieldRef<"Invoice", 'String'>
    readonly appointmentId: FieldRef<"Invoice", 'String'>
    readonly invoiceNumber: FieldRef<"Invoice", 'String'>
    readonly status: FieldRef<"Invoice", 'InvoiceStatus'>
    readonly subtotal: FieldRef<"Invoice", 'Decimal'>
    readonly tax: FieldRef<"Invoice", 'Decimal'>
    readonly total: FieldRef<"Invoice", 'Decimal'>
    readonly notes: FieldRef<"Invoice", 'String'>
    readonly issuedAt: FieldRef<"Invoice", 'DateTime'>
    readonly dueAt: FieldRef<"Invoice", 'DateTime'>
    readonly paidAt: FieldRef<"Invoice", 'DateTime'>
    readonly createdAt: FieldRef<"Invoice", 'DateTime'>
    readonly updatedAt: FieldRef<"Invoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
  }

  /**
   * Invoice.appointment
   */
  export type Invoice$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
  }

  /**
   * Invoice.items
   */
  export type Invoice$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    where?: InvoiceItemWhereInput
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    cursor?: InvoiceItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model InvoiceItem
   */

  export type AggregateInvoiceItem = {
    _count: InvoiceItemCountAggregateOutputType | null
    _avg: InvoiceItemAvgAggregateOutputType | null
    _sum: InvoiceItemSumAggregateOutputType | null
    _min: InvoiceItemMinAggregateOutputType | null
    _max: InvoiceItemMaxAggregateOutputType | null
  }

  export type InvoiceItemAvgAggregateOutputType = {
    quantity: number | null
    rate: Decimal | null
    amount: Decimal | null
  }

  export type InvoiceItemSumAggregateOutputType = {
    quantity: number | null
    rate: Decimal | null
    amount: Decimal | null
  }

  export type InvoiceItemMinAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    description: string | null
    quantity: number | null
    rate: Decimal | null
    amount: Decimal | null
    createdAt: Date | null
  }

  export type InvoiceItemMaxAggregateOutputType = {
    id: string | null
    invoiceId: string | null
    description: string | null
    quantity: number | null
    rate: Decimal | null
    amount: Decimal | null
    createdAt: Date | null
  }

  export type InvoiceItemCountAggregateOutputType = {
    id: number
    invoiceId: number
    description: number
    quantity: number
    rate: number
    amount: number
    createdAt: number
    _all: number
  }


  export type InvoiceItemAvgAggregateInputType = {
    quantity?: true
    rate?: true
    amount?: true
  }

  export type InvoiceItemSumAggregateInputType = {
    quantity?: true
    rate?: true
    amount?: true
  }

  export type InvoiceItemMinAggregateInputType = {
    id?: true
    invoiceId?: true
    description?: true
    quantity?: true
    rate?: true
    amount?: true
    createdAt?: true
  }

  export type InvoiceItemMaxAggregateInputType = {
    id?: true
    invoiceId?: true
    description?: true
    quantity?: true
    rate?: true
    amount?: true
    createdAt?: true
  }

  export type InvoiceItemCountAggregateInputType = {
    id?: true
    invoiceId?: true
    description?: true
    quantity?: true
    rate?: true
    amount?: true
    createdAt?: true
    _all?: true
  }

  export type InvoiceItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceItem to aggregate.
     */
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvoiceItems
    **/
    _count?: true | InvoiceItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceItemMaxAggregateInputType
  }

  export type GetInvoiceItemAggregateType<T extends InvoiceItemAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoiceItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoiceItem[P]>
      : GetScalarType<T[P], AggregateInvoiceItem[P]>
  }




  export type InvoiceItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceItemWhereInput
    orderBy?: InvoiceItemOrderByWithAggregationInput | InvoiceItemOrderByWithAggregationInput[]
    by: InvoiceItemScalarFieldEnum[] | InvoiceItemScalarFieldEnum
    having?: InvoiceItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceItemCountAggregateInputType | true
    _avg?: InvoiceItemAvgAggregateInputType
    _sum?: InvoiceItemSumAggregateInputType
    _min?: InvoiceItemMinAggregateInputType
    _max?: InvoiceItemMaxAggregateInputType
  }

  export type InvoiceItemGroupByOutputType = {
    id: string
    invoiceId: string
    description: string
    quantity: number
    rate: Decimal
    amount: Decimal
    createdAt: Date
    _count: InvoiceItemCountAggregateOutputType | null
    _avg: InvoiceItemAvgAggregateOutputType | null
    _sum: InvoiceItemSumAggregateOutputType | null
    _min: InvoiceItemMinAggregateOutputType | null
    _max: InvoiceItemMaxAggregateOutputType | null
  }

  type GetInvoiceItemGroupByPayload<T extends InvoiceItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceItemGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceItemGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    description?: boolean
    quantity?: boolean
    rate?: boolean
    amount?: boolean
    createdAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceItem"]>

  export type InvoiceItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    description?: boolean
    quantity?: boolean
    rate?: boolean
    amount?: boolean
    createdAt?: boolean
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceItem"]>

  export type InvoiceItemSelectScalar = {
    id?: boolean
    invoiceId?: boolean
    description?: boolean
    quantity?: boolean
    rate?: boolean
    amount?: boolean
    createdAt?: boolean
  }

  export type InvoiceItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }
  export type InvoiceItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
  }

  export type $InvoiceItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvoiceItem"
    objects: {
      invoice: Prisma.$InvoicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoiceId: string
      description: string
      quantity: number
      rate: Prisma.Decimal
      amount: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["invoiceItem"]>
    composites: {}
  }

  type InvoiceItemGetPayload<S extends boolean | null | undefined | InvoiceItemDefaultArgs> = $Result.GetResult<Prisma.$InvoiceItemPayload, S>

  type InvoiceItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InvoiceItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InvoiceItemCountAggregateInputType | true
    }

  export interface InvoiceItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvoiceItem'], meta: { name: 'InvoiceItem' } }
    /**
     * Find zero or one InvoiceItem that matches the filter.
     * @param {InvoiceItemFindUniqueArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceItemFindUniqueArgs>(args: SelectSubset<T, InvoiceItemFindUniqueArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InvoiceItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InvoiceItemFindUniqueOrThrowArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceItemFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InvoiceItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemFindFirstArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceItemFindFirstArgs>(args?: SelectSubset<T, InvoiceItemFindFirstArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InvoiceItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemFindFirstOrThrowArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceItemFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InvoiceItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvoiceItems
     * const invoiceItems = await prisma.invoiceItem.findMany()
     * 
     * // Get first 10 InvoiceItems
     * const invoiceItems = await prisma.invoiceItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceItemWithIdOnly = await prisma.invoiceItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceItemFindManyArgs>(args?: SelectSubset<T, InvoiceItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InvoiceItem.
     * @param {InvoiceItemCreateArgs} args - Arguments to create a InvoiceItem.
     * @example
     * // Create one InvoiceItem
     * const InvoiceItem = await prisma.invoiceItem.create({
     *   data: {
     *     // ... data to create a InvoiceItem
     *   }
     * })
     * 
     */
    create<T extends InvoiceItemCreateArgs>(args: SelectSubset<T, InvoiceItemCreateArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InvoiceItems.
     * @param {InvoiceItemCreateManyArgs} args - Arguments to create many InvoiceItems.
     * @example
     * // Create many InvoiceItems
     * const invoiceItem = await prisma.invoiceItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceItemCreateManyArgs>(args?: SelectSubset<T, InvoiceItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InvoiceItems and returns the data saved in the database.
     * @param {InvoiceItemCreateManyAndReturnArgs} args - Arguments to create many InvoiceItems.
     * @example
     * // Create many InvoiceItems
     * const invoiceItem = await prisma.invoiceItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InvoiceItems and only return the `id`
     * const invoiceItemWithIdOnly = await prisma.invoiceItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceItemCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a InvoiceItem.
     * @param {InvoiceItemDeleteArgs} args - Arguments to delete one InvoiceItem.
     * @example
     * // Delete one InvoiceItem
     * const InvoiceItem = await prisma.invoiceItem.delete({
     *   where: {
     *     // ... filter to delete one InvoiceItem
     *   }
     * })
     * 
     */
    delete<T extends InvoiceItemDeleteArgs>(args: SelectSubset<T, InvoiceItemDeleteArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InvoiceItem.
     * @param {InvoiceItemUpdateArgs} args - Arguments to update one InvoiceItem.
     * @example
     * // Update one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceItemUpdateArgs>(args: SelectSubset<T, InvoiceItemUpdateArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InvoiceItems.
     * @param {InvoiceItemDeleteManyArgs} args - Arguments to filter InvoiceItems to delete.
     * @example
     * // Delete a few InvoiceItems
     * const { count } = await prisma.invoiceItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceItemDeleteManyArgs>(args?: SelectSubset<T, InvoiceItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvoiceItems
     * const invoiceItem = await prisma.invoiceItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceItemUpdateManyArgs>(args: SelectSubset<T, InvoiceItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InvoiceItem.
     * @param {InvoiceItemUpsertArgs} args - Arguments to update or create a InvoiceItem.
     * @example
     * // Update or create a InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.upsert({
     *   create: {
     *     // ... data to create a InvoiceItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvoiceItem we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceItemUpsertArgs>(args: SelectSubset<T, InvoiceItemUpsertArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of InvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemCountArgs} args - Arguments to filter InvoiceItems to count.
     * @example
     * // Count the number of InvoiceItems
     * const count = await prisma.invoiceItem.count({
     *   where: {
     *     // ... the filter for the InvoiceItems we want to count
     *   }
     * })
    **/
    count<T extends InvoiceItemCountArgs>(
      args?: Subset<T, InvoiceItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvoiceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceItemAggregateArgs>(args: Subset<T, InvoiceItemAggregateArgs>): Prisma.PrismaPromise<GetInvoiceItemAggregateType<T>>

    /**
     * Group by InvoiceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvoiceItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceItemGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoiceItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InvoiceItem model
   */
  readonly fields: InvoiceItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvoiceItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoice<T extends InvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceDefaultArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InvoiceItem model
   */ 
  interface InvoiceItemFieldRefs {
    readonly id: FieldRef<"InvoiceItem", 'String'>
    readonly invoiceId: FieldRef<"InvoiceItem", 'String'>
    readonly description: FieldRef<"InvoiceItem", 'String'>
    readonly quantity: FieldRef<"InvoiceItem", 'Int'>
    readonly rate: FieldRef<"InvoiceItem", 'Decimal'>
    readonly amount: FieldRef<"InvoiceItem", 'Decimal'>
    readonly createdAt: FieldRef<"InvoiceItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InvoiceItem findUnique
   */
  export type InvoiceItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItem to fetch.
     */
    where: InvoiceItemWhereUniqueInput
  }

  /**
   * InvoiceItem findUniqueOrThrow
   */
  export type InvoiceItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItem to fetch.
     */
    where: InvoiceItemWhereUniqueInput
  }

  /**
   * InvoiceItem findFirst
   */
  export type InvoiceItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItem to fetch.
     */
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceItems.
     */
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceItems.
     */
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * InvoiceItem findFirstOrThrow
   */
  export type InvoiceItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItem to fetch.
     */
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceItems.
     */
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceItems.
     */
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * InvoiceItem findMany
   */
  export type InvoiceItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItems to fetch.
     */
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvoiceItems.
     */
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * InvoiceItem create
   */
  export type InvoiceItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * The data needed to create a InvoiceItem.
     */
    data: XOR<InvoiceItemCreateInput, InvoiceItemUncheckedCreateInput>
  }

  /**
   * InvoiceItem createMany
   */
  export type InvoiceItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvoiceItems.
     */
    data: InvoiceItemCreateManyInput | InvoiceItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InvoiceItem createManyAndReturn
   */
  export type InvoiceItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many InvoiceItems.
     */
    data: InvoiceItemCreateManyInput | InvoiceItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvoiceItem update
   */
  export type InvoiceItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * The data needed to update a InvoiceItem.
     */
    data: XOR<InvoiceItemUpdateInput, InvoiceItemUncheckedUpdateInput>
    /**
     * Choose, which InvoiceItem to update.
     */
    where: InvoiceItemWhereUniqueInput
  }

  /**
   * InvoiceItem updateMany
   */
  export type InvoiceItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InvoiceItems.
     */
    data: XOR<InvoiceItemUpdateManyMutationInput, InvoiceItemUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceItems to update
     */
    where?: InvoiceItemWhereInput
  }

  /**
   * InvoiceItem upsert
   */
  export type InvoiceItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * The filter to search for the InvoiceItem to update in case it exists.
     */
    where: InvoiceItemWhereUniqueInput
    /**
     * In case the InvoiceItem found by the `where` argument doesn't exist, create a new InvoiceItem with this data.
     */
    create: XOR<InvoiceItemCreateInput, InvoiceItemUncheckedCreateInput>
    /**
     * In case the InvoiceItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceItemUpdateInput, InvoiceItemUncheckedUpdateInput>
  }

  /**
   * InvoiceItem delete
   */
  export type InvoiceItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter which InvoiceItem to delete.
     */
    where: InvoiceItemWhereUniqueInput
  }

  /**
   * InvoiceItem deleteMany
   */
  export type InvoiceItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceItems to delete
     */
    where?: InvoiceItemWhereInput
  }

  /**
   * InvoiceItem without action
   */
  export type InvoiceItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
  }


  /**
   * Model Equipment
   */

  export type AggregateEquipment = {
    _count: EquipmentCountAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  export type EquipmentMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    type: $Enums.EquipmentType | null
    brand: string | null
    model: string | null
    serialNumber: string | null
    installDate: Date | null
    warrantyExpires: Date | null
    location: string | null
    notes: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipmentMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    type: $Enums.EquipmentType | null
    brand: string | null
    model: string | null
    serialNumber: string | null
    installDate: Date | null
    warrantyExpires: Date | null
    location: string | null
    notes: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EquipmentCountAggregateOutputType = {
    id: number
    customerId: number
    type: number
    brand: number
    model: number
    serialNumber: number
    installDate: number
    warrantyExpires: number
    location: number
    notes: number
    photos: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EquipmentMinAggregateInputType = {
    id?: true
    customerId?: true
    type?: true
    brand?: true
    model?: true
    serialNumber?: true
    installDate?: true
    warrantyExpires?: true
    location?: true
    notes?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipmentMaxAggregateInputType = {
    id?: true
    customerId?: true
    type?: true
    brand?: true
    model?: true
    serialNumber?: true
    installDate?: true
    warrantyExpires?: true
    location?: true
    notes?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EquipmentCountAggregateInputType = {
    id?: true
    customerId?: true
    type?: true
    brand?: true
    model?: true
    serialNumber?: true
    installDate?: true
    warrantyExpires?: true
    location?: true
    notes?: true
    photos?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EquipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to aggregate.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipment
    **/
    _count?: true | EquipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentMaxAggregateInputType
  }

  export type GetEquipmentAggregateType<T extends EquipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipment[P]>
      : GetScalarType<T[P], AggregateEquipment[P]>
  }




  export type EquipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithAggregationInput | EquipmentOrderByWithAggregationInput[]
    by: EquipmentScalarFieldEnum[] | EquipmentScalarFieldEnum
    having?: EquipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentCountAggregateInputType | true
    _min?: EquipmentMinAggregateInputType
    _max?: EquipmentMaxAggregateInputType
  }

  export type EquipmentGroupByOutputType = {
    id: string
    customerId: string
    type: $Enums.EquipmentType
    brand: string | null
    model: string | null
    serialNumber: string | null
    installDate: Date | null
    warrantyExpires: Date | null
    location: string | null
    notes: string | null
    photos: string[]
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: EquipmentCountAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  type GetEquipmentGroupByPayload<T extends EquipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    type?: boolean
    brand?: boolean
    model?: boolean
    serialNumber?: boolean
    installDate?: boolean
    warrantyExpires?: boolean
    location?: boolean
    notes?: boolean
    photos?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    serviceHistory?: boolean | Equipment$serviceHistoryArgs<ExtArgs>
    _count?: boolean | EquipmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    type?: boolean
    brand?: boolean
    model?: boolean
    serialNumber?: boolean
    installDate?: boolean
    warrantyExpires?: boolean
    location?: boolean
    notes?: boolean
    photos?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectScalar = {
    id?: boolean
    customerId?: boolean
    type?: boolean
    brand?: boolean
    model?: boolean
    serialNumber?: boolean
    installDate?: boolean
    warrantyExpires?: boolean
    location?: boolean
    notes?: boolean
    photos?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EquipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    serviceHistory?: boolean | Equipment$serviceHistoryArgs<ExtArgs>
    _count?: boolean | EquipmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $EquipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipment"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      serviceHistory: Prisma.$ServiceHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      type: $Enums.EquipmentType
      brand: string | null
      model: string | null
      serialNumber: string | null
      installDate: Date | null
      warrantyExpires: Date | null
      location: string | null
      notes: string | null
      photos: string[]
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["equipment"]>
    composites: {}
  }

  type EquipmentGetPayload<S extends boolean | null | undefined | EquipmentDefaultArgs> = $Result.GetResult<Prisma.$EquipmentPayload, S>

  type EquipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EquipmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EquipmentCountAggregateInputType | true
    }

  export interface EquipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipment'], meta: { name: 'Equipment' } }
    /**
     * Find zero or one Equipment that matches the filter.
     * @param {EquipmentFindUniqueArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipmentFindUniqueArgs>(args: SelectSubset<T, EquipmentFindUniqueArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Equipment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EquipmentFindUniqueOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipmentFindFirstArgs>(args?: SelectSubset<T, EquipmentFindFirstArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Equipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipment
     * const equipment = await prisma.equipment.findMany()
     * 
     * // Get first 10 Equipment
     * const equipment = await prisma.equipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipmentWithIdOnly = await prisma.equipment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipmentFindManyArgs>(args?: SelectSubset<T, EquipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Equipment.
     * @param {EquipmentCreateArgs} args - Arguments to create a Equipment.
     * @example
     * // Create one Equipment
     * const Equipment = await prisma.equipment.create({
     *   data: {
     *     // ... data to create a Equipment
     *   }
     * })
     * 
     */
    create<T extends EquipmentCreateArgs>(args: SelectSubset<T, EquipmentCreateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Equipment.
     * @param {EquipmentCreateManyArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipmentCreateManyArgs>(args?: SelectSubset<T, EquipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipment and returns the data saved in the database.
     * @param {EquipmentCreateManyAndReturnArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipment and only return the `id`
     * const equipmentWithIdOnly = await prisma.equipment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Equipment.
     * @param {EquipmentDeleteArgs} args - Arguments to delete one Equipment.
     * @example
     * // Delete one Equipment
     * const Equipment = await prisma.equipment.delete({
     *   where: {
     *     // ... filter to delete one Equipment
     *   }
     * })
     * 
     */
    delete<T extends EquipmentDeleteArgs>(args: SelectSubset<T, EquipmentDeleteArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Equipment.
     * @param {EquipmentUpdateArgs} args - Arguments to update one Equipment.
     * @example
     * // Update one Equipment
     * const equipment = await prisma.equipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipmentUpdateArgs>(args: SelectSubset<T, EquipmentUpdateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Equipment.
     * @param {EquipmentDeleteManyArgs} args - Arguments to filter Equipment to delete.
     * @example
     * // Delete a few Equipment
     * const { count } = await prisma.equipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipmentDeleteManyArgs>(args?: SelectSubset<T, EquipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipmentUpdateManyArgs>(args: SelectSubset<T, EquipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Equipment.
     * @param {EquipmentUpsertArgs} args - Arguments to update or create a Equipment.
     * @example
     * // Update or create a Equipment
     * const equipment = await prisma.equipment.upsert({
     *   create: {
     *     // ... data to create a Equipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipment we want to update
     *   }
     * })
     */
    upsert<T extends EquipmentUpsertArgs>(args: SelectSubset<T, EquipmentUpsertArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentCountArgs} args - Arguments to filter Equipment to count.
     * @example
     * // Count the number of Equipment
     * const count = await prisma.equipment.count({
     *   where: {
     *     // ... the filter for the Equipment we want to count
     *   }
     * })
    **/
    count<T extends EquipmentCountArgs>(
      args?: Subset<T, EquipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquipmentAggregateArgs>(args: Subset<T, EquipmentAggregateArgs>): Prisma.PrismaPromise<GetEquipmentAggregateType<T>>

    /**
     * Group by Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EquipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipment model
   */
  readonly fields: EquipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    serviceHistory<T extends Equipment$serviceHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Equipment$serviceHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceHistoryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Equipment model
   */ 
  interface EquipmentFieldRefs {
    readonly id: FieldRef<"Equipment", 'String'>
    readonly customerId: FieldRef<"Equipment", 'String'>
    readonly type: FieldRef<"Equipment", 'EquipmentType'>
    readonly brand: FieldRef<"Equipment", 'String'>
    readonly model: FieldRef<"Equipment", 'String'>
    readonly serialNumber: FieldRef<"Equipment", 'String'>
    readonly installDate: FieldRef<"Equipment", 'DateTime'>
    readonly warrantyExpires: FieldRef<"Equipment", 'DateTime'>
    readonly location: FieldRef<"Equipment", 'String'>
    readonly notes: FieldRef<"Equipment", 'String'>
    readonly photos: FieldRef<"Equipment", 'String[]'>
    readonly isActive: FieldRef<"Equipment", 'Boolean'>
    readonly createdAt: FieldRef<"Equipment", 'DateTime'>
    readonly updatedAt: FieldRef<"Equipment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Equipment findUnique
   */
  export type EquipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findUniqueOrThrow
   */
  export type EquipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findFirst
   */
  export type EquipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findFirstOrThrow
   */
  export type EquipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findMany
   */
  export type EquipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment create
   */
  export type EquipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Equipment.
     */
    data: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
  }

  /**
   * Equipment createMany
   */
  export type EquipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipment createManyAndReturn
   */
  export type EquipmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipment update
   */
  export type EquipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Equipment.
     */
    data: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
    /**
     * Choose, which Equipment to update.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment updateMany
   */
  export type EquipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
  }

  /**
   * Equipment upsert
   */
  export type EquipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Equipment to update in case it exists.
     */
    where: EquipmentWhereUniqueInput
    /**
     * In case the Equipment found by the `where` argument doesn't exist, create a new Equipment with this data.
     */
    create: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
    /**
     * In case the Equipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
  }

  /**
   * Equipment delete
   */
  export type EquipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter which Equipment to delete.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment deleteMany
   */
  export type EquipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to delete
     */
    where?: EquipmentWhereInput
  }

  /**
   * Equipment.serviceHistory
   */
  export type Equipment$serviceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceHistory
     */
    select?: ServiceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceHistoryInclude<ExtArgs> | null
    where?: ServiceHistoryWhereInput
    orderBy?: ServiceHistoryOrderByWithRelationInput | ServiceHistoryOrderByWithRelationInput[]
    cursor?: ServiceHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceHistoryScalarFieldEnum | ServiceHistoryScalarFieldEnum[]
  }

  /**
   * Equipment without action
   */
  export type EquipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
  }


  /**
   * Model ServiceHistory
   */

  export type AggregateServiceHistory = {
    _count: ServiceHistoryCountAggregateOutputType | null
    _min: ServiceHistoryMinAggregateOutputType | null
    _max: ServiceHistoryMaxAggregateOutputType | null
  }

  export type ServiceHistoryMinAggregateOutputType = {
    id: string | null
    equipmentId: string | null
    appointmentId: string | null
    userId: string | null
    performedAt: Date | null
    description: string | null
    technicianNotes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceHistoryMaxAggregateOutputType = {
    id: string | null
    equipmentId: string | null
    appointmentId: string | null
    userId: string | null
    performedAt: Date | null
    description: string | null
    technicianNotes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceHistoryCountAggregateOutputType = {
    id: number
    equipmentId: number
    appointmentId: number
    userId: number
    performedAt: number
    description: number
    technicianNotes: number
    photos: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceHistoryMinAggregateInputType = {
    id?: true
    equipmentId?: true
    appointmentId?: true
    userId?: true
    performedAt?: true
    description?: true
    technicianNotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceHistoryMaxAggregateInputType = {
    id?: true
    equipmentId?: true
    appointmentId?: true
    userId?: true
    performedAt?: true
    description?: true
    technicianNotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceHistoryCountAggregateInputType = {
    id?: true
    equipmentId?: true
    appointmentId?: true
    userId?: true
    performedAt?: true
    description?: true
    technicianNotes?: true
    photos?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceHistory to aggregate.
     */
    where?: ServiceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceHistories to fetch.
     */
    orderBy?: ServiceHistoryOrderByWithRelationInput | ServiceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceHistories
    **/
    _count?: true | ServiceHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceHistoryMaxAggregateInputType
  }

  export type GetServiceHistoryAggregateType<T extends ServiceHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceHistory[P]>
      : GetScalarType<T[P], AggregateServiceHistory[P]>
  }




  export type ServiceHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceHistoryWhereInput
    orderBy?: ServiceHistoryOrderByWithAggregationInput | ServiceHistoryOrderByWithAggregationInput[]
    by: ServiceHistoryScalarFieldEnum[] | ServiceHistoryScalarFieldEnum
    having?: ServiceHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceHistoryCountAggregateInputType | true
    _min?: ServiceHistoryMinAggregateInputType
    _max?: ServiceHistoryMaxAggregateInputType
  }

  export type ServiceHistoryGroupByOutputType = {
    id: string
    equipmentId: string
    appointmentId: string | null
    userId: string | null
    performedAt: Date
    description: string
    technicianNotes: string | null
    photos: string[]
    createdAt: Date
    updatedAt: Date
    _count: ServiceHistoryCountAggregateOutputType | null
    _min: ServiceHistoryMinAggregateOutputType | null
    _max: ServiceHistoryMaxAggregateOutputType | null
  }

  type GetServiceHistoryGroupByPayload<T extends ServiceHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ServiceHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    equipmentId?: boolean
    appointmentId?: boolean
    userId?: boolean
    performedAt?: boolean
    description?: boolean
    technicianNotes?: boolean
    photos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    appointment?: boolean | ServiceHistory$appointmentArgs<ExtArgs>
    user?: boolean | ServiceHistory$userArgs<ExtArgs>
  }, ExtArgs["result"]["serviceHistory"]>

  export type ServiceHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    equipmentId?: boolean
    appointmentId?: boolean
    userId?: boolean
    performedAt?: boolean
    description?: boolean
    technicianNotes?: boolean
    photos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    appointment?: boolean | ServiceHistory$appointmentArgs<ExtArgs>
    user?: boolean | ServiceHistory$userArgs<ExtArgs>
  }, ExtArgs["result"]["serviceHistory"]>

  export type ServiceHistorySelectScalar = {
    id?: boolean
    equipmentId?: boolean
    appointmentId?: boolean
    userId?: boolean
    performedAt?: boolean
    description?: boolean
    technicianNotes?: boolean
    photos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    appointment?: boolean | ServiceHistory$appointmentArgs<ExtArgs>
    user?: boolean | ServiceHistory$userArgs<ExtArgs>
  }
  export type ServiceHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
    appointment?: boolean | ServiceHistory$appointmentArgs<ExtArgs>
    user?: boolean | ServiceHistory$userArgs<ExtArgs>
  }

  export type $ServiceHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceHistory"
    objects: {
      equipment: Prisma.$EquipmentPayload<ExtArgs>
      appointment: Prisma.$AppointmentPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      equipmentId: string
      appointmentId: string | null
      userId: string | null
      performedAt: Date
      description: string
      technicianNotes: string | null
      photos: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["serviceHistory"]>
    composites: {}
  }

  type ServiceHistoryGetPayload<S extends boolean | null | undefined | ServiceHistoryDefaultArgs> = $Result.GetResult<Prisma.$ServiceHistoryPayload, S>

  type ServiceHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ServiceHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServiceHistoryCountAggregateInputType | true
    }

  export interface ServiceHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceHistory'], meta: { name: 'ServiceHistory' } }
    /**
     * Find zero or one ServiceHistory that matches the filter.
     * @param {ServiceHistoryFindUniqueArgs} args - Arguments to find a ServiceHistory
     * @example
     * // Get one ServiceHistory
     * const serviceHistory = await prisma.serviceHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceHistoryFindUniqueArgs>(args: SelectSubset<T, ServiceHistoryFindUniqueArgs<ExtArgs>>): Prisma__ServiceHistoryClient<$Result.GetResult<Prisma.$ServiceHistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ServiceHistory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ServiceHistoryFindUniqueOrThrowArgs} args - Arguments to find a ServiceHistory
     * @example
     * // Get one ServiceHistory
     * const serviceHistory = await prisma.serviceHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceHistoryClient<$Result.GetResult<Prisma.$ServiceHistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ServiceHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceHistoryFindFirstArgs} args - Arguments to find a ServiceHistory
     * @example
     * // Get one ServiceHistory
     * const serviceHistory = await prisma.serviceHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceHistoryFindFirstArgs>(args?: SelectSubset<T, ServiceHistoryFindFirstArgs<ExtArgs>>): Prisma__ServiceHistoryClient<$Result.GetResult<Prisma.$ServiceHistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ServiceHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceHistoryFindFirstOrThrowArgs} args - Arguments to find a ServiceHistory
     * @example
     * // Get one ServiceHistory
     * const serviceHistory = await prisma.serviceHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceHistoryClient<$Result.GetResult<Prisma.$ServiceHistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ServiceHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceHistories
     * const serviceHistories = await prisma.serviceHistory.findMany()
     * 
     * // Get first 10 ServiceHistories
     * const serviceHistories = await prisma.serviceHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceHistoryWithIdOnly = await prisma.serviceHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceHistoryFindManyArgs>(args?: SelectSubset<T, ServiceHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceHistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ServiceHistory.
     * @param {ServiceHistoryCreateArgs} args - Arguments to create a ServiceHistory.
     * @example
     * // Create one ServiceHistory
     * const ServiceHistory = await prisma.serviceHistory.create({
     *   data: {
     *     // ... data to create a ServiceHistory
     *   }
     * })
     * 
     */
    create<T extends ServiceHistoryCreateArgs>(args: SelectSubset<T, ServiceHistoryCreateArgs<ExtArgs>>): Prisma__ServiceHistoryClient<$Result.GetResult<Prisma.$ServiceHistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ServiceHistories.
     * @param {ServiceHistoryCreateManyArgs} args - Arguments to create many ServiceHistories.
     * @example
     * // Create many ServiceHistories
     * const serviceHistory = await prisma.serviceHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceHistoryCreateManyArgs>(args?: SelectSubset<T, ServiceHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceHistories and returns the data saved in the database.
     * @param {ServiceHistoryCreateManyAndReturnArgs} args - Arguments to create many ServiceHistories.
     * @example
     * // Create many ServiceHistories
     * const serviceHistory = await prisma.serviceHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceHistories and only return the `id`
     * const serviceHistoryWithIdOnly = await prisma.serviceHistory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceHistoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ServiceHistory.
     * @param {ServiceHistoryDeleteArgs} args - Arguments to delete one ServiceHistory.
     * @example
     * // Delete one ServiceHistory
     * const ServiceHistory = await prisma.serviceHistory.delete({
     *   where: {
     *     // ... filter to delete one ServiceHistory
     *   }
     * })
     * 
     */
    delete<T extends ServiceHistoryDeleteArgs>(args: SelectSubset<T, ServiceHistoryDeleteArgs<ExtArgs>>): Prisma__ServiceHistoryClient<$Result.GetResult<Prisma.$ServiceHistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ServiceHistory.
     * @param {ServiceHistoryUpdateArgs} args - Arguments to update one ServiceHistory.
     * @example
     * // Update one ServiceHistory
     * const serviceHistory = await prisma.serviceHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceHistoryUpdateArgs>(args: SelectSubset<T, ServiceHistoryUpdateArgs<ExtArgs>>): Prisma__ServiceHistoryClient<$Result.GetResult<Prisma.$ServiceHistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ServiceHistories.
     * @param {ServiceHistoryDeleteManyArgs} args - Arguments to filter ServiceHistories to delete.
     * @example
     * // Delete a few ServiceHistories
     * const { count } = await prisma.serviceHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceHistoryDeleteManyArgs>(args?: SelectSubset<T, ServiceHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceHistories
     * const serviceHistory = await prisma.serviceHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceHistoryUpdateManyArgs>(args: SelectSubset<T, ServiceHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServiceHistory.
     * @param {ServiceHistoryUpsertArgs} args - Arguments to update or create a ServiceHistory.
     * @example
     * // Update or create a ServiceHistory
     * const serviceHistory = await prisma.serviceHistory.upsert({
     *   create: {
     *     // ... data to create a ServiceHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceHistory we want to update
     *   }
     * })
     */
    upsert<T extends ServiceHistoryUpsertArgs>(args: SelectSubset<T, ServiceHistoryUpsertArgs<ExtArgs>>): Prisma__ServiceHistoryClient<$Result.GetResult<Prisma.$ServiceHistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ServiceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceHistoryCountArgs} args - Arguments to filter ServiceHistories to count.
     * @example
     * // Count the number of ServiceHistories
     * const count = await prisma.serviceHistory.count({
     *   where: {
     *     // ... the filter for the ServiceHistories we want to count
     *   }
     * })
    **/
    count<T extends ServiceHistoryCountArgs>(
      args?: Subset<T, ServiceHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceHistoryAggregateArgs>(args: Subset<T, ServiceHistoryAggregateArgs>): Prisma.PrismaPromise<GetServiceHistoryAggregateType<T>>

    /**
     * Group by ServiceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ServiceHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceHistory model
   */
  readonly fields: ServiceHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipment<T extends EquipmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentDefaultArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    appointment<T extends ServiceHistory$appointmentArgs<ExtArgs> = {}>(args?: Subset<T, ServiceHistory$appointmentArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    user<T extends ServiceHistory$userArgs<ExtArgs> = {}>(args?: Subset<T, ServiceHistory$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceHistory model
   */ 
  interface ServiceHistoryFieldRefs {
    readonly id: FieldRef<"ServiceHistory", 'String'>
    readonly equipmentId: FieldRef<"ServiceHistory", 'String'>
    readonly appointmentId: FieldRef<"ServiceHistory", 'String'>
    readonly userId: FieldRef<"ServiceHistory", 'String'>
    readonly performedAt: FieldRef<"ServiceHistory", 'DateTime'>
    readonly description: FieldRef<"ServiceHistory", 'String'>
    readonly technicianNotes: FieldRef<"ServiceHistory", 'String'>
    readonly photos: FieldRef<"ServiceHistory", 'String[]'>
    readonly createdAt: FieldRef<"ServiceHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"ServiceHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceHistory findUnique
   */
  export type ServiceHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceHistory
     */
    select?: ServiceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ServiceHistory to fetch.
     */
    where: ServiceHistoryWhereUniqueInput
  }

  /**
   * ServiceHistory findUniqueOrThrow
   */
  export type ServiceHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceHistory
     */
    select?: ServiceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ServiceHistory to fetch.
     */
    where: ServiceHistoryWhereUniqueInput
  }

  /**
   * ServiceHistory findFirst
   */
  export type ServiceHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceHistory
     */
    select?: ServiceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ServiceHistory to fetch.
     */
    where?: ServiceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceHistories to fetch.
     */
    orderBy?: ServiceHistoryOrderByWithRelationInput | ServiceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceHistories.
     */
    cursor?: ServiceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceHistories.
     */
    distinct?: ServiceHistoryScalarFieldEnum | ServiceHistoryScalarFieldEnum[]
  }

  /**
   * ServiceHistory findFirstOrThrow
   */
  export type ServiceHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceHistory
     */
    select?: ServiceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ServiceHistory to fetch.
     */
    where?: ServiceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceHistories to fetch.
     */
    orderBy?: ServiceHistoryOrderByWithRelationInput | ServiceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceHistories.
     */
    cursor?: ServiceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceHistories.
     */
    distinct?: ServiceHistoryScalarFieldEnum | ServiceHistoryScalarFieldEnum[]
  }

  /**
   * ServiceHistory findMany
   */
  export type ServiceHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceHistory
     */
    select?: ServiceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ServiceHistories to fetch.
     */
    where?: ServiceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceHistories to fetch.
     */
    orderBy?: ServiceHistoryOrderByWithRelationInput | ServiceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceHistories.
     */
    cursor?: ServiceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceHistories.
     */
    skip?: number
    distinct?: ServiceHistoryScalarFieldEnum | ServiceHistoryScalarFieldEnum[]
  }

  /**
   * ServiceHistory create
   */
  export type ServiceHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceHistory
     */
    select?: ServiceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceHistory.
     */
    data: XOR<ServiceHistoryCreateInput, ServiceHistoryUncheckedCreateInput>
  }

  /**
   * ServiceHistory createMany
   */
  export type ServiceHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceHistories.
     */
    data: ServiceHistoryCreateManyInput | ServiceHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceHistory createManyAndReturn
   */
  export type ServiceHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceHistory
     */
    select?: ServiceHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ServiceHistories.
     */
    data: ServiceHistoryCreateManyInput | ServiceHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceHistory update
   */
  export type ServiceHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceHistory
     */
    select?: ServiceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceHistory.
     */
    data: XOR<ServiceHistoryUpdateInput, ServiceHistoryUncheckedUpdateInput>
    /**
     * Choose, which ServiceHistory to update.
     */
    where: ServiceHistoryWhereUniqueInput
  }

  /**
   * ServiceHistory updateMany
   */
  export type ServiceHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceHistories.
     */
    data: XOR<ServiceHistoryUpdateManyMutationInput, ServiceHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ServiceHistories to update
     */
    where?: ServiceHistoryWhereInput
  }

  /**
   * ServiceHistory upsert
   */
  export type ServiceHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceHistory
     */
    select?: ServiceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceHistory to update in case it exists.
     */
    where: ServiceHistoryWhereUniqueInput
    /**
     * In case the ServiceHistory found by the `where` argument doesn't exist, create a new ServiceHistory with this data.
     */
    create: XOR<ServiceHistoryCreateInput, ServiceHistoryUncheckedCreateInput>
    /**
     * In case the ServiceHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceHistoryUpdateInput, ServiceHistoryUncheckedUpdateInput>
  }

  /**
   * ServiceHistory delete
   */
  export type ServiceHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceHistory
     */
    select?: ServiceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceHistoryInclude<ExtArgs> | null
    /**
     * Filter which ServiceHistory to delete.
     */
    where: ServiceHistoryWhereUniqueInput
  }

  /**
   * ServiceHistory deleteMany
   */
  export type ServiceHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceHistories to delete
     */
    where?: ServiceHistoryWhereInput
  }

  /**
   * ServiceHistory.appointment
   */
  export type ServiceHistory$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
  }

  /**
   * ServiceHistory.user
   */
  export type ServiceHistory$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ServiceHistory without action
   */
  export type ServiceHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceHistory
     */
    select?: ServiceHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceHistoryInclude<ExtArgs> | null
  }


  /**
   * Model PriceBookItem
   */

  export type AggregatePriceBookItem = {
    _count: PriceBookItemCountAggregateOutputType | null
    _avg: PriceBookItemAvgAggregateOutputType | null
    _sum: PriceBookItemSumAggregateOutputType | null
    _min: PriceBookItemMinAggregateOutputType | null
    _max: PriceBookItemMaxAggregateOutputType | null
  }

  export type PriceBookItemAvgAggregateOutputType = {
    flatRate: Decimal | null
    estimatedMinutes: number | null
  }

  export type PriceBookItemSumAggregateOutputType = {
    flatRate: Decimal | null
    estimatedMinutes: number | null
  }

  export type PriceBookItemMinAggregateOutputType = {
    id: string | null
    businessId: string | null
    category: string | null
    serviceType: string | null
    description: string | null
    flatRate: Decimal | null
    estimatedMinutes: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PriceBookItemMaxAggregateOutputType = {
    id: string | null
    businessId: string | null
    category: string | null
    serviceType: string | null
    description: string | null
    flatRate: Decimal | null
    estimatedMinutes: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PriceBookItemCountAggregateOutputType = {
    id: number
    businessId: number
    category: number
    serviceType: number
    description: number
    flatRate: number
    estimatedMinutes: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PriceBookItemAvgAggregateInputType = {
    flatRate?: true
    estimatedMinutes?: true
  }

  export type PriceBookItemSumAggregateInputType = {
    flatRate?: true
    estimatedMinutes?: true
  }

  export type PriceBookItemMinAggregateInputType = {
    id?: true
    businessId?: true
    category?: true
    serviceType?: true
    description?: true
    flatRate?: true
    estimatedMinutes?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PriceBookItemMaxAggregateInputType = {
    id?: true
    businessId?: true
    category?: true
    serviceType?: true
    description?: true
    flatRate?: true
    estimatedMinutes?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PriceBookItemCountAggregateInputType = {
    id?: true
    businessId?: true
    category?: true
    serviceType?: true
    description?: true
    flatRate?: true
    estimatedMinutes?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PriceBookItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceBookItem to aggregate.
     */
    where?: PriceBookItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceBookItems to fetch.
     */
    orderBy?: PriceBookItemOrderByWithRelationInput | PriceBookItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceBookItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceBookItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceBookItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PriceBookItems
    **/
    _count?: true | PriceBookItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceBookItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceBookItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceBookItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceBookItemMaxAggregateInputType
  }

  export type GetPriceBookItemAggregateType<T extends PriceBookItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePriceBookItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriceBookItem[P]>
      : GetScalarType<T[P], AggregatePriceBookItem[P]>
  }




  export type PriceBookItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceBookItemWhereInput
    orderBy?: PriceBookItemOrderByWithAggregationInput | PriceBookItemOrderByWithAggregationInput[]
    by: PriceBookItemScalarFieldEnum[] | PriceBookItemScalarFieldEnum
    having?: PriceBookItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceBookItemCountAggregateInputType | true
    _avg?: PriceBookItemAvgAggregateInputType
    _sum?: PriceBookItemSumAggregateInputType
    _min?: PriceBookItemMinAggregateInputType
    _max?: PriceBookItemMaxAggregateInputType
  }

  export type PriceBookItemGroupByOutputType = {
    id: string
    businessId: string
    category: string
    serviceType: string
    description: string
    flatRate: Decimal
    estimatedMinutes: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: PriceBookItemCountAggregateOutputType | null
    _avg: PriceBookItemAvgAggregateOutputType | null
    _sum: PriceBookItemSumAggregateOutputType | null
    _min: PriceBookItemMinAggregateOutputType | null
    _max: PriceBookItemMaxAggregateOutputType | null
  }

  type GetPriceBookItemGroupByPayload<T extends PriceBookItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceBookItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceBookItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceBookItemGroupByOutputType[P]>
            : GetScalarType<T[P], PriceBookItemGroupByOutputType[P]>
        }
      >
    >


  export type PriceBookItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    category?: boolean
    serviceType?: boolean
    description?: boolean
    flatRate?: boolean
    estimatedMinutes?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceBookItem"]>

  export type PriceBookItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    category?: boolean
    serviceType?: boolean
    description?: boolean
    flatRate?: boolean
    estimatedMinutes?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceBookItem"]>

  export type PriceBookItemSelectScalar = {
    id?: boolean
    businessId?: boolean
    category?: boolean
    serviceType?: boolean
    description?: boolean
    flatRate?: boolean
    estimatedMinutes?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PriceBookItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }
  export type PriceBookItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }

  export type $PriceBookItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PriceBookItem"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      businessId: string
      category: string
      serviceType: string
      description: string
      flatRate: Prisma.Decimal
      estimatedMinutes: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["priceBookItem"]>
    composites: {}
  }

  type PriceBookItemGetPayload<S extends boolean | null | undefined | PriceBookItemDefaultArgs> = $Result.GetResult<Prisma.$PriceBookItemPayload, S>

  type PriceBookItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PriceBookItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PriceBookItemCountAggregateInputType | true
    }

  export interface PriceBookItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PriceBookItem'], meta: { name: 'PriceBookItem' } }
    /**
     * Find zero or one PriceBookItem that matches the filter.
     * @param {PriceBookItemFindUniqueArgs} args - Arguments to find a PriceBookItem
     * @example
     * // Get one PriceBookItem
     * const priceBookItem = await prisma.priceBookItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceBookItemFindUniqueArgs>(args: SelectSubset<T, PriceBookItemFindUniqueArgs<ExtArgs>>): Prisma__PriceBookItemClient<$Result.GetResult<Prisma.$PriceBookItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PriceBookItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PriceBookItemFindUniqueOrThrowArgs} args - Arguments to find a PriceBookItem
     * @example
     * // Get one PriceBookItem
     * const priceBookItem = await prisma.priceBookItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceBookItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceBookItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceBookItemClient<$Result.GetResult<Prisma.$PriceBookItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PriceBookItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceBookItemFindFirstArgs} args - Arguments to find a PriceBookItem
     * @example
     * // Get one PriceBookItem
     * const priceBookItem = await prisma.priceBookItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceBookItemFindFirstArgs>(args?: SelectSubset<T, PriceBookItemFindFirstArgs<ExtArgs>>): Prisma__PriceBookItemClient<$Result.GetResult<Prisma.$PriceBookItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PriceBookItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceBookItemFindFirstOrThrowArgs} args - Arguments to find a PriceBookItem
     * @example
     * // Get one PriceBookItem
     * const priceBookItem = await prisma.priceBookItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceBookItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceBookItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceBookItemClient<$Result.GetResult<Prisma.$PriceBookItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PriceBookItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceBookItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PriceBookItems
     * const priceBookItems = await prisma.priceBookItem.findMany()
     * 
     * // Get first 10 PriceBookItems
     * const priceBookItems = await prisma.priceBookItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priceBookItemWithIdOnly = await prisma.priceBookItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PriceBookItemFindManyArgs>(args?: SelectSubset<T, PriceBookItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceBookItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PriceBookItem.
     * @param {PriceBookItemCreateArgs} args - Arguments to create a PriceBookItem.
     * @example
     * // Create one PriceBookItem
     * const PriceBookItem = await prisma.priceBookItem.create({
     *   data: {
     *     // ... data to create a PriceBookItem
     *   }
     * })
     * 
     */
    create<T extends PriceBookItemCreateArgs>(args: SelectSubset<T, PriceBookItemCreateArgs<ExtArgs>>): Prisma__PriceBookItemClient<$Result.GetResult<Prisma.$PriceBookItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PriceBookItems.
     * @param {PriceBookItemCreateManyArgs} args - Arguments to create many PriceBookItems.
     * @example
     * // Create many PriceBookItems
     * const priceBookItem = await prisma.priceBookItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceBookItemCreateManyArgs>(args?: SelectSubset<T, PriceBookItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PriceBookItems and returns the data saved in the database.
     * @param {PriceBookItemCreateManyAndReturnArgs} args - Arguments to create many PriceBookItems.
     * @example
     * // Create many PriceBookItems
     * const priceBookItem = await prisma.priceBookItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PriceBookItems and only return the `id`
     * const priceBookItemWithIdOnly = await prisma.priceBookItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PriceBookItemCreateManyAndReturnArgs>(args?: SelectSubset<T, PriceBookItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceBookItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PriceBookItem.
     * @param {PriceBookItemDeleteArgs} args - Arguments to delete one PriceBookItem.
     * @example
     * // Delete one PriceBookItem
     * const PriceBookItem = await prisma.priceBookItem.delete({
     *   where: {
     *     // ... filter to delete one PriceBookItem
     *   }
     * })
     * 
     */
    delete<T extends PriceBookItemDeleteArgs>(args: SelectSubset<T, PriceBookItemDeleteArgs<ExtArgs>>): Prisma__PriceBookItemClient<$Result.GetResult<Prisma.$PriceBookItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PriceBookItem.
     * @param {PriceBookItemUpdateArgs} args - Arguments to update one PriceBookItem.
     * @example
     * // Update one PriceBookItem
     * const priceBookItem = await prisma.priceBookItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceBookItemUpdateArgs>(args: SelectSubset<T, PriceBookItemUpdateArgs<ExtArgs>>): Prisma__PriceBookItemClient<$Result.GetResult<Prisma.$PriceBookItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PriceBookItems.
     * @param {PriceBookItemDeleteManyArgs} args - Arguments to filter PriceBookItems to delete.
     * @example
     * // Delete a few PriceBookItems
     * const { count } = await prisma.priceBookItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceBookItemDeleteManyArgs>(args?: SelectSubset<T, PriceBookItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceBookItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceBookItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PriceBookItems
     * const priceBookItem = await prisma.priceBookItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceBookItemUpdateManyArgs>(args: SelectSubset<T, PriceBookItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PriceBookItem.
     * @param {PriceBookItemUpsertArgs} args - Arguments to update or create a PriceBookItem.
     * @example
     * // Update or create a PriceBookItem
     * const priceBookItem = await prisma.priceBookItem.upsert({
     *   create: {
     *     // ... data to create a PriceBookItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PriceBookItem we want to update
     *   }
     * })
     */
    upsert<T extends PriceBookItemUpsertArgs>(args: SelectSubset<T, PriceBookItemUpsertArgs<ExtArgs>>): Prisma__PriceBookItemClient<$Result.GetResult<Prisma.$PriceBookItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PriceBookItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceBookItemCountArgs} args - Arguments to filter PriceBookItems to count.
     * @example
     * // Count the number of PriceBookItems
     * const count = await prisma.priceBookItem.count({
     *   where: {
     *     // ... the filter for the PriceBookItems we want to count
     *   }
     * })
    **/
    count<T extends PriceBookItemCountArgs>(
      args?: Subset<T, PriceBookItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceBookItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PriceBookItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceBookItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PriceBookItemAggregateArgs>(args: Subset<T, PriceBookItemAggregateArgs>): Prisma.PrismaPromise<GetPriceBookItemAggregateType<T>>

    /**
     * Group by PriceBookItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceBookItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PriceBookItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceBookItemGroupByArgs['orderBy'] }
        : { orderBy?: PriceBookItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PriceBookItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceBookItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PriceBookItem model
   */
  readonly fields: PriceBookItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PriceBookItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceBookItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PriceBookItem model
   */ 
  interface PriceBookItemFieldRefs {
    readonly id: FieldRef<"PriceBookItem", 'String'>
    readonly businessId: FieldRef<"PriceBookItem", 'String'>
    readonly category: FieldRef<"PriceBookItem", 'String'>
    readonly serviceType: FieldRef<"PriceBookItem", 'String'>
    readonly description: FieldRef<"PriceBookItem", 'String'>
    readonly flatRate: FieldRef<"PriceBookItem", 'Decimal'>
    readonly estimatedMinutes: FieldRef<"PriceBookItem", 'Int'>
    readonly isActive: FieldRef<"PriceBookItem", 'Boolean'>
    readonly createdAt: FieldRef<"PriceBookItem", 'DateTime'>
    readonly updatedAt: FieldRef<"PriceBookItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PriceBookItem findUnique
   */
  export type PriceBookItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceBookItem
     */
    select?: PriceBookItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceBookItemInclude<ExtArgs> | null
    /**
     * Filter, which PriceBookItem to fetch.
     */
    where: PriceBookItemWhereUniqueInput
  }

  /**
   * PriceBookItem findUniqueOrThrow
   */
  export type PriceBookItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceBookItem
     */
    select?: PriceBookItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceBookItemInclude<ExtArgs> | null
    /**
     * Filter, which PriceBookItem to fetch.
     */
    where: PriceBookItemWhereUniqueInput
  }

  /**
   * PriceBookItem findFirst
   */
  export type PriceBookItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceBookItem
     */
    select?: PriceBookItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceBookItemInclude<ExtArgs> | null
    /**
     * Filter, which PriceBookItem to fetch.
     */
    where?: PriceBookItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceBookItems to fetch.
     */
    orderBy?: PriceBookItemOrderByWithRelationInput | PriceBookItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceBookItems.
     */
    cursor?: PriceBookItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceBookItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceBookItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceBookItems.
     */
    distinct?: PriceBookItemScalarFieldEnum | PriceBookItemScalarFieldEnum[]
  }

  /**
   * PriceBookItem findFirstOrThrow
   */
  export type PriceBookItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceBookItem
     */
    select?: PriceBookItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceBookItemInclude<ExtArgs> | null
    /**
     * Filter, which PriceBookItem to fetch.
     */
    where?: PriceBookItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceBookItems to fetch.
     */
    orderBy?: PriceBookItemOrderByWithRelationInput | PriceBookItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceBookItems.
     */
    cursor?: PriceBookItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceBookItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceBookItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceBookItems.
     */
    distinct?: PriceBookItemScalarFieldEnum | PriceBookItemScalarFieldEnum[]
  }

  /**
   * PriceBookItem findMany
   */
  export type PriceBookItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceBookItem
     */
    select?: PriceBookItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceBookItemInclude<ExtArgs> | null
    /**
     * Filter, which PriceBookItems to fetch.
     */
    where?: PriceBookItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceBookItems to fetch.
     */
    orderBy?: PriceBookItemOrderByWithRelationInput | PriceBookItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PriceBookItems.
     */
    cursor?: PriceBookItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceBookItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceBookItems.
     */
    skip?: number
    distinct?: PriceBookItemScalarFieldEnum | PriceBookItemScalarFieldEnum[]
  }

  /**
   * PriceBookItem create
   */
  export type PriceBookItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceBookItem
     */
    select?: PriceBookItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceBookItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PriceBookItem.
     */
    data: XOR<PriceBookItemCreateInput, PriceBookItemUncheckedCreateInput>
  }

  /**
   * PriceBookItem createMany
   */
  export type PriceBookItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PriceBookItems.
     */
    data: PriceBookItemCreateManyInput | PriceBookItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PriceBookItem createManyAndReturn
   */
  export type PriceBookItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceBookItem
     */
    select?: PriceBookItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PriceBookItems.
     */
    data: PriceBookItemCreateManyInput | PriceBookItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceBookItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PriceBookItem update
   */
  export type PriceBookItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceBookItem
     */
    select?: PriceBookItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceBookItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PriceBookItem.
     */
    data: XOR<PriceBookItemUpdateInput, PriceBookItemUncheckedUpdateInput>
    /**
     * Choose, which PriceBookItem to update.
     */
    where: PriceBookItemWhereUniqueInput
  }

  /**
   * PriceBookItem updateMany
   */
  export type PriceBookItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PriceBookItems.
     */
    data: XOR<PriceBookItemUpdateManyMutationInput, PriceBookItemUncheckedUpdateManyInput>
    /**
     * Filter which PriceBookItems to update
     */
    where?: PriceBookItemWhereInput
  }

  /**
   * PriceBookItem upsert
   */
  export type PriceBookItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceBookItem
     */
    select?: PriceBookItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceBookItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PriceBookItem to update in case it exists.
     */
    where: PriceBookItemWhereUniqueInput
    /**
     * In case the PriceBookItem found by the `where` argument doesn't exist, create a new PriceBookItem with this data.
     */
    create: XOR<PriceBookItemCreateInput, PriceBookItemUncheckedCreateInput>
    /**
     * In case the PriceBookItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceBookItemUpdateInput, PriceBookItemUncheckedUpdateInput>
  }

  /**
   * PriceBookItem delete
   */
  export type PriceBookItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceBookItem
     */
    select?: PriceBookItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceBookItemInclude<ExtArgs> | null
    /**
     * Filter which PriceBookItem to delete.
     */
    where: PriceBookItemWhereUniqueInput
  }

  /**
   * PriceBookItem deleteMany
   */
  export type PriceBookItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceBookItems to delete
     */
    where?: PriceBookItemWhereInput
  }

  /**
   * PriceBookItem without action
   */
  export type PriceBookItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceBookItem
     */
    select?: PriceBookItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceBookItemInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    businessId: string | null
    userId: string | null
    type: $Enums.NotificationType | null
    status: $Enums.NotificationStatus | null
    recipient: string | null
    message: string | null
    appointmentId: string | null
    scheduledFor: Date | null
    sentAt: Date | null
    failedAt: Date | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    businessId: string | null
    userId: string | null
    type: $Enums.NotificationType | null
    status: $Enums.NotificationStatus | null
    recipient: string | null
    message: string | null
    appointmentId: string | null
    scheduledFor: Date | null
    sentAt: Date | null
    failedAt: Date | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    businessId: number
    userId: number
    type: number
    status: number
    recipient: number
    message: number
    appointmentId: number
    scheduledFor: number
    sentAt: number
    failedAt: number
    errorMessage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    businessId?: true
    userId?: true
    type?: true
    status?: true
    recipient?: true
    message?: true
    appointmentId?: true
    scheduledFor?: true
    sentAt?: true
    failedAt?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    businessId?: true
    userId?: true
    type?: true
    status?: true
    recipient?: true
    message?: true
    appointmentId?: true
    scheduledFor?: true
    sentAt?: true
    failedAt?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    businessId?: true
    userId?: true
    type?: true
    status?: true
    recipient?: true
    message?: true
    appointmentId?: true
    scheduledFor?: true
    sentAt?: true
    failedAt?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    businessId: string
    userId: string | null
    type: $Enums.NotificationType
    status: $Enums.NotificationStatus
    recipient: string
    message: string
    appointmentId: string | null
    scheduledFor: Date
    sentAt: Date | null
    failedAt: Date | null
    errorMessage: string | null
    createdAt: Date
    updatedAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    userId?: boolean
    type?: boolean
    status?: boolean
    recipient?: boolean
    message?: boolean
    appointmentId?: boolean
    scheduledFor?: boolean
    sentAt?: boolean
    failedAt?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    user?: boolean | Notification$userArgs<ExtArgs>
    appointment?: boolean | Notification$appointmentArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessId?: boolean
    userId?: boolean
    type?: boolean
    status?: boolean
    recipient?: boolean
    message?: boolean
    appointmentId?: boolean
    scheduledFor?: boolean
    sentAt?: boolean
    failedAt?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    user?: boolean | Notification$userArgs<ExtArgs>
    appointment?: boolean | Notification$appointmentArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    businessId?: boolean
    userId?: boolean
    type?: boolean
    status?: boolean
    recipient?: boolean
    message?: boolean
    appointmentId?: boolean
    scheduledFor?: boolean
    sentAt?: boolean
    failedAt?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    user?: boolean | Notification$userArgs<ExtArgs>
    appointment?: boolean | Notification$appointmentArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    user?: boolean | Notification$userArgs<ExtArgs>
    appointment?: boolean | Notification$appointmentArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
      appointment: Prisma.$AppointmentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      businessId: string
      userId: string | null
      type: $Enums.NotificationType
      status: $Enums.NotificationStatus
      recipient: string
      message: string
      appointmentId: string | null
      scheduledFor: Date
      sentAt: Date | null
      failedAt: Date | null
      errorMessage: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends Notification$userArgs<ExtArgs> = {}>(args?: Subset<T, Notification$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    appointment<T extends Notification$appointmentArgs<ExtArgs> = {}>(args?: Subset<T, Notification$appointmentArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */ 
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly businessId: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly status: FieldRef<"Notification", 'NotificationStatus'>
    readonly recipient: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly appointmentId: FieldRef<"Notification", 'String'>
    readonly scheduledFor: FieldRef<"Notification", 'DateTime'>
    readonly sentAt: FieldRef<"Notification", 'DateTime'>
    readonly failedAt: FieldRef<"Notification", 'DateTime'>
    readonly errorMessage: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly updatedAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification.user
   */
  export type Notification$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Notification.appointment
   */
  export type Notification$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Consent
   */

  export type AggregateConsent = {
    _count: ConsentCountAggregateOutputType | null
    _min: ConsentMinAggregateOutputType | null
    _max: ConsentMaxAggregateOutputType | null
  }

  export type ConsentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    consentType: $Enums.ConsentType | null
    consentText: string | null
    version: string | null
    consentedAt: Date | null
    revokedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type ConsentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    consentType: $Enums.ConsentType | null
    consentText: string | null
    version: string | null
    consentedAt: Date | null
    revokedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type ConsentCountAggregateOutputType = {
    id: number
    userId: number
    consentType: number
    consentText: number
    version: number
    consentedAt: number
    revokedAt: number
    ipAddress: number
    userAgent: number
    createdAt: number
    _all: number
  }


  export type ConsentMinAggregateInputType = {
    id?: true
    userId?: true
    consentType?: true
    consentText?: true
    version?: true
    consentedAt?: true
    revokedAt?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type ConsentMaxAggregateInputType = {
    id?: true
    userId?: true
    consentType?: true
    consentText?: true
    version?: true
    consentedAt?: true
    revokedAt?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type ConsentCountAggregateInputType = {
    id?: true
    userId?: true
    consentType?: true
    consentText?: true
    version?: true
    consentedAt?: true
    revokedAt?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    _all?: true
  }

  export type ConsentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consent to aggregate.
     */
    where?: ConsentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consents to fetch.
     */
    orderBy?: ConsentOrderByWithRelationInput | ConsentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consents
    **/
    _count?: true | ConsentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsentMaxAggregateInputType
  }

  export type GetConsentAggregateType<T extends ConsentAggregateArgs> = {
        [P in keyof T & keyof AggregateConsent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsent[P]>
      : GetScalarType<T[P], AggregateConsent[P]>
  }




  export type ConsentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsentWhereInput
    orderBy?: ConsentOrderByWithAggregationInput | ConsentOrderByWithAggregationInput[]
    by: ConsentScalarFieldEnum[] | ConsentScalarFieldEnum
    having?: ConsentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsentCountAggregateInputType | true
    _min?: ConsentMinAggregateInputType
    _max?: ConsentMaxAggregateInputType
  }

  export type ConsentGroupByOutputType = {
    id: string
    userId: string
    consentType: $Enums.ConsentType
    consentText: string
    version: string
    consentedAt: Date
    revokedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    _count: ConsentCountAggregateOutputType | null
    _min: ConsentMinAggregateOutputType | null
    _max: ConsentMaxAggregateOutputType | null
  }

  type GetConsentGroupByPayload<T extends ConsentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsentGroupByOutputType[P]>
            : GetScalarType<T[P], ConsentGroupByOutputType[P]>
        }
      >
    >


  export type ConsentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    consentType?: boolean
    consentText?: boolean
    version?: boolean
    consentedAt?: boolean
    revokedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consent"]>

  export type ConsentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    consentType?: boolean
    consentText?: boolean
    version?: boolean
    consentedAt?: boolean
    revokedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consent"]>

  export type ConsentSelectScalar = {
    id?: boolean
    userId?: boolean
    consentType?: boolean
    consentText?: boolean
    version?: boolean
    consentedAt?: boolean
    revokedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }

  export type ConsentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConsentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ConsentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Consent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      consentType: $Enums.ConsentType
      consentText: string
      version: string
      consentedAt: Date
      revokedAt: Date | null
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
    }, ExtArgs["result"]["consent"]>
    composites: {}
  }

  type ConsentGetPayload<S extends boolean | null | undefined | ConsentDefaultArgs> = $Result.GetResult<Prisma.$ConsentPayload, S>

  type ConsentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ConsentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ConsentCountAggregateInputType | true
    }

  export interface ConsentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Consent'], meta: { name: 'Consent' } }
    /**
     * Find zero or one Consent that matches the filter.
     * @param {ConsentFindUniqueArgs} args - Arguments to find a Consent
     * @example
     * // Get one Consent
     * const consent = await prisma.consent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsentFindUniqueArgs>(args: SelectSubset<T, ConsentFindUniqueArgs<ExtArgs>>): Prisma__ConsentClient<$Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Consent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ConsentFindUniqueOrThrowArgs} args - Arguments to find a Consent
     * @example
     * // Get one Consent
     * const consent = await prisma.consent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsentFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsentClient<$Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Consent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsentFindFirstArgs} args - Arguments to find a Consent
     * @example
     * // Get one Consent
     * const consent = await prisma.consent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsentFindFirstArgs>(args?: SelectSubset<T, ConsentFindFirstArgs<ExtArgs>>): Prisma__ConsentClient<$Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Consent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsentFindFirstOrThrowArgs} args - Arguments to find a Consent
     * @example
     * // Get one Consent
     * const consent = await prisma.consent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsentFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsentClient<$Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Consents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consents
     * const consents = await prisma.consent.findMany()
     * 
     * // Get first 10 Consents
     * const consents = await prisma.consent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consentWithIdOnly = await prisma.consent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsentFindManyArgs>(args?: SelectSubset<T, ConsentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Consent.
     * @param {ConsentCreateArgs} args - Arguments to create a Consent.
     * @example
     * // Create one Consent
     * const Consent = await prisma.consent.create({
     *   data: {
     *     // ... data to create a Consent
     *   }
     * })
     * 
     */
    create<T extends ConsentCreateArgs>(args: SelectSubset<T, ConsentCreateArgs<ExtArgs>>): Prisma__ConsentClient<$Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Consents.
     * @param {ConsentCreateManyArgs} args - Arguments to create many Consents.
     * @example
     * // Create many Consents
     * const consent = await prisma.consent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsentCreateManyArgs>(args?: SelectSubset<T, ConsentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Consents and returns the data saved in the database.
     * @param {ConsentCreateManyAndReturnArgs} args - Arguments to create many Consents.
     * @example
     * // Create many Consents
     * const consent = await prisma.consent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Consents and only return the `id`
     * const consentWithIdOnly = await prisma.consent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsentCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Consent.
     * @param {ConsentDeleteArgs} args - Arguments to delete one Consent.
     * @example
     * // Delete one Consent
     * const Consent = await prisma.consent.delete({
     *   where: {
     *     // ... filter to delete one Consent
     *   }
     * })
     * 
     */
    delete<T extends ConsentDeleteArgs>(args: SelectSubset<T, ConsentDeleteArgs<ExtArgs>>): Prisma__ConsentClient<$Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Consent.
     * @param {ConsentUpdateArgs} args - Arguments to update one Consent.
     * @example
     * // Update one Consent
     * const consent = await prisma.consent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsentUpdateArgs>(args: SelectSubset<T, ConsentUpdateArgs<ExtArgs>>): Prisma__ConsentClient<$Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Consents.
     * @param {ConsentDeleteManyArgs} args - Arguments to filter Consents to delete.
     * @example
     * // Delete a few Consents
     * const { count } = await prisma.consent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsentDeleteManyArgs>(args?: SelectSubset<T, ConsentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consents
     * const consent = await prisma.consent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsentUpdateManyArgs>(args: SelectSubset<T, ConsentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Consent.
     * @param {ConsentUpsertArgs} args - Arguments to update or create a Consent.
     * @example
     * // Update or create a Consent
     * const consent = await prisma.consent.upsert({
     *   create: {
     *     // ... data to create a Consent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consent we want to update
     *   }
     * })
     */
    upsert<T extends ConsentUpsertArgs>(args: SelectSubset<T, ConsentUpsertArgs<ExtArgs>>): Prisma__ConsentClient<$Result.GetResult<Prisma.$ConsentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Consents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsentCountArgs} args - Arguments to filter Consents to count.
     * @example
     * // Count the number of Consents
     * const count = await prisma.consent.count({
     *   where: {
     *     // ... the filter for the Consents we want to count
     *   }
     * })
    **/
    count<T extends ConsentCountArgs>(
      args?: Subset<T, ConsentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConsentAggregateArgs>(args: Subset<T, ConsentAggregateArgs>): Prisma.PrismaPromise<GetConsentAggregateType<T>>

    /**
     * Group by Consent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConsentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsentGroupByArgs['orderBy'] }
        : { orderBy?: ConsentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConsentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Consent model
   */
  readonly fields: ConsentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Consent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Consent model
   */ 
  interface ConsentFieldRefs {
    readonly id: FieldRef<"Consent", 'String'>
    readonly userId: FieldRef<"Consent", 'String'>
    readonly consentType: FieldRef<"Consent", 'ConsentType'>
    readonly consentText: FieldRef<"Consent", 'String'>
    readonly version: FieldRef<"Consent", 'String'>
    readonly consentedAt: FieldRef<"Consent", 'DateTime'>
    readonly revokedAt: FieldRef<"Consent", 'DateTime'>
    readonly ipAddress: FieldRef<"Consent", 'String'>
    readonly userAgent: FieldRef<"Consent", 'String'>
    readonly createdAt: FieldRef<"Consent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Consent findUnique
   */
  export type ConsentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consent
     */
    select?: ConsentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsentInclude<ExtArgs> | null
    /**
     * Filter, which Consent to fetch.
     */
    where: ConsentWhereUniqueInput
  }

  /**
   * Consent findUniqueOrThrow
   */
  export type ConsentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consent
     */
    select?: ConsentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsentInclude<ExtArgs> | null
    /**
     * Filter, which Consent to fetch.
     */
    where: ConsentWhereUniqueInput
  }

  /**
   * Consent findFirst
   */
  export type ConsentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consent
     */
    select?: ConsentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsentInclude<ExtArgs> | null
    /**
     * Filter, which Consent to fetch.
     */
    where?: ConsentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consents to fetch.
     */
    orderBy?: ConsentOrderByWithRelationInput | ConsentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consents.
     */
    cursor?: ConsentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consents.
     */
    distinct?: ConsentScalarFieldEnum | ConsentScalarFieldEnum[]
  }

  /**
   * Consent findFirstOrThrow
   */
  export type ConsentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consent
     */
    select?: ConsentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsentInclude<ExtArgs> | null
    /**
     * Filter, which Consent to fetch.
     */
    where?: ConsentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consents to fetch.
     */
    orderBy?: ConsentOrderByWithRelationInput | ConsentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consents.
     */
    cursor?: ConsentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consents.
     */
    distinct?: ConsentScalarFieldEnum | ConsentScalarFieldEnum[]
  }

  /**
   * Consent findMany
   */
  export type ConsentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consent
     */
    select?: ConsentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsentInclude<ExtArgs> | null
    /**
     * Filter, which Consents to fetch.
     */
    where?: ConsentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consents to fetch.
     */
    orderBy?: ConsentOrderByWithRelationInput | ConsentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consents.
     */
    cursor?: ConsentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consents.
     */
    skip?: number
    distinct?: ConsentScalarFieldEnum | ConsentScalarFieldEnum[]
  }

  /**
   * Consent create
   */
  export type ConsentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consent
     */
    select?: ConsentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsentInclude<ExtArgs> | null
    /**
     * The data needed to create a Consent.
     */
    data: XOR<ConsentCreateInput, ConsentUncheckedCreateInput>
  }

  /**
   * Consent createMany
   */
  export type ConsentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consents.
     */
    data: ConsentCreateManyInput | ConsentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Consent createManyAndReturn
   */
  export type ConsentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consent
     */
    select?: ConsentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Consents.
     */
    data: ConsentCreateManyInput | ConsentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consent update
   */
  export type ConsentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consent
     */
    select?: ConsentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsentInclude<ExtArgs> | null
    /**
     * The data needed to update a Consent.
     */
    data: XOR<ConsentUpdateInput, ConsentUncheckedUpdateInput>
    /**
     * Choose, which Consent to update.
     */
    where: ConsentWhereUniqueInput
  }

  /**
   * Consent updateMany
   */
  export type ConsentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consents.
     */
    data: XOR<ConsentUpdateManyMutationInput, ConsentUncheckedUpdateManyInput>
    /**
     * Filter which Consents to update
     */
    where?: ConsentWhereInput
  }

  /**
   * Consent upsert
   */
  export type ConsentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consent
     */
    select?: ConsentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsentInclude<ExtArgs> | null
    /**
     * The filter to search for the Consent to update in case it exists.
     */
    where: ConsentWhereUniqueInput
    /**
     * In case the Consent found by the `where` argument doesn't exist, create a new Consent with this data.
     */
    create: XOR<ConsentCreateInput, ConsentUncheckedCreateInput>
    /**
     * In case the Consent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsentUpdateInput, ConsentUncheckedUpdateInput>
  }

  /**
   * Consent delete
   */
  export type ConsentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consent
     */
    select?: ConsentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsentInclude<ExtArgs> | null
    /**
     * Filter which Consent to delete.
     */
    where: ConsentWhereUniqueInput
  }

  /**
   * Consent deleteMany
   */
  export type ConsentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consents to delete
     */
    where?: ConsentWhereInput
  }

  /**
   * Consent without action
   */
  export type ConsentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consent
     */
    select?: ConsentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsentInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    resource: string | null
    resourceId: string | null
    ipAddress: string | null
    userAgent: string | null
    metadata: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    resource: string | null
    resourceId: string | null
    ipAddress: string | null
    userAgent: string | null
    metadata: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    resource: number
    resourceId: number
    ipAddress: number
    userAgent: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    resource?: true
    resourceId?: true
    ipAddress?: true
    userAgent?: true
    metadata?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    resource?: true
    resourceId?: true
    ipAddress?: true
    userAgent?: true
    metadata?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    resource?: true
    resourceId?: true
    ipAddress?: true
    userAgent?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    userId: string
    action: string
    resource: string
    resourceId: string | null
    ipAddress: string | null
    userAgent: string | null
    metadata: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    resource?: boolean
    resourceId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    resource?: boolean
    resourceId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    resource?: boolean
    resourceId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      action: string
      resource: string
      resourceId: string | null
      ipAddress: string | null
      userAgent: string | null
      metadata: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */ 
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly resource: FieldRef<"AuditLog", 'String'>
    readonly resourceId: FieldRef<"AuditLog", 'String'>
    readonly ipAddress: FieldRef<"AuditLog", 'String'>
    readonly userAgent: FieldRef<"AuditLog", 'String'>
    readonly metadata: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    isActive: 'isActive',
    businessId: 'businessId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    emailVerified: 'emailVerified'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BusinessScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    phone: 'phone',
    email: 'email',
    address: 'address',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    logo: 'logo',
    primaryColor: 'primaryColor',
    timezone: 'timezone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BusinessScalarFieldEnum = (typeof BusinessScalarFieldEnum)[keyof typeof BusinessScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    address: 'address',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    notes: 'notes',
    businessId: 'businessId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    userId: 'userId',
    scheduledAt: 'scheduledAt',
    duration: 'duration',
    status: 'status',
    notes: 'notes',
    confirmationCode: 'confirmationCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    appointmentId: 'appointmentId',
    invoiceNumber: 'invoiceNumber',
    status: 'status',
    subtotal: 'subtotal',
    tax: 'tax',
    total: 'total',
    notes: 'notes',
    issuedAt: 'issuedAt',
    dueAt: 'dueAt',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const InvoiceItemScalarFieldEnum: {
    id: 'id',
    invoiceId: 'invoiceId',
    description: 'description',
    quantity: 'quantity',
    rate: 'rate',
    amount: 'amount',
    createdAt: 'createdAt'
  };

  export type InvoiceItemScalarFieldEnum = (typeof InvoiceItemScalarFieldEnum)[keyof typeof InvoiceItemScalarFieldEnum]


  export const EquipmentScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    type: 'type',
    brand: 'brand',
    model: 'model',
    serialNumber: 'serialNumber',
    installDate: 'installDate',
    warrantyExpires: 'warrantyExpires',
    location: 'location',
    notes: 'notes',
    photos: 'photos',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EquipmentScalarFieldEnum = (typeof EquipmentScalarFieldEnum)[keyof typeof EquipmentScalarFieldEnum]


  export const ServiceHistoryScalarFieldEnum: {
    id: 'id',
    equipmentId: 'equipmentId',
    appointmentId: 'appointmentId',
    userId: 'userId',
    performedAt: 'performedAt',
    description: 'description',
    technicianNotes: 'technicianNotes',
    photos: 'photos',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceHistoryScalarFieldEnum = (typeof ServiceHistoryScalarFieldEnum)[keyof typeof ServiceHistoryScalarFieldEnum]


  export const PriceBookItemScalarFieldEnum: {
    id: 'id',
    businessId: 'businessId',
    category: 'category',
    serviceType: 'serviceType',
    description: 'description',
    flatRate: 'flatRate',
    estimatedMinutes: 'estimatedMinutes',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PriceBookItemScalarFieldEnum = (typeof PriceBookItemScalarFieldEnum)[keyof typeof PriceBookItemScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    businessId: 'businessId',
    userId: 'userId',
    type: 'type',
    status: 'status',
    recipient: 'recipient',
    message: 'message',
    appointmentId: 'appointmentId',
    scheduledFor: 'scheduledFor',
    sentAt: 'sentAt',
    failedAt: 'failedAt',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const ConsentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    consentType: 'consentType',
    consentText: 'consentText',
    version: 'version',
    consentedAt: 'consentedAt',
    revokedAt: 'revokedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
  };

  export type ConsentScalarFieldEnum = (typeof ConsentScalarFieldEnum)[keyof typeof ConsentScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    resource: 'resource',
    resourceId: 'resourceId',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'AppointmentStatus'
   */
  export type EnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus'>
    


  /**
   * Reference to a field of type 'AppointmentStatus[]'
   */
  export type ListEnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus[]'>
    


  /**
   * Reference to a field of type 'InvoiceStatus'
   */
  export type EnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus'>
    


  /**
   * Reference to a field of type 'InvoiceStatus[]'
   */
  export type ListEnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'EquipmentType'
   */
  export type EnumEquipmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EquipmentType'>
    


  /**
   * Reference to a field of type 'EquipmentType[]'
   */
  export type ListEnumEquipmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EquipmentType[]'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'NotificationStatus'
   */
  export type EnumNotificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationStatus'>
    


  /**
   * Reference to a field of type 'NotificationStatus[]'
   */
  export type ListEnumNotificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationStatus[]'>
    


  /**
   * Reference to a field of type 'ConsentType'
   */
  export type EnumConsentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConsentType'>
    


  /**
   * Reference to a field of type 'ConsentType[]'
   */
  export type ListEnumConsentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConsentType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    businessId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    business?: XOR<BusinessRelationFilter, BusinessWhereInput>
    appointments?: AppointmentListRelationFilter
    notifications?: NotificationListRelationFilter
    serviceHistory?: ServiceHistoryListRelationFilter
    consents?: ConsentListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    businessId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    business?: BusinessOrderByWithRelationInput
    appointments?: AppointmentOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    serviceHistory?: ServiceHistoryOrderByRelationAggregateInput
    consents?: ConsentOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    businessId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    business?: XOR<BusinessRelationFilter, BusinessWhereInput>
    appointments?: AppointmentListRelationFilter
    notifications?: NotificationListRelationFilter
    serviceHistory?: ServiceHistoryListRelationFilter
    consents?: ConsentListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    businessId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    businessId?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type BusinessWhereInput = {
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    id?: StringFilter<"Business"> | string
    name?: StringFilter<"Business"> | string
    slug?: StringFilter<"Business"> | string
    phone?: StringFilter<"Business"> | string
    email?: StringNullableFilter<"Business"> | string | null
    address?: StringNullableFilter<"Business"> | string | null
    city?: StringNullableFilter<"Business"> | string | null
    state?: StringNullableFilter<"Business"> | string | null
    zipCode?: StringNullableFilter<"Business"> | string | null
    logo?: StringNullableFilter<"Business"> | string | null
    primaryColor?: StringNullableFilter<"Business"> | string | null
    timezone?: StringFilter<"Business"> | string
    createdAt?: DateTimeFilter<"Business"> | Date | string
    updatedAt?: DateTimeFilter<"Business"> | Date | string
    users?: UserListRelationFilter
    customers?: CustomerListRelationFilter
    priceBookItems?: PriceBookItemListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type BusinessOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    primaryColor?: SortOrderInput | SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    customers?: CustomerOrderByRelationAggregateInput
    priceBookItems?: PriceBookItemOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type BusinessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    name?: StringFilter<"Business"> | string
    phone?: StringFilter<"Business"> | string
    email?: StringNullableFilter<"Business"> | string | null
    address?: StringNullableFilter<"Business"> | string | null
    city?: StringNullableFilter<"Business"> | string | null
    state?: StringNullableFilter<"Business"> | string | null
    zipCode?: StringNullableFilter<"Business"> | string | null
    logo?: StringNullableFilter<"Business"> | string | null
    primaryColor?: StringNullableFilter<"Business"> | string | null
    timezone?: StringFilter<"Business"> | string
    createdAt?: DateTimeFilter<"Business"> | Date | string
    updatedAt?: DateTimeFilter<"Business"> | Date | string
    users?: UserListRelationFilter
    customers?: CustomerListRelationFilter
    priceBookItems?: PriceBookItemListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "slug">

  export type BusinessOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    primaryColor?: SortOrderInput | SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BusinessCountOrderByAggregateInput
    _max?: BusinessMaxOrderByAggregateInput
    _min?: BusinessMinOrderByAggregateInput
  }

  export type BusinessScalarWhereWithAggregatesInput = {
    AND?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    OR?: BusinessScalarWhereWithAggregatesInput[]
    NOT?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Business"> | string
    name?: StringWithAggregatesFilter<"Business"> | string
    slug?: StringWithAggregatesFilter<"Business"> | string
    phone?: StringWithAggregatesFilter<"Business"> | string
    email?: StringNullableWithAggregatesFilter<"Business"> | string | null
    address?: StringNullableWithAggregatesFilter<"Business"> | string | null
    city?: StringNullableWithAggregatesFilter<"Business"> | string | null
    state?: StringNullableWithAggregatesFilter<"Business"> | string | null
    zipCode?: StringNullableWithAggregatesFilter<"Business"> | string | null
    logo?: StringNullableWithAggregatesFilter<"Business"> | string | null
    primaryColor?: StringNullableWithAggregatesFilter<"Business"> | string | null
    timezone?: StringWithAggregatesFilter<"Business"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Business"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Business"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    phone?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    city?: StringNullableFilter<"Customer"> | string | null
    state?: StringNullableFilter<"Customer"> | string | null
    zipCode?: StringNullableFilter<"Customer"> | string | null
    notes?: StringNullableFilter<"Customer"> | string | null
    businessId?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    business?: XOR<BusinessRelationFilter, BusinessWhereInput>
    appointments?: AppointmentListRelationFilter
    invoices?: InvoiceListRelationFilter
    equipment?: EquipmentListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    businessId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    business?: BusinessOrderByWithRelationInput
    appointments?: AppointmentOrderByRelationAggregateInput
    invoices?: InvoiceOrderByRelationAggregateInput
    equipment?: EquipmentOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    phone?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    city?: StringNullableFilter<"Customer"> | string | null
    state?: StringNullableFilter<"Customer"> | string | null
    zipCode?: StringNullableFilter<"Customer"> | string | null
    notes?: StringNullableFilter<"Customer"> | string | null
    businessId?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    business?: XOR<BusinessRelationFilter, BusinessWhereInput>
    appointments?: AppointmentListRelationFilter
    invoices?: InvoiceListRelationFilter
    equipment?: EquipmentListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    businessId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    address?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    city?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    state?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    zipCode?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    businessId?: StringWithAggregatesFilter<"Customer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: StringFilter<"Appointment"> | string
    customerId?: StringFilter<"Appointment"> | string
    userId?: StringNullableFilter<"Appointment"> | string | null
    scheduledAt?: DateTimeFilter<"Appointment"> | Date | string
    duration?: IntFilter<"Appointment"> | number
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    notes?: StringNullableFilter<"Appointment"> | string | null
    confirmationCode?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    invoices?: InvoiceListRelationFilter
    serviceHistory?: ServiceHistoryListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    userId?: SortOrderInput | SortOrder
    scheduledAt?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    confirmationCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    invoices?: InvoiceOrderByRelationAggregateInput
    serviceHistory?: ServiceHistoryOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    customerId?: StringFilter<"Appointment"> | string
    userId?: StringNullableFilter<"Appointment"> | string | null
    scheduledAt?: DateTimeFilter<"Appointment"> | Date | string
    duration?: IntFilter<"Appointment"> | number
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    notes?: StringNullableFilter<"Appointment"> | string | null
    confirmationCode?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    invoices?: InvoiceListRelationFilter
    serviceHistory?: ServiceHistoryListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    userId?: SortOrderInput | SortOrder
    scheduledAt?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    confirmationCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appointment"> | string
    customerId?: StringWithAggregatesFilter<"Appointment"> | string
    userId?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    scheduledAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    duration?: IntWithAggregatesFilter<"Appointment"> | number
    status?: EnumAppointmentStatusWithAggregatesFilter<"Appointment"> | $Enums.AppointmentStatus
    notes?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    confirmationCode?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: StringFilter<"Invoice"> | string
    customerId?: StringFilter<"Invoice"> | string
    appointmentId?: StringNullableFilter<"Invoice"> | string | null
    invoiceNumber?: StringFilter<"Invoice"> | string
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    subtotal?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    tax?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"Invoice"> | string | null
    issuedAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    dueAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    paidAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    appointment?: XOR<AppointmentNullableRelationFilter, AppointmentWhereInput> | null
    items?: InvoiceItemListRelationFilter
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    appointmentId?: SortOrderInput | SortOrder
    invoiceNumber?: SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    notes?: SortOrderInput | SortOrder
    issuedAt?: SortOrderInput | SortOrder
    dueAt?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    appointment?: AppointmentOrderByWithRelationInput
    items?: InvoiceItemOrderByRelationAggregateInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    customerId?: StringFilter<"Invoice"> | string
    appointmentId?: StringNullableFilter<"Invoice"> | string | null
    invoiceNumber?: StringFilter<"Invoice"> | string
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    subtotal?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    tax?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"Invoice"> | string | null
    issuedAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    dueAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    paidAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    appointment?: XOR<AppointmentNullableRelationFilter, AppointmentWhereInput> | null
    items?: InvoiceItemListRelationFilter
  }, "id">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    appointmentId?: SortOrderInput | SortOrder
    invoiceNumber?: SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    notes?: SortOrderInput | SortOrder
    issuedAt?: SortOrderInput | SortOrder
    dueAt?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invoice"> | string
    customerId?: StringWithAggregatesFilter<"Invoice"> | string
    appointmentId?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    invoiceNumber?: StringWithAggregatesFilter<"Invoice"> | string
    status?: EnumInvoiceStatusWithAggregatesFilter<"Invoice"> | $Enums.InvoiceStatus
    subtotal?: DecimalWithAggregatesFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    tax?: DecimalWithAggregatesFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    total?: DecimalWithAggregatesFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    issuedAt?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    dueAt?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    paidAt?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
  }

  export type InvoiceItemWhereInput = {
    AND?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
    OR?: InvoiceItemWhereInput[]
    NOT?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
    id?: StringFilter<"InvoiceItem"> | string
    invoiceId?: StringFilter<"InvoiceItem"> | string
    description?: StringFilter<"InvoiceItem"> | string
    quantity?: IntFilter<"InvoiceItem"> | number
    rate?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"InvoiceItem"> | Date | string
    invoice?: XOR<InvoiceRelationFilter, InvoiceWhereInput>
  }

  export type InvoiceItemOrderByWithRelationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    invoice?: InvoiceOrderByWithRelationInput
  }

  export type InvoiceItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
    OR?: InvoiceItemWhereInput[]
    NOT?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
    invoiceId?: StringFilter<"InvoiceItem"> | string
    description?: StringFilter<"InvoiceItem"> | string
    quantity?: IntFilter<"InvoiceItem"> | number
    rate?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"InvoiceItem"> | Date | string
    invoice?: XOR<InvoiceRelationFilter, InvoiceWhereInput>
  }, "id">

  export type InvoiceItemOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    _count?: InvoiceItemCountOrderByAggregateInput
    _avg?: InvoiceItemAvgOrderByAggregateInput
    _max?: InvoiceItemMaxOrderByAggregateInput
    _min?: InvoiceItemMinOrderByAggregateInput
    _sum?: InvoiceItemSumOrderByAggregateInput
  }

  export type InvoiceItemScalarWhereWithAggregatesInput = {
    AND?: InvoiceItemScalarWhereWithAggregatesInput | InvoiceItemScalarWhereWithAggregatesInput[]
    OR?: InvoiceItemScalarWhereWithAggregatesInput[]
    NOT?: InvoiceItemScalarWhereWithAggregatesInput | InvoiceItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InvoiceItem"> | string
    invoiceId?: StringWithAggregatesFilter<"InvoiceItem"> | string
    description?: StringWithAggregatesFilter<"InvoiceItem"> | string
    quantity?: IntWithAggregatesFilter<"InvoiceItem"> | number
    rate?: DecimalWithAggregatesFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalWithAggregatesFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"InvoiceItem"> | Date | string
  }

  export type EquipmentWhereInput = {
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    id?: StringFilter<"Equipment"> | string
    customerId?: StringFilter<"Equipment"> | string
    type?: EnumEquipmentTypeFilter<"Equipment"> | $Enums.EquipmentType
    brand?: StringNullableFilter<"Equipment"> | string | null
    model?: StringNullableFilter<"Equipment"> | string | null
    serialNumber?: StringNullableFilter<"Equipment"> | string | null
    installDate?: DateTimeNullableFilter<"Equipment"> | Date | string | null
    warrantyExpires?: DateTimeNullableFilter<"Equipment"> | Date | string | null
    location?: StringNullableFilter<"Equipment"> | string | null
    notes?: StringNullableFilter<"Equipment"> | string | null
    photos?: StringNullableListFilter<"Equipment">
    isActive?: BoolFilter<"Equipment"> | boolean
    createdAt?: DateTimeFilter<"Equipment"> | Date | string
    updatedAt?: DateTimeFilter<"Equipment"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    serviceHistory?: ServiceHistoryListRelationFilter
  }

  export type EquipmentOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    type?: SortOrder
    brand?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    serialNumber?: SortOrderInput | SortOrder
    installDate?: SortOrderInput | SortOrder
    warrantyExpires?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    photos?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    serviceHistory?: ServiceHistoryOrderByRelationAggregateInput
  }

  export type EquipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    customerId?: StringFilter<"Equipment"> | string
    type?: EnumEquipmentTypeFilter<"Equipment"> | $Enums.EquipmentType
    brand?: StringNullableFilter<"Equipment"> | string | null
    model?: StringNullableFilter<"Equipment"> | string | null
    serialNumber?: StringNullableFilter<"Equipment"> | string | null
    installDate?: DateTimeNullableFilter<"Equipment"> | Date | string | null
    warrantyExpires?: DateTimeNullableFilter<"Equipment"> | Date | string | null
    location?: StringNullableFilter<"Equipment"> | string | null
    notes?: StringNullableFilter<"Equipment"> | string | null
    photos?: StringNullableListFilter<"Equipment">
    isActive?: BoolFilter<"Equipment"> | boolean
    createdAt?: DateTimeFilter<"Equipment"> | Date | string
    updatedAt?: DateTimeFilter<"Equipment"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    serviceHistory?: ServiceHistoryListRelationFilter
  }, "id">

  export type EquipmentOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    type?: SortOrder
    brand?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    serialNumber?: SortOrderInput | SortOrder
    installDate?: SortOrderInput | SortOrder
    warrantyExpires?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    photos?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EquipmentCountOrderByAggregateInput
    _max?: EquipmentMaxOrderByAggregateInput
    _min?: EquipmentMinOrderByAggregateInput
  }

  export type EquipmentScalarWhereWithAggregatesInput = {
    AND?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    OR?: EquipmentScalarWhereWithAggregatesInput[]
    NOT?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Equipment"> | string
    customerId?: StringWithAggregatesFilter<"Equipment"> | string
    type?: EnumEquipmentTypeWithAggregatesFilter<"Equipment"> | $Enums.EquipmentType
    brand?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    model?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    serialNumber?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    installDate?: DateTimeNullableWithAggregatesFilter<"Equipment"> | Date | string | null
    warrantyExpires?: DateTimeNullableWithAggregatesFilter<"Equipment"> | Date | string | null
    location?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    photos?: StringNullableListFilter<"Equipment">
    isActive?: BoolWithAggregatesFilter<"Equipment"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Equipment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Equipment"> | Date | string
  }

  export type ServiceHistoryWhereInput = {
    AND?: ServiceHistoryWhereInput | ServiceHistoryWhereInput[]
    OR?: ServiceHistoryWhereInput[]
    NOT?: ServiceHistoryWhereInput | ServiceHistoryWhereInput[]
    id?: StringFilter<"ServiceHistory"> | string
    equipmentId?: StringFilter<"ServiceHistory"> | string
    appointmentId?: StringNullableFilter<"ServiceHistory"> | string | null
    userId?: StringNullableFilter<"ServiceHistory"> | string | null
    performedAt?: DateTimeFilter<"ServiceHistory"> | Date | string
    description?: StringFilter<"ServiceHistory"> | string
    technicianNotes?: StringNullableFilter<"ServiceHistory"> | string | null
    photos?: StringNullableListFilter<"ServiceHistory">
    createdAt?: DateTimeFilter<"ServiceHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceHistory"> | Date | string
    equipment?: XOR<EquipmentRelationFilter, EquipmentWhereInput>
    appointment?: XOR<AppointmentNullableRelationFilter, AppointmentWhereInput> | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type ServiceHistoryOrderByWithRelationInput = {
    id?: SortOrder
    equipmentId?: SortOrder
    appointmentId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    performedAt?: SortOrder
    description?: SortOrder
    technicianNotes?: SortOrderInput | SortOrder
    photos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    equipment?: EquipmentOrderByWithRelationInput
    appointment?: AppointmentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ServiceHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceHistoryWhereInput | ServiceHistoryWhereInput[]
    OR?: ServiceHistoryWhereInput[]
    NOT?: ServiceHistoryWhereInput | ServiceHistoryWhereInput[]
    equipmentId?: StringFilter<"ServiceHistory"> | string
    appointmentId?: StringNullableFilter<"ServiceHistory"> | string | null
    userId?: StringNullableFilter<"ServiceHistory"> | string | null
    performedAt?: DateTimeFilter<"ServiceHistory"> | Date | string
    description?: StringFilter<"ServiceHistory"> | string
    technicianNotes?: StringNullableFilter<"ServiceHistory"> | string | null
    photos?: StringNullableListFilter<"ServiceHistory">
    createdAt?: DateTimeFilter<"ServiceHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceHistory"> | Date | string
    equipment?: XOR<EquipmentRelationFilter, EquipmentWhereInput>
    appointment?: XOR<AppointmentNullableRelationFilter, AppointmentWhereInput> | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type ServiceHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    equipmentId?: SortOrder
    appointmentId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    performedAt?: SortOrder
    description?: SortOrder
    technicianNotes?: SortOrderInput | SortOrder
    photos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceHistoryCountOrderByAggregateInput
    _max?: ServiceHistoryMaxOrderByAggregateInput
    _min?: ServiceHistoryMinOrderByAggregateInput
  }

  export type ServiceHistoryScalarWhereWithAggregatesInput = {
    AND?: ServiceHistoryScalarWhereWithAggregatesInput | ServiceHistoryScalarWhereWithAggregatesInput[]
    OR?: ServiceHistoryScalarWhereWithAggregatesInput[]
    NOT?: ServiceHistoryScalarWhereWithAggregatesInput | ServiceHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceHistory"> | string
    equipmentId?: StringWithAggregatesFilter<"ServiceHistory"> | string
    appointmentId?: StringNullableWithAggregatesFilter<"ServiceHistory"> | string | null
    userId?: StringNullableWithAggregatesFilter<"ServiceHistory"> | string | null
    performedAt?: DateTimeWithAggregatesFilter<"ServiceHistory"> | Date | string
    description?: StringWithAggregatesFilter<"ServiceHistory"> | string
    technicianNotes?: StringNullableWithAggregatesFilter<"ServiceHistory"> | string | null
    photos?: StringNullableListFilter<"ServiceHistory">
    createdAt?: DateTimeWithAggregatesFilter<"ServiceHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ServiceHistory"> | Date | string
  }

  export type PriceBookItemWhereInput = {
    AND?: PriceBookItemWhereInput | PriceBookItemWhereInput[]
    OR?: PriceBookItemWhereInput[]
    NOT?: PriceBookItemWhereInput | PriceBookItemWhereInput[]
    id?: StringFilter<"PriceBookItem"> | string
    businessId?: StringFilter<"PriceBookItem"> | string
    category?: StringFilter<"PriceBookItem"> | string
    serviceType?: StringFilter<"PriceBookItem"> | string
    description?: StringFilter<"PriceBookItem"> | string
    flatRate?: DecimalFilter<"PriceBookItem"> | Decimal | DecimalJsLike | number | string
    estimatedMinutes?: IntFilter<"PriceBookItem"> | number
    isActive?: BoolFilter<"PriceBookItem"> | boolean
    createdAt?: DateTimeFilter<"PriceBookItem"> | Date | string
    updatedAt?: DateTimeFilter<"PriceBookItem"> | Date | string
    business?: XOR<BusinessRelationFilter, BusinessWhereInput>
  }

  export type PriceBookItemOrderByWithRelationInput = {
    id?: SortOrder
    businessId?: SortOrder
    category?: SortOrder
    serviceType?: SortOrder
    description?: SortOrder
    flatRate?: SortOrder
    estimatedMinutes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    business?: BusinessOrderByWithRelationInput
  }

  export type PriceBookItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    businessId_serviceType?: PriceBookItemBusinessIdServiceTypeCompoundUniqueInput
    AND?: PriceBookItemWhereInput | PriceBookItemWhereInput[]
    OR?: PriceBookItemWhereInput[]
    NOT?: PriceBookItemWhereInput | PriceBookItemWhereInput[]
    businessId?: StringFilter<"PriceBookItem"> | string
    category?: StringFilter<"PriceBookItem"> | string
    serviceType?: StringFilter<"PriceBookItem"> | string
    description?: StringFilter<"PriceBookItem"> | string
    flatRate?: DecimalFilter<"PriceBookItem"> | Decimal | DecimalJsLike | number | string
    estimatedMinutes?: IntFilter<"PriceBookItem"> | number
    isActive?: BoolFilter<"PriceBookItem"> | boolean
    createdAt?: DateTimeFilter<"PriceBookItem"> | Date | string
    updatedAt?: DateTimeFilter<"PriceBookItem"> | Date | string
    business?: XOR<BusinessRelationFilter, BusinessWhereInput>
  }, "id" | "businessId_serviceType">

  export type PriceBookItemOrderByWithAggregationInput = {
    id?: SortOrder
    businessId?: SortOrder
    category?: SortOrder
    serviceType?: SortOrder
    description?: SortOrder
    flatRate?: SortOrder
    estimatedMinutes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PriceBookItemCountOrderByAggregateInput
    _avg?: PriceBookItemAvgOrderByAggregateInput
    _max?: PriceBookItemMaxOrderByAggregateInput
    _min?: PriceBookItemMinOrderByAggregateInput
    _sum?: PriceBookItemSumOrderByAggregateInput
  }

  export type PriceBookItemScalarWhereWithAggregatesInput = {
    AND?: PriceBookItemScalarWhereWithAggregatesInput | PriceBookItemScalarWhereWithAggregatesInput[]
    OR?: PriceBookItemScalarWhereWithAggregatesInput[]
    NOT?: PriceBookItemScalarWhereWithAggregatesInput | PriceBookItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PriceBookItem"> | string
    businessId?: StringWithAggregatesFilter<"PriceBookItem"> | string
    category?: StringWithAggregatesFilter<"PriceBookItem"> | string
    serviceType?: StringWithAggregatesFilter<"PriceBookItem"> | string
    description?: StringWithAggregatesFilter<"PriceBookItem"> | string
    flatRate?: DecimalWithAggregatesFilter<"PriceBookItem"> | Decimal | DecimalJsLike | number | string
    estimatedMinutes?: IntWithAggregatesFilter<"PriceBookItem"> | number
    isActive?: BoolWithAggregatesFilter<"PriceBookItem"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PriceBookItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PriceBookItem"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    businessId?: StringFilter<"Notification"> | string
    userId?: StringNullableFilter<"Notification"> | string | null
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    status?: EnumNotificationStatusFilter<"Notification"> | $Enums.NotificationStatus
    recipient?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    appointmentId?: StringNullableFilter<"Notification"> | string | null
    scheduledFor?: DateTimeFilter<"Notification"> | Date | string
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    errorMessage?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    business?: XOR<BusinessRelationFilter, BusinessWhereInput>
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    appointment?: XOR<AppointmentNullableRelationFilter, AppointmentWhereInput> | null
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    businessId?: SortOrder
    userId?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    recipient?: SortOrder
    message?: SortOrder
    appointmentId?: SortOrderInput | SortOrder
    scheduledFor?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    failedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    business?: BusinessOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    appointment?: AppointmentOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    businessId?: StringFilter<"Notification"> | string
    userId?: StringNullableFilter<"Notification"> | string | null
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    status?: EnumNotificationStatusFilter<"Notification"> | $Enums.NotificationStatus
    recipient?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    appointmentId?: StringNullableFilter<"Notification"> | string | null
    scheduledFor?: DateTimeFilter<"Notification"> | Date | string
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    errorMessage?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    business?: XOR<BusinessRelationFilter, BusinessWhereInput>
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    appointment?: XOR<AppointmentNullableRelationFilter, AppointmentWhereInput> | null
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    businessId?: SortOrder
    userId?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    recipient?: SortOrder
    message?: SortOrder
    appointmentId?: SortOrderInput | SortOrder
    scheduledFor?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    failedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    businessId?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    status?: EnumNotificationStatusWithAggregatesFilter<"Notification"> | $Enums.NotificationStatus
    recipient?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    appointmentId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    scheduledFor?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    sentAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    failedAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type ConsentWhereInput = {
    AND?: ConsentWhereInput | ConsentWhereInput[]
    OR?: ConsentWhereInput[]
    NOT?: ConsentWhereInput | ConsentWhereInput[]
    id?: StringFilter<"Consent"> | string
    userId?: StringFilter<"Consent"> | string
    consentType?: EnumConsentTypeFilter<"Consent"> | $Enums.ConsentType
    consentText?: StringFilter<"Consent"> | string
    version?: StringFilter<"Consent"> | string
    consentedAt?: DateTimeFilter<"Consent"> | Date | string
    revokedAt?: DateTimeNullableFilter<"Consent"> | Date | string | null
    ipAddress?: StringNullableFilter<"Consent"> | string | null
    userAgent?: StringNullableFilter<"Consent"> | string | null
    createdAt?: DateTimeFilter<"Consent"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ConsentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    consentType?: SortOrder
    consentText?: SortOrder
    version?: SortOrder
    consentedAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ConsentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConsentWhereInput | ConsentWhereInput[]
    OR?: ConsentWhereInput[]
    NOT?: ConsentWhereInput | ConsentWhereInput[]
    userId?: StringFilter<"Consent"> | string
    consentType?: EnumConsentTypeFilter<"Consent"> | $Enums.ConsentType
    consentText?: StringFilter<"Consent"> | string
    version?: StringFilter<"Consent"> | string
    consentedAt?: DateTimeFilter<"Consent"> | Date | string
    revokedAt?: DateTimeNullableFilter<"Consent"> | Date | string | null
    ipAddress?: StringNullableFilter<"Consent"> | string | null
    userAgent?: StringNullableFilter<"Consent"> | string | null
    createdAt?: DateTimeFilter<"Consent"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ConsentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    consentType?: SortOrder
    consentText?: SortOrder
    version?: SortOrder
    consentedAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ConsentCountOrderByAggregateInput
    _max?: ConsentMaxOrderByAggregateInput
    _min?: ConsentMinOrderByAggregateInput
  }

  export type ConsentScalarWhereWithAggregatesInput = {
    AND?: ConsentScalarWhereWithAggregatesInput | ConsentScalarWhereWithAggregatesInput[]
    OR?: ConsentScalarWhereWithAggregatesInput[]
    NOT?: ConsentScalarWhereWithAggregatesInput | ConsentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Consent"> | string
    userId?: StringWithAggregatesFilter<"Consent"> | string
    consentType?: EnumConsentTypeWithAggregatesFilter<"Consent"> | $Enums.ConsentType
    consentText?: StringWithAggregatesFilter<"Consent"> | string
    version?: StringWithAggregatesFilter<"Consent"> | string
    consentedAt?: DateTimeWithAggregatesFilter<"Consent"> | Date | string
    revokedAt?: DateTimeNullableWithAggregatesFilter<"Consent"> | Date | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"Consent"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Consent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Consent"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    userId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    resource?: StringFilter<"AuditLog"> | string
    resourceId?: StringNullableFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    resourceId?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    userId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    resource?: StringFilter<"AuditLog"> | string
    resourceId?: StringNullableFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    resourceId?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    userId?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    resource?: StringWithAggregatesFilter<"AuditLog"> | string
    resourceId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    metadata?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    business: BusinessCreateNestedOneWithoutUsersInput
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    serviceHistory?: ServiceHistoryCreateNestedManyWithoutUserInput
    consents?: ConsentCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    businessId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    serviceHistory?: ServiceHistoryUncheckedCreateNestedManyWithoutUserInput
    consents?: ConsentUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    business?: BusinessUpdateOneRequiredWithoutUsersNestedInput
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    serviceHistory?: ServiceHistoryUpdateManyWithoutUserNestedInput
    consents?: ConsentUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    businessId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    serviceHistory?: ServiceHistoryUncheckedUpdateManyWithoutUserNestedInput
    consents?: ConsentUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    businessId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    businessId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BusinessCreateInput = {
    id?: string
    name: string
    slug: string
    phone: string
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    logo?: string | null
    primaryColor?: string | null
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutBusinessInput
    customers?: CustomerCreateNestedManyWithoutBusinessInput
    priceBookItems?: PriceBookItemCreateNestedManyWithoutBusinessInput
    notifications?: NotificationCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    phone: string
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    logo?: string | null
    primaryColor?: string | null
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBusinessInput
    customers?: CustomerUncheckedCreateNestedManyWithoutBusinessInput
    priceBookItems?: PriceBookItemUncheckedCreateNestedManyWithoutBusinessInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBusinessNestedInput
    customers?: CustomerUpdateManyWithoutBusinessNestedInput
    priceBookItems?: PriceBookItemUpdateManyWithoutBusinessNestedInput
    notifications?: NotificationUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBusinessNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutBusinessNestedInput
    priceBookItems?: PriceBookItemUncheckedUpdateManyWithoutBusinessNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessCreateManyInput = {
    id?: string
    name: string
    slug: string
    phone: string
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    logo?: string | null
    primaryColor?: string | null
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    business: BusinessCreateNestedOneWithoutCustomersInput
    appointments?: AppointmentCreateNestedManyWithoutCustomerInput
    invoices?: InvoiceCreateNestedManyWithoutCustomerInput
    equipment?: EquipmentCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    notes?: string | null
    businessId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutCustomerInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustomerInput
    equipment?: EquipmentUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutCustomersNestedInput
    appointments?: AppointmentUpdateManyWithoutCustomerNestedInput
    invoices?: InvoiceUpdateManyWithoutCustomerNestedInput
    equipment?: EquipmentUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    businessId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutCustomerNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutCustomerNestedInput
    equipment?: EquipmentUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    notes?: string | null
    businessId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    businessId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateInput = {
    id?: string
    scheduledAt: Date | string
    duration?: number
    status?: $Enums.AppointmentStatus
    notes?: string | null
    confirmationCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutAppointmentsInput
    user?: UserCreateNestedOneWithoutAppointmentsInput
    invoices?: InvoiceCreateNestedManyWithoutAppointmentInput
    serviceHistory?: ServiceHistoryCreateNestedManyWithoutAppointmentInput
    notifications?: NotificationCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    customerId: string
    userId?: string | null
    scheduledAt: Date | string
    duration?: number
    status?: $Enums.AppointmentStatus
    notes?: string | null
    confirmationCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutAppointmentInput
    serviceHistory?: ServiceHistoryUncheckedCreateNestedManyWithoutAppointmentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmationCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutAppointmentsNestedInput
    user?: UserUpdateOneWithoutAppointmentsNestedInput
    invoices?: InvoiceUpdateManyWithoutAppointmentNestedInput
    serviceHistory?: ServiceHistoryUpdateManyWithoutAppointmentNestedInput
    notifications?: NotificationUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmationCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutAppointmentNestedInput
    serviceHistory?: ServiceHistoryUncheckedUpdateManyWithoutAppointmentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentCreateManyInput = {
    id?: string
    customerId: string
    userId?: string | null
    scheduledAt: Date | string
    duration?: number
    status?: $Enums.AppointmentStatus
    notes?: string | null
    confirmationCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmationCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmationCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateInput = {
    id?: string
    invoiceNumber?: string
    status?: $Enums.InvoiceStatus
    subtotal?: Decimal | DecimalJsLike | number | string
    tax?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    issuedAt?: Date | string | null
    dueAt?: Date | string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutInvoicesInput
    appointment?: AppointmentCreateNestedOneWithoutInvoicesInput
    items?: InvoiceItemCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    customerId: string
    appointmentId?: string | null
    invoiceNumber?: string
    status?: $Enums.InvoiceStatus
    subtotal?: Decimal | DecimalJsLike | number | string
    tax?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    issuedAt?: Date | string | null
    dueAt?: Date | string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutInvoicesNestedInput
    appointment?: AppointmentUpdateOneWithoutInvoicesNestedInput
    items?: InvoiceItemUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceCreateManyInput = {
    id?: string
    customerId: string
    appointmentId?: string | null
    invoiceNumber?: string
    status?: $Enums.InvoiceStatus
    subtotal?: Decimal | DecimalJsLike | number | string
    tax?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    issuedAt?: Date | string | null
    dueAt?: Date | string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemCreateInput = {
    id?: string
    description: string
    quantity?: number
    rate: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    invoice: InvoiceCreateNestedOneWithoutItemsInput
  }

  export type InvoiceItemUncheckedCreateInput = {
    id?: string
    invoiceId: string
    description: string
    quantity?: number
    rate: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type InvoiceItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: InvoiceUpdateOneRequiredWithoutItemsNestedInput
  }

  export type InvoiceItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemCreateManyInput = {
    id?: string
    invoiceId: string
    description: string
    quantity?: number
    rate: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type InvoiceItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentCreateInput = {
    id?: string
    type: $Enums.EquipmentType
    brand?: string | null
    model?: string | null
    serialNumber?: string | null
    installDate?: Date | string | null
    warrantyExpires?: Date | string | null
    location?: string | null
    notes?: string | null
    photos?: EquipmentCreatephotosInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutEquipmentInput
    serviceHistory?: ServiceHistoryCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateInput = {
    id?: string
    customerId: string
    type: $Enums.EquipmentType
    brand?: string | null
    model?: string | null
    serialNumber?: string | null
    installDate?: Date | string | null
    warrantyExpires?: Date | string | null
    location?: string | null
    notes?: string | null
    photos?: EquipmentCreatephotosInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceHistory?: ServiceHistoryUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEquipmentTypeFieldUpdateOperationsInput | $Enums.EquipmentType
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    installDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warrantyExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: EquipmentUpdatephotosInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutEquipmentNestedInput
    serviceHistory?: ServiceHistoryUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    type?: EnumEquipmentTypeFieldUpdateOperationsInput | $Enums.EquipmentType
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    installDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warrantyExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: EquipmentUpdatephotosInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceHistory?: ServiceHistoryUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentCreateManyInput = {
    id?: string
    customerId: string
    type: $Enums.EquipmentType
    brand?: string | null
    model?: string | null
    serialNumber?: string | null
    installDate?: Date | string | null
    warrantyExpires?: Date | string | null
    location?: string | null
    notes?: string | null
    photos?: EquipmentCreatephotosInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEquipmentTypeFieldUpdateOperationsInput | $Enums.EquipmentType
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    installDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warrantyExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: EquipmentUpdatephotosInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    type?: EnumEquipmentTypeFieldUpdateOperationsInput | $Enums.EquipmentType
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    installDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warrantyExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: EquipmentUpdatephotosInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceHistoryCreateInput = {
    id?: string
    performedAt?: Date | string
    description: string
    technicianNotes?: string | null
    photos?: ServiceHistoryCreatephotosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    equipment: EquipmentCreateNestedOneWithoutServiceHistoryInput
    appointment?: AppointmentCreateNestedOneWithoutServiceHistoryInput
    user?: UserCreateNestedOneWithoutServiceHistoryInput
  }

  export type ServiceHistoryUncheckedCreateInput = {
    id?: string
    equipmentId: string
    appointmentId?: string | null
    userId?: string | null
    performedAt?: Date | string
    description: string
    technicianNotes?: string | null
    photos?: ServiceHistoryCreatephotosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ServiceHistoryUpdatephotosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUpdateOneRequiredWithoutServiceHistoryNestedInput
    appointment?: AppointmentUpdateOneWithoutServiceHistoryNestedInput
    user?: UserUpdateOneWithoutServiceHistoryNestedInput
  }

  export type ServiceHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ServiceHistoryUpdatephotosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceHistoryCreateManyInput = {
    id?: string
    equipmentId: string
    appointmentId?: string | null
    userId?: string | null
    performedAt?: Date | string
    description: string
    technicianNotes?: string | null
    photos?: ServiceHistoryCreatephotosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ServiceHistoryUpdatephotosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ServiceHistoryUpdatephotosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceBookItemCreateInput = {
    id?: string
    category: string
    serviceType: string
    description: string
    flatRate: Decimal | DecimalJsLike | number | string
    estimatedMinutes: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    business: BusinessCreateNestedOneWithoutPriceBookItemsInput
  }

  export type PriceBookItemUncheckedCreateInput = {
    id?: string
    businessId: string
    category: string
    serviceType: string
    description: string
    flatRate: Decimal | DecimalJsLike | number | string
    estimatedMinutes: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceBookItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    flatRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutPriceBookItemsNestedInput
  }

  export type PriceBookItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    flatRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceBookItemCreateManyInput = {
    id?: string
    businessId: string
    category: string
    serviceType: string
    description: string
    flatRate: Decimal | DecimalJsLike | number | string
    estimatedMinutes: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceBookItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    flatRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceBookItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    flatRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    recipient: string
    message: string
    scheduledFor: Date | string
    sentAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    business: BusinessCreateNestedOneWithoutNotificationsInput
    user?: UserCreateNestedOneWithoutNotificationsInput
    appointment?: AppointmentCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    businessId: string
    userId?: string | null
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    recipient: string
    message: string
    appointmentId?: string | null
    scheduledFor: Date | string
    sentAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    recipient?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutNotificationsNestedInput
    user?: UserUpdateOneWithoutNotificationsNestedInput
    appointment?: AppointmentUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    recipient?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    businessId: string
    userId?: string | null
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    recipient: string
    message: string
    appointmentId?: string | null
    scheduledFor: Date | string
    sentAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    recipient?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    recipient?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsentCreateInput = {
    id?: string
    consentType: $Enums.ConsentType
    consentText: string
    version: string
    consentedAt?: Date | string
    revokedAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutConsentsInput
  }

  export type ConsentUncheckedCreateInput = {
    id?: string
    userId: string
    consentType: $Enums.ConsentType
    consentText: string
    version: string
    consentedAt?: Date | string
    revokedAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type ConsentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    consentType?: EnumConsentTypeFieldUpdateOperationsInput | $Enums.ConsentType
    consentText?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    consentedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConsentsNestedInput
  }

  export type ConsentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    consentType?: EnumConsentTypeFieldUpdateOperationsInput | $Enums.ConsentType
    consentText?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    consentedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsentCreateManyInput = {
    id?: string
    userId: string
    consentType: $Enums.ConsentType
    consentText: string
    version: string
    consentedAt?: Date | string
    revokedAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type ConsentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    consentType?: EnumConsentTypeFieldUpdateOperationsInput | $Enums.ConsentType
    consentText?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    consentedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    consentType?: EnumConsentTypeFieldUpdateOperationsInput | $Enums.ConsentType
    consentText?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    consentedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    resource: string
    resourceId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    metadata?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    userId: string
    action: string
    resource: string
    resourceId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    userId: string
    action: string
    resource: string
    resourceId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BusinessRelationFilter = {
    is?: BusinessWhereInput
    isNot?: BusinessWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type ServiceHistoryListRelationFilter = {
    every?: ServiceHistoryWhereInput
    some?: ServiceHistoryWhereInput
    none?: ServiceHistoryWhereInput
  }

  export type ConsentListRelationFilter = {
    every?: ConsentWhereInput
    some?: ConsentWhereInput
    none?: ConsentWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConsentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    businessId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    businessId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    businessId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput
    some?: CustomerWhereInput
    none?: CustomerWhereInput
  }

  export type PriceBookItemListRelationFilter = {
    every?: PriceBookItemWhereInput
    some?: PriceBookItemWhereInput
    none?: PriceBookItemWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PriceBookItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    logo?: SortOrder
    primaryColor?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    logo?: SortOrder
    primaryColor?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    logo?: SortOrder
    primaryColor?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type EquipmentListRelationFilter = {
    every?: EquipmentWhereInput
    some?: EquipmentWhereInput
    none?: EquipmentWhereInput
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquipmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    notes?: SortOrder
    businessId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    notes?: SortOrder
    businessId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    notes?: SortOrder
    businessId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    userId?: SortOrder
    scheduledAt?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    confirmationCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    userId?: SortOrder
    scheduledAt?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    confirmationCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    userId?: SortOrder
    scheduledAt?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    confirmationCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type EnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type AppointmentNullableRelationFilter = {
    is?: AppointmentWhereInput | null
    isNot?: AppointmentWhereInput | null
  }

  export type InvoiceItemListRelationFilter = {
    every?: InvoiceItemWhereInput
    some?: InvoiceItemWhereInput
    none?: InvoiceItemWhereInput
  }

  export type InvoiceItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    appointmentId?: SortOrder
    invoiceNumber?: SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    notes?: SortOrder
    issuedAt?: SortOrder
    dueAt?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    subtotal?: SortOrder
    tax?: SortOrder
    total?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    appointmentId?: SortOrder
    invoiceNumber?: SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    notes?: SortOrder
    issuedAt?: SortOrder
    dueAt?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    appointmentId?: SortOrder
    invoiceNumber?: SortOrder
    status?: SortOrder
    subtotal?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    notes?: SortOrder
    issuedAt?: SortOrder
    dueAt?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    subtotal?: SortOrder
    tax?: SortOrder
    total?: SortOrder
  }

  export type EnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type InvoiceRelationFilter = {
    is?: InvoiceWhereInput
    isNot?: InvoiceWhereInput
  }

  export type InvoiceItemCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type InvoiceItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    rate?: SortOrder
    amount?: SortOrder
  }

  export type InvoiceItemMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type InvoiceItemMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    rate?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type InvoiceItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    rate?: SortOrder
    amount?: SortOrder
  }

  export type EnumEquipmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EquipmentType | EnumEquipmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEquipmentTypeFilter<$PrismaModel> | $Enums.EquipmentType
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EquipmentCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    type?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    serialNumber?: SortOrder
    installDate?: SortOrder
    warrantyExpires?: SortOrder
    location?: SortOrder
    notes?: SortOrder
    photos?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    type?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    serialNumber?: SortOrder
    installDate?: SortOrder
    warrantyExpires?: SortOrder
    location?: SortOrder
    notes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EquipmentMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    type?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    serialNumber?: SortOrder
    installDate?: SortOrder
    warrantyExpires?: SortOrder
    location?: SortOrder
    notes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumEquipmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EquipmentType | EnumEquipmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEquipmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.EquipmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEquipmentTypeFilter<$PrismaModel>
    _max?: NestedEnumEquipmentTypeFilter<$PrismaModel>
  }

  export type EquipmentRelationFilter = {
    is?: EquipmentWhereInput
    isNot?: EquipmentWhereInput
  }

  export type ServiceHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    equipmentId?: SortOrder
    appointmentId?: SortOrder
    userId?: SortOrder
    performedAt?: SortOrder
    description?: SortOrder
    technicianNotes?: SortOrder
    photos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    equipmentId?: SortOrder
    appointmentId?: SortOrder
    userId?: SortOrder
    performedAt?: SortOrder
    description?: SortOrder
    technicianNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    equipmentId?: SortOrder
    appointmentId?: SortOrder
    userId?: SortOrder
    performedAt?: SortOrder
    description?: SortOrder
    technicianNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PriceBookItemBusinessIdServiceTypeCompoundUniqueInput = {
    businessId: string
    serviceType: string
  }

  export type PriceBookItemCountOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    category?: SortOrder
    serviceType?: SortOrder
    description?: SortOrder
    flatRate?: SortOrder
    estimatedMinutes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PriceBookItemAvgOrderByAggregateInput = {
    flatRate?: SortOrder
    estimatedMinutes?: SortOrder
  }

  export type PriceBookItemMaxOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    category?: SortOrder
    serviceType?: SortOrder
    description?: SortOrder
    flatRate?: SortOrder
    estimatedMinutes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PriceBookItemMinOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    category?: SortOrder
    serviceType?: SortOrder
    description?: SortOrder
    flatRate?: SortOrder
    estimatedMinutes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PriceBookItemSumOrderByAggregateInput = {
    flatRate?: SortOrder
    estimatedMinutes?: SortOrder
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type EnumNotificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationStatusFilter<$PrismaModel> | $Enums.NotificationStatus
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    recipient?: SortOrder
    message?: SortOrder
    appointmentId?: SortOrder
    scheduledFor?: SortOrder
    sentAt?: SortOrder
    failedAt?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    recipient?: SortOrder
    message?: SortOrder
    appointmentId?: SortOrder
    scheduledFor?: SortOrder
    sentAt?: SortOrder
    failedAt?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    businessId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    recipient?: SortOrder
    message?: SortOrder
    appointmentId?: SortOrder
    scheduledFor?: SortOrder
    sentAt?: SortOrder
    failedAt?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type EnumNotificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.NotificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationStatusFilter<$PrismaModel>
    _max?: NestedEnumNotificationStatusFilter<$PrismaModel>
  }

  export type EnumConsentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsentType | EnumConsentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConsentType[] | ListEnumConsentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsentType[] | ListEnumConsentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConsentTypeFilter<$PrismaModel> | $Enums.ConsentType
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ConsentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    consentType?: SortOrder
    consentText?: SortOrder
    version?: SortOrder
    consentedAt?: SortOrder
    revokedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    consentType?: SortOrder
    consentText?: SortOrder
    version?: SortOrder
    consentedAt?: SortOrder
    revokedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    consentType?: SortOrder
    consentText?: SortOrder
    version?: SortOrder
    consentedAt?: SortOrder
    revokedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumConsentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsentType | EnumConsentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConsentType[] | ListEnumConsentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsentType[] | ListEnumConsentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConsentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ConsentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConsentTypeFilter<$PrismaModel>
    _max?: NestedEnumConsentTypeFilter<$PrismaModel>
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    resourceId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    resourceId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    resource?: SortOrder
    resourceId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type BusinessCreateNestedOneWithoutUsersInput = {
    create?: XOR<BusinessCreateWithoutUsersInput, BusinessUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutUsersInput
    connect?: BusinessWhereUniqueInput
  }

  export type AppointmentCreateNestedManyWithoutUserInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ServiceHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<ServiceHistoryCreateWithoutUserInput, ServiceHistoryUncheckedCreateWithoutUserInput> | ServiceHistoryCreateWithoutUserInput[] | ServiceHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServiceHistoryCreateOrConnectWithoutUserInput | ServiceHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ServiceHistoryCreateManyUserInputEnvelope
    connect?: ServiceHistoryWhereUniqueInput | ServiceHistoryWhereUniqueInput[]
  }

  export type ConsentCreateNestedManyWithoutUserInput = {
    create?: XOR<ConsentCreateWithoutUserInput, ConsentUncheckedCreateWithoutUserInput> | ConsentCreateWithoutUserInput[] | ConsentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConsentCreateOrConnectWithoutUserInput | ConsentCreateOrConnectWithoutUserInput[]
    createMany?: ConsentCreateManyUserInputEnvelope
    connect?: ConsentWhereUniqueInput | ConsentWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ServiceHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ServiceHistoryCreateWithoutUserInput, ServiceHistoryUncheckedCreateWithoutUserInput> | ServiceHistoryCreateWithoutUserInput[] | ServiceHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServiceHistoryCreateOrConnectWithoutUserInput | ServiceHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ServiceHistoryCreateManyUserInputEnvelope
    connect?: ServiceHistoryWhereUniqueInput | ServiceHistoryWhereUniqueInput[]
  }

  export type ConsentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConsentCreateWithoutUserInput, ConsentUncheckedCreateWithoutUserInput> | ConsentCreateWithoutUserInput[] | ConsentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConsentCreateOrConnectWithoutUserInput | ConsentCreateOrConnectWithoutUserInput[]
    createMany?: ConsentCreateManyUserInputEnvelope
    connect?: ConsentWhereUniqueInput | ConsentWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BusinessUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<BusinessCreateWithoutUsersInput, BusinessUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutUsersInput
    upsert?: BusinessUpsertWithoutUsersInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutUsersInput, BusinessUpdateWithoutUsersInput>, BusinessUncheckedUpdateWithoutUsersInput>
  }

  export type AppointmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutUserInput | AppointmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutUserInput | AppointmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutUserInput | AppointmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ServiceHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<ServiceHistoryCreateWithoutUserInput, ServiceHistoryUncheckedCreateWithoutUserInput> | ServiceHistoryCreateWithoutUserInput[] | ServiceHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServiceHistoryCreateOrConnectWithoutUserInput | ServiceHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ServiceHistoryUpsertWithWhereUniqueWithoutUserInput | ServiceHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ServiceHistoryCreateManyUserInputEnvelope
    set?: ServiceHistoryWhereUniqueInput | ServiceHistoryWhereUniqueInput[]
    disconnect?: ServiceHistoryWhereUniqueInput | ServiceHistoryWhereUniqueInput[]
    delete?: ServiceHistoryWhereUniqueInput | ServiceHistoryWhereUniqueInput[]
    connect?: ServiceHistoryWhereUniqueInput | ServiceHistoryWhereUniqueInput[]
    update?: ServiceHistoryUpdateWithWhereUniqueWithoutUserInput | ServiceHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ServiceHistoryUpdateManyWithWhereWithoutUserInput | ServiceHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ServiceHistoryScalarWhereInput | ServiceHistoryScalarWhereInput[]
  }

  export type ConsentUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConsentCreateWithoutUserInput, ConsentUncheckedCreateWithoutUserInput> | ConsentCreateWithoutUserInput[] | ConsentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConsentCreateOrConnectWithoutUserInput | ConsentCreateOrConnectWithoutUserInput[]
    upsert?: ConsentUpsertWithWhereUniqueWithoutUserInput | ConsentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConsentCreateManyUserInputEnvelope
    set?: ConsentWhereUniqueInput | ConsentWhereUniqueInput[]
    disconnect?: ConsentWhereUniqueInput | ConsentWhereUniqueInput[]
    delete?: ConsentWhereUniqueInput | ConsentWhereUniqueInput[]
    connect?: ConsentWhereUniqueInput | ConsentWhereUniqueInput[]
    update?: ConsentUpdateWithWhereUniqueWithoutUserInput | ConsentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConsentUpdateManyWithWhereWithoutUserInput | ConsentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConsentScalarWhereInput | ConsentScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput> | AppointmentCreateWithoutUserInput[] | AppointmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutUserInput | AppointmentCreateOrConnectWithoutUserInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutUserInput | AppointmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AppointmentCreateManyUserInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutUserInput | AppointmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutUserInput | AppointmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ServiceHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ServiceHistoryCreateWithoutUserInput, ServiceHistoryUncheckedCreateWithoutUserInput> | ServiceHistoryCreateWithoutUserInput[] | ServiceHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServiceHistoryCreateOrConnectWithoutUserInput | ServiceHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ServiceHistoryUpsertWithWhereUniqueWithoutUserInput | ServiceHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ServiceHistoryCreateManyUserInputEnvelope
    set?: ServiceHistoryWhereUniqueInput | ServiceHistoryWhereUniqueInput[]
    disconnect?: ServiceHistoryWhereUniqueInput | ServiceHistoryWhereUniqueInput[]
    delete?: ServiceHistoryWhereUniqueInput | ServiceHistoryWhereUniqueInput[]
    connect?: ServiceHistoryWhereUniqueInput | ServiceHistoryWhereUniqueInput[]
    update?: ServiceHistoryUpdateWithWhereUniqueWithoutUserInput | ServiceHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ServiceHistoryUpdateManyWithWhereWithoutUserInput | ServiceHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ServiceHistoryScalarWhereInput | ServiceHistoryScalarWhereInput[]
  }

  export type ConsentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConsentCreateWithoutUserInput, ConsentUncheckedCreateWithoutUserInput> | ConsentCreateWithoutUserInput[] | ConsentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConsentCreateOrConnectWithoutUserInput | ConsentCreateOrConnectWithoutUserInput[]
    upsert?: ConsentUpsertWithWhereUniqueWithoutUserInput | ConsentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConsentCreateManyUserInputEnvelope
    set?: ConsentWhereUniqueInput | ConsentWhereUniqueInput[]
    disconnect?: ConsentWhereUniqueInput | ConsentWhereUniqueInput[]
    delete?: ConsentWhereUniqueInput | ConsentWhereUniqueInput[]
    connect?: ConsentWhereUniqueInput | ConsentWhereUniqueInput[]
    update?: ConsentUpdateWithWhereUniqueWithoutUserInput | ConsentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConsentUpdateManyWithWhereWithoutUserInput | ConsentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConsentScalarWhereInput | ConsentScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutBusinessInput = {
    create?: XOR<UserCreateWithoutBusinessInput, UserUncheckedCreateWithoutBusinessInput> | UserCreateWithoutBusinessInput[] | UserUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBusinessInput | UserCreateOrConnectWithoutBusinessInput[]
    createMany?: UserCreateManyBusinessInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CustomerCreateNestedManyWithoutBusinessInput = {
    create?: XOR<CustomerCreateWithoutBusinessInput, CustomerUncheckedCreateWithoutBusinessInput> | CustomerCreateWithoutBusinessInput[] | CustomerUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutBusinessInput | CustomerCreateOrConnectWithoutBusinessInput[]
    createMany?: CustomerCreateManyBusinessInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type PriceBookItemCreateNestedManyWithoutBusinessInput = {
    create?: XOR<PriceBookItemCreateWithoutBusinessInput, PriceBookItemUncheckedCreateWithoutBusinessInput> | PriceBookItemCreateWithoutBusinessInput[] | PriceBookItemUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: PriceBookItemCreateOrConnectWithoutBusinessInput | PriceBookItemCreateOrConnectWithoutBusinessInput[]
    createMany?: PriceBookItemCreateManyBusinessInputEnvelope
    connect?: PriceBookItemWhereUniqueInput | PriceBookItemWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutBusinessInput = {
    create?: XOR<NotificationCreateWithoutBusinessInput, NotificationUncheckedCreateWithoutBusinessInput> | NotificationCreateWithoutBusinessInput[] | NotificationUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutBusinessInput | NotificationCreateOrConnectWithoutBusinessInput[]
    createMany?: NotificationCreateManyBusinessInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<UserCreateWithoutBusinessInput, UserUncheckedCreateWithoutBusinessInput> | UserCreateWithoutBusinessInput[] | UserUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBusinessInput | UserCreateOrConnectWithoutBusinessInput[]
    createMany?: UserCreateManyBusinessInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<CustomerCreateWithoutBusinessInput, CustomerUncheckedCreateWithoutBusinessInput> | CustomerCreateWithoutBusinessInput[] | CustomerUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutBusinessInput | CustomerCreateOrConnectWithoutBusinessInput[]
    createMany?: CustomerCreateManyBusinessInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type PriceBookItemUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<PriceBookItemCreateWithoutBusinessInput, PriceBookItemUncheckedCreateWithoutBusinessInput> | PriceBookItemCreateWithoutBusinessInput[] | PriceBookItemUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: PriceBookItemCreateOrConnectWithoutBusinessInput | PriceBookItemCreateOrConnectWithoutBusinessInput[]
    createMany?: PriceBookItemCreateManyBusinessInputEnvelope
    connect?: PriceBookItemWhereUniqueInput | PriceBookItemWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<NotificationCreateWithoutBusinessInput, NotificationUncheckedCreateWithoutBusinessInput> | NotificationCreateWithoutBusinessInput[] | NotificationUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutBusinessInput | NotificationCreateOrConnectWithoutBusinessInput[]
    createMany?: NotificationCreateManyBusinessInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<UserCreateWithoutBusinessInput, UserUncheckedCreateWithoutBusinessInput> | UserCreateWithoutBusinessInput[] | UserUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBusinessInput | UserCreateOrConnectWithoutBusinessInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBusinessInput | UserUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: UserCreateManyBusinessInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBusinessInput | UserUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBusinessInput | UserUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CustomerUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<CustomerCreateWithoutBusinessInput, CustomerUncheckedCreateWithoutBusinessInput> | CustomerCreateWithoutBusinessInput[] | CustomerUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutBusinessInput | CustomerCreateOrConnectWithoutBusinessInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutBusinessInput | CustomerUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: CustomerCreateManyBusinessInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutBusinessInput | CustomerUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutBusinessInput | CustomerUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type PriceBookItemUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<PriceBookItemCreateWithoutBusinessInput, PriceBookItemUncheckedCreateWithoutBusinessInput> | PriceBookItemCreateWithoutBusinessInput[] | PriceBookItemUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: PriceBookItemCreateOrConnectWithoutBusinessInput | PriceBookItemCreateOrConnectWithoutBusinessInput[]
    upsert?: PriceBookItemUpsertWithWhereUniqueWithoutBusinessInput | PriceBookItemUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: PriceBookItemCreateManyBusinessInputEnvelope
    set?: PriceBookItemWhereUniqueInput | PriceBookItemWhereUniqueInput[]
    disconnect?: PriceBookItemWhereUniqueInput | PriceBookItemWhereUniqueInput[]
    delete?: PriceBookItemWhereUniqueInput | PriceBookItemWhereUniqueInput[]
    connect?: PriceBookItemWhereUniqueInput | PriceBookItemWhereUniqueInput[]
    update?: PriceBookItemUpdateWithWhereUniqueWithoutBusinessInput | PriceBookItemUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: PriceBookItemUpdateManyWithWhereWithoutBusinessInput | PriceBookItemUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: PriceBookItemScalarWhereInput | PriceBookItemScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<NotificationCreateWithoutBusinessInput, NotificationUncheckedCreateWithoutBusinessInput> | NotificationCreateWithoutBusinessInput[] | NotificationUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutBusinessInput | NotificationCreateOrConnectWithoutBusinessInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutBusinessInput | NotificationUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: NotificationCreateManyBusinessInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutBusinessInput | NotificationUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutBusinessInput | NotificationUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<UserCreateWithoutBusinessInput, UserUncheckedCreateWithoutBusinessInput> | UserCreateWithoutBusinessInput[] | UserUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBusinessInput | UserCreateOrConnectWithoutBusinessInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBusinessInput | UserUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: UserCreateManyBusinessInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBusinessInput | UserUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBusinessInput | UserUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CustomerUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<CustomerCreateWithoutBusinessInput, CustomerUncheckedCreateWithoutBusinessInput> | CustomerCreateWithoutBusinessInput[] | CustomerUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutBusinessInput | CustomerCreateOrConnectWithoutBusinessInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutBusinessInput | CustomerUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: CustomerCreateManyBusinessInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutBusinessInput | CustomerUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutBusinessInput | CustomerUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type PriceBookItemUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<PriceBookItemCreateWithoutBusinessInput, PriceBookItemUncheckedCreateWithoutBusinessInput> | PriceBookItemCreateWithoutBusinessInput[] | PriceBookItemUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: PriceBookItemCreateOrConnectWithoutBusinessInput | PriceBookItemCreateOrConnectWithoutBusinessInput[]
    upsert?: PriceBookItemUpsertWithWhereUniqueWithoutBusinessInput | PriceBookItemUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: PriceBookItemCreateManyBusinessInputEnvelope
    set?: PriceBookItemWhereUniqueInput | PriceBookItemWhereUniqueInput[]
    disconnect?: PriceBookItemWhereUniqueInput | PriceBookItemWhereUniqueInput[]
    delete?: PriceBookItemWhereUniqueInput | PriceBookItemWhereUniqueInput[]
    connect?: PriceBookItemWhereUniqueInput | PriceBookItemWhereUniqueInput[]
    update?: PriceBookItemUpdateWithWhereUniqueWithoutBusinessInput | PriceBookItemUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: PriceBookItemUpdateManyWithWhereWithoutBusinessInput | PriceBookItemUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: PriceBookItemScalarWhereInput | PriceBookItemScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<NotificationCreateWithoutBusinessInput, NotificationUncheckedCreateWithoutBusinessInput> | NotificationCreateWithoutBusinessInput[] | NotificationUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutBusinessInput | NotificationCreateOrConnectWithoutBusinessInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutBusinessInput | NotificationUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: NotificationCreateManyBusinessInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutBusinessInput | NotificationUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutBusinessInput | NotificationUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type BusinessCreateNestedOneWithoutCustomersInput = {
    create?: XOR<BusinessCreateWithoutCustomersInput, BusinessUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutCustomersInput
    connect?: BusinessWhereUniqueInput
  }

  export type AppointmentCreateNestedManyWithoutCustomerInput = {
    create?: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput> | AppointmentCreateWithoutCustomerInput[] | AppointmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCustomerInput | AppointmentCreateOrConnectWithoutCustomerInput[]
    createMany?: AppointmentCreateManyCustomerInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type InvoiceCreateNestedManyWithoutCustomerInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type EquipmentCreateNestedManyWithoutCustomerInput = {
    create?: XOR<EquipmentCreateWithoutCustomerInput, EquipmentUncheckedCreateWithoutCustomerInput> | EquipmentCreateWithoutCustomerInput[] | EquipmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutCustomerInput | EquipmentCreateOrConnectWithoutCustomerInput[]
    createMany?: EquipmentCreateManyCustomerInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput> | AppointmentCreateWithoutCustomerInput[] | AppointmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCustomerInput | AppointmentCreateOrConnectWithoutCustomerInput[]
    createMany?: AppointmentCreateManyCustomerInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type EquipmentUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<EquipmentCreateWithoutCustomerInput, EquipmentUncheckedCreateWithoutCustomerInput> | EquipmentCreateWithoutCustomerInput[] | EquipmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutCustomerInput | EquipmentCreateOrConnectWithoutCustomerInput[]
    createMany?: EquipmentCreateManyCustomerInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type BusinessUpdateOneRequiredWithoutCustomersNestedInput = {
    create?: XOR<BusinessCreateWithoutCustomersInput, BusinessUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutCustomersInput
    upsert?: BusinessUpsertWithoutCustomersInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutCustomersInput, BusinessUpdateWithoutCustomersInput>, BusinessUncheckedUpdateWithoutCustomersInput>
  }

  export type AppointmentUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput> | AppointmentCreateWithoutCustomerInput[] | AppointmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCustomerInput | AppointmentCreateOrConnectWithoutCustomerInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutCustomerInput | AppointmentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: AppointmentCreateManyCustomerInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutCustomerInput | AppointmentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutCustomerInput | AppointmentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type InvoiceUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutCustomerInput | InvoiceUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutCustomerInput | InvoiceUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutCustomerInput | InvoiceUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type EquipmentUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<EquipmentCreateWithoutCustomerInput, EquipmentUncheckedCreateWithoutCustomerInput> | EquipmentCreateWithoutCustomerInput[] | EquipmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutCustomerInput | EquipmentCreateOrConnectWithoutCustomerInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutCustomerInput | EquipmentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: EquipmentCreateManyCustomerInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutCustomerInput | EquipmentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutCustomerInput | EquipmentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput> | AppointmentCreateWithoutCustomerInput[] | AppointmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCustomerInput | AppointmentCreateOrConnectWithoutCustomerInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutCustomerInput | AppointmentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: AppointmentCreateManyCustomerInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutCustomerInput | AppointmentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutCustomerInput | AppointmentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutCustomerInput | InvoiceUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutCustomerInput | InvoiceUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutCustomerInput | InvoiceUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type EquipmentUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<EquipmentCreateWithoutCustomerInput, EquipmentUncheckedCreateWithoutCustomerInput> | EquipmentCreateWithoutCustomerInput[] | EquipmentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutCustomerInput | EquipmentCreateOrConnectWithoutCustomerInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutCustomerInput | EquipmentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: EquipmentCreateManyCustomerInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutCustomerInput | EquipmentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutCustomerInput | EquipmentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<CustomerCreateWithoutAppointmentsInput, CustomerUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutAppointmentsInput
    connect?: CustomerWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsInput
    connect?: UserWhereUniqueInput
  }

  export type InvoiceCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<InvoiceCreateWithoutAppointmentInput, InvoiceUncheckedCreateWithoutAppointmentInput> | InvoiceCreateWithoutAppointmentInput[] | InvoiceUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutAppointmentInput | InvoiceCreateOrConnectWithoutAppointmentInput[]
    createMany?: InvoiceCreateManyAppointmentInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type ServiceHistoryCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<ServiceHistoryCreateWithoutAppointmentInput, ServiceHistoryUncheckedCreateWithoutAppointmentInput> | ServiceHistoryCreateWithoutAppointmentInput[] | ServiceHistoryUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: ServiceHistoryCreateOrConnectWithoutAppointmentInput | ServiceHistoryCreateOrConnectWithoutAppointmentInput[]
    createMany?: ServiceHistoryCreateManyAppointmentInputEnvelope
    connect?: ServiceHistoryWhereUniqueInput | ServiceHistoryWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<NotificationCreateWithoutAppointmentInput, NotificationUncheckedCreateWithoutAppointmentInput> | NotificationCreateWithoutAppointmentInput[] | NotificationUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAppointmentInput | NotificationCreateOrConnectWithoutAppointmentInput[]
    createMany?: NotificationCreateManyAppointmentInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<InvoiceCreateWithoutAppointmentInput, InvoiceUncheckedCreateWithoutAppointmentInput> | InvoiceCreateWithoutAppointmentInput[] | InvoiceUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutAppointmentInput | InvoiceCreateOrConnectWithoutAppointmentInput[]
    createMany?: InvoiceCreateManyAppointmentInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type ServiceHistoryUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<ServiceHistoryCreateWithoutAppointmentInput, ServiceHistoryUncheckedCreateWithoutAppointmentInput> | ServiceHistoryCreateWithoutAppointmentInput[] | ServiceHistoryUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: ServiceHistoryCreateOrConnectWithoutAppointmentInput | ServiceHistoryCreateOrConnectWithoutAppointmentInput[]
    createMany?: ServiceHistoryCreateManyAppointmentInputEnvelope
    connect?: ServiceHistoryWhereUniqueInput | ServiceHistoryWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<NotificationCreateWithoutAppointmentInput, NotificationUncheckedCreateWithoutAppointmentInput> | NotificationCreateWithoutAppointmentInput[] | NotificationUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAppointmentInput | NotificationCreateOrConnectWithoutAppointmentInput[]
    createMany?: NotificationCreateManyAppointmentInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus
  }

  export type CustomerUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<CustomerCreateWithoutAppointmentsInput, CustomerUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutAppointmentsInput
    upsert?: CustomerUpsertWithoutAppointmentsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutAppointmentsInput, CustomerUpdateWithoutAppointmentsInput>, CustomerUncheckedUpdateWithoutAppointmentsInput>
  }

  export type UserUpdateOneWithoutAppointmentsNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentsInput
    upsert?: UserUpsertWithoutAppointmentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAppointmentsInput, UserUpdateWithoutAppointmentsInput>, UserUncheckedUpdateWithoutAppointmentsInput>
  }

  export type InvoiceUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<InvoiceCreateWithoutAppointmentInput, InvoiceUncheckedCreateWithoutAppointmentInput> | InvoiceCreateWithoutAppointmentInput[] | InvoiceUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutAppointmentInput | InvoiceCreateOrConnectWithoutAppointmentInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutAppointmentInput | InvoiceUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: InvoiceCreateManyAppointmentInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutAppointmentInput | InvoiceUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutAppointmentInput | InvoiceUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type ServiceHistoryUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<ServiceHistoryCreateWithoutAppointmentInput, ServiceHistoryUncheckedCreateWithoutAppointmentInput> | ServiceHistoryCreateWithoutAppointmentInput[] | ServiceHistoryUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: ServiceHistoryCreateOrConnectWithoutAppointmentInput | ServiceHistoryCreateOrConnectWithoutAppointmentInput[]
    upsert?: ServiceHistoryUpsertWithWhereUniqueWithoutAppointmentInput | ServiceHistoryUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: ServiceHistoryCreateManyAppointmentInputEnvelope
    set?: ServiceHistoryWhereUniqueInput | ServiceHistoryWhereUniqueInput[]
    disconnect?: ServiceHistoryWhereUniqueInput | ServiceHistoryWhereUniqueInput[]
    delete?: ServiceHistoryWhereUniqueInput | ServiceHistoryWhereUniqueInput[]
    connect?: ServiceHistoryWhereUniqueInput | ServiceHistoryWhereUniqueInput[]
    update?: ServiceHistoryUpdateWithWhereUniqueWithoutAppointmentInput | ServiceHistoryUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: ServiceHistoryUpdateManyWithWhereWithoutAppointmentInput | ServiceHistoryUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: ServiceHistoryScalarWhereInput | ServiceHistoryScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<NotificationCreateWithoutAppointmentInput, NotificationUncheckedCreateWithoutAppointmentInput> | NotificationCreateWithoutAppointmentInput[] | NotificationUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAppointmentInput | NotificationCreateOrConnectWithoutAppointmentInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutAppointmentInput | NotificationUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: NotificationCreateManyAppointmentInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutAppointmentInput | NotificationUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutAppointmentInput | NotificationUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<InvoiceCreateWithoutAppointmentInput, InvoiceUncheckedCreateWithoutAppointmentInput> | InvoiceCreateWithoutAppointmentInput[] | InvoiceUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutAppointmentInput | InvoiceCreateOrConnectWithoutAppointmentInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutAppointmentInput | InvoiceUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: InvoiceCreateManyAppointmentInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutAppointmentInput | InvoiceUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutAppointmentInput | InvoiceUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type ServiceHistoryUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<ServiceHistoryCreateWithoutAppointmentInput, ServiceHistoryUncheckedCreateWithoutAppointmentInput> | ServiceHistoryCreateWithoutAppointmentInput[] | ServiceHistoryUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: ServiceHistoryCreateOrConnectWithoutAppointmentInput | ServiceHistoryCreateOrConnectWithoutAppointmentInput[]
    upsert?: ServiceHistoryUpsertWithWhereUniqueWithoutAppointmentInput | ServiceHistoryUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: ServiceHistoryCreateManyAppointmentInputEnvelope
    set?: ServiceHistoryWhereUniqueInput | ServiceHistoryWhereUniqueInput[]
    disconnect?: ServiceHistoryWhereUniqueInput | ServiceHistoryWhereUniqueInput[]
    delete?: ServiceHistoryWhereUniqueInput | ServiceHistoryWhereUniqueInput[]
    connect?: ServiceHistoryWhereUniqueInput | ServiceHistoryWhereUniqueInput[]
    update?: ServiceHistoryUpdateWithWhereUniqueWithoutAppointmentInput | ServiceHistoryUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: ServiceHistoryUpdateManyWithWhereWithoutAppointmentInput | ServiceHistoryUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: ServiceHistoryScalarWhereInput | ServiceHistoryScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<NotificationCreateWithoutAppointmentInput, NotificationUncheckedCreateWithoutAppointmentInput> | NotificationCreateWithoutAppointmentInput[] | NotificationUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutAppointmentInput | NotificationCreateOrConnectWithoutAppointmentInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutAppointmentInput | NotificationUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: NotificationCreateManyAppointmentInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutAppointmentInput | NotificationUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutAppointmentInput | NotificationUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<CustomerCreateWithoutInvoicesInput, CustomerUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutInvoicesInput
    connect?: CustomerWhereUniqueInput
  }

  export type AppointmentCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<AppointmentCreateWithoutInvoicesInput, AppointmentUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutInvoicesInput
    connect?: AppointmentWhereUniqueInput
  }

  export type InvoiceItemCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
  }

  export type InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
  }

  export type EnumInvoiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvoiceStatus
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CustomerUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<CustomerCreateWithoutInvoicesInput, CustomerUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutInvoicesInput
    upsert?: CustomerUpsertWithoutInvoicesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutInvoicesInput, CustomerUpdateWithoutInvoicesInput>, CustomerUncheckedUpdateWithoutInvoicesInput>
  }

  export type AppointmentUpdateOneWithoutInvoicesNestedInput = {
    create?: XOR<AppointmentCreateWithoutInvoicesInput, AppointmentUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutInvoicesInput
    upsert?: AppointmentUpsertWithoutInvoicesInput
    disconnect?: AppointmentWhereInput | boolean
    delete?: AppointmentWhereInput | boolean
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutInvoicesInput, AppointmentUpdateWithoutInvoicesInput>, AppointmentUncheckedUpdateWithoutInvoicesInput>
  }

  export type InvoiceItemUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
    upsert?: InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    set?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    disconnect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    delete?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    update?: InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InvoiceItemUpdateManyWithWhereWithoutInvoiceInput | InvoiceItemUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
  }

  export type InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
    upsert?: InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    set?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    disconnect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    delete?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    update?: InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InvoiceItemUpdateManyWithWhereWithoutInvoiceInput | InvoiceItemUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
  }

  export type InvoiceCreateNestedOneWithoutItemsInput = {
    create?: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutItemsInput
    connect?: InvoiceWhereUniqueInput
  }

  export type InvoiceUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutItemsInput
    upsert?: InvoiceUpsertWithoutItemsInput
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutItemsInput, InvoiceUpdateWithoutItemsInput>, InvoiceUncheckedUpdateWithoutItemsInput>
  }

  export type EquipmentCreatephotosInput = {
    set: string[]
  }

  export type CustomerCreateNestedOneWithoutEquipmentInput = {
    create?: XOR<CustomerCreateWithoutEquipmentInput, CustomerUncheckedCreateWithoutEquipmentInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutEquipmentInput
    connect?: CustomerWhereUniqueInput
  }

  export type ServiceHistoryCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<ServiceHistoryCreateWithoutEquipmentInput, ServiceHistoryUncheckedCreateWithoutEquipmentInput> | ServiceHistoryCreateWithoutEquipmentInput[] | ServiceHistoryUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ServiceHistoryCreateOrConnectWithoutEquipmentInput | ServiceHistoryCreateOrConnectWithoutEquipmentInput[]
    createMany?: ServiceHistoryCreateManyEquipmentInputEnvelope
    connect?: ServiceHistoryWhereUniqueInput | ServiceHistoryWhereUniqueInput[]
  }

  export type ServiceHistoryUncheckedCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<ServiceHistoryCreateWithoutEquipmentInput, ServiceHistoryUncheckedCreateWithoutEquipmentInput> | ServiceHistoryCreateWithoutEquipmentInput[] | ServiceHistoryUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ServiceHistoryCreateOrConnectWithoutEquipmentInput | ServiceHistoryCreateOrConnectWithoutEquipmentInput[]
    createMany?: ServiceHistoryCreateManyEquipmentInputEnvelope
    connect?: ServiceHistoryWhereUniqueInput | ServiceHistoryWhereUniqueInput[]
  }

  export type EnumEquipmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.EquipmentType
  }

  export type EquipmentUpdatephotosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CustomerUpdateOneRequiredWithoutEquipmentNestedInput = {
    create?: XOR<CustomerCreateWithoutEquipmentInput, CustomerUncheckedCreateWithoutEquipmentInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutEquipmentInput
    upsert?: CustomerUpsertWithoutEquipmentInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutEquipmentInput, CustomerUpdateWithoutEquipmentInput>, CustomerUncheckedUpdateWithoutEquipmentInput>
  }

  export type ServiceHistoryUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<ServiceHistoryCreateWithoutEquipmentInput, ServiceHistoryUncheckedCreateWithoutEquipmentInput> | ServiceHistoryCreateWithoutEquipmentInput[] | ServiceHistoryUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ServiceHistoryCreateOrConnectWithoutEquipmentInput | ServiceHistoryCreateOrConnectWithoutEquipmentInput[]
    upsert?: ServiceHistoryUpsertWithWhereUniqueWithoutEquipmentInput | ServiceHistoryUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: ServiceHistoryCreateManyEquipmentInputEnvelope
    set?: ServiceHistoryWhereUniqueInput | ServiceHistoryWhereUniqueInput[]
    disconnect?: ServiceHistoryWhereUniqueInput | ServiceHistoryWhereUniqueInput[]
    delete?: ServiceHistoryWhereUniqueInput | ServiceHistoryWhereUniqueInput[]
    connect?: ServiceHistoryWhereUniqueInput | ServiceHistoryWhereUniqueInput[]
    update?: ServiceHistoryUpdateWithWhereUniqueWithoutEquipmentInput | ServiceHistoryUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: ServiceHistoryUpdateManyWithWhereWithoutEquipmentInput | ServiceHistoryUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: ServiceHistoryScalarWhereInput | ServiceHistoryScalarWhereInput[]
  }

  export type ServiceHistoryUncheckedUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<ServiceHistoryCreateWithoutEquipmentInput, ServiceHistoryUncheckedCreateWithoutEquipmentInput> | ServiceHistoryCreateWithoutEquipmentInput[] | ServiceHistoryUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ServiceHistoryCreateOrConnectWithoutEquipmentInput | ServiceHistoryCreateOrConnectWithoutEquipmentInput[]
    upsert?: ServiceHistoryUpsertWithWhereUniqueWithoutEquipmentInput | ServiceHistoryUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: ServiceHistoryCreateManyEquipmentInputEnvelope
    set?: ServiceHistoryWhereUniqueInput | ServiceHistoryWhereUniqueInput[]
    disconnect?: ServiceHistoryWhereUniqueInput | ServiceHistoryWhereUniqueInput[]
    delete?: ServiceHistoryWhereUniqueInput | ServiceHistoryWhereUniqueInput[]
    connect?: ServiceHistoryWhereUniqueInput | ServiceHistoryWhereUniqueInput[]
    update?: ServiceHistoryUpdateWithWhereUniqueWithoutEquipmentInput | ServiceHistoryUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: ServiceHistoryUpdateManyWithWhereWithoutEquipmentInput | ServiceHistoryUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: ServiceHistoryScalarWhereInput | ServiceHistoryScalarWhereInput[]
  }

  export type ServiceHistoryCreatephotosInput = {
    set: string[]
  }

  export type EquipmentCreateNestedOneWithoutServiceHistoryInput = {
    create?: XOR<EquipmentCreateWithoutServiceHistoryInput, EquipmentUncheckedCreateWithoutServiceHistoryInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutServiceHistoryInput
    connect?: EquipmentWhereUniqueInput
  }

  export type AppointmentCreateNestedOneWithoutServiceHistoryInput = {
    create?: XOR<AppointmentCreateWithoutServiceHistoryInput, AppointmentUncheckedCreateWithoutServiceHistoryInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutServiceHistoryInput
    connect?: AppointmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutServiceHistoryInput = {
    create?: XOR<UserCreateWithoutServiceHistoryInput, UserUncheckedCreateWithoutServiceHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutServiceHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type ServiceHistoryUpdatephotosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EquipmentUpdateOneRequiredWithoutServiceHistoryNestedInput = {
    create?: XOR<EquipmentCreateWithoutServiceHistoryInput, EquipmentUncheckedCreateWithoutServiceHistoryInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutServiceHistoryInput
    upsert?: EquipmentUpsertWithoutServiceHistoryInput
    connect?: EquipmentWhereUniqueInput
    update?: XOR<XOR<EquipmentUpdateToOneWithWhereWithoutServiceHistoryInput, EquipmentUpdateWithoutServiceHistoryInput>, EquipmentUncheckedUpdateWithoutServiceHistoryInput>
  }

  export type AppointmentUpdateOneWithoutServiceHistoryNestedInput = {
    create?: XOR<AppointmentCreateWithoutServiceHistoryInput, AppointmentUncheckedCreateWithoutServiceHistoryInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutServiceHistoryInput
    upsert?: AppointmentUpsertWithoutServiceHistoryInput
    disconnect?: AppointmentWhereInput | boolean
    delete?: AppointmentWhereInput | boolean
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutServiceHistoryInput, AppointmentUpdateWithoutServiceHistoryInput>, AppointmentUncheckedUpdateWithoutServiceHistoryInput>
  }

  export type UserUpdateOneWithoutServiceHistoryNestedInput = {
    create?: XOR<UserCreateWithoutServiceHistoryInput, UserUncheckedCreateWithoutServiceHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutServiceHistoryInput
    upsert?: UserUpsertWithoutServiceHistoryInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutServiceHistoryInput, UserUpdateWithoutServiceHistoryInput>, UserUncheckedUpdateWithoutServiceHistoryInput>
  }

  export type BusinessCreateNestedOneWithoutPriceBookItemsInput = {
    create?: XOR<BusinessCreateWithoutPriceBookItemsInput, BusinessUncheckedCreateWithoutPriceBookItemsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutPriceBookItemsInput
    connect?: BusinessWhereUniqueInput
  }

  export type BusinessUpdateOneRequiredWithoutPriceBookItemsNestedInput = {
    create?: XOR<BusinessCreateWithoutPriceBookItemsInput, BusinessUncheckedCreateWithoutPriceBookItemsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutPriceBookItemsInput
    upsert?: BusinessUpsertWithoutPriceBookItemsInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutPriceBookItemsInput, BusinessUpdateWithoutPriceBookItemsInput>, BusinessUncheckedUpdateWithoutPriceBookItemsInput>
  }

  export type BusinessCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<BusinessCreateWithoutNotificationsInput, BusinessUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutNotificationsInput
    connect?: BusinessWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type AppointmentCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<AppointmentCreateWithoutNotificationsInput, AppointmentUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutNotificationsInput
    connect?: AppointmentWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type EnumNotificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.NotificationStatus
  }

  export type BusinessUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<BusinessCreateWithoutNotificationsInput, BusinessUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutNotificationsInput
    upsert?: BusinessUpsertWithoutNotificationsInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutNotificationsInput, BusinessUpdateWithoutNotificationsInput>, BusinessUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type AppointmentUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<AppointmentCreateWithoutNotificationsInput, AppointmentUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutNotificationsInput
    upsert?: AppointmentUpsertWithoutNotificationsInput
    disconnect?: AppointmentWhereInput | boolean
    delete?: AppointmentWhereInput | boolean
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutNotificationsInput, AppointmentUpdateWithoutNotificationsInput>, AppointmentUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserCreateNestedOneWithoutConsentsInput = {
    create?: XOR<UserCreateWithoutConsentsInput, UserUncheckedCreateWithoutConsentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConsentsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumConsentTypeFieldUpdateOperationsInput = {
    set?: $Enums.ConsentType
  }

  export type UserUpdateOneRequiredWithoutConsentsNestedInput = {
    create?: XOR<UserCreateWithoutConsentsInput, UserUncheckedCreateWithoutConsentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConsentsInput
    upsert?: UserUpsertWithoutConsentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConsentsInput, UserUpdateWithoutConsentsInput>, UserUncheckedUpdateWithoutConsentsInput>
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type NestedEnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumEquipmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EquipmentType | EnumEquipmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEquipmentTypeFilter<$PrismaModel> | $Enums.EquipmentType
  }

  export type NestedEnumEquipmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EquipmentType | EnumEquipmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EquipmentType[] | ListEnumEquipmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEquipmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.EquipmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEquipmentTypeFilter<$PrismaModel>
    _max?: NestedEnumEquipmentTypeFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationStatusFilter<$PrismaModel> | $Enums.NotificationStatus
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type NestedEnumNotificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.NotificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationStatusFilter<$PrismaModel>
    _max?: NestedEnumNotificationStatusFilter<$PrismaModel>
  }

  export type NestedEnumConsentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsentType | EnumConsentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConsentType[] | ListEnumConsentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsentType[] | ListEnumConsentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConsentTypeFilter<$PrismaModel> | $Enums.ConsentType
  }

  export type NestedEnumConsentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsentType | EnumConsentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConsentType[] | ListEnumConsentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsentType[] | ListEnumConsentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConsentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ConsentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConsentTypeFilter<$PrismaModel>
    _max?: NestedEnumConsentTypeFilter<$PrismaModel>
  }

  export type BusinessCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    phone: string
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    logo?: string | null
    primaryColor?: string | null
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customers?: CustomerCreateNestedManyWithoutBusinessInput
    priceBookItems?: PriceBookItemCreateNestedManyWithoutBusinessInput
    notifications?: NotificationCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    phone: string
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    logo?: string | null
    primaryColor?: string | null
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customers?: CustomerUncheckedCreateNestedManyWithoutBusinessInput
    priceBookItems?: PriceBookItemUncheckedCreateNestedManyWithoutBusinessInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutUsersInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutUsersInput, BusinessUncheckedCreateWithoutUsersInput>
  }

  export type AppointmentCreateWithoutUserInput = {
    id?: string
    scheduledAt: Date | string
    duration?: number
    status?: $Enums.AppointmentStatus
    notes?: string | null
    confirmationCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutAppointmentsInput
    invoices?: InvoiceCreateNestedManyWithoutAppointmentInput
    serviceHistory?: ServiceHistoryCreateNestedManyWithoutAppointmentInput
    notifications?: NotificationCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutUserInput = {
    id?: string
    customerId: string
    scheduledAt: Date | string
    duration?: number
    status?: $Enums.AppointmentStatus
    notes?: string | null
    confirmationCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutAppointmentInput
    serviceHistory?: ServiceHistoryUncheckedCreateNestedManyWithoutAppointmentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutUserInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput>
  }

  export type AppointmentCreateManyUserInputEnvelope = {
    data: AppointmentCreateManyUserInput | AppointmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    recipient: string
    message: string
    scheduledFor: Date | string
    sentAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    business: BusinessCreateNestedOneWithoutNotificationsInput
    appointment?: AppointmentCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    businessId: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    recipient: string
    message: string
    appointmentId?: string | null
    scheduledFor: Date | string
    sentAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ServiceHistoryCreateWithoutUserInput = {
    id?: string
    performedAt?: Date | string
    description: string
    technicianNotes?: string | null
    photos?: ServiceHistoryCreatephotosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    equipment: EquipmentCreateNestedOneWithoutServiceHistoryInput
    appointment?: AppointmentCreateNestedOneWithoutServiceHistoryInput
  }

  export type ServiceHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    equipmentId: string
    appointmentId?: string | null
    performedAt?: Date | string
    description: string
    technicianNotes?: string | null
    photos?: ServiceHistoryCreatephotosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceHistoryCreateOrConnectWithoutUserInput = {
    where: ServiceHistoryWhereUniqueInput
    create: XOR<ServiceHistoryCreateWithoutUserInput, ServiceHistoryUncheckedCreateWithoutUserInput>
  }

  export type ServiceHistoryCreateManyUserInputEnvelope = {
    data: ServiceHistoryCreateManyUserInput | ServiceHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConsentCreateWithoutUserInput = {
    id?: string
    consentType: $Enums.ConsentType
    consentText: string
    version: string
    consentedAt?: Date | string
    revokedAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type ConsentUncheckedCreateWithoutUserInput = {
    id?: string
    consentType: $Enums.ConsentType
    consentText: string
    version: string
    consentedAt?: Date | string
    revokedAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type ConsentCreateOrConnectWithoutUserInput = {
    where: ConsentWhereUniqueInput
    create: XOR<ConsentCreateWithoutUserInput, ConsentUncheckedCreateWithoutUserInput>
  }

  export type ConsentCreateManyUserInputEnvelope = {
    data: ConsentCreateManyUserInput | ConsentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutUserInput = {
    id?: string
    action: string
    resource: string
    resourceId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    resource: string
    resourceId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BusinessUpsertWithoutUsersInput = {
    update: XOR<BusinessUpdateWithoutUsersInput, BusinessUncheckedUpdateWithoutUsersInput>
    create: XOR<BusinessCreateWithoutUsersInput, BusinessUncheckedCreateWithoutUsersInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutUsersInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutUsersInput, BusinessUncheckedUpdateWithoutUsersInput>
  }

  export type BusinessUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: CustomerUpdateManyWithoutBusinessNestedInput
    priceBookItems?: PriceBookItemUpdateManyWithoutBusinessNestedInput
    notifications?: NotificationUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: CustomerUncheckedUpdateManyWithoutBusinessNestedInput
    priceBookItems?: PriceBookItemUncheckedUpdateManyWithoutBusinessNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type AppointmentUpsertWithWhereUniqueWithoutUserInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutUserInput, AppointmentUncheckedUpdateWithoutUserInput>
    create: XOR<AppointmentCreateWithoutUserInput, AppointmentUncheckedCreateWithoutUserInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutUserInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutUserInput, AppointmentUncheckedUpdateWithoutUserInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutUserInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutUserInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: StringFilter<"Appointment"> | string
    customerId?: StringFilter<"Appointment"> | string
    userId?: StringNullableFilter<"Appointment"> | string | null
    scheduledAt?: DateTimeFilter<"Appointment"> | Date | string
    duration?: IntFilter<"Appointment"> | number
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    notes?: StringNullableFilter<"Appointment"> | string | null
    confirmationCode?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    businessId?: StringFilter<"Notification"> | string
    userId?: StringNullableFilter<"Notification"> | string | null
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    status?: EnumNotificationStatusFilter<"Notification"> | $Enums.NotificationStatus
    recipient?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    appointmentId?: StringNullableFilter<"Notification"> | string | null
    scheduledFor?: DateTimeFilter<"Notification"> | Date | string
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    errorMessage?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type ServiceHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: ServiceHistoryWhereUniqueInput
    update: XOR<ServiceHistoryUpdateWithoutUserInput, ServiceHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<ServiceHistoryCreateWithoutUserInput, ServiceHistoryUncheckedCreateWithoutUserInput>
  }

  export type ServiceHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: ServiceHistoryWhereUniqueInput
    data: XOR<ServiceHistoryUpdateWithoutUserInput, ServiceHistoryUncheckedUpdateWithoutUserInput>
  }

  export type ServiceHistoryUpdateManyWithWhereWithoutUserInput = {
    where: ServiceHistoryScalarWhereInput
    data: XOR<ServiceHistoryUpdateManyMutationInput, ServiceHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type ServiceHistoryScalarWhereInput = {
    AND?: ServiceHistoryScalarWhereInput | ServiceHistoryScalarWhereInput[]
    OR?: ServiceHistoryScalarWhereInput[]
    NOT?: ServiceHistoryScalarWhereInput | ServiceHistoryScalarWhereInput[]
    id?: StringFilter<"ServiceHistory"> | string
    equipmentId?: StringFilter<"ServiceHistory"> | string
    appointmentId?: StringNullableFilter<"ServiceHistory"> | string | null
    userId?: StringNullableFilter<"ServiceHistory"> | string | null
    performedAt?: DateTimeFilter<"ServiceHistory"> | Date | string
    description?: StringFilter<"ServiceHistory"> | string
    technicianNotes?: StringNullableFilter<"ServiceHistory"> | string | null
    photos?: StringNullableListFilter<"ServiceHistory">
    createdAt?: DateTimeFilter<"ServiceHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceHistory"> | Date | string
  }

  export type ConsentUpsertWithWhereUniqueWithoutUserInput = {
    where: ConsentWhereUniqueInput
    update: XOR<ConsentUpdateWithoutUserInput, ConsentUncheckedUpdateWithoutUserInput>
    create: XOR<ConsentCreateWithoutUserInput, ConsentUncheckedCreateWithoutUserInput>
  }

  export type ConsentUpdateWithWhereUniqueWithoutUserInput = {
    where: ConsentWhereUniqueInput
    data: XOR<ConsentUpdateWithoutUserInput, ConsentUncheckedUpdateWithoutUserInput>
  }

  export type ConsentUpdateManyWithWhereWithoutUserInput = {
    where: ConsentScalarWhereInput
    data: XOR<ConsentUpdateManyMutationInput, ConsentUncheckedUpdateManyWithoutUserInput>
  }

  export type ConsentScalarWhereInput = {
    AND?: ConsentScalarWhereInput | ConsentScalarWhereInput[]
    OR?: ConsentScalarWhereInput[]
    NOT?: ConsentScalarWhereInput | ConsentScalarWhereInput[]
    id?: StringFilter<"Consent"> | string
    userId?: StringFilter<"Consent"> | string
    consentType?: EnumConsentTypeFilter<"Consent"> | $Enums.ConsentType
    consentText?: StringFilter<"Consent"> | string
    version?: StringFilter<"Consent"> | string
    consentedAt?: DateTimeFilter<"Consent"> | Date | string
    revokedAt?: DateTimeNullableFilter<"Consent"> | Date | string | null
    ipAddress?: StringNullableFilter<"Consent"> | string | null
    userAgent?: StringNullableFilter<"Consent"> | string | null
    createdAt?: DateTimeFilter<"Consent"> | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    userId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    resource?: StringFilter<"AuditLog"> | string
    resourceId?: StringNullableFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type UserCreateWithoutBusinessInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    serviceHistory?: ServiceHistoryCreateNestedManyWithoutUserInput
    consents?: ConsentCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBusinessInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    serviceHistory?: ServiceHistoryUncheckedCreateNestedManyWithoutUserInput
    consents?: ConsentUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBusinessInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBusinessInput, UserUncheckedCreateWithoutBusinessInput>
  }

  export type UserCreateManyBusinessInputEnvelope = {
    data: UserCreateManyBusinessInput | UserCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type CustomerCreateWithoutBusinessInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutCustomerInput
    invoices?: InvoiceCreateNestedManyWithoutCustomerInput
    equipment?: EquipmentCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutBusinessInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutCustomerInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustomerInput
    equipment?: EquipmentUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutBusinessInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutBusinessInput, CustomerUncheckedCreateWithoutBusinessInput>
  }

  export type CustomerCreateManyBusinessInputEnvelope = {
    data: CustomerCreateManyBusinessInput | CustomerCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type PriceBookItemCreateWithoutBusinessInput = {
    id?: string
    category: string
    serviceType: string
    description: string
    flatRate: Decimal | DecimalJsLike | number | string
    estimatedMinutes: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceBookItemUncheckedCreateWithoutBusinessInput = {
    id?: string
    category: string
    serviceType: string
    description: string
    flatRate: Decimal | DecimalJsLike | number | string
    estimatedMinutes: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceBookItemCreateOrConnectWithoutBusinessInput = {
    where: PriceBookItemWhereUniqueInput
    create: XOR<PriceBookItemCreateWithoutBusinessInput, PriceBookItemUncheckedCreateWithoutBusinessInput>
  }

  export type PriceBookItemCreateManyBusinessInputEnvelope = {
    data: PriceBookItemCreateManyBusinessInput | PriceBookItemCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutBusinessInput = {
    id?: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    recipient: string
    message: string
    scheduledFor: Date | string
    sentAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutNotificationsInput
    appointment?: AppointmentCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutBusinessInput = {
    id?: string
    userId?: string | null
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    recipient: string
    message: string
    appointmentId?: string | null
    scheduledFor: Date | string
    sentAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutBusinessInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutBusinessInput, NotificationUncheckedCreateWithoutBusinessInput>
  }

  export type NotificationCreateManyBusinessInputEnvelope = {
    data: NotificationCreateManyBusinessInput | NotificationCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutBusinessInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutBusinessInput, UserUncheckedUpdateWithoutBusinessInput>
    create: XOR<UserCreateWithoutBusinessInput, UserUncheckedCreateWithoutBusinessInput>
  }

  export type UserUpdateWithWhereUniqueWithoutBusinessInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutBusinessInput, UserUncheckedUpdateWithoutBusinessInput>
  }

  export type UserUpdateManyWithWhereWithoutBusinessInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutBusinessInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    businessId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type CustomerUpsertWithWhereUniqueWithoutBusinessInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutBusinessInput, CustomerUncheckedUpdateWithoutBusinessInput>
    create: XOR<CustomerCreateWithoutBusinessInput, CustomerUncheckedCreateWithoutBusinessInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutBusinessInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutBusinessInput, CustomerUncheckedUpdateWithoutBusinessInput>
  }

  export type CustomerUpdateManyWithWhereWithoutBusinessInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutBusinessInput>
  }

  export type CustomerScalarWhereInput = {
    AND?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    OR?: CustomerScalarWhereInput[]
    NOT?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    id?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    phone?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    city?: StringNullableFilter<"Customer"> | string | null
    state?: StringNullableFilter<"Customer"> | string | null
    zipCode?: StringNullableFilter<"Customer"> | string | null
    notes?: StringNullableFilter<"Customer"> | string | null
    businessId?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
  }

  export type PriceBookItemUpsertWithWhereUniqueWithoutBusinessInput = {
    where: PriceBookItemWhereUniqueInput
    update: XOR<PriceBookItemUpdateWithoutBusinessInput, PriceBookItemUncheckedUpdateWithoutBusinessInput>
    create: XOR<PriceBookItemCreateWithoutBusinessInput, PriceBookItemUncheckedCreateWithoutBusinessInput>
  }

  export type PriceBookItemUpdateWithWhereUniqueWithoutBusinessInput = {
    where: PriceBookItemWhereUniqueInput
    data: XOR<PriceBookItemUpdateWithoutBusinessInput, PriceBookItemUncheckedUpdateWithoutBusinessInput>
  }

  export type PriceBookItemUpdateManyWithWhereWithoutBusinessInput = {
    where: PriceBookItemScalarWhereInput
    data: XOR<PriceBookItemUpdateManyMutationInput, PriceBookItemUncheckedUpdateManyWithoutBusinessInput>
  }

  export type PriceBookItemScalarWhereInput = {
    AND?: PriceBookItemScalarWhereInput | PriceBookItemScalarWhereInput[]
    OR?: PriceBookItemScalarWhereInput[]
    NOT?: PriceBookItemScalarWhereInput | PriceBookItemScalarWhereInput[]
    id?: StringFilter<"PriceBookItem"> | string
    businessId?: StringFilter<"PriceBookItem"> | string
    category?: StringFilter<"PriceBookItem"> | string
    serviceType?: StringFilter<"PriceBookItem"> | string
    description?: StringFilter<"PriceBookItem"> | string
    flatRate?: DecimalFilter<"PriceBookItem"> | Decimal | DecimalJsLike | number | string
    estimatedMinutes?: IntFilter<"PriceBookItem"> | number
    isActive?: BoolFilter<"PriceBookItem"> | boolean
    createdAt?: DateTimeFilter<"PriceBookItem"> | Date | string
    updatedAt?: DateTimeFilter<"PriceBookItem"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutBusinessInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutBusinessInput, NotificationUncheckedUpdateWithoutBusinessInput>
    create: XOR<NotificationCreateWithoutBusinessInput, NotificationUncheckedCreateWithoutBusinessInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutBusinessInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutBusinessInput, NotificationUncheckedUpdateWithoutBusinessInput>
  }

  export type NotificationUpdateManyWithWhereWithoutBusinessInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutBusinessInput>
  }

  export type BusinessCreateWithoutCustomersInput = {
    id?: string
    name: string
    slug: string
    phone: string
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    logo?: string | null
    primaryColor?: string | null
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutBusinessInput
    priceBookItems?: PriceBookItemCreateNestedManyWithoutBusinessInput
    notifications?: NotificationCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutCustomersInput = {
    id?: string
    name: string
    slug: string
    phone: string
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    logo?: string | null
    primaryColor?: string | null
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBusinessInput
    priceBookItems?: PriceBookItemUncheckedCreateNestedManyWithoutBusinessInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutCustomersInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutCustomersInput, BusinessUncheckedCreateWithoutCustomersInput>
  }

  export type AppointmentCreateWithoutCustomerInput = {
    id?: string
    scheduledAt: Date | string
    duration?: number
    status?: $Enums.AppointmentStatus
    notes?: string | null
    confirmationCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutAppointmentsInput
    invoices?: InvoiceCreateNestedManyWithoutAppointmentInput
    serviceHistory?: ServiceHistoryCreateNestedManyWithoutAppointmentInput
    notifications?: NotificationCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutCustomerInput = {
    id?: string
    userId?: string | null
    scheduledAt: Date | string
    duration?: number
    status?: $Enums.AppointmentStatus
    notes?: string | null
    confirmationCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutAppointmentInput
    serviceHistory?: ServiceHistoryUncheckedCreateNestedManyWithoutAppointmentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutCustomerInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput>
  }

  export type AppointmentCreateManyCustomerInputEnvelope = {
    data: AppointmentCreateManyCustomerInput | AppointmentCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceCreateWithoutCustomerInput = {
    id?: string
    invoiceNumber?: string
    status?: $Enums.InvoiceStatus
    subtotal?: Decimal | DecimalJsLike | number | string
    tax?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    issuedAt?: Date | string | null
    dueAt?: Date | string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointment?: AppointmentCreateNestedOneWithoutInvoicesInput
    items?: InvoiceItemCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutCustomerInput = {
    id?: string
    appointmentId?: string | null
    invoiceNumber?: string
    status?: $Enums.InvoiceStatus
    subtotal?: Decimal | DecimalJsLike | number | string
    tax?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    issuedAt?: Date | string | null
    dueAt?: Date | string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutCustomerInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput>
  }

  export type InvoiceCreateManyCustomerInputEnvelope = {
    data: InvoiceCreateManyCustomerInput | InvoiceCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentCreateWithoutCustomerInput = {
    id?: string
    type: $Enums.EquipmentType
    brand?: string | null
    model?: string | null
    serialNumber?: string | null
    installDate?: Date | string | null
    warrantyExpires?: Date | string | null
    location?: string | null
    notes?: string | null
    photos?: EquipmentCreatephotosInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceHistory?: ServiceHistoryCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateWithoutCustomerInput = {
    id?: string
    type: $Enums.EquipmentType
    brand?: string | null
    model?: string | null
    serialNumber?: string | null
    installDate?: Date | string | null
    warrantyExpires?: Date | string | null
    location?: string | null
    notes?: string | null
    photos?: EquipmentCreatephotosInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceHistory?: ServiceHistoryUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentCreateOrConnectWithoutCustomerInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutCustomerInput, EquipmentUncheckedCreateWithoutCustomerInput>
  }

  export type EquipmentCreateManyCustomerInputEnvelope = {
    data: EquipmentCreateManyCustomerInput | EquipmentCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type BusinessUpsertWithoutCustomersInput = {
    update: XOR<BusinessUpdateWithoutCustomersInput, BusinessUncheckedUpdateWithoutCustomersInput>
    create: XOR<BusinessCreateWithoutCustomersInput, BusinessUncheckedCreateWithoutCustomersInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutCustomersInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutCustomersInput, BusinessUncheckedUpdateWithoutCustomersInput>
  }

  export type BusinessUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBusinessNestedInput
    priceBookItems?: PriceBookItemUpdateManyWithoutBusinessNestedInput
    notifications?: NotificationUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBusinessNestedInput
    priceBookItems?: PriceBookItemUncheckedUpdateManyWithoutBusinessNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type AppointmentUpsertWithWhereUniqueWithoutCustomerInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutCustomerInput, AppointmentUncheckedUpdateWithoutCustomerInput>
    create: XOR<AppointmentCreateWithoutCustomerInput, AppointmentUncheckedCreateWithoutCustomerInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutCustomerInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutCustomerInput, AppointmentUncheckedUpdateWithoutCustomerInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutCustomerInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutCustomerInput>
  }

  export type InvoiceUpsertWithWhereUniqueWithoutCustomerInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutCustomerInput, InvoiceUncheckedUpdateWithoutCustomerInput>
    create: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutCustomerInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutCustomerInput, InvoiceUncheckedUpdateWithoutCustomerInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutCustomerInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutCustomerInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: StringFilter<"Invoice"> | string
    customerId?: StringFilter<"Invoice"> | string
    appointmentId?: StringNullableFilter<"Invoice"> | string | null
    invoiceNumber?: StringFilter<"Invoice"> | string
    status?: EnumInvoiceStatusFilter<"Invoice"> | $Enums.InvoiceStatus
    subtotal?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    tax?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"Invoice"> | string | null
    issuedAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    dueAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    paidAt?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
  }

  export type EquipmentUpsertWithWhereUniqueWithoutCustomerInput = {
    where: EquipmentWhereUniqueInput
    update: XOR<EquipmentUpdateWithoutCustomerInput, EquipmentUncheckedUpdateWithoutCustomerInput>
    create: XOR<EquipmentCreateWithoutCustomerInput, EquipmentUncheckedCreateWithoutCustomerInput>
  }

  export type EquipmentUpdateWithWhereUniqueWithoutCustomerInput = {
    where: EquipmentWhereUniqueInput
    data: XOR<EquipmentUpdateWithoutCustomerInput, EquipmentUncheckedUpdateWithoutCustomerInput>
  }

  export type EquipmentUpdateManyWithWhereWithoutCustomerInput = {
    where: EquipmentScalarWhereInput
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyWithoutCustomerInput>
  }

  export type EquipmentScalarWhereInput = {
    AND?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
    OR?: EquipmentScalarWhereInput[]
    NOT?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
    id?: StringFilter<"Equipment"> | string
    customerId?: StringFilter<"Equipment"> | string
    type?: EnumEquipmentTypeFilter<"Equipment"> | $Enums.EquipmentType
    brand?: StringNullableFilter<"Equipment"> | string | null
    model?: StringNullableFilter<"Equipment"> | string | null
    serialNumber?: StringNullableFilter<"Equipment"> | string | null
    installDate?: DateTimeNullableFilter<"Equipment"> | Date | string | null
    warrantyExpires?: DateTimeNullableFilter<"Equipment"> | Date | string | null
    location?: StringNullableFilter<"Equipment"> | string | null
    notes?: StringNullableFilter<"Equipment"> | string | null
    photos?: StringNullableListFilter<"Equipment">
    isActive?: BoolFilter<"Equipment"> | boolean
    createdAt?: DateTimeFilter<"Equipment"> | Date | string
    updatedAt?: DateTimeFilter<"Equipment"> | Date | string
  }

  export type CustomerCreateWithoutAppointmentsInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    business: BusinessCreateNestedOneWithoutCustomersInput
    invoices?: InvoiceCreateNestedManyWithoutCustomerInput
    equipment?: EquipmentCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    notes?: string | null
    businessId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustomerInput
    equipment?: EquipmentUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutAppointmentsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutAppointmentsInput, CustomerUncheckedCreateWithoutAppointmentsInput>
  }

  export type UserCreateWithoutAppointmentsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    business: BusinessCreateNestedOneWithoutUsersInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    serviceHistory?: ServiceHistoryCreateNestedManyWithoutUserInput
    consents?: ConsentCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    businessId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    serviceHistory?: ServiceHistoryUncheckedCreateNestedManyWithoutUserInput
    consents?: ConsentUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAppointmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
  }

  export type InvoiceCreateWithoutAppointmentInput = {
    id?: string
    invoiceNumber?: string
    status?: $Enums.InvoiceStatus
    subtotal?: Decimal | DecimalJsLike | number | string
    tax?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    issuedAt?: Date | string | null
    dueAt?: Date | string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutInvoicesInput
    items?: InvoiceItemCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutAppointmentInput = {
    id?: string
    customerId: string
    invoiceNumber?: string
    status?: $Enums.InvoiceStatus
    subtotal?: Decimal | DecimalJsLike | number | string
    tax?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    issuedAt?: Date | string | null
    dueAt?: Date | string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutAppointmentInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutAppointmentInput, InvoiceUncheckedCreateWithoutAppointmentInput>
  }

  export type InvoiceCreateManyAppointmentInputEnvelope = {
    data: InvoiceCreateManyAppointmentInput | InvoiceCreateManyAppointmentInput[]
    skipDuplicates?: boolean
  }

  export type ServiceHistoryCreateWithoutAppointmentInput = {
    id?: string
    performedAt?: Date | string
    description: string
    technicianNotes?: string | null
    photos?: ServiceHistoryCreatephotosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    equipment: EquipmentCreateNestedOneWithoutServiceHistoryInput
    user?: UserCreateNestedOneWithoutServiceHistoryInput
  }

  export type ServiceHistoryUncheckedCreateWithoutAppointmentInput = {
    id?: string
    equipmentId: string
    userId?: string | null
    performedAt?: Date | string
    description: string
    technicianNotes?: string | null
    photos?: ServiceHistoryCreatephotosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceHistoryCreateOrConnectWithoutAppointmentInput = {
    where: ServiceHistoryWhereUniqueInput
    create: XOR<ServiceHistoryCreateWithoutAppointmentInput, ServiceHistoryUncheckedCreateWithoutAppointmentInput>
  }

  export type ServiceHistoryCreateManyAppointmentInputEnvelope = {
    data: ServiceHistoryCreateManyAppointmentInput | ServiceHistoryCreateManyAppointmentInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutAppointmentInput = {
    id?: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    recipient: string
    message: string
    scheduledFor: Date | string
    sentAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    business: BusinessCreateNestedOneWithoutNotificationsInput
    user?: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutAppointmentInput = {
    id?: string
    businessId: string
    userId?: string | null
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    recipient: string
    message: string
    scheduledFor: Date | string
    sentAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutAppointmentInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutAppointmentInput, NotificationUncheckedCreateWithoutAppointmentInput>
  }

  export type NotificationCreateManyAppointmentInputEnvelope = {
    data: NotificationCreateManyAppointmentInput | NotificationCreateManyAppointmentInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutAppointmentsInput = {
    update: XOR<CustomerUpdateWithoutAppointmentsInput, CustomerUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<CustomerCreateWithoutAppointmentsInput, CustomerUncheckedCreateWithoutAppointmentsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutAppointmentsInput, CustomerUncheckedUpdateWithoutAppointmentsInput>
  }

  export type CustomerUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutCustomersNestedInput
    invoices?: InvoiceUpdateManyWithoutCustomerNestedInput
    equipment?: EquipmentUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    businessId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutCustomerNestedInput
    equipment?: EquipmentUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type UserUpsertWithoutAppointmentsInput = {
    update: XOR<UserUpdateWithoutAppointmentsInput, UserUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<UserCreateWithoutAppointmentsInput, UserUncheckedCreateWithoutAppointmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAppointmentsInput, UserUncheckedUpdateWithoutAppointmentsInput>
  }

  export type UserUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    business?: BusinessUpdateOneRequiredWithoutUsersNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    serviceHistory?: ServiceHistoryUpdateManyWithoutUserNestedInput
    consents?: ConsentUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    businessId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    serviceHistory?: ServiceHistoryUncheckedUpdateManyWithoutUserNestedInput
    consents?: ConsentUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InvoiceUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutAppointmentInput, InvoiceUncheckedUpdateWithoutAppointmentInput>
    create: XOR<InvoiceCreateWithoutAppointmentInput, InvoiceUncheckedCreateWithoutAppointmentInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutAppointmentInput, InvoiceUncheckedUpdateWithoutAppointmentInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutAppointmentInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutAppointmentInput>
  }

  export type ServiceHistoryUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: ServiceHistoryWhereUniqueInput
    update: XOR<ServiceHistoryUpdateWithoutAppointmentInput, ServiceHistoryUncheckedUpdateWithoutAppointmentInput>
    create: XOR<ServiceHistoryCreateWithoutAppointmentInput, ServiceHistoryUncheckedCreateWithoutAppointmentInput>
  }

  export type ServiceHistoryUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: ServiceHistoryWhereUniqueInput
    data: XOR<ServiceHistoryUpdateWithoutAppointmentInput, ServiceHistoryUncheckedUpdateWithoutAppointmentInput>
  }

  export type ServiceHistoryUpdateManyWithWhereWithoutAppointmentInput = {
    where: ServiceHistoryScalarWhereInput
    data: XOR<ServiceHistoryUpdateManyMutationInput, ServiceHistoryUncheckedUpdateManyWithoutAppointmentInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutAppointmentInput, NotificationUncheckedUpdateWithoutAppointmentInput>
    create: XOR<NotificationCreateWithoutAppointmentInput, NotificationUncheckedCreateWithoutAppointmentInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutAppointmentInput, NotificationUncheckedUpdateWithoutAppointmentInput>
  }

  export type NotificationUpdateManyWithWhereWithoutAppointmentInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutAppointmentInput>
  }

  export type CustomerCreateWithoutInvoicesInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    business: BusinessCreateNestedOneWithoutCustomersInput
    appointments?: AppointmentCreateNestedManyWithoutCustomerInput
    equipment?: EquipmentCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutInvoicesInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    notes?: string | null
    businessId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutCustomerInput
    equipment?: EquipmentUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutInvoicesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutInvoicesInput, CustomerUncheckedCreateWithoutInvoicesInput>
  }

  export type AppointmentCreateWithoutInvoicesInput = {
    id?: string
    scheduledAt: Date | string
    duration?: number
    status?: $Enums.AppointmentStatus
    notes?: string | null
    confirmationCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutAppointmentsInput
    user?: UserCreateNestedOneWithoutAppointmentsInput
    serviceHistory?: ServiceHistoryCreateNestedManyWithoutAppointmentInput
    notifications?: NotificationCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutInvoicesInput = {
    id?: string
    customerId: string
    userId?: string | null
    scheduledAt: Date | string
    duration?: number
    status?: $Enums.AppointmentStatus
    notes?: string | null
    confirmationCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceHistory?: ServiceHistoryUncheckedCreateNestedManyWithoutAppointmentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutInvoicesInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutInvoicesInput, AppointmentUncheckedCreateWithoutInvoicesInput>
  }

  export type InvoiceItemCreateWithoutInvoiceInput = {
    id?: string
    description: string
    quantity?: number
    rate: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type InvoiceItemUncheckedCreateWithoutInvoiceInput = {
    id?: string
    description: string
    quantity?: number
    rate: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type InvoiceItemCreateOrConnectWithoutInvoiceInput = {
    where: InvoiceItemWhereUniqueInput
    create: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceItemCreateManyInvoiceInputEnvelope = {
    data: InvoiceItemCreateManyInvoiceInput | InvoiceItemCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutInvoicesInput = {
    update: XOR<CustomerUpdateWithoutInvoicesInput, CustomerUncheckedUpdateWithoutInvoicesInput>
    create: XOR<CustomerCreateWithoutInvoicesInput, CustomerUncheckedCreateWithoutInvoicesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutInvoicesInput, CustomerUncheckedUpdateWithoutInvoicesInput>
  }

  export type CustomerUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutCustomersNestedInput
    appointments?: AppointmentUpdateManyWithoutCustomerNestedInput
    equipment?: EquipmentUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    businessId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutCustomerNestedInput
    equipment?: EquipmentUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type AppointmentUpsertWithoutInvoicesInput = {
    update: XOR<AppointmentUpdateWithoutInvoicesInput, AppointmentUncheckedUpdateWithoutInvoicesInput>
    create: XOR<AppointmentCreateWithoutInvoicesInput, AppointmentUncheckedCreateWithoutInvoicesInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutInvoicesInput, AppointmentUncheckedUpdateWithoutInvoicesInput>
  }

  export type AppointmentUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmationCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutAppointmentsNestedInput
    user?: UserUpdateOneWithoutAppointmentsNestedInput
    serviceHistory?: ServiceHistoryUpdateManyWithoutAppointmentNestedInput
    notifications?: NotificationUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmationCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceHistory?: ServiceHistoryUncheckedUpdateManyWithoutAppointmentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceItemWhereUniqueInput
    update: XOR<InvoiceItemUpdateWithoutInvoiceInput, InvoiceItemUncheckedUpdateWithoutInvoiceInput>
    create: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceItemWhereUniqueInput
    data: XOR<InvoiceItemUpdateWithoutInvoiceInput, InvoiceItemUncheckedUpdateWithoutInvoiceInput>
  }

  export type InvoiceItemUpdateManyWithWhereWithoutInvoiceInput = {
    where: InvoiceItemScalarWhereInput
    data: XOR<InvoiceItemUpdateManyMutationInput, InvoiceItemUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type InvoiceItemScalarWhereInput = {
    AND?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
    OR?: InvoiceItemScalarWhereInput[]
    NOT?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
    id?: StringFilter<"InvoiceItem"> | string
    invoiceId?: StringFilter<"InvoiceItem"> | string
    description?: StringFilter<"InvoiceItem"> | string
    quantity?: IntFilter<"InvoiceItem"> | number
    rate?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    amount?: DecimalFilter<"InvoiceItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"InvoiceItem"> | Date | string
  }

  export type InvoiceCreateWithoutItemsInput = {
    id?: string
    invoiceNumber?: string
    status?: $Enums.InvoiceStatus
    subtotal?: Decimal | DecimalJsLike | number | string
    tax?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    issuedAt?: Date | string | null
    dueAt?: Date | string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutInvoicesInput
    appointment?: AppointmentCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateWithoutItemsInput = {
    id?: string
    customerId: string
    appointmentId?: string | null
    invoiceNumber?: string
    status?: $Enums.InvoiceStatus
    subtotal?: Decimal | DecimalJsLike | number | string
    tax?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    issuedAt?: Date | string | null
    dueAt?: Date | string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceCreateOrConnectWithoutItemsInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
  }

  export type InvoiceUpsertWithoutItemsInput = {
    update: XOR<InvoiceUpdateWithoutItemsInput, InvoiceUncheckedUpdateWithoutItemsInput>
    create: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutItemsInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutItemsInput, InvoiceUncheckedUpdateWithoutItemsInput>
  }

  export type InvoiceUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutInvoicesNestedInput
    appointment?: AppointmentUpdateOneWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateWithoutEquipmentInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    business: BusinessCreateNestedOneWithoutCustomersInput
    appointments?: AppointmentCreateNestedManyWithoutCustomerInput
    invoices?: InvoiceCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutEquipmentInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    notes?: string | null
    businessId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutCustomerInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutEquipmentInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutEquipmentInput, CustomerUncheckedCreateWithoutEquipmentInput>
  }

  export type ServiceHistoryCreateWithoutEquipmentInput = {
    id?: string
    performedAt?: Date | string
    description: string
    technicianNotes?: string | null
    photos?: ServiceHistoryCreatephotosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    appointment?: AppointmentCreateNestedOneWithoutServiceHistoryInput
    user?: UserCreateNestedOneWithoutServiceHistoryInput
  }

  export type ServiceHistoryUncheckedCreateWithoutEquipmentInput = {
    id?: string
    appointmentId?: string | null
    userId?: string | null
    performedAt?: Date | string
    description: string
    technicianNotes?: string | null
    photos?: ServiceHistoryCreatephotosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceHistoryCreateOrConnectWithoutEquipmentInput = {
    where: ServiceHistoryWhereUniqueInput
    create: XOR<ServiceHistoryCreateWithoutEquipmentInput, ServiceHistoryUncheckedCreateWithoutEquipmentInput>
  }

  export type ServiceHistoryCreateManyEquipmentInputEnvelope = {
    data: ServiceHistoryCreateManyEquipmentInput | ServiceHistoryCreateManyEquipmentInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutEquipmentInput = {
    update: XOR<CustomerUpdateWithoutEquipmentInput, CustomerUncheckedUpdateWithoutEquipmentInput>
    create: XOR<CustomerCreateWithoutEquipmentInput, CustomerUncheckedCreateWithoutEquipmentInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutEquipmentInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutEquipmentInput, CustomerUncheckedUpdateWithoutEquipmentInput>
  }

  export type CustomerUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutCustomersNestedInput
    appointments?: AppointmentUpdateManyWithoutCustomerNestedInput
    invoices?: InvoiceUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    businessId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutCustomerNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type ServiceHistoryUpsertWithWhereUniqueWithoutEquipmentInput = {
    where: ServiceHistoryWhereUniqueInput
    update: XOR<ServiceHistoryUpdateWithoutEquipmentInput, ServiceHistoryUncheckedUpdateWithoutEquipmentInput>
    create: XOR<ServiceHistoryCreateWithoutEquipmentInput, ServiceHistoryUncheckedCreateWithoutEquipmentInput>
  }

  export type ServiceHistoryUpdateWithWhereUniqueWithoutEquipmentInput = {
    where: ServiceHistoryWhereUniqueInput
    data: XOR<ServiceHistoryUpdateWithoutEquipmentInput, ServiceHistoryUncheckedUpdateWithoutEquipmentInput>
  }

  export type ServiceHistoryUpdateManyWithWhereWithoutEquipmentInput = {
    where: ServiceHistoryScalarWhereInput
    data: XOR<ServiceHistoryUpdateManyMutationInput, ServiceHistoryUncheckedUpdateManyWithoutEquipmentInput>
  }

  export type EquipmentCreateWithoutServiceHistoryInput = {
    id?: string
    type: $Enums.EquipmentType
    brand?: string | null
    model?: string | null
    serialNumber?: string | null
    installDate?: Date | string | null
    warrantyExpires?: Date | string | null
    location?: string | null
    notes?: string | null
    photos?: EquipmentCreatephotosInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateWithoutServiceHistoryInput = {
    id?: string
    customerId: string
    type: $Enums.EquipmentType
    brand?: string | null
    model?: string | null
    serialNumber?: string | null
    installDate?: Date | string | null
    warrantyExpires?: Date | string | null
    location?: string | null
    notes?: string | null
    photos?: EquipmentCreatephotosInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentCreateOrConnectWithoutServiceHistoryInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutServiceHistoryInput, EquipmentUncheckedCreateWithoutServiceHistoryInput>
  }

  export type AppointmentCreateWithoutServiceHistoryInput = {
    id?: string
    scheduledAt: Date | string
    duration?: number
    status?: $Enums.AppointmentStatus
    notes?: string | null
    confirmationCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutAppointmentsInput
    user?: UserCreateNestedOneWithoutAppointmentsInput
    invoices?: InvoiceCreateNestedManyWithoutAppointmentInput
    notifications?: NotificationCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutServiceHistoryInput = {
    id?: string
    customerId: string
    userId?: string | null
    scheduledAt: Date | string
    duration?: number
    status?: $Enums.AppointmentStatus
    notes?: string | null
    confirmationCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutAppointmentInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutServiceHistoryInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutServiceHistoryInput, AppointmentUncheckedCreateWithoutServiceHistoryInput>
  }

  export type UserCreateWithoutServiceHistoryInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    business: BusinessCreateNestedOneWithoutUsersInput
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    consents?: ConsentCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutServiceHistoryInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    businessId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    consents?: ConsentUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutServiceHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutServiceHistoryInput, UserUncheckedCreateWithoutServiceHistoryInput>
  }

  export type EquipmentUpsertWithoutServiceHistoryInput = {
    update: XOR<EquipmentUpdateWithoutServiceHistoryInput, EquipmentUncheckedUpdateWithoutServiceHistoryInput>
    create: XOR<EquipmentCreateWithoutServiceHistoryInput, EquipmentUncheckedCreateWithoutServiceHistoryInput>
    where?: EquipmentWhereInput
  }

  export type EquipmentUpdateToOneWithWhereWithoutServiceHistoryInput = {
    where?: EquipmentWhereInput
    data: XOR<EquipmentUpdateWithoutServiceHistoryInput, EquipmentUncheckedUpdateWithoutServiceHistoryInput>
  }

  export type EquipmentUpdateWithoutServiceHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEquipmentTypeFieldUpdateOperationsInput | $Enums.EquipmentType
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    installDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warrantyExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: EquipmentUpdatephotosInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutServiceHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    type?: EnumEquipmentTypeFieldUpdateOperationsInput | $Enums.EquipmentType
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    installDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warrantyExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: EquipmentUpdatephotosInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpsertWithoutServiceHistoryInput = {
    update: XOR<AppointmentUpdateWithoutServiceHistoryInput, AppointmentUncheckedUpdateWithoutServiceHistoryInput>
    create: XOR<AppointmentCreateWithoutServiceHistoryInput, AppointmentUncheckedCreateWithoutServiceHistoryInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutServiceHistoryInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutServiceHistoryInput, AppointmentUncheckedUpdateWithoutServiceHistoryInput>
  }

  export type AppointmentUpdateWithoutServiceHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmationCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutAppointmentsNestedInput
    user?: UserUpdateOneWithoutAppointmentsNestedInput
    invoices?: InvoiceUpdateManyWithoutAppointmentNestedInput
    notifications?: NotificationUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutServiceHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmationCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutAppointmentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type UserUpsertWithoutServiceHistoryInput = {
    update: XOR<UserUpdateWithoutServiceHistoryInput, UserUncheckedUpdateWithoutServiceHistoryInput>
    create: XOR<UserCreateWithoutServiceHistoryInput, UserUncheckedCreateWithoutServiceHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutServiceHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutServiceHistoryInput, UserUncheckedUpdateWithoutServiceHistoryInput>
  }

  export type UserUpdateWithoutServiceHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    business?: BusinessUpdateOneRequiredWithoutUsersNestedInput
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    consents?: ConsentUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutServiceHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    businessId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    consents?: ConsentUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BusinessCreateWithoutPriceBookItemsInput = {
    id?: string
    name: string
    slug: string
    phone: string
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    logo?: string | null
    primaryColor?: string | null
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutBusinessInput
    customers?: CustomerCreateNestedManyWithoutBusinessInput
    notifications?: NotificationCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutPriceBookItemsInput = {
    id?: string
    name: string
    slug: string
    phone: string
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    logo?: string | null
    primaryColor?: string | null
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBusinessInput
    customers?: CustomerUncheckedCreateNestedManyWithoutBusinessInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutPriceBookItemsInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutPriceBookItemsInput, BusinessUncheckedCreateWithoutPriceBookItemsInput>
  }

  export type BusinessUpsertWithoutPriceBookItemsInput = {
    update: XOR<BusinessUpdateWithoutPriceBookItemsInput, BusinessUncheckedUpdateWithoutPriceBookItemsInput>
    create: XOR<BusinessCreateWithoutPriceBookItemsInput, BusinessUncheckedCreateWithoutPriceBookItemsInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutPriceBookItemsInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutPriceBookItemsInput, BusinessUncheckedUpdateWithoutPriceBookItemsInput>
  }

  export type BusinessUpdateWithoutPriceBookItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBusinessNestedInput
    customers?: CustomerUpdateManyWithoutBusinessNestedInput
    notifications?: NotificationUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutPriceBookItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBusinessNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutBusinessNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessCreateWithoutNotificationsInput = {
    id?: string
    name: string
    slug: string
    phone: string
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    logo?: string | null
    primaryColor?: string | null
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutBusinessInput
    customers?: CustomerCreateNestedManyWithoutBusinessInput
    priceBookItems?: PriceBookItemCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name: string
    slug: string
    phone: string
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    logo?: string | null
    primaryColor?: string | null
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBusinessInput
    customers?: CustomerUncheckedCreateNestedManyWithoutBusinessInput
    priceBookItems?: PriceBookItemUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessCreateOrConnectWithoutNotificationsInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutNotificationsInput, BusinessUncheckedCreateWithoutNotificationsInput>
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    business: BusinessCreateNestedOneWithoutUsersInput
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    serviceHistory?: ServiceHistoryCreateNestedManyWithoutUserInput
    consents?: ConsentCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    businessId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    serviceHistory?: ServiceHistoryUncheckedCreateNestedManyWithoutUserInput
    consents?: ConsentUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type AppointmentCreateWithoutNotificationsInput = {
    id?: string
    scheduledAt: Date | string
    duration?: number
    status?: $Enums.AppointmentStatus
    notes?: string | null
    confirmationCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutAppointmentsInput
    user?: UserCreateNestedOneWithoutAppointmentsInput
    invoices?: InvoiceCreateNestedManyWithoutAppointmentInput
    serviceHistory?: ServiceHistoryCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutNotificationsInput = {
    id?: string
    customerId: string
    userId?: string | null
    scheduledAt: Date | string
    duration?: number
    status?: $Enums.AppointmentStatus
    notes?: string | null
    confirmationCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutAppointmentInput
    serviceHistory?: ServiceHistoryUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutNotificationsInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutNotificationsInput, AppointmentUncheckedCreateWithoutNotificationsInput>
  }

  export type BusinessUpsertWithoutNotificationsInput = {
    update: XOR<BusinessUpdateWithoutNotificationsInput, BusinessUncheckedUpdateWithoutNotificationsInput>
    create: XOR<BusinessCreateWithoutNotificationsInput, BusinessUncheckedCreateWithoutNotificationsInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutNotificationsInput, BusinessUncheckedUpdateWithoutNotificationsInput>
  }

  export type BusinessUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBusinessNestedInput
    customers?: CustomerUpdateManyWithoutBusinessNestedInput
    priceBookItems?: PriceBookItemUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBusinessNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutBusinessNestedInput
    priceBookItems?: PriceBookItemUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    business?: BusinessUpdateOneRequiredWithoutUsersNestedInput
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    serviceHistory?: ServiceHistoryUpdateManyWithoutUserNestedInput
    consents?: ConsentUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    businessId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    serviceHistory?: ServiceHistoryUncheckedUpdateManyWithoutUserNestedInput
    consents?: ConsentUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AppointmentUpsertWithoutNotificationsInput = {
    update: XOR<AppointmentUpdateWithoutNotificationsInput, AppointmentUncheckedUpdateWithoutNotificationsInput>
    create: XOR<AppointmentCreateWithoutNotificationsInput, AppointmentUncheckedCreateWithoutNotificationsInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutNotificationsInput, AppointmentUncheckedUpdateWithoutNotificationsInput>
  }

  export type AppointmentUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmationCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutAppointmentsNestedInput
    user?: UserUpdateOneWithoutAppointmentsNestedInput
    invoices?: InvoiceUpdateManyWithoutAppointmentNestedInput
    serviceHistory?: ServiceHistoryUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmationCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutAppointmentNestedInput
    serviceHistory?: ServiceHistoryUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type UserCreateWithoutConsentsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    business: BusinessCreateNestedOneWithoutUsersInput
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    serviceHistory?: ServiceHistoryCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConsentsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    businessId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    serviceHistory?: ServiceHistoryUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConsentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConsentsInput, UserUncheckedCreateWithoutConsentsInput>
  }

  export type UserUpsertWithoutConsentsInput = {
    update: XOR<UserUpdateWithoutConsentsInput, UserUncheckedUpdateWithoutConsentsInput>
    create: XOR<UserCreateWithoutConsentsInput, UserUncheckedCreateWithoutConsentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConsentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConsentsInput, UserUncheckedUpdateWithoutConsentsInput>
  }

  export type UserUpdateWithoutConsentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    business?: BusinessUpdateOneRequiredWithoutUsersNestedInput
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    serviceHistory?: ServiceHistoryUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConsentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    businessId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    serviceHistory?: ServiceHistoryUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    business: BusinessCreateNestedOneWithoutUsersInput
    appointments?: AppointmentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    serviceHistory?: ServiceHistoryCreateNestedManyWithoutUserInput
    consents?: ConsentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    businessId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    serviceHistory?: ServiceHistoryUncheckedCreateNestedManyWithoutUserInput
    consents?: ConsentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    business?: BusinessUpdateOneRequiredWithoutUsersNestedInput
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    serviceHistory?: ServiceHistoryUpdateManyWithoutUserNestedInput
    consents?: ConsentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    businessId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    serviceHistory?: ServiceHistoryUncheckedUpdateManyWithoutUserNestedInput
    consents?: ConsentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AppointmentCreateManyUserInput = {
    id?: string
    customerId: string
    scheduledAt: Date | string
    duration?: number
    status?: $Enums.AppointmentStatus
    notes?: string | null
    confirmationCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    businessId: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    recipient: string
    message: string
    appointmentId?: string | null
    scheduledFor: Date | string
    sentAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceHistoryCreateManyUserInput = {
    id?: string
    equipmentId: string
    appointmentId?: string | null
    performedAt?: Date | string
    description: string
    technicianNotes?: string | null
    photos?: ServiceHistoryCreatephotosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsentCreateManyUserInput = {
    id?: string
    consentType: $Enums.ConsentType
    consentText: string
    version: string
    consentedAt?: Date | string
    revokedAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateManyUserInput = {
    id?: string
    action: string
    resource: string
    resourceId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type AppointmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmationCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutAppointmentsNestedInput
    invoices?: InvoiceUpdateManyWithoutAppointmentNestedInput
    serviceHistory?: ServiceHistoryUpdateManyWithoutAppointmentNestedInput
    notifications?: NotificationUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmationCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutAppointmentNestedInput
    serviceHistory?: ServiceHistoryUncheckedUpdateManyWithoutAppointmentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmationCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    recipient?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutNotificationsNestedInput
    appointment?: AppointmentUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    recipient?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    recipient?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ServiceHistoryUpdatephotosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUpdateOneRequiredWithoutServiceHistoryNestedInput
    appointment?: AppointmentUpdateOneWithoutServiceHistoryNestedInput
  }

  export type ServiceHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ServiceHistoryUpdatephotosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ServiceHistoryUpdatephotosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    consentType?: EnumConsentTypeFieldUpdateOperationsInput | $Enums.ConsentType
    consentText?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    consentedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    consentType?: EnumConsentTypeFieldUpdateOperationsInput | $Enums.ConsentType
    consentText?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    consentedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    consentType?: EnumConsentTypeFieldUpdateOperationsInput | $Enums.ConsentType
    consentText?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    consentedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resource?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyBusinessInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
  }

  export type CustomerCreateManyBusinessInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceBookItemCreateManyBusinessInput = {
    id?: string
    category: string
    serviceType: string
    description: string
    flatRate: Decimal | DecimalJsLike | number | string
    estimatedMinutes: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyBusinessInput = {
    id?: string
    userId?: string | null
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    recipient: string
    message: string
    appointmentId?: string | null
    scheduledFor: Date | string
    sentAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointments?: AppointmentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    serviceHistory?: ServiceHistoryUpdateManyWithoutUserNestedInput
    consents?: ConsentUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    serviceHistory?: ServiceHistoryUncheckedUpdateManyWithoutUserNestedInput
    consents?: ConsentUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutCustomerNestedInput
    invoices?: InvoiceUpdateManyWithoutCustomerNestedInput
    equipment?: EquipmentUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutCustomerNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutCustomerNestedInput
    equipment?: EquipmentUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceBookItemUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    flatRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceBookItemUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    flatRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceBookItemUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    serviceType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    flatRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimatedMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    recipient?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutNotificationsNestedInput
    appointment?: AppointmentUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    recipient?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    recipient?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyCustomerInput = {
    id?: string
    userId?: string | null
    scheduledAt: Date | string
    duration?: number
    status?: $Enums.AppointmentStatus
    notes?: string | null
    confirmationCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceCreateManyCustomerInput = {
    id?: string
    appointmentId?: string | null
    invoiceNumber?: string
    status?: $Enums.InvoiceStatus
    subtotal?: Decimal | DecimalJsLike | number | string
    tax?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    issuedAt?: Date | string | null
    dueAt?: Date | string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipmentCreateManyCustomerInput = {
    id?: string
    type: $Enums.EquipmentType
    brand?: string | null
    model?: string | null
    serialNumber?: string | null
    installDate?: Date | string | null
    warrantyExpires?: Date | string | null
    location?: string | null
    notes?: string | null
    photos?: EquipmentCreatephotosInput | string[]
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmationCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAppointmentsNestedInput
    invoices?: InvoiceUpdateManyWithoutAppointmentNestedInput
    serviceHistory?: ServiceHistoryUpdateManyWithoutAppointmentNestedInput
    notifications?: NotificationUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmationCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutAppointmentNestedInput
    serviceHistory?: ServiceHistoryUncheckedUpdateManyWithoutAppointmentNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmationCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneWithoutInvoicesNestedInput
    items?: InvoiceItemUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipmentUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEquipmentTypeFieldUpdateOperationsInput | $Enums.EquipmentType
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    installDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warrantyExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: EquipmentUpdatephotosInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceHistory?: ServiceHistoryUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEquipmentTypeFieldUpdateOperationsInput | $Enums.EquipmentType
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    installDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warrantyExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: EquipmentUpdatephotosInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceHistory?: ServiceHistoryUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEquipmentTypeFieldUpdateOperationsInput | $Enums.EquipmentType
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    installDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warrantyExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: EquipmentUpdatephotosInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateManyAppointmentInput = {
    id?: string
    customerId: string
    invoiceNumber?: string
    status?: $Enums.InvoiceStatus
    subtotal?: Decimal | DecimalJsLike | number | string
    tax?: Decimal | DecimalJsLike | number | string
    total?: Decimal | DecimalJsLike | number | string
    notes?: string | null
    issuedAt?: Date | string | null
    dueAt?: Date | string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceHistoryCreateManyAppointmentInput = {
    id?: string
    equipmentId: string
    userId?: string | null
    performedAt?: Date | string
    description: string
    technicianNotes?: string | null
    photos?: ServiceHistoryCreatephotosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyAppointmentInput = {
    id?: string
    businessId: string
    userId?: string | null
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    recipient: string
    message: string
    scheduledFor: Date | string
    sentAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutInvoicesNestedInput
    items?: InvoiceItemUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    issuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dueAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceHistoryUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ServiceHistoryUpdatephotosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipment?: EquipmentUpdateOneRequiredWithoutServiceHistoryNestedInput
    user?: UserUpdateOneWithoutServiceHistoryNestedInput
  }

  export type ServiceHistoryUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ServiceHistoryUpdatephotosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceHistoryUncheckedUpdateManyWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    equipmentId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ServiceHistoryUpdatephotosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    recipient?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutNotificationsNestedInput
    user?: UserUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    recipient?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    businessId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    recipient?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    scheduledFor?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemCreateManyInvoiceInput = {
    id?: string
    description: string
    quantity?: number
    rate: Decimal | DecimalJsLike | number | string
    amount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type InvoiceItemUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceItemUncheckedUpdateManyWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    rate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceHistoryCreateManyEquipmentInput = {
    id?: string
    appointmentId?: string | null
    userId?: string | null
    performedAt?: Date | string
    description: string
    technicianNotes?: string | null
    photos?: ServiceHistoryCreatephotosInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceHistoryUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ServiceHistoryUpdatephotosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneWithoutServiceHistoryNestedInput
    user?: UserUpdateOneWithoutServiceHistoryNestedInput
  }

  export type ServiceHistoryUncheckedUpdateWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ServiceHistoryUpdatephotosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceHistoryUncheckedUpdateManyWithoutEquipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    technicianNotes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ServiceHistoryUpdatephotosInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BusinessCountOutputTypeDefaultArgs instead
     */
    export type BusinessCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BusinessCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerCountOutputTypeDefaultArgs instead
     */
    export type CustomerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AppointmentCountOutputTypeDefaultArgs instead
     */
    export type AppointmentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AppointmentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InvoiceCountOutputTypeDefaultArgs instead
     */
    export type InvoiceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvoiceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EquipmentCountOutputTypeDefaultArgs instead
     */
    export type EquipmentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EquipmentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BusinessDefaultArgs instead
     */
    export type BusinessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BusinessDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerDefaultArgs instead
     */
    export type CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AppointmentDefaultArgs instead
     */
    export type AppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AppointmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InvoiceDefaultArgs instead
     */
    export type InvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvoiceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InvoiceItemDefaultArgs instead
     */
    export type InvoiceItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvoiceItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EquipmentDefaultArgs instead
     */
    export type EquipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EquipmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceHistoryDefaultArgs instead
     */
    export type ServiceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceHistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PriceBookItemDefaultArgs instead
     */
    export type PriceBookItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PriceBookItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationDefaultArgs instead
     */
    export type NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConsentDefaultArgs instead
     */
    export type ConsentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConsentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuditLogDefaultArgs instead
     */
    export type AuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuditLogDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}