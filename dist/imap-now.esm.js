import Imap from 'imap';
import { simpleParser } from 'mailparser';

function _asyncIterator(r) {
  var n,
    t,
    o,
    e = 2;
  for ("undefined" != typeof Symbol && (t = Symbol.asyncIterator, o = Symbol.iterator); e--;) {
    if (t && null != (n = r[t])) return n.call(r);
    if (o && null != (n = r[o])) return new AsyncFromSyncIterator(n.call(r));
    t = "@@asyncIterator", o = "@@iterator";
  }
  throw new TypeError("Object is not async iterable");
}
function AsyncFromSyncIterator(r) {
  function AsyncFromSyncIteratorContinuation(r) {
    if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object."));
    var n = r.done;
    return Promise.resolve(r.value).then(function (r) {
      return {
        value: r,
        done: n
      };
    });
  }
  return AsyncFromSyncIterator = function (r) {
    this.s = r, this.n = r.next;
  }, AsyncFromSyncIterator.prototype = {
    s: null,
    n: null,
    next: function () {
      return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
    },
    return: function (r) {
      var n = this.s.return;
      return void 0 === n ? Promise.resolve({
        value: r,
        done: !0
      }) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
    },
    throw: function (r) {
      var n = this.s.return;
      return void 0 === n ? Promise.reject(r) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
    }
  }, new AsyncFromSyncIterator(r);
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

var ImapNow = /*#__PURE__*/function () {
  function ImapNow(imapConfig) {
    this.imap = new Imap(imapConfig);
  }
  /**
   * Establishes a connection to an IMAP server based on the provided configuration.
  connecting to the IMAP server.
   * @returns {Promise<void>} - A promise that resolves to the connected Imap object.
   */
  var _proto = ImapNow.prototype;
  _proto.connect = function connect() {
    var _this = this;
    return new Promise(function (resolve, reject) {
      _this.imap.once('ready', function () {
        console.log('Connected to IMAP server');
        resolve();
      });
      _this.imap.once('error', function (err) {
        console.error('Error connecting to IMAP server');
        console.error(err);
        reject(err);
      });
      _this.imap.once('end', function () {
        console.log('Connection to IMAP server ended');
      });
      _this.imap.connect();
    });
  }
  /**
  * Ends the connection to the IMAP server.
  * @param {Imap} imap - The Imap object representing the connection.
  * @returns {Promise<void>} - A promise that resolves when the connection is successfully ended.
  */;
  _proto.end = function end() {
    var _this2 = this;
    return new Promise(function (resolve, reject) {
      try {
        _this2.imap.end();
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }
  /**
  * Destroys the IMAP connection, terminating it abruptly..
  * @returns {Promise<void>} - A promise that resolves when the connection is successfully destroyed.
  */;
  _proto.destroy = function destroy() {
    var _this3 = this;
    return new Promise(function (resolve, reject) {
      try {
        _this3.imap.destroy();
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }
  /**
  * Opens a mailbox on the IMAP server.
  * @param {string} mailboxName - The name of the mailbox to open.
  * @returns {Promise<Box>} - A promise that resolves to the opened mailbox.
  */;
  _proto.openBox = function openBox(mailboxName) {
    var _this4 = this;
    return new Promise(function (resolve, reject) {
      _this4.imap.openBox(mailboxName, false, function (err, box) {
        if (err) {
          console.error("Error opening mailbox " + mailboxName);
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
  */;
  _proto.closeBox = function closeBox(mailboxName) {
    var _this5 = this;
    return new Promise(function (resolve, reject) {
      _this5.imap.closeBox(true, function (err) {
        if (err) {
          console.error("Error closing mailbox " + mailboxName);
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
   */;
  _proto.getBoxes = function getBoxes() {
    var _this6 = this;
    return new Promise(function (resolve, reject) {
      _this6.imap.getBoxes('', function (err, boxes) {
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
   */;
  _proto.addBox = function addBox(mailboxName) {
    var _this7 = this;
    return new Promise(function (resolve, reject) {
      _this7.imap.addBox(mailboxName, function (err) {
        if (err) {
          console.error("Error adding mailbox " + mailboxName);
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
   */;
  _proto.deleteBox = function deleteBox(mailboxName) {
    var _this8 = this;
    return new Promise(function (resolve, reject) {
      _this8.imap.delBox(mailboxName, function (err) {
        if (err) {
          console.error("Error deleting mailbox " + mailboxName);
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
   */;
  _proto.renameBox = function renameBox(oldMailboxName, newMailboxName) {
    var _this9 = this;
    return new Promise(function (resolve, reject) {
      _this9.imap.renameBox(oldMailboxName, newMailboxName, function (err) {
        if (err) {
          console.error("Error renaming mailbox " + oldMailboxName + " to " + newMailboxName);
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
   */;
  _proto.subscribeBox = function subscribeBox(mailboxName) {
    var _this10 = this;
    return new Promise(function (resolve, reject) {
      _this10.imap.subscribeBox(mailboxName, function (err) {
        if (err) {
          console.error("Error subscribing to mailbox " + mailboxName);
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
  */;
  _proto.unsubscribeBox = function unsubscribeBox(mailboxName) {
    var _this11 = this;
    return new Promise(function (resolve, reject) {
      _this11.imap.unsubscribeBox(mailboxName, function (err) {
        if (err) {
          console.error("Error unsubscribing from mailbox " + mailboxName);
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
   * @returns {Promise<Box>} - A promise that resolves when the status is successfully retrieved.
   */;
  _proto.boxStatus = function boxStatus(mailboxName) {
    var _this12 = this;
    return new Promise(function (resolve, reject) {
      _this12.imap.status(mailboxName, function (err, box) {
        if (err) {
          console.error("Error getting status for mailbox " + mailboxName);
          console.error(err);
          reject(err);
        } else {
          resolve(box);
        }
      });
    });
  }
  /**
  * Retrieves the list of mailboxes to which the user is subscribed.
  * @returns {Promise<MailBoxes>} - A promise that resolves to the list of subscribed mailboxes.
  */;
  _proto.getSubscribedBoxes = function getSubscribedBoxes() {
    var _this13 = this;
    return new Promise(function (resolve, reject) {
      _this13.imap.getSubscribedBoxes('', function (err, boxes) {
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
   */;
  _proto.addMailListener = function addMailListener(callback) {
    this.imap.on('mail', callback);
  }
  /**
   * Removes a previously added 'mail' event listener.
   * @param {(numNewMsgs: number) => void} callback - The callback function to be removed.
   */;
  _proto.removeMailListener = function removeMailListener(callback) {
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
  */;
  _proto.addUpdateListener = function addUpdateListener(callback) {
    this.imap.on('update', callback);
  }
  /**
   * Adds a listener for the 'expunge' event, triggered when messages are deleted from the mailbox.
   * @param {(seqno: number) => void} callback - The callback function to be executed when messages are expunged.
   *
   */;
  _proto.addExpungeListener = function addExpungeListener(callback) {
    this.imap.on('expunge', callback);
  }
  /**
   * Removes a previously added 'expunge' event listener.
   * @param {(seqno: number) => void} callback - The callback function to be removed.
   *
   */;
  _proto.removeExpungeListener = function removeExpungeListener(callback) {
    this.imap.removeListener('expunge', callback);
  }
  /**
   * Adds a listener for the 'close' event, triggered when the connection to the IMAP server is closed.
   * @param {() => void} callback - The callback function to be executed when the connection is closed.
   */;
  _proto.addCloseListener = function addCloseListener(callback) {
    this.imap.on('close', callback);
  }
  /**
   * Searches for messages based on the provided search criteria.
   *
   * @param {Criteria[]} criteria - An array of search criteria.
   * @param {SearchOptions} options - Options for the search operation.
   */;
  _proto.search =
  /*#__PURE__*/
  function () {
    var _search = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(criteria) {
      var _this14 = this;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              _this14.imap.search(criteria, function (err, uids) {
                if (err) {
                  console.error('Error searching for messages');
                  console.error(err);
                  reject(err);
                } else {
                  resolve(uids);
                }
              });
            }));
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function search(_x) {
      return _search.apply(this, arguments);
    }
    return search;
  }();
  _proto.fetchOne = function fetchOne(uid, options) {
    var _this15 = this;
    return new Promise(function (resolve, reject) {
      var fetch = _this15.imap.fetch([uid], options);
      var messages = [];
      fetch.on('message', function (msg, _seqno) {
        var message = {
          parsedMail: undefined,
          seen: true,
          flags: []
        };
        msg.on('body', function (stream, _info) {
          var buffer = [];
          stream.on('data', function (chunk) {
            buffer.push(chunk);
          });
          stream.once('end', function () {
            var bodyBuffer = Buffer.concat(buffer);
            var body = bodyBuffer.toString('utf8');
            simpleParser(body, function (err, parsed) {
              if (err) {
                reject(err);
              } else {
                message.parsedMail = parsed;
              }
            });
            msg.on('attributes', function (attrs) {
              message.seen = attrs.flags.includes('\\Seen');
              message.flags = attrs.flags;
            });
          });
          msg.once('end', function () {
            setTimeout(function () {
              if (message.parsedMail && message.parsedMail.date) {
                messages.push(message);
                if (messages.length == 1) {
                  resolve(messages);
                }
              }
            }, 1000);
          });
          fetch.once('error', function (err) {
            console.error('Error fetching message');
            console.error(err);
            reject(err);
          });
        });
      });
    });
  }
  /**
  * Fetches messages based on the provided UIDs and fetch options.
  * @param {number[]} uid - An array of message UIDs to fetch.
  * @param {FetchOptions} options - Options for fetching messages.
  * @returns {Promise<FetchResult[]>} - A promise that resolves to an array of fetched messages.
  */;
  _proto.fetch =
  /*#__PURE__*/
  function () {
    var _fetch = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(uids, options) {
      var results, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, uid, result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            results = [];
            _iteratorAbruptCompletion = false;
            _didIteratorError = false;
            _context2.prev = 3;
            _iterator = _asyncIterator(uids);
          case 5:
            _context2.next = 7;
            return _iterator.next();
          case 7:
            if (!(_iteratorAbruptCompletion = !(_step = _context2.sent).done)) {
              _context2.next = 16;
              break;
            }
            uid = _step.value;
            _context2.next = 11;
            return this.fetchOne(uid, options);
          case 11:
            result = _context2.sent;
            results.push.apply(results, result);
          case 13:
            _iteratorAbruptCompletion = false;
            _context2.next = 5;
            break;
          case 16:
            _context2.next = 22;
            break;
          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2["catch"](3);
            _didIteratorError = true;
            _iteratorError = _context2.t0;
          case 22:
            _context2.prev = 22;
            _context2.prev = 23;
            if (!(_iteratorAbruptCompletion && _iterator["return"] != null)) {
              _context2.next = 27;
              break;
            }
            _context2.next = 27;
            return _iterator["return"]();
          case 27:
            _context2.prev = 27;
            if (!_didIteratorError) {
              _context2.next = 30;
              break;
            }
            throw _iteratorError;
          case 30:
            return _context2.finish(27);
          case 31:
            return _context2.finish(22);
          case 32:
            return _context2.abrupt("return", results);
          case 33:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this, [[3, 18, 22, 32], [23,, 27, 31]]);
    }));
    function fetch(_x2, _x3) {
      return _fetch.apply(this, arguments);
    }
    return fetch;
  }()
  /**
   * Copies a message from the source to the specified mailbox.
   * @param {MessageSource} source - The source message to copy.
   * @param {string} mailboxName - The name of the destination mailbox.
   * @returns {Promise<void>} - A promise that resolves when the copy operation is complete.
   */
  ;
  _proto.copy = function copy(source, mailboxName) {
    var _this16 = this;
    return new Promise(function (resolve, reject) {
      _this16.imap.copy(source, mailboxName, function (err) {
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
   */;
  _proto.move = function move(source, mailboxName) {
    var _this17 = this;
    return new Promise(function (resolve, reject) {
      _this17.imap.move(source, mailboxName, function (err) {
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
   */;
  _proto.addFlags = function addFlags(source, flags) {
    var _this18 = this;
    return new Promise(function (resolve, reject) {
      _this18.imap.addFlags(source, flags, function (err) {
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
   */;
  _proto.delFlags = function delFlags(source, flags) {
    var _this19 = this;
    return new Promise(function (resolve, reject) {
      _this19.imap.delFlags(source, flags, function (err) {
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
   */;
  _proto.setFlags = function setFlags(source, flags) {
    var _this20 = this;
    return new Promise(function (resolve, reject) {
      _this20.imap.setFlags(source, flags, function (err) {
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
   */;
  _proto.addKeywords = function addKeywords(source, keywords) {
    var _this21 = this;
    return new Promise(function (resolve, reject) {
      _this21.imap.addKeywords(source, keywords, function (err) {
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
   */;
  _proto.delKeywords = function delKeywords(source, keywords) {
    var _this22 = this;
    return new Promise(function (resolve, reject) {
      _this22.imap.delKeywords(source, keywords, function (err) {
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
   */;
  _proto.setKeywords = function setKeywords(source, keywords) {
    var _this23 = this;
    return new Promise(function (resolve, reject) {
      _this23.imap.setKeywords(source, keywords, function (err) {
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
   */;
  _proto.serverSupports = function serverSupports(capability) {
    return this.imap.serverSupports(capability);
  }
  /**
   * Permanently removes messages flagged as Deleted in the currently open mailbox.
   * If the server supports the 'UIDPLUS' capability, uids can be supplied to only remove
   * messages that both have their uid in uids and have the \Deleted flag set.
   * @param {MessageSource} uids - An optional array of message UIDs to expunge.
   * @returns {Promise<void>} - A promise that resolves when the expunge operation is successful.
   * @see https://www.npmjs.com/package/imap#expungeuids--function-callback
   */;
  _proto.expunge = function expunge(uids) {
    var _this24 = this;
    return new Promise(function (resolve, reject) {
      _this24.imap.expunge(uids, function (err) {
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
   */;
  _proto.append = function append(msgData, options) {
    var _this25 = this;
    return new Promise(function (resolve, reject) {
      _this25.imap.append(msgData, options, function (err) {
        if (err) {
          console.error('Error appending message');
          console.error(err);
          reject(err);
        } else {
          resolve();
        }
      });
    });
  };
  return ImapNow;
}();

export { ImapNow };
//# sourceMappingURL=imap-now.esm.js.map
