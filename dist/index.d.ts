/// <reference types="node" />
import { AppendOptions, Box, MailBoxes } from 'imap';
import { ParsedMail } from 'mailparser';
export declare class ImapNow {
    private imap;
    constructor(imapConfig: ImapConfig);
    /**
     * Establishes a connection to an IMAP server based on the provided configuration.
    connecting to the IMAP server.
     * @returns {Promise<void>} - A promise that resolves to the connected Imap object.
     */
    connect(): Promise<void>;
    /**
    * Ends the connection to the IMAP server.
    * @param {Imap} imap - The Imap object representing the connection.
    * @returns {Promise<void>} - A promise that resolves when the connection is successfully ended.
    */
    end(): Promise<void>;
    /**
    * Destroys the IMAP connection, terminating it abruptly..
    * @returns {Promise<void>} - A promise that resolves when the connection is successfully destroyed.
    */
    destroy(): Promise<void>;
    /**
  * Opens a mailbox on the IMAP server.
  * @param {string} mailboxName - The name of the mailbox to open.
  * @returns {Promise<Box>} - A promise that resolves to the opened mailbox.
  */
    openBox(mailboxName: string): Promise<Box>;
    /**
  * Closes the currently open mailbox on the IMAP server.
  * @param {string} mailboxName - The name of the mailbox to close.
  * @returns {Promise<void>} - A promise that resolves when the mailbox is successfully closed.
  */
    closeBox(mailboxName: string): Promise<void>;
    /**
     * Gets the list of mailboxes on the IMAP server.
     * @returns {Promise<MailBoxes>} - A promise that resolves to the list of mailboxes.
     */
    getBoxes(): Promise<MailBoxes>;
    /**
     * Adds a new mailbox on the IMAP server.
     * @param {string} mailboxName - The name of the new mailbox to add.
     * @returns {Promise<void>} - A promise that resolves when the mailbox is successfully added.
     */
    addBox(mailboxName: string): Promise<void>;
    /**
     * Deletes a mailbox on the IMAP server.
     * @param {string} mailboxName - The name of the mailbox to delete.
     * @returns {Promise<void>} - A promise that resolves when the mailbox is successfully deleted.
     */
    deleteBox(mailboxName: string): Promise<void>;
    /**
     * Renames a mailbox on the IMAP server.
     * @param {string} oldMailboxName - The current name of the mailbox.
     * @param {string} newMailboxName - The new name for the mailbox.
     * @returns {Promise<void>} - A promise that resolves when the mailbox is successfully renamed.
     */
    renameBox(oldMailboxName: string, newMailboxName: string): Promise<void>;
    /**
     * Subscribes to a mailbox on the IMAP server.
     * @param {string} mailboxName - The name of the mailbox to subscribe to.
     * @returns {Promise<void>} - A promise that resolves when the subscription is successful.
     */
    subscribeBox(mailboxName: string): Promise<void>;
    /**
    * Unsubscribes from a mailbox on the IMAP server.
    * @param {string} mailboxName - The name of the mailbox to unsubscribe from.
    * @returns {Promise<void>} - A promise that resolves when the unsubscription is successful.
    */
    unsubscribeBox(mailboxName: string): Promise<void>;
    /**
     * Retrieves the status of a mailbox on the IMAP server.
     * @param {string} mailboxName - The name of the mailbox to retrieve status for.
     * @returns {Promise<void>} - A promise that resolves when the status is successfully retrieved.
     */
    boxStatus(mailboxName: string): Promise<void>;
    /**
    * Retrieves the list of mailboxes to which the user is subscribed.
    * @returns {Promise<MailBoxes>} - A promise that resolves to the list of subscribed mailboxes.
    */
    getSubscribedBoxes(): Promise<MailBoxes>;
    /**
     * Adds a listener for the 'mail' event, triggered when new messages arrive in the mailbox.
     * @param {(numNewMsgs: number) => void} callback - The callback function to be executed when new messages arrive.
     */
    addMailListener(callback: (numNewMsgs: number) => void): void;
    /**
     * Removes a previously added 'mail' event listener.
     * @param {(numNewMsgs: number) => void} callback - The callback function to be removed.
     */
    removeMailListener(callback: (numNewMsgs: number) => void): void;
    /**
    * Adds a listener for the 'update' event, triggered when messages in the mailbox are updated.
    * @param {(seqno: number, info: any) => void} callback - The callback function to be executed when messages are updated.
    *
    * seqno - The sequence number of the message that was updated.
    * Note: If multiple messages are updated at once, this event will be triggered multiple times, once for each message.
    * This sequence number is not the same as the unique identifier (UID) of the message.
    * It is used to identify the message within the current mailbox session only.
    *
    */
    addUpdateListener(callback: (seqno: number, info: any) => void): void;
    /**
     * Adds a listener for the 'expunge' event, triggered when messages are deleted from the mailbox.
     * @param {(seqno: number) => void} callback - The callback function to be executed when messages are expunged.
     *
     */
    addExpungeListener(callback: (seqno: number) => void): void;
    /**
     * Removes a previously added 'expunge' event listener.
     * @param {(seqno: number) => void} callback - The callback function to be removed.
     *
     */
    removeExpungeListener(callback: (seqno: number) => void): void;
    /**
     * Adds a listener for the 'close' event, triggered when the connection to the IMAP server is closed.
     * @param {() => void} callback - The callback function to be executed when the connection is closed.
     */
    addCloseListener(callback: () => void): void;
    /**
     * Searches for messages based on the provided search criteria.
     *
     * @param {Criteria[]} criteria - An array of search criteria.
     * @param {SearchOptions} options - Options for the search operation.
     */
    search(criteria: Criteria[]): Promise<number[]>;
    private fetchOne;
    /**
    * Fetches messages based on the provided UIDs and fetch options.
    * @param {number[]} uid - An array of message UIDs to fetch.
    * @param {FetchOptions} options - Options for fetching messages.
    * @returns {Promise<FetchResult[]>} - A promise that resolves to an array of fetched messages.
    */
    fetch(uids: number[], options: FetchOptions): Promise<FetchResult[]>;
    /**
     * Copies a message from the source to the specified mailbox.
     * @param {MessageSource} source - The source message to copy.
     * @param {string} mailboxName - The name of the destination mailbox.
     * @returns {Promise<void>} - A promise that resolves when the copy operation is complete.
     */
    copy(source: MessageSource, mailboxName: string): Promise<void>;
    /**
     * Moves a message from the source to the specified mailbox.
     * @param {MessageSource} source - The source message to move.
     * @param {string} mailboxName - The name of the destination mailbox.
     * @returns {Promise<void>} - A promise that resolves when the move operation is complete.
     */
    move(source: MessageSource, mailboxName: string): Promise<void>;
    /**
     * Adds flags to a message.
     * @param {MessageSource} source - The source message to add flags to.
     * @param {any[]} flags - An array of flags to add.
     * @returns {Promise<void>} - A promise that resolves when the flags are added.
     */
    addFlags(source: MessageSource, flags: any[]): Promise<void>;
    /**
     * Removes flags from a message.
     * @param {MessageSource} source - The source message to remove flags from.
     * @param {any[]} flags - An array of flags to remove.
     * @returns {Promise<void>} - A promise that resolves when the flags are removed.
     */
    delFlags(source: MessageSource, flags: any[]): Promise<void>;
    /**
     * Sets flags for a message, removing any existing flags.
     * @param {MessageSource} source - The source message to set flags for.
     * @param {any[]} flags - An array of flags to set.
     * @returns {Promise<void>} - A promise that resolves when the flags are set.
     */
    setFlags(source: MessageSource, flags: any[]): Promise<void>;
    /**
     * Adds keywords to a message.
     * @param {MessageSource} source - The source message to add keywords to.
     * @param {any[]} keywords - An array of keywords to add.
     * @returns {Promise<void>} - A promise that resolves when the keywords are added.
     */
    addKeywords(source: MessageSource, keywords: any[]): Promise<void>;
    /**
     * Removes keywords from a message.
     * @param {MessageSource} source - The source message to remove keywords from.
     * @param {any[]} keywords - An array of keywords to remove.
     * @returns {Promise<void>} - A promise that resolves when the keywords are removed.
     */
    delKeywords(source: MessageSource, keywords: any[]): Promise<void>;
    /**
     * Sets keywords for a message, removing any existing keywords.
     * @param {MessageSource} source - The source message to set keywords for.
     * @param {any[]} keywords - An array of keywords to set.
     * @returns {Promise<void>} - A promise that resolves when the keywords are set.
     */
    setKeywords(source: MessageSource, keywords: any[]): Promise<void>;
    /**
     * Checks if the server supports the given capability.
     * @param {string} capability - The capability to check for.
     * @returns {boolean} - True if the server supports the capability; otherwise, false.
     */
    serverSupports(capability: string): boolean;
    /**
     * Permanently removes messages flagged as Deleted in the currently open mailbox.
     * If the server supports the 'UIDPLUS' capability, uids can be supplied to only remove
     * messages that both have their uid in uids and have the \Deleted flag set.
     * @param {MessageSource} uids - An optional array of message UIDs to expunge.
     * @returns {Promise<void>} - A promise that resolves when the expunge operation is successful.
     * @see https://www.npmjs.com/package/imap#expungeuids--function-callback
     */
    expunge(uids?: MessageSource): Promise<void>;
    /**
     * Appends a message to a selected mailbox on the IMAP server.
     * @param {string | Buffer} msgData - The message data to be appended (RFC-822 compatible MIME message).
     * @param {AppendOptions} options - Additional options for the append operation.
     * @returns {Promise<void>} - A promise that resolves when the append operation is successful.
     * @see https://www.npmjs.com/package/imap#appendmixed-msgdata-object-options-function-callback-void
     */
    append(msgData: string | Buffer, options: AppendOptions): Promise<void>;
}
/**
 * Configuration options for establishing a connection with an IMAP server.
 */
