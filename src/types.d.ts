import { ParsedMail } from "mailparser";
import { AppendOptions, Box, MailBoxes } from 'imap';


export class ImapNow {
  constructor(imapConfig: ImapConfig);

  public connect(): Promise<void>;
  public end(): Promise<void>;
  public destroy(): Promise<void>;
  public openBox(mailboxName: string): Promise<Box>;
  public closeBox(mailboxName: string): Promise<void>;
  public getBoxes(): Promise<MailBoxes>;
  public addBox(mailboxName: string): Promise<void>;
  public deleteBox(mailboxName: string): Promise<void>;
  public renameBox(oldMailboxName: string, newMailboxName: string): Promise<void>;
  public subscribeBox(mailboxName: string): Promise<void>;
  public unsubscribeBox(mailboxName: string): Promise<void>;
  public boxStatus(mailboxName: string): Promise<void>;
  public getSubscribedBoxes(): Promise<MailBoxes>;
  public addMailListener(callback: (numNewMsgs: number) => void): void;
  public removeMailListener(callback: (numNewMsgs: number) => void): void;
  public addUpdateListener(callback: (seqno: number, info: any) => void): void;
  public addExpungeListener(callback: (seqno: number) => void): void;
  public removeExpungeListener(callback: (seqno: number) => void): void;
  public addCloseListener(callback: () => void): void;
  public search(criteria: Criteria[]): Promise<number[]>;
  public fetch(uids: number[], options: FetchOptions): Promise<FetchResult[]>;
  public copy(source: MessageSource, mailboxName: string): Promise<void>;
  public move(source: MessageSource, mailboxName: string): Promise<void>;
  public addFlags(source: MessageSource, flags: any[]): Promise<void>;
  public delFlags(source: MessageSource, flags: any[]): Promise<void>;
  public setFlags(source: MessageSource, flags: any[]): Promise<void>;
  public addKeywords(source: MessageSource, keywords: any[]): Promise<void>;
  public delKeywords(source: MessageSource, keywords: any[]): Promise<void>;
  public setKeywords(source: MessageSource, keywords: any[]): Promise<void>;
  public serverSupports(capability: string): boolean;
  public expunge(uids?: MessageSource): Promise<void>;
  public append(msgData: string | Buffer, options: AppendOptions): Promise<void>;
}
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





