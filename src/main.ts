

import Imap, { ImapMessage, FetchOptions, AppendOptions, Box, MailBoxes } from 'imap';

import { ParsedMail, simpleParser } from 'mailparser';
import { Criteria, FetchResult, ImapConfig, MessageSource } from './types';



export class ImapNow {
    private imap: Imap;

    constructor(imapConfig: ImapConfig) {
        this.imap = new Imap(imapConfig);
    }


    /**
     * Establishes a connection to an IMAP server based on the provided configuration.
    connecting to the IMAP server.
     * @returns {Promise<void>} - A promise that resolves to the connected Imap object.
     */
    public connect(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.imap.once('ready', () => {
                console.log('Connected to IMAP server');
                resolve();
            });

            this.imap.once('error', (err: Error) => {
                console.error('Error connecting to IMAP server');
                console.error(err);
                reject(err);
            });

            this.imap.once('end', () => {
                console.log('Connection to IMAP server ended');
            });

            this.imap.connect();
        });
    }

    /**
    * Ends the connection to the IMAP server.
    * @param {Imap} imap - The Imap object representing the connection.
    * @returns {Promise<void>} - A promise that resolves when the connection is successfully ended.
    */
    public end(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.imap.end();
            resolve();
        });
    }

    /**
    * Destroys the IMAP connection, terminating it abruptly..
    * @returns {Promise<void>} - A promise that resolves when the connection is successfully destroyed.
    */
    public destroy(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.imap.destroy();
            resolve();
        });
    }

    /**
 * Opens a mailbox on the IMAP server.
 * @param {string} mailboxName - The name of the mailbox to open.
 * @returns {Promise<Box>} - A promise that resolves to the opened mailbox.
 */
    public openBox(mailboxName: string): Promise<Box> {
        return new Promise((resolve, reject) => {
            this.imap.openBox(mailboxName, true, (err, box) => {
                if (err) {
                    console.error(`Error opening mailbox ${mailboxName}`);
                    console.error(err);
                    reject(err);
                } else {
                    resolve(box);
                }
            });
        });
    }

    /**
 * Closes the currently open mailbox on the IMAP server.
 * @param {string} mailboxName - The name of the mailbox to close.
 * @returns {Promise<void>} - A promise that resolves when the mailbox is successfully closed.
 */
    public closeBox(mailboxName: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.imap.closeBox(true, (err) => {
                if (err) {
                    console.error(`Error closing mailbox ${mailboxName}`);
                    console.error(err);
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    /**
     * Gets the list of mailboxes on the IMAP server.
     * @returns {Promise<MailBoxes>} - A promise that resolves to the list of mailboxes.
     */
    public getBoxes(): Promise<MailBoxes> {
        return new Promise((resolve, reject) => {
            this.imap.getBoxes('', (err, boxes) => {
                if (err) {
                    console.error('Error getting mailboxes');
                    console.error(err);
                    reject(err);
                } else {
                    resolve(boxes);
                }
            });
        });
    }

    /**
     * Adds a new mailbox on the IMAP server.
     * @param {string} mailboxName - The name of the new mailbox to add.
     * @returns {Promise<void>} - A promise that resolves when the mailbox is successfully added.
     */
    public addBox(mailboxName: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.imap.addBox(mailboxName, (err) => {
                if (err) {
                    console.error(`Error adding mailbox ${mailboxName}`);
                    console.error(err);
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    /**
     * Deletes a mailbox on the IMAP server.
     * @param {string} mailboxName - The name of the mailbox to delete.
     * @returns {Promise<void>} - A promise that resolves when the mailbox is successfully deleted.
     */
    public deleteBox(mailboxName: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.imap.delBox(mailboxName, (err) => {
                if (err) {
                    console.error(`Error deleting mailbox ${mailboxName}`);
                    console.error(err);
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    /**
     * Renames a mailbox on the IMAP server.
     * @param {string} oldMailboxName - The current name of the mailbox.
     * @param {string} newMailboxName - The new name for the mailbox.
     * @returns {Promise<void>} - A promise that resolves when the mailbox is successfully renamed.
     */
    public renameBox(oldMailboxName: string, newMailboxName: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.imap.renameBox(oldMailboxName, newMailboxName, (err) => {
                if (err) {
                    console.error(`Error renaming mailbox ${oldMailboxName} to ${newMailboxName}`);
                    console.error(err);
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    /**
     * Subscribes to a mailbox on the IMAP server.
     * @param {string} mailboxName - The name of the mailbox to subscribe to.
     * @returns {Promise<void>} - A promise that resolves when the subscription is successful.
     */
    public subscribeBox(mailboxName: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.imap.subscribeBox(mailboxName, (err) => {
                if (err) {
                    console.error(`Error subscribing to mailbox ${mailboxName}`);
                    console.error(err);
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    /**
    * Unsubscribes from a mailbox on the IMAP server.
    * @param {string} mailboxName - The name of the mailbox to unsubscribe from.
    * @returns {Promise<void>} - A promise that resolves when the unsubscription is successful.
    */
    public unsubscribeBox(mailboxName: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.imap.unsubscribeBox(mailboxName, (err) => {
                if (err) {
                    console.error(`Error unsubscribing from mailbox ${mailboxName}`);
                    console.error(err);
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    /**
     * Retrieves the status of a mailbox on the IMAP server.
     * @param {string} mailboxName - The name of the mailbox to retrieve status for.
     * @returns {Promise<void>} - A promise that resolves when the status is successfully retrieved.
     */
    public boxStatus(mailboxName: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.imap.status(mailboxName, (err, box) => {
                if (err) {
                    console.error(`Error getting status for mailbox ${mailboxName}`);
                    console.error(err);
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    /**
    * Retrieves the list of mailboxes to which the user is subscribed.
    * @returns {Promise<MailBoxes>} - A promise that resolves to the list of subscribed mailboxes.
    */
    public getSubscribedBoxes(): Promise<MailBoxes> {
        return new Promise((resolve, reject) => {
            this.imap.getSubscribedBoxes('', (err, boxes) => {
                if (err) {
                    console.error('Error getting subscribed mailboxes');
                    console.error(err);
                    reject(err);
                } else {
                    resolve(boxes);
                }
            });
        });
    }

    /**
     * Adds a listener for the 'mail' event, triggered when new messages arrive in the mailbox.
     * @param {(numNewMsgs: number) => void} callback - The callback function to be executed when new messages arrive.
     */
    public addMailListener(callback: (numNewMsgs: number) => void): void {
        this.imap.on('mail', callback);
    }

    /**
     * Removes a previously added 'mail' event listener.
     * @param {(numNewMsgs: number) => void} callback - The callback function to be removed.
     */
    public removeMailListener(callback: (numNewMsgs: number) => void): void {
        this.imap.removeListener('mail', callback);
    }

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
    public addUpdateListener(callback: (seqno: number, info: any) => void): void {
        this.imap.on('update', callback);
    }

    /**
     * Adds a listener for the 'expunge' event, triggered when messages are deleted from the mailbox.
     * @param {(seqno: number) => void} callback - The callback function to be executed when messages are expunged.
     * 
     */
    public addExpungeListener(callback: (seqno: number) => void): void {
        this.imap.on('expunge', callback);
    }

    /**
     * Removes a previously added 'expunge' event listener.
     * @param {(seqno: number) => void} callback - The callback function to be removed.
     * 
     */
    public removeExpungeListener(callback: (seqno: number) => void): void {
        this.imap.removeListener('expunge', callback);
    }

    /**
     * Adds a listener for the 'close' event, triggered when the connection to the IMAP server is closed.
     * @param {() => void} callback - The callback function to be executed when the connection is closed.
     */
    public addCloseListener(callback: () => void): void {
        this.imap.on('close', callback);
    }

    /**
     * Searches for messages based on the provided search criteria.
     *
     * @param {Criteria[]} criteria - An array of search criteria.
     * @param {SearchOptions} options - Options for the search operation.
     */
    public async search(criteria: Criteria[]): Promise<number[]> {
        return new Promise((resolve, reject) => {
            this.imap.search(criteria, (err, uids) => {
                if (err) {
                    console.error('Error searching for messages');
                    console.error(err);
                    reject(err);
                } else {
                    resolve(uids);
                }
            }
            );
        });
    }



    private fetchOne(uid: number, options: FetchOptions): Promise<FetchResult[]> {
        return new Promise((resolve, reject) => {
            const fetch = this.imap.fetch([uid], options);

            const messages: FetchResult[] = [];

            fetch.on('message', (msg, seqno) => {
                const message: FetchResult = {
                    parsedMail: undefined,
                    seen: true,
                    flags: [],
                };

                let hasInlineImages = false;

                msg.on('body', (stream, info) => {
                    const buffer: Buffer[] = [];

                    stream.on('data', (chunk: Buffer) => {
                        buffer.push(chunk);
                    });

                    stream.once('end', () => {
                        const bodyBuffer = Buffer.concat(buffer);
                        const body = bodyBuffer.toString('utf8');


                        simpleParser(body as any, (err, parsed) => {
                            if (err) {
                                reject(err);
                            } else {
                                message.parsedMail = parsed;
                            }
                        });


                        msg.on('attributes', (attrs) => {
                            message.seen = attrs.flags.includes('\\Seen');
                            message.flags = attrs.flags;

                        });
                    });

                    msg.once('end', () => {
                        setTimeout(() => {
                            if (message.parsedMail && message.parsedMail.date) {
                                messages.push(message);
                                if (messages.length == 1) {
                                    resolve(messages);
                                }
                            }
                        }, 1000);

                    });

                    fetch.once('error', (err) => {
                        console.error('Error fetching message');
                        console.error(err);
                        reject(err);
                    });


                });
            }
            );
        }
        );
    }

    /**
    * Fetches messages based on the provided UIDs and fetch options.
    * @param {number[]} uid - An array of message UIDs to fetch.
    * @param {FetchOptions} options - Options for fetching messages.
    * @returns {Promise<FetchResult[]>} - A promise that resolves to an array of fetched messages.
    */
    public async fetch(uids: number[], options: FetchOptions): Promise<FetchResult[]> {
        const results: FetchResult[] = [];
        for await (const uid of uids) {
            const result = await this.fetchOne(uid, options);
            results.push(...result);
        }
        return results;
    }

    /**
     * Copies a message from the source to the specified mailbox.
     * @param {MessageSource} source - The source message to copy.
     * @param {string} mailboxName - The name of the destination mailbox.
     * @returns {Promise<void>} - A promise that resolves when the copy operation is complete.
     */
    public copy(source: MessageSource, mailboxName: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.imap.copy(source, mailboxName, (err) => {
                if (err) {
                    console.error('Error copying message');
                    console.error(err);
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    /**
     * Moves a message from the source to the specified mailbox.
     * @param {MessageSource} source - The source message to move.
     * @param {string} mailboxName - The name of the destination mailbox.
     * @returns {Promise<void>} - A promise that resolves when the move operation is complete.
     */
    public move(source: MessageSource, mailboxName: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.imap.move(source, mailboxName, (err) => {
                if (err) {
                    console.error('Error moving message');
                    console.error(err);
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    /**
     * Adds flags to a message.
     * @param {MessageSource} source - The source message to add flags to.
     * @param {any[]} flags - An array of flags to add.
     * @returns {Promise<void>} - A promise that resolves when the flags are added.
     */
    public addFlags(source: MessageSource, flags: any[]): Promise<void> {
        return new Promise((resolve, reject) => {
            this.imap.addFlags(source, flags, (err) => {
                if (err) {
                    console.error('Error adding flags');
                    console.error(err);
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    /**
     * Removes flags from a message.
     * @param {MessageSource} source - The source message to remove flags from.
     * @param {any[]} flags - An array of flags to remove.
     * @returns {Promise<void>} - A promise that resolves when the flags are removed.
     */
    public delFlags(source: MessageSource, flags: any[]): Promise<void> {
        return new Promise((resolve, reject) => {
            this.imap.delFlags(source, flags, (err) => {
                if (err) {
                    console.error('Error removing flags');
                    console.error(err);
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    /**
     * Sets flags for a message, removing any existing flags.
     * @param {MessageSource} source - The source message to set flags for.
     * @param {any[]} flags - An array of flags to set.
     * @returns {Promise<void>} - A promise that resolves when the flags are set.
     */
    public setFlags(source: MessageSource, flags: any[]): Promise<void> {
        return new Promise((resolve, reject) => {
            this.imap.setFlags(source, flags, (err) => {
                if (err) {
                    console.error('Error setting flags');
                    console.error(err);
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    /**
     * Adds keywords to a message.
     * @param {MessageSource} source - The source message to add keywords to.
     * @param {any[]} keywords - An array of keywords to add.
     * @returns {Promise<void>} - A promise that resolves when the keywords are added.
     */
    public addKeywords(source: MessageSource, keywords: any[]): Promise<void> {
        return new Promise((resolve, reject) => {
            this.imap.addKeywords(source, keywords, (err) => {
                if (err) {
                    console.error('Error adding keywords');
                    console.error(err);
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    /**
     * Removes keywords from a message.
     * @param {MessageSource} source - The source message to remove keywords from.
     * @param {any[]} keywords - An array of keywords to remove.
     * @returns {Promise<void>} - A promise that resolves when the keywords are removed.
     */
    public delKeywords(source: MessageSource, keywords: any[]): Promise<void> {
        return new Promise((resolve, reject) => {
            this.imap.delKeywords(source, keywords, (err) => {
                if (err) {
                    console.error('Error removing keywords');
                    console.error(err);
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    /**
     * Sets keywords for a message, removing any existing keywords.
     * @param {MessageSource} source - The source message to set keywords for.
     * @param {any[]} keywords - An array of keywords to set.
     * @returns {Promise<void>} - A promise that resolves when the keywords are set.
     */
    public setKeywords(source: MessageSource, keywords: any[]): Promise<void> {
        return new Promise((resolve, reject) => {
            this.imap.setKeywords(source, keywords, (err) => {
                if (err) {
                    console.error('Error setting keywords');
                    console.error(err);
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    /**
     * Checks if the server supports the given capability.
     * @param {string} capability - The capability to check for.
     * @returns {boolean} - True if the server supports the capability; otherwise, false.
     */
    public serverSupports(capability: string): boolean {
        return this.imap.serverSupports(capability);
    }

    /**
     * Permanently removes messages flagged as Deleted in the currently open mailbox.
     * If the server supports the 'UIDPLUS' capability, uids can be supplied to only remove
     * messages that both have their uid in uids and have the \Deleted flag set.
     * @param {MessageSource} uids - An optional array of message UIDs to expunge.
     * @returns {Promise<void>} - A promise that resolves when the expunge operation is successful.
     * @see https://www.npmjs.com/package/imap#expungeuids--function-callback
     */
    public expunge(uids?: MessageSource): Promise<void> {
        return new Promise((resolve, reject) => {
            this.imap.expunge(uids, (err) => {
                if (err) {
                    console.error('Error expunging messages');
                    console.error(err);
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    /**
     * Appends a message to a selected mailbox on the IMAP server.
     * @param {string | Buffer} msgData - The message data to be appended (RFC-822 compatible MIME message).
     * @param {AppendOptions} options - Additional options for the append operation.
     * @returns {Promise<void>} - A promise that resolves when the append operation is successful.
     * @see https://www.npmjs.com/package/imap#appendmixed-msgdata-object-options-function-callback-void
     */
    public append(msgData: string | Buffer, options: AppendOptions): Promise<void> {
        return new Promise((resolve, reject) => {
            this.imap.append(msgData, options, (err) => {
                if (err) {
                    console.error('Error appending message');
                    console.error(err);
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

}