export declare type ImapConfig = {
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
export declare type CriteriaTypeWithoutArguments = 'ALL' | 'ANSWERED' | 'DELETED' | 'DRAFT' | 'FLAGGED' | 'NEW' | 'SEEN' | 'RECENT' | 'OLD' | 'UNANSWERED' | 'UNDELETED' | 'UNDRAFT' | 'UNFLAGGED' | 'UNSEEN';
/**
* Criteria export type with arguments used in IMAP search.
*/
export declare type CriteriaTypeWithArguments = 'BCC' | 'CC' | 'FROM' | 'SUBJECT' | 'TO' | 'BODY' | 'TEXT' | 'KEYWORD' | 'HEADER';
/**
* Date criteria export type used in IMAP search.
*/
export declare type DateCriteriaType = 'BEFORE' | 'ON' | 'SINCE' | 'SENTBEFORE' | 'SENTON' | 'SENTSINCE';
/**
 * Integer criteria export type used in IMAP search.
 */
export declare type IntegerCriteriaType = 'LARGER' | 'SMALLER';
/**
 * Array criteria export type used in IMAP search.
 */
export declare type ArrayCriteriaType = 'UID';
/**
 * All possible criteria export types used in IMAP search.
 */
export declare type CriteriaType = CriteriaTypeWithoutArguments | CriteriaTypeWithArguments | DateCriteriaType | IntegerCriteriaType | ArrayCriteriaType;
/**
* Criteria used in IMAP search.
*/
export declare type Criteria = CriteriaType | [CriteriaType, ...any[]];
/**
 * Callback export type for IMAP operations.
 */
export declare type Callback = (err: Error | null, UIDs: number[]) => void;
/**
 * Type representing the source of a message in IMAP operations.
 */
export declare type MessageSource = string | number | number[];
/**
 * Extra IMAP capabilities.
 * @see https://www.npmjs.com/package/imap
 */
export declare type Capability = "X-GM-EXT-1" | "QUOTA" | "UIDPLUS" | "CONDSTORE" | "ESEARCH" | "SORT";
export declare type FetchOptions = {
    bodies: string[];
    struct: boolean;
};
export declare type FetchResult = {
    parsedMail?: ParsedMail;
    seen?: boolean;
    flags: string[];
};
