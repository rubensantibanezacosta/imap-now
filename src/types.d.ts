import { ParsedMail } from "mailparser";

/**
 * Configuration options for establishing a connection with an IMAP server.
 */
export type ImapConfig = {
  user: string;
  password: string;
  host: string;
  port: number;
  tls: boolean;
  xoauth2?: string;
  xoauth?: string;
  tlsOptions?: any;
  autotls?: 'always' | 'required' | 'never';
  connTimeout?: number;
  authTimeout?: number;
  socketTimeout?: number;
  keepalive?: boolean | {
    interval?: number;
    idleInterval?: number;
    forceNoop?: boolean;
  };
  debug?: (info: string) => void;
};

/**
 * Criteria export type without arguments used in IMAP search.
 */
export type CriteriaTypeWithoutArguments =
  | 'ALL'
  | 'ANSWERED'
  | 'DELETED'
  | 'DRAFT'
  | 'FLAGGED'
  | 'NEW'
  | 'SEEN'
  | 'RECENT'
  | 'OLD'
  | 'UNANSWERED'
  | 'UNDELETED'
  | 'UNDRAFT'
  | 'UNFLAGGED'
  | 'UNSEEN';

/**
* Criteria export type with arguments used in IMAP search.
*/
export type CriteriaTypeWithArguments =
  | 'BCC'
  | 'CC'
  | 'FROM'
  | 'SUBJECT'
  | 'TO'
  | 'BODY'
  | 'TEXT'
  | 'KEYWORD'
  | 'HEADER';

/**
* Date criteria export type used in IMAP search.
*/
export type DateCriteriaType =
  | 'BEFORE'
  | 'ON'
  | 'SINCE'
  | 'SENTBEFORE'
  | 'SENTON'
  | 'SENTSINCE';

/**
 * Integer criteria export type used in IMAP search.
 */
export type IntegerCriteriaType = 'LARGER' | 'SMALLER';

/**
 * Array criteria export type used in IMAP search.
 */
export type ArrayCriteriaType = 'UID';

/**
 * All possible criteria export types used in IMAP search.
 */
export type CriteriaType =
  | CriteriaTypeWithoutArguments
  | CriteriaTypeWithArguments
  | DateCriteriaType
  | IntegerCriteriaType
  | ArrayCriteriaType;

/**
* Criteria used in IMAP search.
*/
export type Criteria = CriteriaType | [CriteriaType, ...any[]];

/**
 * Callback export type for IMAP operations.
 */
export type Callback = (err: Error | null, UIDs: number[]) => void;

/**
 * Type representing the source of a message in IMAP operations.
 */
export type MessageSource = string | number | number[];

/**
 * Extra IMAP capabilities.
 * @see https://www.npmjs.com/package/imap
 */
export type Capability = "X-GM-EXT-1" | "QUOTA" | "UIDPLUS" | "CONDSTORE" | "ESEARCH" | "SORT";

export type FetchOptions = {
  bodies: string[];
  struct: boolean;
};

export type FetchResult = {
  parsedMail?: ParsedMail;
  seen?: boolean;
  flags: string[];
};





