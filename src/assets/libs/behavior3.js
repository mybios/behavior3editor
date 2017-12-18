(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.b3 = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../constants");
var Action_1 = require("../core/Action");
/**
 * This action node returns `ERROR` always.
 *
 * @module b3
 * @class Error
 * @extends Action
 **/
var Error = /** @class */ (function (_super) {
    __extends(Error, _super);
    /**
     * Creates an instance of Error.
     * @memberof Error
     */
    function Error() {
        return _super.call(this, 'Error') || this;
    }
    /**
     * Tick method.
     * @method tick
     * @param {b3.Tick} tick A tick instance.
     * @return {Constant} Always return `ERROR`.
     **/
    Error.prototype.tick = function (tick) {
        return constants_1.ERROR;
    };
    return Error;
}(Action_1.default));
exports.default = Error;
;
},{"../constants":13,"../core/Action":14}],2:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = require("../core/Action");
var constants_1 = require("../constants");
/**
 * This action node returns `FAILURE` always.
 *
 * @module b3
 * @class Failer
 * @extends Action
 **/
var Failer = /** @class */ (function (_super) {
    __extends(Failer, _super);
    /**
     * Creates an instance of Failer.
     * @memberof Failer
     */
    function Failer() {
        return _super.call(this, 'Failer') || this;
    }
    /**
     * Tick method.
     * @method tick
     * @param {b3.Tick} tick A tick instance.
     * @return {Constant} Always return `FAILURE`.
     **/
    Failer.prototype.tick = function (tick) {
        return constants_1.FAILURE;
    };
    return Failer;
}(Action_1.default));
exports.default = Failer;
;
},{"../constants":13,"../core/Action":14}],3:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = require("../core/Action");
var constants_1 = require("../constants");
/**
 * This action node returns RUNNING always.
 *
 * @module b3
 * @class Runner
 * @extends Action
 **/
var Runner = /** @class */ (function (_super) {
    __extends(Runner, _super);
    /**
     * Creates an instance of Runner.
     * @memberof Runner
     */
    function Runner() {
        return _super.call(this, 'Runner') || this;
    }
    /**
     * Tick method.
     * @method tick
     * @param {b3.Tick} tick A tick instance.
     * @return {Constant} Always return `RUNNING`.
     **/
    Runner.prototype.tick = function (tick) {
        return constants_1.RUNNING;
    };
    return Runner;
}(Action_1.default));
exports.default = Runner;
;
},{"../constants":13,"../core/Action":14}],4:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = require("../core/Action");
var constants_1 = require("../constants");
/**
 * This action node returns `SUCCESS` always.
 *
 * @module b3
 * @class Succeeder
 * @extends Action
 **/
var Succeeder = /** @class */ (function (_super) {
    __extends(Succeeder, _super);
    /**
     * Creates an instance of Succeeder.
     * @memberof Succeeder
     */
    function Succeeder() {
        return _super.call(this, 'Succeeder') || this;
    }
    /**
     * Tick method.
     * @method tick
     * @param {b3.Tick} tick A tick instance.
     * @return {Constant} Always return `SUCCESS`.
     **/
    Succeeder.prototype.tick = function (tick) {
        return constants_1.SUCCESS;
    };
    return Succeeder;
}(Action_1.default));
exports.default = Succeeder;
;
},{"../constants":13,"../core/Action":14}],5:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = require("../core/Action");
var constants_1 = require("../constants");
/**
 * Wait a few seconds.
 *
 * @module b3
 * @class Wait
 * @extends Action
 **/
var Wait = /** @class */ (function (_super) {
    __extends(Wait, _super);
    /**
     * Creates an instance of Wait.
     * @param {Object} settings Object with parameters
     * @param {Number} settings.milliseconds Maximum time, in milliseconds, a child can execute.
     * @memberof Wait
     */
    function Wait(milliseconds) {
        if (milliseconds === void 0) { milliseconds = 0; }
        var _this = _super.call(this, 'Wait', 'Wait <milliseconds>ms', { milliseconds: 0 }) || this;
        _this.endTime = milliseconds;
        return _this;
    }
    /**
     * Open method.
     * @method open
     * @param {Tick} tick A tick instance.
     **/
    Wait.prototype.open = function (tick) {
        var startTime = (new Date()).getTime();
        tick.blackboard.set('startTime', startTime, tick.tree.id, this.id);
    };
    /**
     * Tick method.
     * @method tick
     * @param {Tick} tick A tick instance.
     * @return {Constant} A state constant.
     **/
    Wait.prototype.tick = function (tick) {
        var currTime = (new Date()).getTime();
        var startTime = tick.blackboard.get('startTime', tick.tree.id, this.id);
        if (currTime - startTime > this.endTime) {
            return constants_1.SUCCESS;
        }
        return constants_1.RUNNING;
    };
    return Wait;
}(Action_1.default));
exports.default = Wait;
;
},{"../constants":13,"../core/Action":14}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Error_1 = require("./Error");
exports.Error = Error_1.default;
var Failer_1 = require("./Failer");
exports.Failer = Failer_1.default;
var Runner_1 = require("./Runner");
exports.Runner = Runner_1.default;
var Succeeder_1 = require("./Succeeder");
exports.Succeeder = Succeeder_1.default;
var Wait_1 = require("./Wait");
exports.Wait = Wait_1.default;
},{"./Error":1,"./Failer":2,"./Runner":3,"./Succeeder":4,"./Wait":5}],7:[function(require,module,exports){
"use strict";
/**
 * List of internal and helper functions in Behavior3JS.
 *
 * @module functions
**/
Object.defineProperty(exports, "__esModule", { value: true });
/**
* This function is used to create unique IDs for trees and nodes.
*
* (consult http://www.ietf.org/rfc/rfc4122.txt).
*
* @class createUUID
* @constructor
* @return {String} A unique ID.
**/
function createUUID() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    // bits 12-15 of the time_hi_and_version field to 0010
    s[14] = "4";
    // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23] = "-";
    var uuid = s.join("");
    return uuid;
}
exports.createUUID = createUUID;
},{}],8:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Composite_1 = require("../core/Composite");
var constants_1 = require("../constants");
/**
 * MemPriority is similar to Priority node, but when a child returns a
 * `RUNNING` state, its index is recorded and in the next tick the,
 * MemPriority calls the child recorded directly, without calling previous
 * children again.
 *
 * @module b3
 * @class MemPriority
 * @extends Composite
 **/
var MemPriority = /** @class */ (function (_super) {
    __extends(MemPriority, _super);
    /**
     * Creates an instance of MemPriority.
     * @param {Object} params
     * @param {Array} params.children
     * @memberof MemPriority
     */
    function MemPriority(children) {
        if (children === void 0) { children = new Array(); }
        return _super.call(this, children, 'MemPriority') || this;
    }
    /**
     * Open method.
     * @method open
     * @param {b3.Tick} tick A tick instance.
     **/
    MemPriority.prototype.open = function (tick) {
        tick.blackboard.set('runningChild', 0, tick.tree.id, this.id);
    };
    /**
     * Tick method.
     * @method tick
     * @param {b3.Tick} tick A tick instance.
     * @return {Constant} A state constant.
     **/
    MemPriority.prototype.tick = function (tick) {
        var child = tick.blackboard.get('runningChild', tick.tree.id, this.id);
        for (var i = child; i < this.children.length; i++) {
            var status = this.children[i]._execute(tick);
            if (status !== constants_1.FAILURE) {
                if (status === constants_1.RUNNING) {
                    tick.blackboard.set('runningChild', i, tick.tree.id, this.id);
                }
                return status;
            }
        }
        return constants_1.FAILURE;
    };
    return MemPriority;
}(Composite_1.default));
exports.default = MemPriority;
;
},{"../constants":13,"../core/Composite":18}],9:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Composite_1 = require("../core/Composite");
var constants_1 = require("../constants");
/**
 * MemSequence is similar to Sequence node, but when a child returns a
 * `RUNNING` state, its index is recorded and in the next tick the
 * MemPriority call the child recorded directly, without calling previous
 * children again.
 *
 * @module b3
 * @class MemSequence
 * @extends Composite
 **/
var MemSequence = /** @class */ (function (_super) {
    __extends(MemSequence, _super);
    /**
     * Creates an instance of MemSequence.
     * @param {Object} params
     * @param {Array} params.children
     * @memberof MemSequence
     */
    function MemSequence(children) {
        if (children === void 0) { children = new Array(); }
        return _super.call(this, children, 'MemSequence') || this;
    }
    /**
     * Open method.
     * @method open
     * @param {b3.Tick} tick A tick instance.
     **/
    MemSequence.prototype.open = function (tick) {
        tick.blackboard.set('runningChild', 0, tick.tree.id, this.id);
    };
    /**
     * Tick method.
     * @method tick
     * @param {b3.Tick} tick A tick instance.
     * @return {Constant} A state constant.
     **/
    MemSequence.prototype.tick = function (tick) {
        var child = tick.blackboard.get('runningChild', tick.tree.id, this.id);
        for (var i = child; i < this.children.length; i++) {
            var status = this.children[i]._execute(tick);
            if (status !== constants_1.SUCCESS) {
                if (status === constants_1.RUNNING) {
                    tick.blackboard.set('runningChild', i, tick.tree.id, this.id);
                }
                return status;
            }
        }
        return constants_1.SUCCESS;
    };
    return MemSequence;
}(Composite_1.default));
exports.default = MemSequence;
;
},{"../constants":13,"../core/Composite":18}],10:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Composite_1 = require("../core/Composite");
var constants_1 = require("../constants");
/**
 * Priority ticks its children sequentially until one of them returns
 * `SUCCESS`, `RUNNING` or `ERROR`. If all children return the failure state,
 * the priority also returns `FAILURE`.
 *
 * @module b3
 * @class Priority
 * @extends Composite
 **/
var Priority = /** @class */ (function (_super) {
    __extends(Priority, _super);
    /**
     * Creates an instance of Priority.
     * @param {Object} params
     * @param {Array} params.children
     * @memberof Priority
     */
    function Priority(children) {
        if (children === void 0) { children = new Array(); }
        return _super.call(this, children, 'Priority') || this;
    }
    /**
     * Tick method.
     * @method tick
     * @param {Tick} tick A tick instance.
     * @return {Constant} A state constant.
     **/
    Priority.prototype.tick = function (tick) {
        for (var i = 0; i < this.children.length; i++) {
            var status = this.children[i]._execute(tick);
            if (status !== constants_1.FAILURE) {
                return status;
            }
        }
        return constants_1.FAILURE;
    };
    return Priority;
}(Composite_1.default));
exports.default = Priority;
;
},{"../constants":13,"../core/Composite":18}],11:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Composite_1 = require("../core/Composite");
var constants_1 = require("../constants");
/**
 * The Sequence node ticks its children sequentially until one of them
 * returns `FAILURE`, `RUNNING` or `ERROR`. If all children return the
 * success state, the sequence also returns `SUCCESS`.
 *
 * @module b3
 * @class Sequence
 * @extends Composite
 **/
var Sequence = /** @class */ (function (_super) {
    __extends(Sequence, _super);
    /**
     * Creates an instance of Sequence.
     * @param {Object} params
     * @param {Array} params.children
     * @memberof Sequence
     */
    function Sequence(children) {
        if (children === void 0) { children = new Array(); }
        return _super.call(this, children, 'Sequence') || this;
    }
    /**
     * Tick method.
     * @method tick
     * @param {b3.Tick} tick A tick instance.
     * @return {Constant} A state constant.
     **/
    Sequence.prototype.tick = function (tick) {
        for (var i = 0; i < this.children.length; i++) {
            var status = this.children[i]._execute(tick);
            if (status !== constants_1.SUCCESS) {
                return status;
            }
        }
        return constants_1.SUCCESS;
    };
    return Sequence;
}(Composite_1.default));
exports.default = Sequence;
;
},{"../constants":13,"../core/Composite":18}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MemPriority_1 = require("./MemPriority");
exports.MemPriority = MemPriority_1.default;
var MemSequence_1 = require("./MemSequence");
exports.MemSequence = MemSequence_1.default;
var Priority_1 = require("./Priority");
exports.Priority = Priority_1.default;
var Sequence_1 = require("./Sequence");
exports.Sequence = Sequence_1.default;
},{"./MemPriority":8,"./MemSequence":9,"./Priority":10,"./Sequence":11}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VERSION = '0.2.3';
var STATE;
(function (STATE) {
    STATE[STATE["NONE"] = 0] = "NONE";
    STATE[STATE["SUCCESS"] = 1] = "SUCCESS";
    STATE[STATE["FAILURE"] = 2] = "FAILURE";
    STATE[STATE["RUNNING"] = 3] = "RUNNING";
    STATE[STATE["ERROR"] = 4] = "ERROR";
})(STATE = exports.STATE || (exports.STATE = {}));
exports.SUCCESS = STATE.SUCCESS;
exports.FAILURE = STATE.FAILURE;
exports.RUNNING = STATE.RUNNING;
exports.ERROR = STATE.ERROR;
var Category;
(function (Category) {
    Category["COMPOSITE"] = "composite";
    Category["DECORATOR"] = "decorator";
    Category["ACTION"] = "action";
    Category["CONDITION"] = "condition";
    Category["NONE"] = "";
})(Category = exports.Category || (exports.Category = {}));
exports.COMPOSITE = Category.COMPOSITE;
exports.DECORATOR = Category.DECORATOR;
exports.ACTION = Category.ACTION;
exports.CONDITION = Category.CONDITION;
},{}],14:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseNode_1 = require("../core/BaseNode");
var constants_1 = require("../constants");
/**
 * Action is the base class for all action nodes. Thus, if you want to create
 * new custom action nodes, you need to inherit from this class. For example,
 * take a look at the Runner action:
 *
 *     class Runner extends b3.Action {
 *       constructor(){
 *         super({name: 'Runner'});
 *       }
 *       tick(tick : Tick) {
 *         return b3.RUNNING;
 *       }
 *     };
 *
 * @module b3
 * @class Action
 * @extends BaseNode
 **/
var Action = /** @class */ (function (_super) {
    __extends(Action, _super);
    /**
     * Creates an instance of Action.
     * @param {Object} options
     * @param {String} options.name Node name. Default to `Action`.
     * @param {String} options.title
     * @param {Object} options.properties
     * @memberof Action
     */
    function Action(name, title, properties) {
        if (name === void 0) { name = 'Action'; }
        if (title === void 0) { title = name; }
        if (properties === void 0) { properties = {}; }
        return _super.call(this, constants_1.ACTION, name, title, '', properties) || this;
    }
    return Action;
}(BaseNode_1.default));
exports.default = Action;
;
},{"../constants":13,"../core/BaseNode":15}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b3_functions_1 = require("../b3.functions");
var constants_1 = require("../constants");
/**
 * The BaseNode class is used as super class to all nodes in BehaviorJS. It
 * comprises all common variables and methods that a node must have to
 * execute.
 *
 * **IMPORTANT:** Do not inherit from this class, use `Composite`,
 * `Decorator`, `Action` or `Condition`, instead.
 *
 * The attributes are specially designed to serialization of the node in a
 * JSON format. In special, the `parameters` attribute can be set into the
 * visual editor (thus, in the JSON file), and it will be used as parameter
 * on the node initialization at `BehaviorTree.load`.
 *
 * BaseNode also provide 5 callback methods, which the node implementations
 * can override. They are `enter`, `open`, `tick`, `close` and `exit`. See
 * their documentation to know more. These callbacks are called inside the
 * `_execute` method, which is called in the tree traversal.
 *
 * @module b3
 * @class BaseNode
 **/
var BaseNode = /** @class */ (function () {
    /**
     * Initialization method.
     * @method initialize
     * @constructor
     **/
    function BaseNode(
        /**
         * Node category. Must be `COMPOSITE`, `DECORATOR`, `ACTION` or
         * `CONDITION`. This is defined automatically be inheriting the
         * correspondent class.
         *
         * @member BaseNode#category
         **/
        category, 
        /**
         * Node name. Must be a unique identifier,
         * preferable the same name of the
         * class. You have to set the node name in the prototype.
         *
         * @member BaseNode#name
         **/
        name, 
        /**
         * Node title.
         *
         * @optional
         * @member BaseNode#title
         **/
        title, 
        /**
         * Node description.
         *
         * @member BaseNode#description
         */
        description, 
        /**
         * A dictionary (key, value) describing the node properties. Useful for
         * defining custom variables inside the visual editor.
         *
         * @property properties
         * @type {Object}
         * @readonly
         **/
        properties) {
        if (category === void 0) { category = constants_1.Category.NONE; }
        if (name === void 0) { name = ''; }
        if (title === void 0) { title = name; }
        if (description === void 0) { description = ''; }
        if (properties === void 0) { properties = {}; }
        this.category = category;
        this.name = name;
        this.title = title;
        this.description = description;
        this.properties = properties;
        this.id = b3_functions_1.createUUID();
        /**
         * A dictionary (key, value) describing the node parameters. Useful for
         * defining parameter values in the visual editor. Note: this is only
         * useful for nodes when loading trees from JSON files.
         *
         * **Deprecated since 0.2.0. This is too similar to the properties
         * attribute, thus, this attribute is deprecated in favor to
         * `properties`.**
         *
         * @property {Object} parameters
         * @deprecated since 0.2.0.
         * @readonly
         **/
        this.parameters = {};
    }
    /**
     * This is the main method to propagate the tick signal to this node. This
     * method calls all callbacks: `enter`, `open`, `tick`, `close`, and
     * `exit`. It only opens a node if it is not already open. In the same
     * way, this method only close a node if the node  returned a status
     * different of `RUNNING`.
     *
     * @method _execute
     * @param {Tick} tick A tick instance.
     * @return {Constant} The tick state.
     * @protected
     **/
    BaseNode.prototype._execute = function (tick) {
        // ENTER
        this._enter(tick);
        // OPEN
        if (!tick.blackboard.get('isOpen', tick.tree.id, this.id)) {
            this._open(tick);
        }
        // TICK
        var status = this._tick(tick);
        // CLOSE
        if (status !== constants_1.RUNNING) {
            this._close(tick);
        }
        // EXIT
        this._exit(tick);
        return status;
    };
    /**
     * Wrapper for enter method.
     * @method _enter
     * @param {Tick} tick A tick instance.
     * @protected
     **/
    BaseNode.prototype._enter = function (tick) {
        tick._enterNode(this);
        this.enter(tick);
    };
    /**
     * Wrapper for open method.
     * @method _open
     * @param {Tick} tick A tick instance.
     * @protected
     **/
    BaseNode.prototype._open = function (tick) {
        tick._openNode(this);
        tick.blackboard.set('isOpen', true, tick.tree.id, this.id);
        this.open(tick);
    };
    /**
     * Wrapper for tick method.
     * @method _tick
     * @param {Tick} tick A tick instance.
     * @return {Constant} A state constant.
     * @protected
     **/
    BaseNode.prototype._tick = function (tick) {
        tick._tickNode(this);
        return this.tick(tick);
    };
    /**
     * Wrapper for close method.
     * @method _close
     * @param {Tick} tick A tick instance.
     * @protected
     **/
    BaseNode.prototype._close = function (tick) {
        tick._closeNode(this);
        tick.blackboard.set('isOpen', false, tick.tree.id, this.id);
        this.close(tick);
    };
    /**
     * Wrapper for exit method.
     * @method _exit
     * @param {Tick} tick A tick instance.
     * @protected
     **/
    BaseNode.prototype._exit = function (tick) {
        tick._exitNode(this);
        this.exit(tick);
    };
    /**
     * Enter method, override this to use. It is called every time a node is
     * asked to execute, before the tick itself.
     *
     * @method enter
     * @param {Tick} tick A tick instance.
     **/
    BaseNode.prototype.enter = function (tick) { };
    /**
     * Open method, override this to use. It is called only before the tick
     * callback and only if the not isn't closed.
     *
     * Note: a node will be closed if it returned `RUNNING` in the tick.
     *
     * @method open
     * @param {Tick} tick A tick instance.
     **/
    BaseNode.prototype.open = function (tick) { };
    /**
     * Tick method, override this to use. This method must contain the real
     * execution of node (perform a task, call children, etc.). It is called
     * every time a node is asked to execute.
     *
     * @method tick
     * @param {Tick} tick A tick instance.
     **/
    BaseNode.prototype.tick = function (tick) { return constants_1.STATE.NONE; };
    /**
     * Close method, override this to use. This method is called after the tick
     * callback, and only if the tick return a state different from
     * `RUNNING`.
     *
     * @method close
     * @param {Tick} tick A tick instance.
     **/
    BaseNode.prototype.close = function (tick) { };
    /**
     * Exit method, override this to use. Called every time in the end of the
     * execution.
     *
     * @method exit
     * @param {Tick} tick A tick instance.
     **/
    BaseNode.prototype.exit = function (tick) { };
    return BaseNode;
}());
exports.default = BaseNode;
;
},{"../b3.functions":7,"../constants":13}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b3_functions_1 = require("../b3.functions");
var constants_1 = require("../constants");
var Decorators = require("../decorators/index");
var Composites = require("../composites/index");
var Actions = require("../actions/index");
var Tick_1 = require("./Tick");
/**
 * The BehaviorTree class, as the name implies, represents the Behavior Tree
 * structure.
 *
 * There are two ways to construct a Behavior Tree: by manually setting the
 * root node, or by loading it from a data structure (which can be loaded
 * from a JSON). Both methods are shown in the examples below and better
 * explained in the user guide.
 *
 * The tick method must be called periodically, in order to send the tick
 * signal to all nodes in the tree, starting from the root. The method
 * `BehaviorTree.tick` receives a target object and a blackboard as
 * parameters. The target object can be anything: a game agent, a system, a
 * DOM object, etc. This target is not used by any piece of Behavior3JS,
 * i.e., the target object will only be used by custom nodes.
 *
 * The blackboard is obligatory and must be an instance of `Blackboard`. This
 * requirement is necessary due to the fact that neither `BehaviorTree` or
 * any node will store the execution variables in its own object (e.g., the
 * BT does not store the target, information about opened nodes or number of
 * times the tree was called). But because of this, you only need a single
 * tree instance to control multiple (maybe hundreds) objects.
 *
 * Manual construction of a Behavior Tree
 * --------------------------------------
 *
 *     var tree = new b3.BehaviorTree();
 *
 *     tree.root = new b3.Sequence({children:[
 *       new b3.Priority({children:[
 *         new MyCustomNode(),
 *         new MyCustomNode()
 *       ]}),
 *       ...
 *     ]});
 *
 *
 * Loading a Behavior Tree from data structure
 * -------------------------------------------
 *
 *     var tree = new b3.BehaviorTree();
 *
 *     tree.load({
 *       'title'       : 'Behavior Tree title'
 *       'description' : 'My description'
 *       'root'        : 'node-id-1'
 *       'nodes'       : {
 *         'node-id-1' : {
 *           'name'        : 'Priority', // this is the node type
 *           'title'       : 'Root Node',
 *           'description' : 'Description',
 *           'children'    : ['node-id-2', 'node-id-3'],
 *         },
 *         ...
 *       }
 *     })
 *
 *
 * @module b3
 * @class BehaviorTree
 **/
var BehaviorTree = /** @class */ (function () {
    /**
     * Initialization method.
     * @method initialize
     * @constructor
     **/
    function BehaviorTree() {
        /**
         * The tree id, must be unique. By default, created with `createUUID`.
         * @property {String} id
         * @readOnly
         **/
        this.id = b3_functions_1.createUUID();
        /**
         * The tree title.
         * @property {String} title
         * @readonly
         **/
        this.title = 'The behavior tree';
        /**
         * Description of the tree.
         * @property {String} description
         * @readonly
         **/
        this.description = 'Default description';
        /**
         * A dictionary with (key-value) properties. Useful to define custom
         * variables in the visual editor.
         *
         * @property {Object} properties
         * @readonly
         **/
        this.properties = {};
        /**
         * The reference to the root node. Must be an instance of `BaseNode`.
         * @property {BaseNode} root
         **/
        this.root = null;
        /**
         * The reference to the debug instance.
         * @property {Object} debug
         **/
        this.debug = null;
    }
    /**
     * This method loads a Behavior Tree from a data structure, populating this
     * object with the provided data. Notice that, the data structure must
     * follow the format specified by Behavior3JS. Consult the guide to know
     * more about this format.
     *
     * You probably want to use custom nodes in your BTs, thus, you need to
     * provide the `names` object, in which this method can find the nodes by
     * `names[NODE_NAME]`. This variable can be a namespace or a dictionary,
     * as long as this method can find the node by its name, for example:
     *
     *     //json
     *     ...
     *     'node1': {
     *       'name': MyCustomNode,
     *       'title': ...
     *     }
     *     ...
     *
     *     //code
     *     var bt = new b3.BehaviorTree();
     *     bt.load(data, {'MyCustomNode':MyCustomNode})
     *
     *
     * @method load
     * @param {Object} data The data structure representing a Behavior Tree.
     * @param {Object} [names] A namespace or dict containing custom nodes.
     **/
    BehaviorTree.prototype.load = function (data, names) {
        if (names === void 0) { names = {}; }
        this.title = data.title || this.title;
        this.description = data.description || this.description;
        this.properties = data.properties || this.properties;
        var nodes = {};
        var id, spec, node;
        // Create the node list (without connection between them)
        for (id in data.nodes) {
            spec = data.nodes[id];
            var Cls;
            if (spec.name in names) {
                // Look for the name in custom nodes
                Cls = names[spec.name];
            }
            else if (spec.name in Decorators) {
                // Look for the name in default nodes
                Cls = Decorators[spec.name];
            }
            else if (spec.name in Composites) {
                Cls = Composites[spec.name];
            }
            else if (spec.name in Actions) {
                Cls = Actions[spec.name];
            }
            else {
                // Invalid node name
                throw new EvalError('BehaviorTree.load: Invalid node name + "' +
                    spec.name + '".');
            }
            node = new Cls(spec.properties);
            node.id = spec.id || node.id;
            node.title = spec.title || node.title;
            node.description = spec.description || node.description;
            node.properties = spec.properties || node.properties;
            nodes[id] = node;
        }
        // Connect the nodes
        for (id in data.nodes) {
            spec = data.nodes[id];
            node = nodes[id];
            if (node.category === constants_1.COMPOSITE && spec.children) {
                for (var i = 0; i < spec.children.length; i++) {
                    var cid = spec.children[i];
                    node.children.push(nodes[cid]);
                }
            }
            else if (node.category === constants_1.DECORATOR && spec.child) {
                node.child = nodes[spec.child];
            }
        }
        this.root = nodes[data.root];
    };
    /**
     * This method dump the current BT into a data structure.
     *
     * Note: This method does not record the current node parameters. Thus,
     * it may not be compatible with load for now.
     *
     * @method dump
     * @return {Object} A data object representing this tree.
     **/
    BehaviorTree.prototype.dump = function () {
        var data = {};
        var customNames = [];
        data.title = this.title;
        data.description = this.description;
        data.root = (this.root) ? this.root.id : null;
        data.properties = this.properties;
        data.nodes = {};
        data.custom_nodes = [];
        if (!this.root)
            return data;
        var stack = [this.root];
        while (stack.length > 0) {
            var node = stack.pop();
            var spec = {};
            spec.id = node.id;
            spec.name = node.name;
            spec.title = node.title;
            spec.description = node.description;
            spec.properties = node.properties;
            spec.parameters = node.parameters;
            // verify custom node
            var proto = (node.constructor && node.constructor.prototype);
            var nodeName = (proto && proto.name) || node.name;
            if (!Decorators[nodeName] && !Composites[nodeName] && !Actions[nodeName] && customNames.indexOf(nodeName) < 0) {
                var subdata = {};
                subdata.name = nodeName;
                subdata.title = (proto && proto.title) || node.title;
                subdata.category = node.category;
                customNames.push(nodeName);
                data.custom_nodes.push(subdata);
            }
            // store children/child
            if (node.category === constants_1.COMPOSITE && node.children) {
                var children = [];
                for (var i = node.children.length - 1; i >= 0; i--) {
                    children.push(node.children[i].id);
                    stack.push(node.children[i]);
                }
                spec.children = children;
            }
            else if (node.category === constants_1.DECORATOR && node.child) {
                stack.push(node.child);
                spec.child = node.child.id;
            }
            data.nodes[node.id] = spec;
        }
        return data;
    };
    /**
     * Propagates the tick signal through the tree, starting from the root.
     *
     * This method receives a target object of any type (Object, Array,
     * DOMElement, whatever) and a `Blackboard` instance. The target object has
     * no use at all for all Behavior3JS components, but surely is important
     * for custom nodes. The blackboard instance is used by the tree and nodes
     * to store execution variables (e.g., last node running) and is obligatory
     * to be a `Blackboard` instance (or an object with the same interface).
     *
     * Internally, this method creates a Tick object, which will store the
     * target and the blackboard objects.
     *
     * Note: BehaviorTree stores a list of open nodes from last tick, if these
     * nodes weren't called after the current tick, this method will close them
     * automatically.
     *
     * @method tick
     * @param {Object} target A target object.
     * @param {Blackboard} blackboard An instance of blackboard object.
     * @return {Constant} The tick signal state.
     **/
    BehaviorTree.prototype.tick = function (target, blackboard) {
        if (!blackboard) {
            throw 'The blackboard parameter is obligatory and must be an ' +
                'instance of b3.Blackboard';
        }
        /* CREATE A TICK OBJECT */
        var tick = new Tick_1.default();
        tick.debug = this.debug;
        tick.target = target;
        tick.blackboard = blackboard;
        tick.tree = this;
        /* TICK NODE */
        var state = this.root._execute(tick);
        /* CLOSE NODES FROM LAST TICK, IF NEEDED */
        var lastOpenNodes = blackboard.get('openNodes', this.id);
        var currOpenNodes = tick._openNodes.slice(0);
        // does not close if it is still open in this tick
        var start = 0;
        var i;
        for (i = 0; i < Math.min(lastOpenNodes.length, currOpenNodes.length); i++) {
            start = i + 1;
            if (lastOpenNodes[i] !== currOpenNodes[i]) {
                break;
            }
        }
        // close the nodes
        for (i = lastOpenNodes.length - 1; i >= start; i--) {
            lastOpenNodes[i]._close(tick);
        }
        /* POPULATE BLACKBOARD */
        blackboard.set('openNodes', currOpenNodes, this.id);
        blackboard.set('nodeCount', tick._nodeCount, this.id);
        return state;
    };
    return BehaviorTree;
}());
exports.default = BehaviorTree;
;
},{"../actions/index":6,"../b3.functions":7,"../composites/index":12,"../constants":13,"../decorators/index":28,"./Tick":21}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Blackboard = /** @class */ (function () {
    /**
     * Initialization method.
     * @method initialize
     * @constructor
     **/
    function Blackboard() {
        this._baseMemory = {};
        this._treeMemory = {};
    }
    /**
     * Internal method to retrieve the tree context memory. If the memory does
     * not exist, this method creates it.
     *
     * @method _getTreeMemory
     * @param {String} treeScope The id of the tree in scope.
     * @return {Object} The tree memory.
     * @protected
     **/
    Blackboard.prototype._getTreeMemory = function (treeScope) {
        if (!this._treeMemory[treeScope]) {
            this._treeMemory[treeScope] = {
                'nodeMemory': {},
                'openNodes': [],
                'traversalDepth': 0,
                'traversalCycle': 0,
            };
        }
        return this._treeMemory[treeScope];
    };
    /**
     * Internal method to retrieve the node context memory, given the tree
     * memory. If the memory does not exist, this method creates is.
     *
     * @method _getNodeMemory
     * @param {String} treeMemory the tree memory.
     * @param {String} nodeScope The id of the node in scope.
     * @return {Object} The node memory.
     * @protected
     **/
    Blackboard.prototype._getNodeMemory = function (treeMemory, nodeScope) {
        var memory = treeMemory.nodeMemory;
        if (!memory[nodeScope]) {
            memory[nodeScope] = {};
        }
        return memory[nodeScope];
    };
    /**
     * Internal method to retrieve the context memory. If treeScope and
     * nodeScope are provided, this method returns the per node per tree
     * memory. If only the treeScope is provided, it returns the per tree
     * memory. If no parameter is provided, it returns the global memory.
     * Notice that, if only nodeScope is provided, this method will still
     * return the global memory.
     *
     * @method _getMemory
     * @param {String} treeScope The id of the tree scope.
     * @param {String} nodeScope The id of the node scope.
     * @return {Object} A memory object.
     * @protected
     **/
    Blackboard.prototype._getMemory = function (treeScope, nodeScope) {
        var memory = this._baseMemory;
        if (treeScope) {
            memory = this._getTreeMemory(treeScope);
            if (nodeScope) {
                memory = this._getNodeMemory(memory, nodeScope);
            }
        }
        return memory;
    };
    /**
     * Stores a value in the blackboard. If treeScope and nodeScope are
     * provided, this method will save the value into the per node per tree
     * memory. If only the treeScope is provided, it will save the value into
     * the per tree memory. If no parameter is provided, this method will save
     * the value into the global memory. Notice that, if only nodeScope is
     * provided (but treeScope not), this method will still save the value into
     * the global memory.
     *
     * @method set
     * @param {String} key The key to be stored.
     * @param {String} value The value to be stored.
     * @param {String} treeScope The tree id if accessing the tree or node
     *                           memory.
     * @param {String} nodeScope The node id if accessing the node memory.
     **/
    Blackboard.prototype.set = function (key, value, treeScope, nodeScope) {
        var memory = this._getMemory(treeScope, nodeScope);
        memory[key] = value;
    };
    /**
     * Retrieves a value in the blackboard. If treeScope and nodeScope are
     * provided, this method will retrieve the value from the per node per tree
     * memory. If only the treeScope is provided, it will retrieve the value
     * from the per tree memory. If no parameter is provided, this method will
     * retrieve from the global memory. If only nodeScope is provided (but
     * treeScope not), this method will still try to retrieve from the global
     * memory.
     *
     * @method get
     * @param {String} key The key to be retrieved.
     * @param {String} treeScope The tree id if accessing the tree or node
     *                           memory.
     * @param {String} nodeScope The node id if accessing the node memory.
     * @return {Object} The value stored or undefined.
     **/
    Blackboard.prototype.get = function (key, treeScope, nodeScope) {
        var memory = this._getMemory(treeScope, nodeScope);
        return memory[key];
    };
    return Blackboard;
}());
exports.default = Blackboard;
;
},{}],18:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseNode_1 = require("../core/BaseNode");
var constants_1 = require("../constants");
/**
 * Composite is the base class for all composite nodes. Thus, if you want to
 * create new custom composite nodes, you need to inherit from this class.
 *
 * When creating composite nodes, you will need to propagate the tick signal
 * to the children nodes manually. To do that, override the `tick` method and
 * call the `_execute` method on all nodes. For instance, take a look at how
 * the Sequence node inherit this class and how it call its children:
 *
 *     // Inherit from Composite, using the util function Class.
 *     class Sequence extends Composite {
 *
 *       constructor(){
 *         // Remember to set the name of the node.
 *         super({name: 'Sequence'});
 *       }
 *
 *       // Override the tick function
 *       tick(tick : Tick) {
 *
 *         // Iterates over the children
 *         for (var i=0; i<this.children.length; i++) {
 *
 *           // Propagate the tick
 *           var status = this.children[i]._execute(tick);
 *
 *           if (status !== SUCCESS) {
 *               return status;
 *           }
 *         }
 *
 *         return SUCCESS;
 *       }
 *     };
 *
 * @module b3
 * @class Composite
 * @extends BaseNode
 **/
var Composite = /** @class */ (function (_super) {
    __extends(Composite, _super);
    /**
     * Creates an instance of Composite.
     * @param {Object} options
     * @param {BaseNode[]} options.children
     * @param {String} options.name Node name. Default to `Composite`.
     * @param {String} options.title
     * @param {Object} options.properties
     * @memberof Composite
     */
    function Composite(children, name, title, properties) {
        if (children === void 0) { children = []; }
        if (name === void 0) { name = 'Composite'; }
        if (title === void 0) { title = name; }
        if (properties === void 0) { properties = {}; }
        var _this = _super.call(this, constants_1.COMPOSITE, name, title, '', properties) || this;
        _this.children = (children).slice(0);
        return _this;
    }
    return Composite;
}(BaseNode_1.default));
exports.default = Composite;
;
},{"../constants":13,"../core/BaseNode":15}],19:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseNode_1 = require("./BaseNode");
var constants_1 = require("../constants");
/**
 * Condition is the base class for all condition nodes. Thus, if you want to
 * create new custom condition nodes, you need to inherit from this class.
 *
 * @class Condition
 * @extends BaseNode
 **/
var Condition = /** @class */ (function (_super) {
    __extends(Condition, _super);
    /**
     * Creates an instance of Condition.
     * @param {Object} options
     * @param {Object} options.name Node name. Default to `Condition`.
     * @param {String} options.title
     * @param {Object} options.properties
     * @memberof Condition
     */
    function Condition(name, title, properties) {
        if (name === void 0) { name = 'Condition'; }
        if (title === void 0) { title = name; }
        if (properties === void 0) { properties = {}; }
        return _super.call(this, constants_1.CONDITION, name, title, '', properties) || this;
    }
    return Condition;
}(BaseNode_1.default));
exports.default = Condition;
;
},{"../constants":13,"./BaseNode":15}],20:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseNode_1 = require("./BaseNode");
var constants_1 = require("../constants");
/**
 * Decorator is the base class for all decorator nodes. Thus, if you want to
 * create new custom decorator nodes, you need to inherit from this class.
 *
 * When creating decorator nodes, you will need to propagate the tick signal
 * to the child node manually, just like the composite nodes. To do that,
 * override the `tick` method and call the `_execute` method on the child
 * node. For instance, take a look at how the Inverter node inherit this
 * class and how it call its children:
 *
 *     // Inherit from Decorator, using the util function Class.
 *     class Inverter extends b3.Decorator {
 *
 *       constructor(){
 *         super({name: 'Invereter'});
 *       }
 *
 *       tick: function(tick) {
 *         if (!this.child) {
 *           return b3.ERROR;
 *         }
 *
 *         // Propagate the tick
 *         var status = this.child._execute(tick);
 *
 *         if (status === b3.SUCCESS) {
 *           status = b3.FAILURE;
 *         } else if (status === b3.FAILURE) {
 *           status = b3.SUCCESS;
 *         }
 *
 *         return status;
 *       }
 *     });
 *
 * @module b3
 * @class Decorator
 * @extends BaseNode
 **/
var Decorator = /** @class */ (function (_super) {
    __extends(Decorator, _super);
    /**
     * Creates an instance of Decorator.
     * @param {Object} options
     * @param {String} options.name Node name. Default to `Decorator`.
     * @param {String} options.title
     * @param {Object} options.properties
     * @memberof Decorator
     */
    function Decorator(child, name, title, properties) {
        if (child === void 0) { child = null; }
        if (name === void 0) { name = 'Decorator'; }
        if (title === void 0) { title = name; }
        if (properties === void 0) { properties = {}; }
        var _this = _super.call(this, constants_1.DECORATOR, name, title, '', properties) || this;
        _this.child = child;
        return _this;
    }
    return Decorator;
}(BaseNode_1.default));
exports.default = Decorator;
;
},{"../constants":13,"./BaseNode":15}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A new Tick object is instantiated every tick by BehaviorTree. It is passed
 * as parameter to the nodes through the tree during the traversal.
 *
 * The role of the Tick class is to store the instances of tree, debug,
 * target and blackboard. So, all nodes can access these informations.
 *
 * For internal uses, the Tick also is useful to store the open node after
 * the tick signal, in order to let `BehaviorTree` to keep track and close
 * them when necessary.
 *
 * This class also makes a bridge between nodes and the debug, passing the
 * node state to the debug if the last is provided.
 *
 * @module b3
 * @class Tick
 **/
var Tick = /** @class */ (function () {
    /**
     * Initialization method.
     * @method initialize
     * @constructor
     **/
    function Tick() {
        // set by BehaviorTree
        /**
         * The tree reference.
         * @property {b3.BehaviorTree} tree
         * @readOnly
         **/
        this.tree = null;
        /**
         * The debug reference.
         * @property {Object} debug
         * @readOnly
         */
        this.debug = null;
        /**
         * The target object reference.
         * @property {Object} target
         * @readOnly
         **/
        this.target = null;
        /**
         * The blackboard reference.
         * @property {b3.Blackboard} blackboard
         * @readOnly
         **/
        this.blackboard = null;
        // updated during the tick signal
        /**
         * The list of open nodes. Update during the tree traversal.
         * @property {Array} _openNodes
         * @protected
         * @readOnly
         **/
        this._openNodes = [];
        /**
         * The number of nodes entered during the tick. Update during the tree
         * traversal.
         *
         * @property {Integer} _nodeCount
         * @protected
         * @readOnly
         **/
        this._nodeCount = 0;
    }
    /**
     * Called when entering a node (called by BaseNode).
     * @method _enterNode
     * @param {Object} node The node that called this method.
     * @protected
     **/
    Tick.prototype._enterNode = function (node) {
        this._nodeCount++;
        this._openNodes.push(node);
        // TODO: call debug here
    };
    /**
     * Callback when opening a node (called by BaseNode).
     * @method _openNode
     * @param {Object} node The node that called this method.
     * @protected
     **/
    Tick.prototype._openNode = function (node) {
        // TODO: call debug here
    };
    /**
     * Callback when ticking a node (called by BaseNode).
     * @method _tickNode
     * @param {Object} node The node that called this method.
     * @protected
     **/
    Tick.prototype._tickNode = function (node) {
        // TODO: call debug here
    };
    /**
     * Callback when closing a node (called by BaseNode).
     * @method _closeNode
     * @param {Object} node The node that called this method.
     * @protected
     **/
    Tick.prototype._closeNode = function (node) {
        // TODO: call debug here
        this._openNodes.pop();
    };
    /**
     * Callback when exiting a node (called by BaseNode).
     * @method _exitNode
     * @param {Object} node The node that called this method.
     * @protected
     **/
    Tick.prototype._exitNode = function (node) {
        // TODO: call debug here
    };
    return Tick;
}());
exports.default = Tick;
;
},{}],22:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Decorator_1 = require("../core/Decorator");
var constants_1 = require("../constants");
/**
 * The Inverter decorator inverts the result of the child, returning `SUCCESS`
 * for `FAILURE` and `FAILURE` for `SUCCESS`.
 *
 * @module b3
 * @class Inverter
 * @extends Decorator
 **/
var Inverter = /** @class */ (function (_super) {
    __extends(Inverter, _super);
    /**
     * Creates an instance of Inverter.
     * @param {Object} params
     * @param {BaseNode} params.child The child node.
     * @memberof Inverter
     */
    function Inverter(child) {
        if (child === void 0) { child = null; }
        return _super.call(this, child, 'Inverter') || this;
    }
    /**
     * Tick method.
     * @method tick
     * @param {Tick} tick A tick instance.
     * @return {Constant} A state constant.
     **/
    Inverter.prototype.tick = function (tick) {
        if (!this.child) {
            return constants_1.ERROR;
        }
        var status = this.child._execute(tick);
        if (status == constants_1.SUCCESS) {
            status = constants_1.FAILURE;
        }
        else if (status == constants_1.FAILURE) {
            status = constants_1.SUCCESS;
        }
        return status;
    };
    return Inverter;
}(Decorator_1.default));
exports.default = Inverter;
;
},{"../constants":13,"../core/Decorator":20}],23:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Decorator_1 = require("../core/Decorator");
var constants_1 = require("../constants");
/**
 * This decorator limit the number of times its child can be called. After a
 * certain number of times, the Limiter decorator returns `FAILURE` without
 * executing the child.
 *
 * @module b3
 * @class Limiter
 * @extends Decorator
 **/
var Limiter = /** @class */ (function (_super) {
    __extends(Limiter, _super);
    /**
     * Creates an instance of Limiter.
     *
     * Settings parameters:
     *
     * - **maxLoop** (*Integer*) Maximum number of repetitions.
     * - **child** (*BaseNode*) The child node.
     *
     * @param {Object} params
     * @param {Number} params.maxLoop Maximum number of repetitions.
     * @param {BaseNode} params.child The child node.
     * @memberof Limiter
     */
    function Limiter(child, maxLoop) {
        if (child === void 0) { child = null; }
        if (maxLoop === void 0) { maxLoop = 1; }
        var _this = _super.call(this, child, 'Limiter', 'Limit <maxLoop> Activations', { maxLoop: 1 }) || this;
        if (!maxLoop) {
            throw 'maxLoop parameter in Limiter decorator is an obligatory parameter';
        }
        _this.maxLoop = maxLoop;
        return _this;
    }
    /**
     * Open method.
     * @method open
     * @param {Tick} tick A tick instance.
     **/
    Limiter.prototype.open = function (tick) {
        tick.blackboard.set('i', 0, tick.tree.id, this.id);
    };
    /**
     * Tick method.
     * @method tick
     * @param {Tick} tick A tick instance.
     * @return {Constant} A state constant.
     **/
    Limiter.prototype.tick = function (tick) {
        if (!this.child) {
            return constants_1.ERROR;
        }
        var i = tick.blackboard.get('i', tick.tree.id, this.id);
        if (i < this.maxLoop) {
            var status = this.child._execute(tick);
            if (status == constants_1.SUCCESS || status == constants_1.FAILURE)
                tick.blackboard.set('i', i + 1, tick.tree.id, this.id);
            return status;
        }
        return constants_1.FAILURE;
    };
    return Limiter;
}(Decorator_1.default));
exports.default = Limiter;
;
},{"../constants":13,"../core/Decorator":20}],24:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Decorator_1 = require("../core/Decorator");
var constants_1 = require("../constants");
/**
 * The MaxTime decorator limits the maximum time the node child can execute.
 * Notice that it does not interrupt the execution itself (i.e., the child
 * must be non-preemptive), it only interrupts the node after a `RUNNING`
 * status.
 *
 * @module b3
 * @class MaxTime
 * @extends Decorator
 **/
var MaxTime = /** @class */ (function (_super) {
    __extends(MaxTime, _super);
    /**
     * Creates an instance of MaxTime.
     *
     * - **maxTime** (*Integer*) Maximum time a child can execute.
     * - **child** (*BaseNode*) The child node.
  
     * @param {Object} params Object with parameters.
     * @param {Number} params.maxTime Maximum time a child can execute.
     * @param {BaseNode} params.child The child node.
     * @memberof MaxTime
     */
    function MaxTime(maxTime, child) {
        if (maxTime === void 0) { maxTime = 1; }
        if (child === void 0) { child = null; }
        var _this = _super.call(this, child, 'MaxTime', 'Max <maxTime>ms', { maxTime: maxTime }) || this;
        if (!maxTime) {
            throw 'maxTime parameter in MaxTime decorator is an obligatory parameter';
        }
        _this.maxTime = maxTime;
        return _this;
    }
    /**
     * Open method.
     * @method open
     * @param {Tick} tick A tick instance.
     **/
    MaxTime.prototype.open = function (tick) {
        var startTime = (new Date()).getTime();
        tick.blackboard.set('startTime', startTime, tick.tree.id, this.id);
    };
    /**
     * Tick method.
     * @method tick
     * @param {Tick} tick A tick instance.
     * @return {Constant} A state constant.
     **/
    MaxTime.prototype.tick = function (tick) {
        if (!this.child) {
            return constants_1.ERROR;
        }
        var currTime = (new Date()).getTime();
        var startTime = tick.blackboard.get('startTime', tick.tree.id, this.id);
        var status = this.child._execute(tick);
        if (currTime - startTime > this.maxTime) {
            return constants_1.FAILURE;
        }
        return status;
    };
    return MaxTime;
}(Decorator_1.default));
exports.default = MaxTime;
;
},{"../constants":13,"../core/Decorator":20}],25:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Decorator_1 = require("../core/Decorator");
var constants_1 = require("../constants");
/**
 * RepeatUntilFailure is a decorator that repeats the tick signal until the
 * node child returns `FAILURE`, `RUNNING` or `ERROR`. Optionally, a maximum
 * number of repetitions can be defined.
 *
 * @module b3
 * @class RepeatUntilFailure
 * @extends Decorator
 **/
var RepeatUntilFailure = /** @class */ (function (_super) {
    __extends(RepeatUntilFailure, _super);
    /**
     * Creates an instance of RepeatUntilFailure.
     *
     * - **maxLoop** (*Integer*) Maximum number of repetitions. Default to -1 (infinite).
     * - **child** (*BaseNode*) The child node.
     *
     * @param {Object} params Object with parameters.
     * @param {Number} params.maxLoop Maximum number of repetitions. Default to -1 (infinite).
     * @param {BaseNode} params.child The child node.
     * @memberof RepeatUntilFailure
     **/
    function RepeatUntilFailure(maxLoop, child) {
        if (maxLoop === void 0) { maxLoop = -1; }
        if (child === void 0) { child = null; }
        var _this = _super.call(this, child, 'RepeatUntilFailure', 'Repeat Until Failure', { maxLoop: -1 }) || this;
        _this.maxLoop = maxLoop;
        return _this;
    }
    /**
     * Open method.
     * @method open
     * @param {Tick} tick A tick instance.
     **/
    RepeatUntilFailure.prototype.open = function (tick) {
        tick.blackboard.set('i', 0, tick.tree.id, this.id);
    };
    /**
     * Tick method.
     * @method tick
     * @param {Tick} tick A tick instance.
     * @return {Constant} A state constant.
     **/
    RepeatUntilFailure.prototype.tick = function (tick) {
        if (!this.child) {
            return constants_1.ERROR;
        }
        var i = tick.blackboard.get('i', tick.tree.id, this.id);
        var status = constants_1.ERROR;
        while (this.maxLoop < 0 || i < this.maxLoop) {
            status = this.child._execute(tick);
            if (status == constants_1.SUCCESS) {
                i++;
            }
            else {
                break;
            }
        }
        i = tick.blackboard.set('i', i, tick.tree.id, this.id);
        return status;
    };
    return RepeatUntilFailure;
}(Decorator_1.default));
exports.default = RepeatUntilFailure;
;
},{"../constants":13,"../core/Decorator":20}],26:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Decorator_1 = require("../core/Decorator");
var constants_1 = require("../constants");
/**
 * RepeatUntilSuccess is a decorator that repeats the tick signal until the
 * node child returns `SUCCESS`, `RUNNING` or `ERROR`. Optionally, a maximum
 * number of repetitions can be defined.
 *
 * @module b3
 * @class RepeatUntilSuccess
 * @extends Decorator
 **/
var RepeatUntilSuccess = /** @class */ (function (_super) {
    __extends(RepeatUntilSuccess, _super);
    /**
     * Creates an instance of RepeatUntilSuccess.
     *
     * - **maxLoop** (*Integer*) Maximum number of repetitions. Default to -1 (infinite).
     * - **child** (*BaseNode*) The child node.
     *
     * @param {Object} params Object with parameters.
     * @param {Number} params.maxLoop Maximum number of repetitions. Default to -1 (infinite).
     * @param {BaseNode} params.child The child node.
     * @memberof RepeatUntilSuccess
     **/
    function RepeatUntilSuccess(maxLoop, child) {
        if (maxLoop === void 0) { maxLoop = -1; }
        if (child === void 0) { child = null; }
        var _this = _super.call(this, child, 'RepeatUntilSuccess', 'Repeat Until Success', { maxLoop: -1 }) || this;
        _this.maxLoop = maxLoop;
        return _this;
    }
    /**
     * Open method.
     * @method open
     * @param {Tick} tick A tick instance.
     **/
    RepeatUntilSuccess.prototype.open = function (tick) {
        tick.blackboard.set('i', 0, tick.tree.id, this.id);
    };
    /**
     * Tick method.
     * @method tick
     * @param {Tick} tick A tick instance.
     * @return {Constant} A state constant.
     **/
    RepeatUntilSuccess.prototype.tick = function (tick) {
        if (!this.child) {
            return constants_1.ERROR;
        }
        var i = tick.blackboard.get('i', tick.tree.id, this.id);
        var status = constants_1.ERROR;
        while (this.maxLoop < 0 || i < this.maxLoop) {
            status = this.child._execute(tick);
            if (status == constants_1.FAILURE) {
                i++;
            }
            else {
                break;
            }
        }
        i = tick.blackboard.set('i', i, tick.tree.id, this.id);
        return status;
    };
    return RepeatUntilSuccess;
}(Decorator_1.default));
exports.default = RepeatUntilSuccess;
;
},{"../constants":13,"../core/Decorator":20}],27:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Decorator_1 = require("../core/Decorator");
var constants_1 = require("../constants");
/**
 * Repeater is a decorator that repeats the tick signal until the child node
 * return `RUNNING` or `ERROR`. Optionally, a maximum number of repetitions
 * can be defined.
 *
 * @module b3
 * @class Repeater
 * @extends Decorator
 **/
var Repeater = /** @class */ (function (_super) {
    __extends(Repeater, _super);
    /**
     * Creates an instance of MaxTime.
     *
     * - **maxLoop** (*Integer*) Maximum number of repetitions. Default to -1 (infinite).
     * - **child** (*BaseNode*) The child node.
     *
     * @param {Object} params Object with parameters.
     * @param {Number} params.maxLoop Maximum number of repetitions. Default to -1 (infinite).
     * @param {BaseNode} params.child The child node.
     * @memberof Repeater
     **/
    function Repeater(maxLoop, child) {
        if (maxLoop === void 0) { maxLoop = -1; }
        if (child === void 0) { child = null; }
        var _this = _super.call(this, child, 'Repeater', 'Repeat <maxLoop>x', { maxLoop: -1 }) || this;
        _this.maxLoop = maxLoop;
        return _this;
    }
    /**
     * Open method.
     * @method open
     * @param {Tick} tick A tick instance.
     **/
    Repeater.prototype.open = function (tick) {
        tick.blackboard.set('i', 0, tick.tree.id, this.id);
    };
    /**
     * Tick method.
     * @method tick
     * @param {Tick} tick A tick instance.
     **/
    Repeater.prototype.tick = function (tick) {
        if (!this.child) {
            return constants_1.ERROR;
        }
        var i = tick.blackboard.get('i', tick.tree.id, this.id);
        var status = constants_1.SUCCESS;
        while (this.maxLoop < 0 || i < this.maxLoop) {
            status = this.child._execute(tick);
            if (status == constants_1.SUCCESS || status == constants_1.FAILURE) {
                i++;
            }
            else {
                break;
            }
        }
        tick.blackboard.set('i', i, tick.tree.id, this.id);
        return status;
    };
    return Repeater;
}(Decorator_1.default));
exports.default = Repeater;
;
},{"../constants":13,"../core/Decorator":20}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Inverter_1 = require("./Inverter");
exports.Inverter = Inverter_1.default;
var Limiter_1 = require("./Limiter");
exports.Limiter = Limiter_1.default;
var MaxTime_1 = require("./MaxTime");
exports.MaxTime = MaxTime_1.default;
var RepeatUntilFailure_1 = require("./RepeatUntilFailure");
exports.RepeatUntilFailure = RepeatUntilFailure_1.default;
var RepeatUntilSuccess_1 = require("./RepeatUntilSuccess");
exports.RepeatUntilSuccess = RepeatUntilSuccess_1.default;
var Repeater_1 = require("./Repeater");
exports.Repeater = Repeater_1.default;
},{"./Inverter":22,"./Limiter":23,"./MaxTime":24,"./RepeatUntilFailure":25,"./RepeatUntilSuccess":26,"./Repeater":27}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
exports.VERSION = constants_1.VERSION;
exports.SUCCESS = constants_1.SUCCESS;
exports.FAILURE = constants_1.FAILURE;
exports.RUNNING = constants_1.RUNNING;
exports.ERROR = constants_1.ERROR;
exports.COMPOSITE = constants_1.COMPOSITE;
exports.DECORATOR = constants_1.DECORATOR;
exports.ACTION = constants_1.ACTION;
exports.CONDITION = constants_1.CONDITION;
var b3_functions_1 = require("./b3.functions");
exports.createUUID = b3_functions_1.createUUID;
var Error_1 = require("./actions/Error");
exports.Error = Error_1.default;
var Failer_1 = require("./actions/Failer");
exports.Failer = Failer_1.default;
var Runner_1 = require("./actions/Runner");
exports.Runner = Runner_1.default;
var Succeeder_1 = require("./actions/Succeeder");
exports.Succeeder = Succeeder_1.default;
var Wait_1 = require("./actions/Wait");
exports.Wait = Wait_1.default;
var MemPriority_1 = require("./composites/MemPriority");
exports.MemPriority = MemPriority_1.default;
var MemSequence_1 = require("./composites/MemSequence");
exports.MemSequence = MemSequence_1.default;
var Priority_1 = require("./composites/Priority");
exports.Priority = Priority_1.default;
var Sequence_1 = require("./composites/Sequence");
exports.Sequence = Sequence_1.default;
var Action_1 = require("./core/Action");
exports.Action = Action_1.default;
var BaseNode_1 = require("./core/BaseNode");
exports.BaseNode = BaseNode_1.default;
var BehaviorTree_1 = require("./core/BehaviorTree");
exports.BehaviorTree = BehaviorTree_1.default;
var Blackboard_1 = require("./core/Blackboard");
exports.Blackboard = Blackboard_1.default;
var Composite_1 = require("./core/Composite");
exports.Composite = Composite_1.default;
var Condition_1 = require("./core/Condition");
exports.Condition = Condition_1.default;
var Decorator_1 = require("./core/Decorator");
exports.Decorator = Decorator_1.default;
var Tick_1 = require("./core/Tick");
exports.Tick = Tick_1.default;
var Inverter_1 = require("./decorators/Inverter");
exports.Inverter = Inverter_1.default;
var Limiter_1 = require("./decorators/Limiter");
exports.Limiter = Limiter_1.default;
var MaxTime_1 = require("./decorators/MaxTime");
exports.MaxTime = MaxTime_1.default;
var RepeatUntilFailure_1 = require("./decorators/RepeatUntilFailure");
exports.RepeatUntilFailure = RepeatUntilFailure_1.default;
var RepeatUntilSuccess_1 = require("./decorators/RepeatUntilSuccess");
exports.RepeatUntilSuccess = RepeatUntilSuccess_1.default;
var Repeater_1 = require("./decorators/Repeater");
exports.Repeater = Repeater_1.default;
},{"./actions/Error":1,"./actions/Failer":2,"./actions/Runner":3,"./actions/Succeeder":4,"./actions/Wait":5,"./b3.functions":7,"./composites/MemPriority":8,"./composites/MemSequence":9,"./composites/Priority":10,"./composites/Sequence":11,"./constants":13,"./core/Action":14,"./core/BaseNode":15,"./core/BehaviorTree":16,"./core/Blackboard":17,"./core/Composite":18,"./core/Condition":19,"./core/Decorator":20,"./core/Tick":21,"./decorators/Inverter":22,"./decorators/Limiter":23,"./decorators/MaxTime":24,"./decorators/RepeatUntilFailure":25,"./decorators/RepeatUntilSuccess":26,"./decorators/Repeater":27}]},{},[29])(29)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYWN0aW9ucy9FcnJvci50cyIsInNyYy9hY3Rpb25zL0ZhaWxlci50cyIsInNyYy9hY3Rpb25zL1J1bm5lci50cyIsInNyYy9hY3Rpb25zL1N1Y2NlZWRlci50cyIsInNyYy9hY3Rpb25zL1dhaXQudHMiLCJzcmMvYWN0aW9ucy9pbmRleC50cyIsInNyYy9iMy5mdW5jdGlvbnMudHMiLCJzcmMvY29tcG9zaXRlcy9NZW1Qcmlvcml0eS50cyIsInNyYy9jb21wb3NpdGVzL01lbVNlcXVlbmNlLnRzIiwic3JjL2NvbXBvc2l0ZXMvUHJpb3JpdHkudHMiLCJzcmMvY29tcG9zaXRlcy9TZXF1ZW5jZS50cyIsInNyYy9jb21wb3NpdGVzL2luZGV4LnRzIiwic3JjL2NvbnN0YW50cy50cyIsInNyYy9jb3JlL0FjdGlvbi50cyIsInNyYy9jb3JlL0Jhc2VOb2RlLnRzIiwic3JjL2NvcmUvQmVoYXZpb3JUcmVlLnRzIiwic3JjL2NvcmUvQmxhY2tib2FyZC50cyIsInNyYy9jb3JlL0NvbXBvc2l0ZS50cyIsInNyYy9jb3JlL0NvbmRpdGlvbi50cyIsInNyYy9jb3JlL0RlY29yYXRvci50cyIsInNyYy9jb3JlL1RpY2sudHMiLCJzcmMvZGVjb3JhdG9ycy9JbnZlcnRlci50cyIsInNyYy9kZWNvcmF0b3JzL0xpbWl0ZXIudHMiLCJzcmMvZGVjb3JhdG9ycy9NYXhUaW1lLnRzIiwic3JjL2RlY29yYXRvcnMvUmVwZWF0VW50aWxGYWlsdXJlLnRzIiwic3JjL2RlY29yYXRvcnMvUmVwZWF0VW50aWxTdWNjZXNzLnRzIiwic3JjL2RlY29yYXRvcnMvUmVwZWF0ZXIudHMiLCJzcmMvZGVjb3JhdG9ycy9pbmRleC50cyIsInNyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBLDBDQUFxQztBQUNyQyx5Q0FBb0M7QUFHcEM7Ozs7OztJQU1JO0FB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O0FBdUNsQyxpQkF2Q0csZ0JBQU0sQ0F1Q0g7QUF0Q1YsaURBQTRDO0FBdUN4QyxvQkF2Q0csbUJBQVMsQ0F1Q0g7QUF0Q2IsdUNBQWtDO0FBdUM5QixlQXZDRyxjQUFJLENBdUNIO0FBckNSLHdEQUFtRDtBQXNDL0Msc0JBdENHLHFCQUFXLENBc0NIO0FBckNmLHdEQUFtRDtBQXNDL0Msc0JBdENHLHFCQUFXLENBc0NIO0FBckNmLGtEQUE2QztBQXNDekMsbUJBdENHLGtCQUFRLENBc0NIO0FBckNaLGtEQUE2QztBQXNDekMsbUJBdENHLGtCQUFRLENBc0NIO0FBcENaLHdDQUFtQztBQXFDL0IsaUJBckNHLGdCQUFNLENBcUNIO0FBcENWLDRDQUF1QztBQXFDbkMsbUJBckNHLGtCQUFRLENBcUNIO0FBcENaLG9EQUErQztBQXFDM0MsdUJBckNHLHNCQUFZLENBcUNIO0FBcENoQixnREFBMkM7QUFxQ3ZDLHFCQXJDRyxvQkFBVSxDQXFDSDtBQXBDZCw4Q0FBeUM7QUFxQ3JDLG9CQXJDRyxtQkFBUyxDQXFDSDtBQXBDYiw4Q0FBeUM7QUFxQ3JDLG9CQXJDRyxtQkFBUyxDQXFDSDtBQXBDYiw4Q0FBeUM7QUFxQ3JDLG9CQXJDRyxtQkFBUyxDQXFDSDtBQXBDYixvQ0FBK0I7QUFxQzNCLGVBckNHLGNBQUksQ0FxQ0g7QUFuQ1Isa0RBQTZDO0FBb0N6QyxtQkFwQ0csa0JBQVEsQ0FvQ0g7QUFuQ1osZ0RBQTJDO0FBb0N2QyxrQkFwQ0csaUJBQU8sQ0FvQ0g7QUFuQ1gsZ0RBQTJDO0FBb0N2QyxrQkFwQ0csaUJBQU8sQ0FvQ0g7QUFuQ1gsc0VBQWlFO0FBb0M3RCw2QkFwQ0csNEJBQWtCLENBb0NIO0FBbkN0QixzRUFBaUU7QUFvQzdELDZCQXBDRyw0QkFBa0IsQ0FvQ0g7QUFuQ3RCLGtEQUE2QztBQW9DekMsbUJBcENHLGtCQUFRLENBb0NIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCB7IEVSUk9SIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IEFjdGlvbiBmcm9tICcuLi9jb3JlL0FjdGlvbic7XHJcbmltcG9ydCBUaWNrIGZyb20gJy4uL2NvcmUvVGljayc7XHJcblxyXG4vKipcclxuICogVGhpcyBhY3Rpb24gbm9kZSByZXR1cm5zIGBFUlJPUmAgYWx3YXlzLlxyXG4gKlxyXG4gKiBAbW9kdWxlIGIzXHJcbiAqIEBjbGFzcyBFcnJvclxyXG4gKiBAZXh0ZW5kcyBBY3Rpb25cclxuICoqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvciBleHRlbmRzIEFjdGlvblxyXG57XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEVycm9yLlxyXG4gICAgICogQG1lbWJlcm9mIEVycm9yXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICBzdXBlcignRXJyb3InKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRpY2sgbWV0aG9kLlxyXG4gICAgICogQG1ldGhvZCB0aWNrXHJcbiAgICAgKiBAcGFyYW0ge2IzLlRpY2t9IHRpY2sgQSB0aWNrIGluc3RhbmNlLlxyXG4gICAgICogQHJldHVybiB7Q29uc3RhbnR9IEFsd2F5cyByZXR1cm4gYEVSUk9SYC5cclxuICAgICAqKi9cclxuICAgIHRpY2sodGljazogVGljaylcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gRVJST1I7XHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCBBY3Rpb24gZnJvbSAnLi4vY29yZS9BY3Rpb24nO1xyXG5pbXBvcnQgeyBGQUlMVVJFIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IFRpY2sgZnJvbSAnLi4vY29yZS9UaWNrJztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGFjdGlvbiBub2RlIHJldHVybnMgYEZBSUxVUkVgIGFsd2F5cy5cclxuICpcclxuICogQG1vZHVsZSBiM1xyXG4gKiBAY2xhc3MgRmFpbGVyXHJcbiAqIEBleHRlbmRzIEFjdGlvblxyXG4gKiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhaWxlciBleHRlbmRzIEFjdGlvblxyXG57XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEZhaWxlci5cclxuICAgICAqIEBtZW1iZXJvZiBGYWlsZXJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKCdGYWlsZXInKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRpY2sgbWV0aG9kLlxyXG4gICAgICogQG1ldGhvZCB0aWNrXHJcbiAgICAgKiBAcGFyYW0ge2IzLlRpY2t9IHRpY2sgQSB0aWNrIGluc3RhbmNlLlxyXG4gICAgICogQHJldHVybiB7Q29uc3RhbnR9IEFsd2F5cyByZXR1cm4gYEZBSUxVUkVgLlxyXG4gICAgICoqL1xyXG4gICAgdGljayh0aWNrOiBUaWNrKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBGQUlMVVJFO1xyXG4gICAgfVxyXG59O1xyXG4iLCJpbXBvcnQgQWN0aW9uIGZyb20gJy4uL2NvcmUvQWN0aW9uJztcclxuaW1wb3J0IHsgUlVOTklORyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCBUaWNrIGZyb20gJy4uL2NvcmUvVGljayc7XHJcblxyXG4vKipcclxuICogVGhpcyBhY3Rpb24gbm9kZSByZXR1cm5zIFJVTk5JTkcgYWx3YXlzLlxyXG4gKlxyXG4gKiBAbW9kdWxlIGIzXHJcbiAqIEBjbGFzcyBSdW5uZXJcclxuICogQGV4dGVuZHMgQWN0aW9uXHJcbiAqKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVubmVyIGV4dGVuZHMgQWN0aW9uXHJcbntcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgUnVubmVyLlxyXG4gICAgICogQG1lbWJlcm9mIFJ1bm5lclxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoJ1J1bm5lcicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGljayBtZXRob2QuXHJcbiAgICAgKiBAbWV0aG9kIHRpY2tcclxuICAgICAqIEBwYXJhbSB7YjMuVGlja30gdGljayBBIHRpY2sgaW5zdGFuY2UuXHJcbiAgICAgKiBAcmV0dXJuIHtDb25zdGFudH0gQWx3YXlzIHJldHVybiBgUlVOTklOR2AuXHJcbiAgICAgKiovXHJcbiAgICB0aWNrKHRpY2s6IFRpY2spXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFJVTk5JTkc7XHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCBBY3Rpb24gZnJvbSAnLi4vY29yZS9BY3Rpb24nO1xyXG5pbXBvcnQgeyBTVUNDRVNTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IFRpY2sgZnJvbSAnLi4vY29yZS9UaWNrJztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGFjdGlvbiBub2RlIHJldHVybnMgYFNVQ0NFU1NgIGFsd2F5cy5cclxuICpcclxuICogQG1vZHVsZSBiM1xyXG4gKiBAY2xhc3MgU3VjY2VlZGVyXHJcbiAqIEBleHRlbmRzIEFjdGlvblxyXG4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWNjZWVkZXIgZXh0ZW5kcyBBY3Rpb25cclxue1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBTdWNjZWVkZXIuXHJcbiAgICAgKiBAbWVtYmVyb2YgU3VjY2VlZGVyXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICBzdXBlcignU3VjY2VlZGVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaWNrIG1ldGhvZC5cclxuICAgICAqIEBtZXRob2QgdGlja1xyXG4gICAgICogQHBhcmFtIHtiMy5UaWNrfSB0aWNrIEEgdGljayBpbnN0YW5jZS5cclxuICAgICAqIEByZXR1cm4ge0NvbnN0YW50fSBBbHdheXMgcmV0dXJuIGBTVUNDRVNTYC5cclxuICAgICAqKi9cclxuICAgIHRpY2sodGljazogVGljaylcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gU1VDQ0VTUztcclxuICAgIH1cclxufTtcclxuIiwiaW1wb3J0IEFjdGlvbiBmcm9tICcuLi9jb3JlL0FjdGlvbic7XHJcbmltcG9ydCB7IFNVQ0NFU1MsIFJVTk5JTkcgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgVGljayBmcm9tICcuLi9jb3JlL1RpY2snO1xyXG5cclxuLyoqXHJcbiAqIFdhaXQgYSBmZXcgc2Vjb25kcy5cclxuICpcclxuICogQG1vZHVsZSBiM1xyXG4gKiBAY2xhc3MgV2FpdFxyXG4gKiBAZXh0ZW5kcyBBY3Rpb25cclxuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FpdCBleHRlbmRzIEFjdGlvblxyXG57XHJcblxyXG4gICAgZW5kVGltZTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFdhaXQuXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc2V0dGluZ3MgT2JqZWN0IHdpdGggcGFyYW1ldGVyc1xyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNldHRpbmdzLm1pbGxpc2Vjb25kcyBNYXhpbXVtIHRpbWUsIGluIG1pbGxpc2Vjb25kcywgYSBjaGlsZCBjYW4gZXhlY3V0ZS5cclxuICAgICAqIEBtZW1iZXJvZiBXYWl0XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1pbGxpc2Vjb25kcyA9IDApXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoXHJcbiAgICAgICAgICAgICdXYWl0JyxcclxuICAgICAgICAgICAgJ1dhaXQgPG1pbGxpc2Vjb25kcz5tcycsXHJcbiAgICAgICAgICAgIHsgbWlsbGlzZWNvbmRzOiAwIH0sXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbmRUaW1lID0gbWlsbGlzZWNvbmRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3BlbiBtZXRob2QuXHJcbiAgICAgKiBAbWV0aG9kIG9wZW5cclxuICAgICAqIEBwYXJhbSB7VGlja30gdGljayBBIHRpY2sgaW5zdGFuY2UuXHJcbiAgICAgKiovXHJcbiAgICBvcGVuKHRpY2s6IFRpY2spXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdGljay5ibGFja2JvYXJkLnNldCgnc3RhcnRUaW1lJywgc3RhcnRUaW1lLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGljayBtZXRob2QuXHJcbiAgICAgKiBAbWV0aG9kIHRpY2tcclxuICAgICAqIEBwYXJhbSB7VGlja30gdGljayBBIHRpY2sgaW5zdGFuY2UuXHJcbiAgICAgKiBAcmV0dXJuIHtDb25zdGFudH0gQSBzdGF0ZSBjb25zdGFudC5cclxuICAgICAqKi9cclxuICAgIHRpY2sodGljazogVGljaylcclxuICAgIHtcclxuICAgICAgICB2YXIgY3VyclRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHZhciBzdGFydFRpbWUgPSB0aWNrLmJsYWNrYm9hcmQuZ2V0KCdzdGFydFRpbWUnLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpO1xyXG5cclxuICAgICAgICBpZiAoY3VyclRpbWUgLSBzdGFydFRpbWUgPiB0aGlzLmVuZFRpbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gU1VDQ0VTUztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBSVU5OSU5HO1xyXG4gICAgfVxyXG59O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEVycm9yIH0gZnJvbSAnLi9FcnJvcic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRmFpbGVyIH0gZnJvbSAnLi9GYWlsZXInO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJ1bm5lciB9IGZyb20gJy4vUnVubmVyJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdWNjZWVkZXIgfSBmcm9tICcuL1N1Y2NlZWRlcic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgV2FpdCB9IGZyb20gJy4vV2FpdCc7XHJcbiIsIi8qKlxyXG4gKiBMaXN0IG9mIGludGVybmFsIGFuZCBoZWxwZXIgZnVuY3Rpb25zIGluIEJlaGF2aW9yM0pTLlxyXG4gKlxyXG4gKiBAbW9kdWxlIGZ1bmN0aW9uc1xyXG4qKi9cclxuXHJcbi8qKlxyXG4qIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdW5pcXVlIElEcyBmb3IgdHJlZXMgYW5kIG5vZGVzLlxyXG4qXHJcbiogKGNvbnN1bHQgaHR0cDovL3d3dy5pZXRmLm9yZy9yZmMvcmZjNDEyMi50eHQpLlxyXG4qXHJcbiogQGNsYXNzIGNyZWF0ZVVVSURcclxuKiBAY29uc3RydWN0b3JcclxuKiBAcmV0dXJuIHtTdHJpbmd9IEEgdW5pcXVlIElELlxyXG4qKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVVSUQoKVxyXG57XHJcbiAgICB2YXIgczogYW55W10gPSBbXTtcclxuICAgIHZhciBoZXhEaWdpdHMgPSBcIjAxMjM0NTY3ODlhYmNkZWZcIjtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzY7IGkrKylcclxuICAgIHtcclxuICAgICAgICBzW2ldID0gaGV4RGlnaXRzLnN1YnN0cihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAweDEwKSwgMSk7XHJcbiAgICB9XHJcbiAgICAvLyBiaXRzIDEyLTE1IG9mIHRoZSB0aW1lX2hpX2FuZF92ZXJzaW9uIGZpZWxkIHRvIDAwMTBcclxuICAgIHNbMTRdID0gXCI0XCI7XHJcblxyXG4gICAgLy8gYml0cyA2LTcgb2YgdGhlIGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWQgdG8gMDFcclxuICAgIHNbMTldID0gaGV4RGlnaXRzLnN1YnN0cigoc1sxOV0gJiAweDMpIHwgMHg4LCAxKTtcclxuXHJcbiAgICBzWzhdID0gc1sxM10gPSBzWzE4XSA9IHNbMjNdID0gXCItXCI7XHJcblxyXG4gICAgdmFyIHV1aWQgPSBzLmpvaW4oXCJcIik7XHJcbiAgICByZXR1cm4gdXVpZDtcclxufVxyXG4iLCJpbXBvcnQgQ29tcG9zaXRlIGZyb20gJy4uL2NvcmUvQ29tcG9zaXRlJztcclxuaW1wb3J0IHsgRkFJTFVSRSwgUlVOTklORyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCBCYXNlTm9kZSBmcm9tICcuLi9jb3JlL0Jhc2VOb2RlJztcclxuaW1wb3J0IFRpY2sgZnJvbSAnLi4vY29yZS9UaWNrJztcclxuXHJcbi8qKlxyXG4gKiBNZW1Qcmlvcml0eSBpcyBzaW1pbGFyIHRvIFByaW9yaXR5IG5vZGUsIGJ1dCB3aGVuIGEgY2hpbGQgcmV0dXJucyBhXHJcbiAqIGBSVU5OSU5HYCBzdGF0ZSwgaXRzIGluZGV4IGlzIHJlY29yZGVkIGFuZCBpbiB0aGUgbmV4dCB0aWNrIHRoZSxcclxuICogTWVtUHJpb3JpdHkgY2FsbHMgdGhlIGNoaWxkIHJlY29yZGVkIGRpcmVjdGx5LCB3aXRob3V0IGNhbGxpbmcgcHJldmlvdXNcclxuICogY2hpbGRyZW4gYWdhaW4uXHJcbiAqXHJcbiAqIEBtb2R1bGUgYjNcclxuICogQGNsYXNzIE1lbVByaW9yaXR5XHJcbiAqIEBleHRlbmRzIENvbXBvc2l0ZVxyXG4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW1Qcmlvcml0eSBleHRlbmRzIENvbXBvc2l0ZVxyXG57XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIE1lbVByaW9yaXR5LlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcy5jaGlsZHJlbiBcclxuICAgICAqIEBtZW1iZXJvZiBNZW1Qcmlvcml0eVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihjaGlsZHJlbiA9IG5ldyBBcnJheTxCYXNlTm9kZT4oKSlcclxuICAgIHtcclxuICAgICAgICBzdXBlcihcclxuICAgICAgICAgICAgY2hpbGRyZW4sXHJcbiAgICAgICAgICAgICdNZW1Qcmlvcml0eScsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9wZW4gbWV0aG9kLlxyXG4gICAgICogQG1ldGhvZCBvcGVuXHJcbiAgICAgKiBAcGFyYW0ge2IzLlRpY2t9IHRpY2sgQSB0aWNrIGluc3RhbmNlLlxyXG4gICAgICoqL1xyXG4gICAgb3Blbih0aWNrOiBUaWNrKVxyXG4gICAge1xyXG4gICAgICAgIHRpY2suYmxhY2tib2FyZC5zZXQoJ3J1bm5pbmdDaGlsZCcsIDAsIHRpY2sudHJlZS5pZCwgdGhpcy5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaWNrIG1ldGhvZC5cclxuICAgICAqIEBtZXRob2QgdGlja1xyXG4gICAgICogQHBhcmFtIHtiMy5UaWNrfSB0aWNrIEEgdGljayBpbnN0YW5jZS5cclxuICAgICAqIEByZXR1cm4ge0NvbnN0YW50fSBBIHN0YXRlIGNvbnN0YW50LlxyXG4gICAgICoqL1xyXG4gICAgdGljayh0aWNrOiBUaWNrKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBjaGlsZCA9IHRpY2suYmxhY2tib2FyZC5nZXQoJ3J1bm5pbmdDaGlsZCcsIHRpY2sudHJlZS5pZCwgdGhpcy5pZCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGNoaWxkOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSB0aGlzLmNoaWxkcmVuW2ldLl9leGVjdXRlKHRpY2spO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXR1cyAhPT0gRkFJTFVSRSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gUlVOTklORylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aWNrLmJsYWNrYm9hcmQuc2V0KCdydW5uaW5nQ2hpbGQnLCBpLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBGQUlMVVJFO1xyXG4gICAgfVxyXG59O1xyXG4iLCJpbXBvcnQgQ29tcG9zaXRlIGZyb20gJy4uL2NvcmUvQ29tcG9zaXRlJztcclxuaW1wb3J0IHsgU1VDQ0VTUywgUlVOTklORyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCBCYXNlTm9kZSBmcm9tICcuLi9jb3JlL0Jhc2VOb2RlJztcclxuaW1wb3J0IFRpY2sgZnJvbSAnLi4vY29yZS9UaWNrJztcclxuXHJcbi8qKlxyXG4gKiBNZW1TZXF1ZW5jZSBpcyBzaW1pbGFyIHRvIFNlcXVlbmNlIG5vZGUsIGJ1dCB3aGVuIGEgY2hpbGQgcmV0dXJucyBhXHJcbiAqIGBSVU5OSU5HYCBzdGF0ZSwgaXRzIGluZGV4IGlzIHJlY29yZGVkIGFuZCBpbiB0aGUgbmV4dCB0aWNrIHRoZVxyXG4gKiBNZW1Qcmlvcml0eSBjYWxsIHRoZSBjaGlsZCByZWNvcmRlZCBkaXJlY3RseSwgd2l0aG91dCBjYWxsaW5nIHByZXZpb3VzXHJcbiAqIGNoaWxkcmVuIGFnYWluLlxyXG4gKlxyXG4gKiBAbW9kdWxlIGIzXHJcbiAqIEBjbGFzcyBNZW1TZXF1ZW5jZVxyXG4gKiBAZXh0ZW5kcyBDb21wb3NpdGVcclxuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVtU2VxdWVuY2UgZXh0ZW5kcyBDb21wb3NpdGVcclxue1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBNZW1TZXF1ZW5jZS5cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwYXJhbXMuY2hpbGRyZW4gXHJcbiAgICAgKiBAbWVtYmVyb2YgTWVtU2VxdWVuY2VcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY2hpbGRyZW4gPSBuZXcgQXJyYXk8QmFzZU5vZGU+KCkpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoXHJcbiAgICAgICAgICAgIGNoaWxkcmVuLFxyXG4gICAgICAgICAgICAnTWVtU2VxdWVuY2UnXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9wZW4gbWV0aG9kLlxyXG4gICAgICogQG1ldGhvZCBvcGVuXHJcbiAgICAgKiBAcGFyYW0ge2IzLlRpY2t9IHRpY2sgQSB0aWNrIGluc3RhbmNlLlxyXG4gICAgICoqL1xyXG4gICAgb3Blbih0aWNrOiBUaWNrKVxyXG4gICAge1xyXG4gICAgICAgIHRpY2suYmxhY2tib2FyZC5zZXQoJ3J1bm5pbmdDaGlsZCcsIDAsIHRpY2sudHJlZS5pZCwgdGhpcy5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaWNrIG1ldGhvZC5cclxuICAgICAqIEBtZXRob2QgdGlja1xyXG4gICAgICogQHBhcmFtIHtiMy5UaWNrfSB0aWNrIEEgdGljayBpbnN0YW5jZS5cclxuICAgICAqIEByZXR1cm4ge0NvbnN0YW50fSBBIHN0YXRlIGNvbnN0YW50LlxyXG4gICAgICoqL1xyXG4gICAgdGljayh0aWNrOiBUaWNrKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBjaGlsZCA9IHRpY2suYmxhY2tib2FyZC5nZXQoJ3J1bm5pbmdDaGlsZCcsIHRpY2sudHJlZS5pZCwgdGhpcy5pZCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGNoaWxkOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSB0aGlzLmNoaWxkcmVuW2ldLl9leGVjdXRlKHRpY2spO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXR1cyAhPT0gU1VDQ0VTUylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gUlVOTklORylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aWNrLmJsYWNrYm9hcmQuc2V0KCdydW5uaW5nQ2hpbGQnLCBpLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFNVQ0NFU1M7XHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCBDb21wb3NpdGUgZnJvbSAnLi4vY29yZS9Db21wb3NpdGUnO1xyXG5pbXBvcnQgeyBGQUlMVVJFIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IFRpY2sgZnJvbSAnLi4vY29yZS9UaWNrJztcclxuaW1wb3J0IEJhc2VOb2RlIGZyb20gJy4uL2NvcmUvQmFzZU5vZGUnO1xyXG5cclxuLyoqXHJcbiAqIFByaW9yaXR5IHRpY2tzIGl0cyBjaGlsZHJlbiBzZXF1ZW50aWFsbHkgdW50aWwgb25lIG9mIHRoZW0gcmV0dXJuc1xyXG4gKiBgU1VDQ0VTU2AsIGBSVU5OSU5HYCBvciBgRVJST1JgLiBJZiBhbGwgY2hpbGRyZW4gcmV0dXJuIHRoZSBmYWlsdXJlIHN0YXRlLFxyXG4gKiB0aGUgcHJpb3JpdHkgYWxzbyByZXR1cm5zIGBGQUlMVVJFYC5cclxuICpcclxuICogQG1vZHVsZSBiM1xyXG4gKiBAY2xhc3MgUHJpb3JpdHlcclxuICogQGV4dGVuZHMgQ29tcG9zaXRlXHJcbiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaW9yaXR5IGV4dGVuZHMgQ29tcG9zaXRlXHJcbntcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgUHJpb3JpdHkuXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIFxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gcGFyYW1zLmNoaWxkcmVuIFxyXG4gICAgICogQG1lbWJlcm9mIFByaW9yaXR5XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNoaWxkcmVuID0gbmV3IEFycmF5PEJhc2VOb2RlPigpKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKFxyXG4gICAgICAgICAgICBjaGlsZHJlbixcclxuICAgICAgICAgICAgJ1ByaW9yaXR5J1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaWNrIG1ldGhvZC5cclxuICAgICAqIEBtZXRob2QgdGlja1xyXG4gICAgICogQHBhcmFtIHtUaWNrfSB0aWNrIEEgdGljayBpbnN0YW5jZS5cclxuICAgICAqIEByZXR1cm4ge0NvbnN0YW50fSBBIHN0YXRlIGNvbnN0YW50LlxyXG4gICAgICoqL1xyXG4gICAgdGljayh0aWNrOiBUaWNrKVxyXG4gICAge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSB0aGlzLmNoaWxkcmVuW2ldLl9leGVjdXRlKHRpY2spO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXR1cyAhPT0gRkFJTFVSRSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIEZBSUxVUkU7XHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCBDb21wb3NpdGUgZnJvbSAnLi4vY29yZS9Db21wb3NpdGUnO1xyXG5pbXBvcnQgeyBTVUNDRVNTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IFRpY2sgZnJvbSAnLi4vY29yZS9UaWNrJztcclxuaW1wb3J0IEJhc2VOb2RlIGZyb20gJy4uL2NvcmUvQmFzZU5vZGUnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBTZXF1ZW5jZSBub2RlIHRpY2tzIGl0cyBjaGlsZHJlbiBzZXF1ZW50aWFsbHkgdW50aWwgb25lIG9mIHRoZW1cclxuICogcmV0dXJucyBgRkFJTFVSRWAsIGBSVU5OSU5HYCBvciBgRVJST1JgLiBJZiBhbGwgY2hpbGRyZW4gcmV0dXJuIHRoZVxyXG4gKiBzdWNjZXNzIHN0YXRlLCB0aGUgc2VxdWVuY2UgYWxzbyByZXR1cm5zIGBTVUNDRVNTYC5cclxuICpcclxuICogQG1vZHVsZSBiM1xyXG4gKiBAY2xhc3MgU2VxdWVuY2VcclxuICogQGV4dGVuZHMgQ29tcG9zaXRlXHJcbiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlcXVlbmNlIGV4dGVuZHMgQ29tcG9zaXRlXHJcbntcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgU2VxdWVuY2UuXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIFxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gcGFyYW1zLmNoaWxkcmVuIFxyXG4gICAgICogQG1lbWJlcm9mIFNlcXVlbmNlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNoaWxkcmVuID0gbmV3IEFycmF5PEJhc2VOb2RlPigpKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNoaWxkcmVuLFxyXG4gICAgICAgICAgICAnU2VxdWVuY2UnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRpY2sgbWV0aG9kLlxyXG4gICAgICogQG1ldGhvZCB0aWNrXHJcbiAgICAgKiBAcGFyYW0ge2IzLlRpY2t9IHRpY2sgQSB0aWNrIGluc3RhbmNlLlxyXG4gICAgICogQHJldHVybiB7Q29uc3RhbnR9IEEgc3RhdGUgY29uc3RhbnQuXHJcbiAgICAgKiovXHJcbiAgICB0aWNrKHRpY2s6IFRpY2spXHJcbiAgICB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHN0YXR1cyA9IHRoaXMuY2hpbGRyZW5baV0uX2V4ZWN1dGUodGljayk7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RhdHVzICE9PSBTVUNDRVNTKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdHVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gU1VDQ0VTUztcclxuICAgIH1cclxufTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBNZW1Qcmlvcml0eSB9IGZyb20gJy4vTWVtUHJpb3JpdHknO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1lbVNlcXVlbmNlIH0gZnJvbSAnLi9NZW1TZXF1ZW5jZSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJpb3JpdHkgfSBmcm9tICcuL1ByaW9yaXR5JztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXF1ZW5jZSB9IGZyb20gJy4vU2VxdWVuY2UnO1xyXG4iLCJleHBvcnQgY29uc3QgVkVSU0lPTiA9ICcwLjIuMyc7XHJcblxyXG5leHBvcnQgZW51bSBTVEFURVxyXG57XHJcbiAgICBOT05FID0gMCxcclxuICAgIFNVQ0NFU1MgPSAxLFxyXG4gICAgRkFJTFVSRSA9IDIsXHJcbiAgICBSVU5OSU5HID0gMyxcclxuICAgIEVSUk9SID0gNCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNVQ0NFU1MgPSBTVEFURS5TVUNDRVNTO1xyXG5leHBvcnQgY29uc3QgRkFJTFVSRSA9IFNUQVRFLkZBSUxVUkU7XHJcbmV4cG9ydCBjb25zdCBSVU5OSU5HID0gU1RBVEUuUlVOTklORztcclxuZXhwb3J0IGNvbnN0IEVSUk9SID0gU1RBVEUuRVJST1I7XHJcblxyXG5leHBvcnQgZW51bSBDYXRlZ29yeVxyXG57XHJcbiAgICBDT01QT1NJVEUgPSAnY29tcG9zaXRlJyxcclxuICAgIERFQ09SQVRPUiA9ICdkZWNvcmF0b3InLFxyXG4gICAgQUNUSU9OID0gJ2FjdGlvbicsXHJcbiAgICBDT05ESVRJT04gPSAnY29uZGl0aW9uJyxcclxuICAgIE5PTkUgPSAnJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENPTVBPU0lURSA9IENhdGVnb3J5LkNPTVBPU0lURTtcclxuZXhwb3J0IGNvbnN0IERFQ09SQVRPUiA9IENhdGVnb3J5LkRFQ09SQVRPUjtcclxuZXhwb3J0IGNvbnN0IEFDVElPTiA9IENhdGVnb3J5LkFDVElPTjtcclxuZXhwb3J0IGNvbnN0IENPTkRJVElPTiA9IENhdGVnb3J5LkNPTkRJVElPTjtcclxuIiwiaW1wb3J0IEJhc2VOb2RlLCB7IElQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29yZS9CYXNlTm9kZSc7XHJcbmltcG9ydCB7IEFDVElPTiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcblxyXG4vKipcclxuICogQWN0aW9uIGlzIHRoZSBiYXNlIGNsYXNzIGZvciBhbGwgYWN0aW9uIG5vZGVzLiBUaHVzLCBpZiB5b3Ugd2FudCB0byBjcmVhdGVcclxuICogbmV3IGN1c3RvbSBhY3Rpb24gbm9kZXMsIHlvdSBuZWVkIHRvIGluaGVyaXQgZnJvbSB0aGlzIGNsYXNzLiBGb3IgZXhhbXBsZSxcclxuICogdGFrZSBhIGxvb2sgYXQgdGhlIFJ1bm5lciBhY3Rpb246XHJcbiAqXHJcbiAqICAgICBjbGFzcyBSdW5uZXIgZXh0ZW5kcyBiMy5BY3Rpb24ge1xyXG4gKiAgICAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gKiAgICAgICAgIHN1cGVyKHtuYW1lOiAnUnVubmVyJ30pO1xyXG4gKiAgICAgICB9XHJcbiAqICAgICAgIHRpY2sodGljayA6IFRpY2spIHtcclxuICogICAgICAgICByZXR1cm4gYjMuUlVOTklORztcclxuICogICAgICAgfVxyXG4gKiAgICAgfTtcclxuICpcclxuICogQG1vZHVsZSBiM1xyXG4gKiBAY2xhc3MgQWN0aW9uXHJcbiAqIEBleHRlbmRzIEJhc2VOb2RlXHJcbiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbiBleHRlbmRzIEJhc2VOb2RlXHJcbntcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQWN0aW9uLlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5uYW1lIE5vZGUgbmFtZS4gRGVmYXVsdCB0byBgQWN0aW9uYC5cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLnRpdGxlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5wcm9wZXJ0aWVzIFxyXG4gICAgICogQG1lbWJlcm9mIEFjdGlvblxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lID0gJ0FjdGlvbicsIHRpdGxlID0gbmFtZSwgcHJvcGVydGllczogSVByb3BlcnRpZXMgPSB7fSlcclxuICAgIHtcclxuICAgICAgICBzdXBlcihcclxuICAgICAgICAgICAgQUNUSU9OLFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgJycsXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXNcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlVVVJRCB9IGZyb20gJy4uL2IzLmZ1bmN0aW9ucyc7XHJcbmltcG9ydCB7IFJVTk5JTkcsIENhdGVnb3J5LCBTVEFURSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCBUaWNrIGZyb20gJy4vVGljayc7XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgSVByb3BlcnRpZXMgPSB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBCYXNlTm9kZSBjbGFzcyBpcyB1c2VkIGFzIHN1cGVyIGNsYXNzIHRvIGFsbCBub2RlcyBpbiBCZWhhdmlvckpTLiBJdFxyXG4gKiBjb21wcmlzZXMgYWxsIGNvbW1vbiB2YXJpYWJsZXMgYW5kIG1ldGhvZHMgdGhhdCBhIG5vZGUgbXVzdCBoYXZlIHRvXHJcbiAqIGV4ZWN1dGUuXHJcbiAqXHJcbiAqICoqSU1QT1JUQU5UOioqIERvIG5vdCBpbmhlcml0IGZyb20gdGhpcyBjbGFzcywgdXNlIGBDb21wb3NpdGVgLFxyXG4gKiBgRGVjb3JhdG9yYCwgYEFjdGlvbmAgb3IgYENvbmRpdGlvbmAsIGluc3RlYWQuXHJcbiAqXHJcbiAqIFRoZSBhdHRyaWJ1dGVzIGFyZSBzcGVjaWFsbHkgZGVzaWduZWQgdG8gc2VyaWFsaXphdGlvbiBvZiB0aGUgbm9kZSBpbiBhXHJcbiAqIEpTT04gZm9ybWF0LiBJbiBzcGVjaWFsLCB0aGUgYHBhcmFtZXRlcnNgIGF0dHJpYnV0ZSBjYW4gYmUgc2V0IGludG8gdGhlXHJcbiAqIHZpc3VhbCBlZGl0b3IgKHRodXMsIGluIHRoZSBKU09OIGZpbGUpLCBhbmQgaXQgd2lsbCBiZSB1c2VkIGFzIHBhcmFtZXRlclxyXG4gKiBvbiB0aGUgbm9kZSBpbml0aWFsaXphdGlvbiBhdCBgQmVoYXZpb3JUcmVlLmxvYWRgLlxyXG4gKlxyXG4gKiBCYXNlTm9kZSBhbHNvIHByb3ZpZGUgNSBjYWxsYmFjayBtZXRob2RzLCB3aGljaCB0aGUgbm9kZSBpbXBsZW1lbnRhdGlvbnNcclxuICogY2FuIG92ZXJyaWRlLiBUaGV5IGFyZSBgZW50ZXJgLCBgb3BlbmAsIGB0aWNrYCwgYGNsb3NlYCBhbmQgYGV4aXRgLiBTZWVcclxuICogdGhlaXIgZG9jdW1lbnRhdGlvbiB0byBrbm93IG1vcmUuIFRoZXNlIGNhbGxiYWNrcyBhcmUgY2FsbGVkIGluc2lkZSB0aGVcclxuICogYF9leGVjdXRlYCBtZXRob2QsIHdoaWNoIGlzIGNhbGxlZCBpbiB0aGUgdHJlZSB0cmF2ZXJzYWwuXHJcbiAqXHJcbiAqIEBtb2R1bGUgYjNcclxuICogQGNsYXNzIEJhc2VOb2RlXHJcbiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VOb2RlXHJcbntcclxuXHJcbiAgICBpZCA9IGNyZWF0ZVVVSUQoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEEgZGljdGlvbmFyeSAoa2V5LCB2YWx1ZSkgZGVzY3JpYmluZyB0aGUgbm9kZSBwYXJhbWV0ZXJzLiBVc2VmdWwgZm9yXHJcbiAgICAgKiBkZWZpbmluZyBwYXJhbWV0ZXIgdmFsdWVzIGluIHRoZSB2aXN1YWwgZWRpdG9yLiBOb3RlOiB0aGlzIGlzIG9ubHlcclxuICAgICAqIHVzZWZ1bCBmb3Igbm9kZXMgd2hlbiBsb2FkaW5nIHRyZWVzIGZyb20gSlNPTiBmaWxlcy5cclxuICAgICAqXHJcbiAgICAgKiAqKkRlcHJlY2F0ZWQgc2luY2UgMC4yLjAuIFRoaXMgaXMgdG9vIHNpbWlsYXIgdG8gdGhlIHByb3BlcnRpZXNcclxuICAgICAqIGF0dHJpYnV0ZSwgdGh1cywgdGhpcyBhdHRyaWJ1dGUgaXMgZGVwcmVjYXRlZCBpbiBmYXZvciB0b1xyXG4gICAgICogYHByb3BlcnRpZXNgLioqXHJcbiAgICAgKlxyXG4gICAgICogQHByb3BlcnR5IHtPYmplY3R9IHBhcmFtZXRlcnNcclxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIDAuMi4wLlxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiovXHJcbiAgICBwYXJhbWV0ZXJzID0ge307XHJcblxyXG4gICAgY2hpbGQ6IEJhc2VOb2RlO1xyXG4gICAgY2hpbGRyZW46IEJhc2VOb2RlW107XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemF0aW9uIG1ldGhvZC5cclxuICAgICAqIEBtZXRob2QgaW5pdGlhbGl6ZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKiovXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBOb2RlIGNhdGVnb3J5LiBNdXN0IGJlIGBDT01QT1NJVEVgLCBgREVDT1JBVE9SYCwgYEFDVElPTmAgb3JcclxuICAgICAgICAgKiBgQ09ORElUSU9OYC4gVGhpcyBpcyBkZWZpbmVkIGF1dG9tYXRpY2FsbHkgYmUgaW5oZXJpdGluZyB0aGVcclxuICAgICAgICAgKiBjb3JyZXNwb25kZW50IGNsYXNzLlxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBtZW1iZXIgQmFzZU5vZGUjY2F0ZWdvcnlcclxuICAgICAgICAgKiovXHJcbiAgICAgICAgcHVibGljIGNhdGVnb3J5ID0gQ2F0ZWdvcnkuTk9ORSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTm9kZSBuYW1lLiBNdXN0IGJlIGEgdW5pcXVlIGlkZW50aWZpZXIsXHJcbiAgICAgICAgICogcHJlZmVyYWJsZSB0aGUgc2FtZSBuYW1lIG9mIHRoZVxyXG4gICAgICAgICAqIGNsYXNzLiBZb3UgaGF2ZSB0byBzZXQgdGhlIG5vZGUgbmFtZSBpbiB0aGUgcHJvdG90eXBlLlxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBtZW1iZXIgQmFzZU5vZGUjbmFtZVxyXG4gICAgICAgICAqKi9cclxuICAgICAgICBwdWJsaWMgbmFtZSA9ICcnLFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBOb2RlIHRpdGxlLlxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBvcHRpb25hbFxyXG4gICAgICAgICAqIEBtZW1iZXIgQmFzZU5vZGUjdGl0bGVcclxuICAgICAgICAgKiovXHJcbiAgICAgICAgcHVibGljIHRpdGxlID0gbmFtZSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTm9kZSBkZXNjcmlwdGlvbi5cclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAbWVtYmVyIEJhc2VOb2RlI2Rlc2NyaXB0aW9uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGRlc2NyaXB0aW9uID0gJycsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEEgZGljdGlvbmFyeSAoa2V5LCB2YWx1ZSkgZGVzY3JpYmluZyB0aGUgbm9kZSBwcm9wZXJ0aWVzLiBVc2VmdWwgZm9yXHJcbiAgICAgICAgICogZGVmaW5pbmcgY3VzdG9tIHZhcmlhYmxlcyBpbnNpZGUgdGhlIHZpc3VhbCBlZGl0b3IuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJvcGVydHkgcHJvcGVydGllc1xyXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XHJcbiAgICAgICAgICogQHJlYWRvbmx5XHJcbiAgICAgICAgICoqL1xyXG4gICAgICAgIHB1YmxpYyBwcm9wZXJ0aWVzOiBJUHJvcGVydGllcyA9IHt9KVxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBpcyB0aGUgbWFpbiBtZXRob2QgdG8gcHJvcGFnYXRlIHRoZSB0aWNrIHNpZ25hbCB0byB0aGlzIG5vZGUuIFRoaXNcclxuICAgICAqIG1ldGhvZCBjYWxscyBhbGwgY2FsbGJhY2tzOiBgZW50ZXJgLCBgb3BlbmAsIGB0aWNrYCwgYGNsb3NlYCwgYW5kXHJcbiAgICAgKiBgZXhpdGAuIEl0IG9ubHkgb3BlbnMgYSBub2RlIGlmIGl0IGlzIG5vdCBhbHJlYWR5IG9wZW4uIEluIHRoZSBzYW1lXHJcbiAgICAgKiB3YXksIHRoaXMgbWV0aG9kIG9ubHkgY2xvc2UgYSBub2RlIGlmIHRoZSBub2RlICByZXR1cm5lZCBhIHN0YXR1c1xyXG4gICAgICogZGlmZmVyZW50IG9mIGBSVU5OSU5HYC5cclxuICAgICAqXHJcbiAgICAgKiBAbWV0aG9kIF9leGVjdXRlXHJcbiAgICAgKiBAcGFyYW0ge1RpY2t9IHRpY2sgQSB0aWNrIGluc3RhbmNlLlxyXG4gICAgICogQHJldHVybiB7Q29uc3RhbnR9IFRoZSB0aWNrIHN0YXRlLlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICoqL1xyXG4gICAgX2V4ZWN1dGUodGljazogVGljaylcclxuICAgIHtcclxuICAgICAgICAvLyBFTlRFUlxyXG4gICAgICAgIHRoaXMuX2VudGVyKHRpY2spO1xyXG5cclxuICAgICAgICAvLyBPUEVOXHJcbiAgICAgICAgaWYgKCF0aWNrLmJsYWNrYm9hcmQuZ2V0KCdpc09wZW4nLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fb3Blbih0aWNrKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRJQ0tcclxuICAgICAgICB2YXIgc3RhdHVzID0gdGhpcy5fdGljayh0aWNrKTtcclxuXHJcbiAgICAgICAgLy8gQ0xPU0VcclxuICAgICAgICBpZiAoc3RhdHVzICE9PSBSVU5OSU5HKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fY2xvc2UodGljayk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBFWElUXHJcbiAgICAgICAgdGhpcy5fZXhpdCh0aWNrKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdyYXBwZXIgZm9yIGVudGVyIG1ldGhvZC5cclxuICAgICAqIEBtZXRob2QgX2VudGVyXHJcbiAgICAgKiBAcGFyYW0ge1RpY2t9IHRpY2sgQSB0aWNrIGluc3RhbmNlLlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICoqL1xyXG4gICAgX2VudGVyKHRpY2s6IFRpY2spXHJcbiAgICB7XHJcbiAgICAgICAgdGljay5fZW50ZXJOb2RlKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZW50ZXIodGljayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXcmFwcGVyIGZvciBvcGVuIG1ldGhvZC5cclxuICAgICAqIEBtZXRob2QgX29wZW5cclxuICAgICAqIEBwYXJhbSB7VGlja30gdGljayBBIHRpY2sgaW5zdGFuY2UuXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiovXHJcbiAgICBfb3Blbih0aWNrOiBUaWNrKVxyXG4gICAge1xyXG4gICAgICAgIHRpY2suX29wZW5Ob2RlKHRoaXMpO1xyXG4gICAgICAgIHRpY2suYmxhY2tib2FyZC5zZXQoJ2lzT3BlbicsIHRydWUsIHRpY2sudHJlZS5pZCwgdGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5vcGVuKHRpY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV3JhcHBlciBmb3IgdGljayBtZXRob2QuXHJcbiAgICAgKiBAbWV0aG9kIF90aWNrXHJcbiAgICAgKiBAcGFyYW0ge1RpY2t9IHRpY2sgQSB0aWNrIGluc3RhbmNlLlxyXG4gICAgICogQHJldHVybiB7Q29uc3RhbnR9IEEgc3RhdGUgY29uc3RhbnQuXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiovXHJcbiAgICBfdGljayh0aWNrOiBUaWNrKVxyXG4gICAge1xyXG4gICAgICAgIHRpY2suX3RpY2tOb2RlKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpY2sodGljayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXcmFwcGVyIGZvciBjbG9zZSBtZXRob2QuXHJcbiAgICAgKiBAbWV0aG9kIF9jbG9zZVxyXG4gICAgICogQHBhcmFtIHtUaWNrfSB0aWNrIEEgdGljayBpbnN0YW5jZS5cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqKi9cclxuICAgIF9jbG9zZSh0aWNrOiBUaWNrKVxyXG4gICAge1xyXG4gICAgICAgIHRpY2suX2Nsb3NlTm9kZSh0aGlzKTtcclxuICAgICAgICB0aWNrLmJsYWNrYm9hcmQuc2V0KCdpc09wZW4nLCBmYWxzZSwgdGljay50cmVlLmlkLCB0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLmNsb3NlKHRpY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV3JhcHBlciBmb3IgZXhpdCBtZXRob2QuXHJcbiAgICAgKiBAbWV0aG9kIF9leGl0XHJcbiAgICAgKiBAcGFyYW0ge1RpY2t9IHRpY2sgQSB0aWNrIGluc3RhbmNlLlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICoqL1xyXG4gICAgX2V4aXQodGljazogVGljaylcclxuICAgIHtcclxuICAgICAgICB0aWNrLl9leGl0Tm9kZSh0aGlzKTtcclxuICAgICAgICB0aGlzLmV4aXQodGljayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbnRlciBtZXRob2QsIG92ZXJyaWRlIHRoaXMgdG8gdXNlLiBJdCBpcyBjYWxsZWQgZXZlcnkgdGltZSBhIG5vZGUgaXNcclxuICAgICAqIGFza2VkIHRvIGV4ZWN1dGUsIGJlZm9yZSB0aGUgdGljayBpdHNlbGYuXHJcbiAgICAgKlxyXG4gICAgICogQG1ldGhvZCBlbnRlclxyXG4gICAgICogQHBhcmFtIHtUaWNrfSB0aWNrIEEgdGljayBpbnN0YW5jZS5cclxuICAgICAqKi9cclxuICAgIGVudGVyKHRpY2s6IFRpY2spIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3BlbiBtZXRob2QsIG92ZXJyaWRlIHRoaXMgdG8gdXNlLiBJdCBpcyBjYWxsZWQgb25seSBiZWZvcmUgdGhlIHRpY2tcclxuICAgICAqIGNhbGxiYWNrIGFuZCBvbmx5IGlmIHRoZSBub3QgaXNuJ3QgY2xvc2VkLlxyXG4gICAgICpcclxuICAgICAqIE5vdGU6IGEgbm9kZSB3aWxsIGJlIGNsb3NlZCBpZiBpdCByZXR1cm5lZCBgUlVOTklOR2AgaW4gdGhlIHRpY2suXHJcbiAgICAgKlxyXG4gICAgICogQG1ldGhvZCBvcGVuXHJcbiAgICAgKiBAcGFyYW0ge1RpY2t9IHRpY2sgQSB0aWNrIGluc3RhbmNlLlxyXG4gICAgICoqL1xyXG4gICAgb3Blbih0aWNrOiBUaWNrKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRpY2sgbWV0aG9kLCBvdmVycmlkZSB0aGlzIHRvIHVzZS4gVGhpcyBtZXRob2QgbXVzdCBjb250YWluIHRoZSByZWFsXHJcbiAgICAgKiBleGVjdXRpb24gb2Ygbm9kZSAocGVyZm9ybSBhIHRhc2ssIGNhbGwgY2hpbGRyZW4sIGV0Yy4pLiBJdCBpcyBjYWxsZWRcclxuICAgICAqIGV2ZXJ5IHRpbWUgYSBub2RlIGlzIGFza2VkIHRvIGV4ZWN1dGUuXHJcbiAgICAgKlxyXG4gICAgICogQG1ldGhvZCB0aWNrXHJcbiAgICAgKiBAcGFyYW0ge1RpY2t9IHRpY2sgQSB0aWNrIGluc3RhbmNlLlxyXG4gICAgICoqL1xyXG4gICAgdGljayh0aWNrOiBUaWNrKTogU1RBVEUgeyByZXR1cm4gU1RBVEUuTk9ORTsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xvc2UgbWV0aG9kLCBvdmVycmlkZSB0aGlzIHRvIHVzZS4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIHRoZSB0aWNrXHJcbiAgICAgKiBjYWxsYmFjaywgYW5kIG9ubHkgaWYgdGhlIHRpY2sgcmV0dXJuIGEgc3RhdGUgZGlmZmVyZW50IGZyb21cclxuICAgICAqIGBSVU5OSU5HYC5cclxuICAgICAqXHJcbiAgICAgKiBAbWV0aG9kIGNsb3NlXHJcbiAgICAgKiBAcGFyYW0ge1RpY2t9IHRpY2sgQSB0aWNrIGluc3RhbmNlLlxyXG4gICAgICoqL1xyXG4gICAgY2xvc2UodGljazogVGljaykgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeGl0IG1ldGhvZCwgb3ZlcnJpZGUgdGhpcyB0byB1c2UuIENhbGxlZCBldmVyeSB0aW1lIGluIHRoZSBlbmQgb2YgdGhlXHJcbiAgICAgKiBleGVjdXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQG1ldGhvZCBleGl0XHJcbiAgICAgKiBAcGFyYW0ge1RpY2t9IHRpY2sgQSB0aWNrIGluc3RhbmNlLlxyXG4gICAgICoqL1xyXG4gICAgZXhpdCh0aWNrOiBUaWNrKSB7IH1cclxufTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlVVVJRCB9IGZyb20gJy4uL2IzLmZ1bmN0aW9ucyc7XHJcbmltcG9ydCB7IENPTVBPU0lURSwgREVDT1JBVE9SIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0ICogYXMgRGVjb3JhdG9ycyBmcm9tICcuLi9kZWNvcmF0b3JzL2luZGV4JztcclxuaW1wb3J0ICogYXMgQ29tcG9zaXRlcyBmcm9tICcuLi9jb21wb3NpdGVzL2luZGV4JztcclxuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcclxuaW1wb3J0IFRpY2sgZnJvbSAnLi9UaWNrJztcclxuaW1wb3J0IEJhc2VOb2RlIGZyb20gJy4vQmFzZU5vZGUnO1xyXG5pbXBvcnQgQmxhY2tib2FyZCBmcm9tICcuL0JsYWNrYm9hcmQnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBCZWhhdmlvclRyZWUgY2xhc3MsIGFzIHRoZSBuYW1lIGltcGxpZXMsIHJlcHJlc2VudHMgdGhlIEJlaGF2aW9yIFRyZWVcclxuICogc3RydWN0dXJlLlxyXG4gKlxyXG4gKiBUaGVyZSBhcmUgdHdvIHdheXMgdG8gY29uc3RydWN0IGEgQmVoYXZpb3IgVHJlZTogYnkgbWFudWFsbHkgc2V0dGluZyB0aGVcclxuICogcm9vdCBub2RlLCBvciBieSBsb2FkaW5nIGl0IGZyb20gYSBkYXRhIHN0cnVjdHVyZSAod2hpY2ggY2FuIGJlIGxvYWRlZFxyXG4gKiBmcm9tIGEgSlNPTikuIEJvdGggbWV0aG9kcyBhcmUgc2hvd24gaW4gdGhlIGV4YW1wbGVzIGJlbG93IGFuZCBiZXR0ZXJcclxuICogZXhwbGFpbmVkIGluIHRoZSB1c2VyIGd1aWRlLlxyXG4gKlxyXG4gKiBUaGUgdGljayBtZXRob2QgbXVzdCBiZSBjYWxsZWQgcGVyaW9kaWNhbGx5LCBpbiBvcmRlciB0byBzZW5kIHRoZSB0aWNrXHJcbiAqIHNpZ25hbCB0byBhbGwgbm9kZXMgaW4gdGhlIHRyZWUsIHN0YXJ0aW5nIGZyb20gdGhlIHJvb3QuIFRoZSBtZXRob2RcclxuICogYEJlaGF2aW9yVHJlZS50aWNrYCByZWNlaXZlcyBhIHRhcmdldCBvYmplY3QgYW5kIGEgYmxhY2tib2FyZCBhc1xyXG4gKiBwYXJhbWV0ZXJzLiBUaGUgdGFyZ2V0IG9iamVjdCBjYW4gYmUgYW55dGhpbmc6IGEgZ2FtZSBhZ2VudCwgYSBzeXN0ZW0sIGFcclxuICogRE9NIG9iamVjdCwgZXRjLiBUaGlzIHRhcmdldCBpcyBub3QgdXNlZCBieSBhbnkgcGllY2Ugb2YgQmVoYXZpb3IzSlMsXHJcbiAqIGkuZS4sIHRoZSB0YXJnZXQgb2JqZWN0IHdpbGwgb25seSBiZSB1c2VkIGJ5IGN1c3RvbSBub2Rlcy5cclxuICpcclxuICogVGhlIGJsYWNrYm9hcmQgaXMgb2JsaWdhdG9yeSBhbmQgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBgQmxhY2tib2FyZGAuIFRoaXNcclxuICogcmVxdWlyZW1lbnQgaXMgbmVjZXNzYXJ5IGR1ZSB0byB0aGUgZmFjdCB0aGF0IG5laXRoZXIgYEJlaGF2aW9yVHJlZWAgb3JcclxuICogYW55IG5vZGUgd2lsbCBzdG9yZSB0aGUgZXhlY3V0aW9uIHZhcmlhYmxlcyBpbiBpdHMgb3duIG9iamVjdCAoZS5nLiwgdGhlXHJcbiAqIEJUIGRvZXMgbm90IHN0b3JlIHRoZSB0YXJnZXQsIGluZm9ybWF0aW9uIGFib3V0IG9wZW5lZCBub2RlcyBvciBudW1iZXIgb2ZcclxuICogdGltZXMgdGhlIHRyZWUgd2FzIGNhbGxlZCkuIEJ1dCBiZWNhdXNlIG9mIHRoaXMsIHlvdSBvbmx5IG5lZWQgYSBzaW5nbGVcclxuICogdHJlZSBpbnN0YW5jZSB0byBjb250cm9sIG11bHRpcGxlIChtYXliZSBodW5kcmVkcykgb2JqZWN0cy5cclxuICpcclxuICogTWFudWFsIGNvbnN0cnVjdGlvbiBvZiBhIEJlaGF2aW9yIFRyZWVcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICpcclxuICogICAgIHZhciB0cmVlID0gbmV3IGIzLkJlaGF2aW9yVHJlZSgpO1xyXG4gKlxyXG4gKiAgICAgdHJlZS5yb290ID0gbmV3IGIzLlNlcXVlbmNlKHtjaGlsZHJlbjpbXHJcbiAqICAgICAgIG5ldyBiMy5Qcmlvcml0eSh7Y2hpbGRyZW46W1xyXG4gKiAgICAgICAgIG5ldyBNeUN1c3RvbU5vZGUoKSxcclxuICogICAgICAgICBuZXcgTXlDdXN0b21Ob2RlKClcclxuICogICAgICAgXX0pLFxyXG4gKiAgICAgICAuLi5cclxuICogICAgIF19KTtcclxuICpcclxuICpcclxuICogTG9hZGluZyBhIEJlaGF2aW9yIFRyZWUgZnJvbSBkYXRhIHN0cnVjdHVyZVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqXHJcbiAqICAgICB2YXIgdHJlZSA9IG5ldyBiMy5CZWhhdmlvclRyZWUoKTtcclxuICpcclxuICogICAgIHRyZWUubG9hZCh7XHJcbiAqICAgICAgICd0aXRsZScgICAgICAgOiAnQmVoYXZpb3IgVHJlZSB0aXRsZSdcclxuICogICAgICAgJ2Rlc2NyaXB0aW9uJyA6ICdNeSBkZXNjcmlwdGlvbidcclxuICogICAgICAgJ3Jvb3QnICAgICAgICA6ICdub2RlLWlkLTEnXHJcbiAqICAgICAgICdub2RlcycgICAgICAgOiB7XHJcbiAqICAgICAgICAgJ25vZGUtaWQtMScgOiB7XHJcbiAqICAgICAgICAgICAnbmFtZScgICAgICAgIDogJ1ByaW9yaXR5JywgLy8gdGhpcyBpcyB0aGUgbm9kZSB0eXBlXHJcbiAqICAgICAgICAgICAndGl0bGUnICAgICAgIDogJ1Jvb3QgTm9kZScsXHJcbiAqICAgICAgICAgICAnZGVzY3JpcHRpb24nIDogJ0Rlc2NyaXB0aW9uJyxcclxuICogICAgICAgICAgICdjaGlsZHJlbicgICAgOiBbJ25vZGUtaWQtMicsICdub2RlLWlkLTMnXSxcclxuICogICAgICAgICB9LFxyXG4gKiAgICAgICAgIC4uLlxyXG4gKiAgICAgICB9XHJcbiAqICAgICB9KVxyXG4gKlxyXG4gKlxyXG4gKiBAbW9kdWxlIGIzXHJcbiAqIEBjbGFzcyBCZWhhdmlvclRyZWVcclxuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVoYXZpb3JUcmVlXHJcbntcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0cmVlIGlkLCBtdXN0IGJlIHVuaXF1ZS4gQnkgZGVmYXVsdCwgY3JlYXRlZCB3aXRoIGBjcmVhdGVVVUlEYC5cclxuICAgICAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBpZFxyXG4gICAgICogQHJlYWRPbmx5XHJcbiAgICAgKiovXHJcbiAgICBpZCA9IGNyZWF0ZVVVSUQoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0cmVlIHRpdGxlLlxyXG4gICAgICogQHByb3BlcnR5IHtTdHJpbmd9IHRpdGxlXHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqKi9cclxuICAgIHRpdGxlID0gJ1RoZSBiZWhhdmlvciB0cmVlJztcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlc2NyaXB0aW9uIG9mIHRoZSB0cmVlLlxyXG4gICAgICogQHByb3BlcnR5IHtTdHJpbmd9IGRlc2NyaXB0aW9uXHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqKi9cclxuICAgIGRlc2NyaXB0aW9uID0gJ0RlZmF1bHQgZGVzY3JpcHRpb24nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBkaWN0aW9uYXJ5IHdpdGggKGtleS12YWx1ZSkgcHJvcGVydGllcy4gVXNlZnVsIHRvIGRlZmluZSBjdXN0b21cclxuICAgICAqIHZhcmlhYmxlcyBpbiB0aGUgdmlzdWFsIGVkaXRvci5cclxuICAgICAqXHJcbiAgICAgKiBAcHJvcGVydHkge09iamVjdH0gcHJvcGVydGllc1xyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiovXHJcbiAgICBwcm9wZXJ0aWVzID0ge307XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcmVmZXJlbmNlIHRvIHRoZSByb290IG5vZGUuIE11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgYEJhc2VOb2RlYC5cclxuICAgICAqIEBwcm9wZXJ0eSB7QmFzZU5vZGV9IHJvb3RcclxuICAgICAqKi9cclxuICAgIHJvb3Q6IEJhc2VOb2RlID0gbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSByZWZlcmVuY2UgdG8gdGhlIGRlYnVnIGluc3RhbmNlLlxyXG4gICAgICogQHByb3BlcnR5IHtPYmplY3R9IGRlYnVnXHJcbiAgICAgKiovXHJcbiAgICBkZWJ1ZzogYW55ID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6YXRpb24gbWV0aG9kLlxyXG4gICAgICogQG1ldGhvZCBpbml0aWFsaXplXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqKi9cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgbWV0aG9kIGxvYWRzIGEgQmVoYXZpb3IgVHJlZSBmcm9tIGEgZGF0YSBzdHJ1Y3R1cmUsIHBvcHVsYXRpbmcgdGhpc1xyXG4gICAgICogb2JqZWN0IHdpdGggdGhlIHByb3ZpZGVkIGRhdGEuIE5vdGljZSB0aGF0LCB0aGUgZGF0YSBzdHJ1Y3R1cmUgbXVzdFxyXG4gICAgICogZm9sbG93IHRoZSBmb3JtYXQgc3BlY2lmaWVkIGJ5IEJlaGF2aW9yM0pTLiBDb25zdWx0IHRoZSBndWlkZSB0byBrbm93XHJcbiAgICAgKiBtb3JlIGFib3V0IHRoaXMgZm9ybWF0LlxyXG4gICAgICpcclxuICAgICAqIFlvdSBwcm9iYWJseSB3YW50IHRvIHVzZSBjdXN0b20gbm9kZXMgaW4geW91ciBCVHMsIHRodXMsIHlvdSBuZWVkIHRvXHJcbiAgICAgKiBwcm92aWRlIHRoZSBgbmFtZXNgIG9iamVjdCwgaW4gd2hpY2ggdGhpcyBtZXRob2QgY2FuIGZpbmQgdGhlIG5vZGVzIGJ5XHJcbiAgICAgKiBgbmFtZXNbTk9ERV9OQU1FXWAuIFRoaXMgdmFyaWFibGUgY2FuIGJlIGEgbmFtZXNwYWNlIG9yIGEgZGljdGlvbmFyeSxcclxuICAgICAqIGFzIGxvbmcgYXMgdGhpcyBtZXRob2QgY2FuIGZpbmQgdGhlIG5vZGUgYnkgaXRzIG5hbWUsIGZvciBleGFtcGxlOlxyXG4gICAgICpcclxuICAgICAqICAgICAvL2pzb25cclxuICAgICAqICAgICAuLi5cclxuICAgICAqICAgICAnbm9kZTEnOiB7XHJcbiAgICAgKiAgICAgICAnbmFtZSc6IE15Q3VzdG9tTm9kZSxcclxuICAgICAqICAgICAgICd0aXRsZSc6IC4uLlxyXG4gICAgICogICAgIH1cclxuICAgICAqICAgICAuLi5cclxuICAgICAqXHJcbiAgICAgKiAgICAgLy9jb2RlXHJcbiAgICAgKiAgICAgdmFyIGJ0ID0gbmV3IGIzLkJlaGF2aW9yVHJlZSgpO1xyXG4gICAgICogICAgIGJ0LmxvYWQoZGF0YSwgeydNeUN1c3RvbU5vZGUnOk15Q3VzdG9tTm9kZX0pXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICAqIEBtZXRob2QgbG9hZFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIGRhdGEgc3RydWN0dXJlIHJlcHJlc2VudGluZyBhIEJlaGF2aW9yIFRyZWUuXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW25hbWVzXSBBIG5hbWVzcGFjZSBvciBkaWN0IGNvbnRhaW5pbmcgY3VzdG9tIG5vZGVzLlxyXG4gICAgICoqL1xyXG4gICAgbG9hZChkYXRhOiBhbnksIG5hbWVzOiBhbnkgPSB7fSlcclxuICAgIHtcclxuXHJcbiAgICAgICAgdGhpcy50aXRsZSA9IGRhdGEudGl0bGUgfHwgdGhpcy50aXRsZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGF0YS5kZXNjcmlwdGlvbiB8fCB0aGlzLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IGRhdGEucHJvcGVydGllcyB8fCB0aGlzLnByb3BlcnRpZXM7XHJcblxyXG4gICAgICAgIHZhciBub2RlczogYW55ID0ge307XHJcbiAgICAgICAgdmFyIGlkLCBzcGVjLCBub2RlO1xyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgbm9kZSBsaXN0ICh3aXRob3V0IGNvbm5lY3Rpb24gYmV0d2VlbiB0aGVtKVxyXG4gICAgICAgIGZvciAoaWQgaW4gZGF0YS5ub2RlcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNwZWMgPSBkYXRhLm5vZGVzW2lkXTtcclxuICAgICAgICAgICAgdmFyIENscztcclxuXHJcbiAgICAgICAgICAgIGlmIChzcGVjLm5hbWUgaW4gbmFtZXMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIExvb2sgZm9yIHRoZSBuYW1lIGluIGN1c3RvbSBub2Rlc1xyXG4gICAgICAgICAgICAgICAgQ2xzID0gbmFtZXNbc3BlYy5uYW1lXTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzcGVjLm5hbWUgaW4gRGVjb3JhdG9ycylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gTG9vayBmb3IgdGhlIG5hbWUgaW4gZGVmYXVsdCBub2Rlc1xyXG4gICAgICAgICAgICAgICAgQ2xzID0gKERlY29yYXRvcnMgYXMgYW55KVtzcGVjLm5hbWVdO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNwZWMubmFtZSBpbiBDb21wb3NpdGVzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDbHMgPSAoQ29tcG9zaXRlcyBhcyBhbnkpW3NwZWMubmFtZV07XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3BlYy5uYW1lIGluIEFjdGlvbnMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIENscyA9IChBY3Rpb25zIGFzIGFueSlbc3BlYy5uYW1lXTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIEludmFsaWQgbm9kZSBuYW1lXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXZhbEVycm9yKCdCZWhhdmlvclRyZWUubG9hZDogSW52YWxpZCBub2RlIG5hbWUgKyBcIicgK1xyXG4gICAgICAgICAgICAgICAgICAgIHNwZWMubmFtZSArICdcIi4nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbm9kZSA9IG5ldyBDbHMoc3BlYy5wcm9wZXJ0aWVzKTtcclxuICAgICAgICAgICAgbm9kZS5pZCA9IHNwZWMuaWQgfHwgbm9kZS5pZDtcclxuICAgICAgICAgICAgbm9kZS50aXRsZSA9IHNwZWMudGl0bGUgfHwgbm9kZS50aXRsZTtcclxuICAgICAgICAgICAgbm9kZS5kZXNjcmlwdGlvbiA9IHNwZWMuZGVzY3JpcHRpb24gfHwgbm9kZS5kZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgbm9kZS5wcm9wZXJ0aWVzID0gc3BlYy5wcm9wZXJ0aWVzIHx8IG5vZGUucHJvcGVydGllcztcclxuXHJcbiAgICAgICAgICAgIG5vZGVzW2lkXSA9IG5vZGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb25uZWN0IHRoZSBub2Rlc1xyXG4gICAgICAgIGZvciAoaWQgaW4gZGF0YS5ub2RlcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNwZWMgPSBkYXRhLm5vZGVzW2lkXTtcclxuICAgICAgICAgICAgbm9kZSA9IG5vZGVzW2lkXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChub2RlLmNhdGVnb3J5ID09PSBDT01QT1NJVEUgJiYgc3BlYy5jaGlsZHJlbilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcGVjLmNoaWxkcmVuLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjaWQgPSBzcGVjLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4ucHVzaChub2Rlc1tjaWRdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLmNhdGVnb3J5ID09PSBERUNPUkFUT1IgJiYgc3BlYy5jaGlsZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5jaGlsZCA9IG5vZGVzW3NwZWMuY2hpbGRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJvb3QgPSBub2Rlc1tkYXRhLnJvb3RdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBtZXRob2QgZHVtcCB0aGUgY3VycmVudCBCVCBpbnRvIGEgZGF0YSBzdHJ1Y3R1cmUuXHJcbiAgICAgKlxyXG4gICAgICogTm90ZTogVGhpcyBtZXRob2QgZG9lcyBub3QgcmVjb3JkIHRoZSBjdXJyZW50IG5vZGUgcGFyYW1ldGVycy4gVGh1cyxcclxuICAgICAqIGl0IG1heSBub3QgYmUgY29tcGF0aWJsZSB3aXRoIGxvYWQgZm9yIG5vdy5cclxuICAgICAqXHJcbiAgICAgKiBAbWV0aG9kIGR1bXBcclxuICAgICAqIEByZXR1cm4ge09iamVjdH0gQSBkYXRhIG9iamVjdCByZXByZXNlbnRpbmcgdGhpcyB0cmVlLlxyXG4gICAgICoqL1xyXG4gICAgZHVtcCgpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGRhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuICAgICAgICB2YXIgY3VzdG9tTmFtZXMgPSBbXTtcclxuXHJcbiAgICAgICAgZGF0YS50aXRsZSA9IHRoaXMudGl0bGU7XHJcbiAgICAgICAgZGF0YS5kZXNjcmlwdGlvbiA9IHRoaXMuZGVzY3JpcHRpb247XHJcbiAgICAgICAgZGF0YS5yb290ID0gKHRoaXMucm9vdCkgPyB0aGlzLnJvb3QuaWQgOiBudWxsO1xyXG4gICAgICAgIGRhdGEucHJvcGVydGllcyA9IHRoaXMucHJvcGVydGllcztcclxuICAgICAgICBkYXRhLm5vZGVzID0ge307XHJcbiAgICAgICAgZGF0YS5jdXN0b21fbm9kZXMgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnJvb3QpIHJldHVybiBkYXRhO1xyXG5cclxuICAgICAgICB2YXIgc3RhY2sgPSBbdGhpcy5yb290XTtcclxuICAgICAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBub2RlID0gc3RhY2sucG9wKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgc3BlYzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG4gICAgICAgICAgICBzcGVjLmlkID0gbm9kZS5pZDtcclxuICAgICAgICAgICAgc3BlYy5uYW1lID0gbm9kZS5uYW1lO1xyXG4gICAgICAgICAgICBzcGVjLnRpdGxlID0gbm9kZS50aXRsZTtcclxuICAgICAgICAgICAgc3BlYy5kZXNjcmlwdGlvbiA9IG5vZGUuZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIHNwZWMucHJvcGVydGllcyA9IG5vZGUucHJvcGVydGllcztcclxuICAgICAgICAgICAgc3BlYy5wYXJhbWV0ZXJzID0gbm9kZS5wYXJhbWV0ZXJzO1xyXG5cclxuICAgICAgICAgICAgLy8gdmVyaWZ5IGN1c3RvbSBub2RlXHJcbiAgICAgICAgICAgIHZhciBwcm90byA9IChub2RlLmNvbnN0cnVjdG9yICYmIG5vZGUuY29uc3RydWN0b3IucHJvdG90eXBlKTtcclxuICAgICAgICAgICAgdmFyIG5vZGVOYW1lID0gKHByb3RvICYmIHByb3RvLm5hbWUpIHx8IG5vZGUubmFtZTtcclxuICAgICAgICAgICAgaWYgKCEoRGVjb3JhdG9ycyBhcyBhbnkpW25vZGVOYW1lXSAmJiAhKENvbXBvc2l0ZXMgYXMgYW55KVtub2RlTmFtZV0gJiYgIShBY3Rpb25zIGFzIGFueSlbbm9kZU5hbWVdICYmIGN1c3RvbU5hbWVzLmluZGV4T2Yobm9kZU5hbWUpIDwgMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN1YmRhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuICAgICAgICAgICAgICAgIHN1YmRhdGEubmFtZSA9IG5vZGVOYW1lO1xyXG4gICAgICAgICAgICAgICAgc3ViZGF0YS50aXRsZSA9IChwcm90byAmJiBwcm90by50aXRsZSkgfHwgbm9kZS50aXRsZTtcclxuICAgICAgICAgICAgICAgIHN1YmRhdGEuY2F0ZWdvcnkgPSBub2RlLmNhdGVnb3J5O1xyXG5cclxuICAgICAgICAgICAgICAgIGN1c3RvbU5hbWVzLnB1c2gobm9kZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5jdXN0b21fbm9kZXMucHVzaChzdWJkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gc3RvcmUgY2hpbGRyZW4vY2hpbGRcclxuICAgICAgICAgICAgaWYgKG5vZGUuY2F0ZWdvcnkgPT09IENPTVBPU0lURSAmJiBub2RlLmNoaWxkcmVuKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBub2RlLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLnB1c2gobm9kZS5jaGlsZHJlbltpXS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChub2RlLmNoaWxkcmVuW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNwZWMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlLmNhdGVnb3J5ID09PSBERUNPUkFUT1IgJiYgbm9kZS5jaGlsZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChub2RlLmNoaWxkKTtcclxuICAgICAgICAgICAgICAgIHNwZWMuY2hpbGQgPSBub2RlLmNoaWxkLmlkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkYXRhLm5vZGVzW25vZGUuaWRdID0gc3BlYztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJvcGFnYXRlcyB0aGUgdGljayBzaWduYWwgdGhyb3VnaCB0aGUgdHJlZSwgc3RhcnRpbmcgZnJvbSB0aGUgcm9vdC5cclxuICAgICAqXHJcbiAgICAgKiBUaGlzIG1ldGhvZCByZWNlaXZlcyBhIHRhcmdldCBvYmplY3Qgb2YgYW55IHR5cGUgKE9iamVjdCwgQXJyYXksXHJcbiAgICAgKiBET01FbGVtZW50LCB3aGF0ZXZlcikgYW5kIGEgYEJsYWNrYm9hcmRgIGluc3RhbmNlLiBUaGUgdGFyZ2V0IG9iamVjdCBoYXNcclxuICAgICAqIG5vIHVzZSBhdCBhbGwgZm9yIGFsbCBCZWhhdmlvcjNKUyBjb21wb25lbnRzLCBidXQgc3VyZWx5IGlzIGltcG9ydGFudFxyXG4gICAgICogZm9yIGN1c3RvbSBub2Rlcy4gVGhlIGJsYWNrYm9hcmQgaW5zdGFuY2UgaXMgdXNlZCBieSB0aGUgdHJlZSBhbmQgbm9kZXNcclxuICAgICAqIHRvIHN0b3JlIGV4ZWN1dGlvbiB2YXJpYWJsZXMgKGUuZy4sIGxhc3Qgbm9kZSBydW5uaW5nKSBhbmQgaXMgb2JsaWdhdG9yeVxyXG4gICAgICogdG8gYmUgYSBgQmxhY2tib2FyZGAgaW5zdGFuY2UgKG9yIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIGludGVyZmFjZSkuXHJcbiAgICAgKlxyXG4gICAgICogSW50ZXJuYWxseSwgdGhpcyBtZXRob2QgY3JlYXRlcyBhIFRpY2sgb2JqZWN0LCB3aGljaCB3aWxsIHN0b3JlIHRoZVxyXG4gICAgICogdGFyZ2V0IGFuZCB0aGUgYmxhY2tib2FyZCBvYmplY3RzLlxyXG4gICAgICpcclxuICAgICAqIE5vdGU6IEJlaGF2aW9yVHJlZSBzdG9yZXMgYSBsaXN0IG9mIG9wZW4gbm9kZXMgZnJvbSBsYXN0IHRpY2ssIGlmIHRoZXNlXHJcbiAgICAgKiBub2RlcyB3ZXJlbid0IGNhbGxlZCBhZnRlciB0aGUgY3VycmVudCB0aWNrLCB0aGlzIG1ldGhvZCB3aWxsIGNsb3NlIHRoZW1cclxuICAgICAqIGF1dG9tYXRpY2FsbHkuXHJcbiAgICAgKlxyXG4gICAgICogQG1ldGhvZCB0aWNrXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IEEgdGFyZ2V0IG9iamVjdC5cclxuICAgICAqIEBwYXJhbSB7QmxhY2tib2FyZH0gYmxhY2tib2FyZCBBbiBpbnN0YW5jZSBvZiBibGFja2JvYXJkIG9iamVjdC5cclxuICAgICAqIEByZXR1cm4ge0NvbnN0YW50fSBUaGUgdGljayBzaWduYWwgc3RhdGUuXHJcbiAgICAgKiovXHJcbiAgICB0aWNrKHRhcmdldDogT2JqZWN0LCBibGFja2JvYXJkOiBCbGFja2JvYXJkKVxyXG4gICAge1xyXG4gICAgICAgIGlmICghYmxhY2tib2FyZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93ICdUaGUgYmxhY2tib2FyZCBwYXJhbWV0ZXIgaXMgb2JsaWdhdG9yeSBhbmQgbXVzdCBiZSBhbiAnICtcclxuICAgICAgICAgICAgJ2luc3RhbmNlIG9mIGIzLkJsYWNrYm9hcmQnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogQ1JFQVRFIEEgVElDSyBPQkpFQ1QgKi9cclxuICAgICAgICB2YXIgdGljayA9IG5ldyBUaWNrKCk7XHJcbiAgICAgICAgdGljay5kZWJ1ZyA9IHRoaXMuZGVidWc7XHJcbiAgICAgICAgdGljay50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGljay5ibGFja2JvYXJkID0gYmxhY2tib2FyZDtcclxuICAgICAgICB0aWNrLnRyZWUgPSB0aGlzO1xyXG5cclxuICAgICAgICAvKiBUSUNLIE5PREUgKi9cclxuICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLnJvb3QuX2V4ZWN1dGUodGljayk7XHJcblxyXG4gICAgICAgIC8qIENMT1NFIE5PREVTIEZST00gTEFTVCBUSUNLLCBJRiBORUVERUQgKi9cclxuICAgICAgICB2YXIgbGFzdE9wZW5Ob2RlcyA9IGJsYWNrYm9hcmQuZ2V0KCdvcGVuTm9kZXMnLCB0aGlzLmlkKTtcclxuICAgICAgICB2YXIgY3Vyck9wZW5Ob2RlcyA9IHRpY2suX29wZW5Ob2Rlcy5zbGljZSgwKTtcclxuXHJcbiAgICAgICAgLy8gZG9lcyBub3QgY2xvc2UgaWYgaXQgaXMgc3RpbGwgb3BlbiBpbiB0aGlzIHRpY2tcclxuICAgICAgICB2YXIgc3RhcnQgPSAwO1xyXG4gICAgICAgIHZhciBpO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBNYXRoLm1pbihsYXN0T3Blbk5vZGVzLmxlbmd0aCwgY3Vyck9wZW5Ob2Rlcy5sZW5ndGgpOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdGFydCA9IGkgKyAxO1xyXG4gICAgICAgICAgICBpZiAobGFzdE9wZW5Ob2Rlc1tpXSAhPT0gY3Vyck9wZW5Ob2Rlc1tpXSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNsb3NlIHRoZSBub2Rlc1xyXG4gICAgICAgIGZvciAoaSA9IGxhc3RPcGVuTm9kZXMubGVuZ3RoIC0gMTsgaSA+PSBzdGFydDsgaS0tKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFzdE9wZW5Ob2Rlc1tpXS5fY2xvc2UodGljayk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBQT1BVTEFURSBCTEFDS0JPQVJEICovXHJcbiAgICAgICAgYmxhY2tib2FyZC5zZXQoJ29wZW5Ob2RlcycsIGN1cnJPcGVuTm9kZXMsIHRoaXMuaWQpO1xyXG4gICAgICAgIGJsYWNrYm9hcmQuc2V0KCdub2RlQ291bnQnLCB0aWNrLl9ub2RlQ291bnQsIHRoaXMuaWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCBCYXNlTm9kZSBmcm9tIFwiLi9CYXNlTm9kZVwiO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBCbGFja2JvYXJkIGlzIHRoZSBtZW1vcnkgc3RydWN0dXJlIHJlcXVpcmVkIGJ5IGBCZWhhdmlvclRyZWVgIGFuZCBpdHNcclxuICogbm9kZXMuIEl0IG9ubHkgaGF2ZSAyIHB1YmxpYyBtZXRob2RzOiBgc2V0YCBhbmQgYGdldGAuIFRoZXNlIG1ldGhvZHMgd29ya3NcclxuICogaW4gMyBkaWZmZXJlbnQgY29udGV4dHM6IGdsb2JhbCwgcGVyIHRyZWUsIGFuZCBwZXIgbm9kZSBwZXIgdHJlZS5cclxuICpcclxuICogU3VwcG9zZSB5b3UgaGF2ZSB0d28gZGlmZmVyZW50IHRyZWVzIGNvbnRyb2xsaW5nIGEgc2luZ2xlIG9iamVjdCB3aXRoIGFcclxuICogc2luZ2xlIGJsYWNrYm9hcmQsIHRoZW46XHJcbiAqXHJcbiAqIC0gSW4gdGhlIGdsb2JhbCBjb250ZXh0LCBhbGwgbm9kZXMgd2lsbCBhY2Nlc3MgdGhlIHN0b3JlZCBpbmZvcm1hdGlvbi5cclxuICogLSBJbiBwZXIgdHJlZSBjb250ZXh0LCBvbmx5IG5vZGVzIHNoYXJpbmcgdGhlIHNhbWUgdHJlZSBzaGFyZSB0aGUgc3RvcmVkXHJcbiAqICAgaW5mb3JtYXRpb24uXHJcbiAqIC0gSW4gcGVyIG5vZGUgcGVyIHRyZWUgY29udGV4dCwgdGhlIGluZm9ybWF0aW9uIHN0b3JlZCBpbiB0aGUgYmxhY2tib2FyZFxyXG4gKiAgIGNhbiBvbmx5IGJlIGFjY2Vzc2VkIGJ5IHRoZSBzYW1lIG5vZGUgdGhhdCB3cm90ZSB0aGUgZGF0YS5cclxuICpcclxuICogVGhlIGNvbnRleHQgaXMgc2VsZWN0ZWQgaW5kaXJlY3RseSBieSB0aGUgcGFyYW1ldGVycyBwcm92aWRlZCB0byB0aGVzZVxyXG4gKiBtZXRob2RzLCBmb3IgZXhhbXBsZTpcclxuICpcclxuICogICAgIC8vIGdldHRpbmcvc2V0dGluZyB2YXJpYWJsZSBpbiBnbG9iYWwgY29udGV4dFxyXG4gKiAgICAgYmxhY2tib2FyZC5zZXQoJ3Rlc3RLZXknLCAndmFsdWUnKTtcclxuICogICAgIHZhciB2YWx1ZSA9IGJsYWNrYm9hcmQuZ2V0KCd0ZXN0S2V5Jyk7XHJcbiAqXHJcbiAqICAgICAvLyBnZXR0aW5nL3NldHRpbmcgdmFyaWFibGUgaW4gcGVyIHRyZWUgY29udGV4dFxyXG4gKiAgICAgYmxhY2tib2FyZC5zZXQoJ3Rlc3RLZXknLCAndmFsdWUnLCB0cmVlLmlkKTtcclxuICogICAgIHZhciB2YWx1ZSA9IGJsYWNrYm9hcmQuZ2V0KCd0ZXN0S2V5JywgdHJlZS5pZCk7XHJcbiAqXHJcbiAqICAgICAvLyBnZXR0aW5nL3NldHRpbmcgdmFyaWFibGUgaW4gcGVyIG5vZGUgcGVyIHRyZWUgY29udGV4dFxyXG4gKiAgICAgYmxhY2tib2FyZC5zZXQoJ3Rlc3RLZXknLCAndmFsdWUnLCB0cmVlLmlkLCBub2RlLmlkKTtcclxuICogICAgIHZhciB2YWx1ZSA9IGJsYWNrYm9hcmQuZ2V0KCd0ZXN0S2V5JywgdHJlZS5pZCwgbm9kZS5pZCk7XHJcbiAqXHJcbiAqIE5vdGU6IEludGVybmFsbHksIHRoZSBibGFja2JvYXJkIHN0b3JlIHRoZXNlIG1lbW9yaWVzIGluIGRpZmZlcmVudFxyXG4gKiBvYmplY3RzLCBiZWluZyB0aGUgZ2xvYmFsIG9uIGBfYmFzZU1lbW9yeWAsIHRoZSBwZXIgdHJlZSBvbiBgX3RyZWVNZW1vcnlgXHJcbiAqIGFuZCB0aGUgcGVyIG5vZGUgcGVyIHRyZWUgZHluYW1pY2FsbHkgY3JlYXRlIGluc2lkZSB0aGUgcGVyIHRyZWUgbWVtb3J5XHJcbiAqIChpdCBpcyBhY2Nlc3NlZCB2aWEgYF90cmVlTWVtb3J5W2lkXS5ub2RlTWVtb3J5YCkuIEF2b2lkIHRvIHVzZSB0aGVzZVxyXG4gKiB2YXJpYWJsZXMgbWFudWFsbHksIHVzZSBgZ2V0YCBhbmQgYHNldGAgaW5zdGVhZC5cclxuICpcclxuICogQG1vZHVsZSBiM1xyXG4gKiBAY2xhc3MgQmxhY2tib2FyZFxyXG4gKiovXHJcblxyXG5leHBvcnQgdHlwZSBNZW1vcnkgPSB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xyXG4gICAgIFxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUcmVlTWVtb3J5XHJcbntcclxuICAgIG5vZGVNZW1vcnk/OiBNZW1vcnksXHJcbiAgICBvcGVuTm9kZXM/OiBCYXNlTm9kZVtdLFxyXG4gICAgdHJhdmVyc2FsRGVwdGg/OiBudW1iZXIsXHJcbiAgICB0cmF2ZXJzYWxDeWNsZT86IG51bWJlcixcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxhY2tib2FyZFxyXG57XHJcblxyXG4gICAgX2Jhc2VNZW1vcnk6IE1lbW9yeSA9IHt9O1xyXG4gICAgX3RyZWVNZW1vcnk6IHsgW2tleTogc3RyaW5nXTogVHJlZU1lbW9yeSB9ID0ge307XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemF0aW9uIG1ldGhvZC5cclxuICAgICAqIEBtZXRob2QgaW5pdGlhbGl6ZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKiovXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnRlcm5hbCBtZXRob2QgdG8gcmV0cmlldmUgdGhlIHRyZWUgY29udGV4dCBtZW1vcnkuIElmIHRoZSBtZW1vcnkgZG9lc1xyXG4gICAgICogbm90IGV4aXN0LCB0aGlzIG1ldGhvZCBjcmVhdGVzIGl0LlxyXG4gICAgICpcclxuICAgICAqIEBtZXRob2QgX2dldFRyZWVNZW1vcnlcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0cmVlU2NvcGUgVGhlIGlkIG9mIHRoZSB0cmVlIGluIHNjb3BlLlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgdHJlZSBtZW1vcnkuXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiovXHJcbiAgICBfZ2V0VHJlZU1lbW9yeSh0cmVlU2NvcGU6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3RyZWVNZW1vcnlbdHJlZVNjb3BlXSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyZWVNZW1vcnlbdHJlZVNjb3BlXSA9IHtcclxuICAgICAgICAgICAgICAgICdub2RlTWVtb3J5Jzoge30sXHJcbiAgICAgICAgICAgICAgICAnb3Blbk5vZGVzJzogW10sXHJcbiAgICAgICAgICAgICAgICAndHJhdmVyc2FsRGVwdGgnOiAwLFxyXG4gICAgICAgICAgICAgICAgJ3RyYXZlcnNhbEN5Y2xlJzogMCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyZWVNZW1vcnlbdHJlZVNjb3BlXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEludGVybmFsIG1ldGhvZCB0byByZXRyaWV2ZSB0aGUgbm9kZSBjb250ZXh0IG1lbW9yeSwgZ2l2ZW4gdGhlIHRyZWVcclxuICAgICAqIG1lbW9yeS4gSWYgdGhlIG1lbW9yeSBkb2VzIG5vdCBleGlzdCwgdGhpcyBtZXRob2QgY3JlYXRlcyBpcy5cclxuICAgICAqXHJcbiAgICAgKiBAbWV0aG9kIF9nZXROb2RlTWVtb3J5XHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdHJlZU1lbW9yeSB0aGUgdHJlZSBtZW1vcnkuXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbm9kZVNjb3BlIFRoZSBpZCBvZiB0aGUgbm9kZSBpbiBzY29wZS5cclxuICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIG5vZGUgbWVtb3J5LlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICoqL1xyXG4gICAgX2dldE5vZGVNZW1vcnkodHJlZU1lbW9yeTogVHJlZU1lbW9yeSwgbm9kZVNjb3BlOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIG1lbW9yeSA9IHRyZWVNZW1vcnkubm9kZU1lbW9yeTtcclxuICAgICAgICBpZiAoIW1lbW9yeVtub2RlU2NvcGVdKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWVtb3J5W25vZGVTY29wZV0gPSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtZW1vcnlbbm9kZVNjb3BlXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEludGVybmFsIG1ldGhvZCB0byByZXRyaWV2ZSB0aGUgY29udGV4dCBtZW1vcnkuIElmIHRyZWVTY29wZSBhbmRcclxuICAgICAqIG5vZGVTY29wZSBhcmUgcHJvdmlkZWQsIHRoaXMgbWV0aG9kIHJldHVybnMgdGhlIHBlciBub2RlIHBlciB0cmVlXHJcbiAgICAgKiBtZW1vcnkuIElmIG9ubHkgdGhlIHRyZWVTY29wZSBpcyBwcm92aWRlZCwgaXQgcmV0dXJucyB0aGUgcGVyIHRyZWVcclxuICAgICAqIG1lbW9yeS4gSWYgbm8gcGFyYW1ldGVyIGlzIHByb3ZpZGVkLCBpdCByZXR1cm5zIHRoZSBnbG9iYWwgbWVtb3J5LlxyXG4gICAgICogTm90aWNlIHRoYXQsIGlmIG9ubHkgbm9kZVNjb3BlIGlzIHByb3ZpZGVkLCB0aGlzIG1ldGhvZCB3aWxsIHN0aWxsXHJcbiAgICAgKiByZXR1cm4gdGhlIGdsb2JhbCBtZW1vcnkuXHJcbiAgICAgKlxyXG4gICAgICogQG1ldGhvZCBfZ2V0TWVtb3J5XHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdHJlZVNjb3BlIFRoZSBpZCBvZiB0aGUgdHJlZSBzY29wZS5cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBub2RlU2NvcGUgVGhlIGlkIG9mIHRoZSBub2RlIHNjb3BlLlxyXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBBIG1lbW9yeSBvYmplY3QuXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiovXHJcbiAgICBfZ2V0TWVtb3J5KHRyZWVTY29wZT86IHN0cmluZywgbm9kZVNjb3BlPzogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBtZW1vcnkgPSB0aGlzLl9iYXNlTWVtb3J5O1xyXG5cclxuICAgICAgICBpZiAodHJlZVNjb3BlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWVtb3J5ID0gdGhpcy5fZ2V0VHJlZU1lbW9yeSh0cmVlU2NvcGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5vZGVTY29wZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWVtb3J5ID0gdGhpcy5fZ2V0Tm9kZU1lbW9yeShtZW1vcnksIG5vZGVTY29wZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtZW1vcnk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9yZXMgYSB2YWx1ZSBpbiB0aGUgYmxhY2tib2FyZC4gSWYgdHJlZVNjb3BlIGFuZCBub2RlU2NvcGUgYXJlXHJcbiAgICAgKiBwcm92aWRlZCwgdGhpcyBtZXRob2Qgd2lsbCBzYXZlIHRoZSB2YWx1ZSBpbnRvIHRoZSBwZXIgbm9kZSBwZXIgdHJlZVxyXG4gICAgICogbWVtb3J5LiBJZiBvbmx5IHRoZSB0cmVlU2NvcGUgaXMgcHJvdmlkZWQsIGl0IHdpbGwgc2F2ZSB0aGUgdmFsdWUgaW50b1xyXG4gICAgICogdGhlIHBlciB0cmVlIG1lbW9yeS4gSWYgbm8gcGFyYW1ldGVyIGlzIHByb3ZpZGVkLCB0aGlzIG1ldGhvZCB3aWxsIHNhdmVcclxuICAgICAqIHRoZSB2YWx1ZSBpbnRvIHRoZSBnbG9iYWwgbWVtb3J5LiBOb3RpY2UgdGhhdCwgaWYgb25seSBub2RlU2NvcGUgaXNcclxuICAgICAqIHByb3ZpZGVkIChidXQgdHJlZVNjb3BlIG5vdCksIHRoaXMgbWV0aG9kIHdpbGwgc3RpbGwgc2F2ZSB0aGUgdmFsdWUgaW50b1xyXG4gICAgICogdGhlIGdsb2JhbCBtZW1vcnkuXHJcbiAgICAgKlxyXG4gICAgICogQG1ldGhvZCBzZXRcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGtleSB0byBiZSBzdG9yZWQuXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHRvIGJlIHN0b3JlZC5cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0cmVlU2NvcGUgVGhlIHRyZWUgaWQgaWYgYWNjZXNzaW5nIHRoZSB0cmVlIG9yIG5vZGVcclxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtb3J5LlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5vZGVTY29wZSBUaGUgbm9kZSBpZCBpZiBhY2Nlc3NpbmcgdGhlIG5vZGUgbWVtb3J5LlxyXG4gICAgICoqL1xyXG4gICAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55LCB0cmVlU2NvcGU/OiBzdHJpbmcsIG5vZGVTY29wZT86IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB2YXIgbWVtb3J5ID0gdGhpcy5fZ2V0TWVtb3J5KHRyZWVTY29wZSwgbm9kZVNjb3BlKTtcclxuICAgICAgICBtZW1vcnlba2V5XSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0cmlldmVzIGEgdmFsdWUgaW4gdGhlIGJsYWNrYm9hcmQuIElmIHRyZWVTY29wZSBhbmQgbm9kZVNjb3BlIGFyZVxyXG4gICAgICogcHJvdmlkZWQsIHRoaXMgbWV0aG9kIHdpbGwgcmV0cmlldmUgdGhlIHZhbHVlIGZyb20gdGhlIHBlciBub2RlIHBlciB0cmVlXHJcbiAgICAgKiBtZW1vcnkuIElmIG9ubHkgdGhlIHRyZWVTY29wZSBpcyBwcm92aWRlZCwgaXQgd2lsbCByZXRyaWV2ZSB0aGUgdmFsdWVcclxuICAgICAqIGZyb20gdGhlIHBlciB0cmVlIG1lbW9yeS4gSWYgbm8gcGFyYW1ldGVyIGlzIHByb3ZpZGVkLCB0aGlzIG1ldGhvZCB3aWxsXHJcbiAgICAgKiByZXRyaWV2ZSBmcm9tIHRoZSBnbG9iYWwgbWVtb3J5LiBJZiBvbmx5IG5vZGVTY29wZSBpcyBwcm92aWRlZCAoYnV0XHJcbiAgICAgKiB0cmVlU2NvcGUgbm90KSwgdGhpcyBtZXRob2Qgd2lsbCBzdGlsbCB0cnkgdG8gcmV0cmlldmUgZnJvbSB0aGUgZ2xvYmFsXHJcbiAgICAgKiBtZW1vcnkuXHJcbiAgICAgKlxyXG4gICAgICogQG1ldGhvZCBnZXRcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGtleSB0byBiZSByZXRyaWV2ZWQuXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdHJlZVNjb3BlIFRoZSB0cmVlIGlkIGlmIGFjY2Vzc2luZyB0aGUgdHJlZSBvciBub2RlXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbW9yeS5cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBub2RlU2NvcGUgVGhlIG5vZGUgaWQgaWYgYWNjZXNzaW5nIHRoZSBub2RlIG1lbW9yeS5cclxuICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIHZhbHVlIHN0b3JlZCBvciB1bmRlZmluZWQuXHJcbiAgICAgKiovXHJcbiAgICBnZXQoa2V5OiBzdHJpbmcsIHRyZWVTY29wZT86IHN0cmluZywgbm9kZVNjb3BlPzogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBtZW1vcnkgPSB0aGlzLl9nZXRNZW1vcnkodHJlZVNjb3BlLCBub2RlU2NvcGUpO1xyXG4gICAgICAgIHJldHVybiBtZW1vcnlba2V5XTtcclxuICAgIH1cclxufTtcclxuIiwiaW1wb3J0IEJhc2VOb2RlIGZyb20gJy4uL2NvcmUvQmFzZU5vZGUnO1xyXG5pbXBvcnQgeyBDT01QT1NJVEUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5cclxuLyoqXHJcbiAqIENvbXBvc2l0ZSBpcyB0aGUgYmFzZSBjbGFzcyBmb3IgYWxsIGNvbXBvc2l0ZSBub2Rlcy4gVGh1cywgaWYgeW91IHdhbnQgdG9cclxuICogY3JlYXRlIG5ldyBjdXN0b20gY29tcG9zaXRlIG5vZGVzLCB5b3UgbmVlZCB0byBpbmhlcml0IGZyb20gdGhpcyBjbGFzcy5cclxuICpcclxuICogV2hlbiBjcmVhdGluZyBjb21wb3NpdGUgbm9kZXMsIHlvdSB3aWxsIG5lZWQgdG8gcHJvcGFnYXRlIHRoZSB0aWNrIHNpZ25hbFxyXG4gKiB0byB0aGUgY2hpbGRyZW4gbm9kZXMgbWFudWFsbHkuIFRvIGRvIHRoYXQsIG92ZXJyaWRlIHRoZSBgdGlja2AgbWV0aG9kIGFuZFxyXG4gKiBjYWxsIHRoZSBgX2V4ZWN1dGVgIG1ldGhvZCBvbiBhbGwgbm9kZXMuIEZvciBpbnN0YW5jZSwgdGFrZSBhIGxvb2sgYXQgaG93XHJcbiAqIHRoZSBTZXF1ZW5jZSBub2RlIGluaGVyaXQgdGhpcyBjbGFzcyBhbmQgaG93IGl0IGNhbGwgaXRzIGNoaWxkcmVuOlxyXG4gKlxyXG4gKiAgICAgLy8gSW5oZXJpdCBmcm9tIENvbXBvc2l0ZSwgdXNpbmcgdGhlIHV0aWwgZnVuY3Rpb24gQ2xhc3MuXHJcbiAqICAgICBjbGFzcyBTZXF1ZW5jZSBleHRlbmRzIENvbXBvc2l0ZSB7XHJcbiAqXHJcbiAqICAgICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAqICAgICAgICAgLy8gUmVtZW1iZXIgdG8gc2V0IHRoZSBuYW1lIG9mIHRoZSBub2RlLlxyXG4gKiAgICAgICAgIHN1cGVyKHtuYW1lOiAnU2VxdWVuY2UnfSk7XHJcbiAqICAgICAgIH1cclxuICpcclxuICogICAgICAgLy8gT3ZlcnJpZGUgdGhlIHRpY2sgZnVuY3Rpb25cclxuICogICAgICAgdGljayh0aWNrIDogVGljaykge1xyXG4gKlxyXG4gKiAgICAgICAgIC8vIEl0ZXJhdGVzIG92ZXIgdGhlIGNoaWxkcmVuXHJcbiAqICAgICAgICAgZm9yICh2YXIgaT0wOyBpPHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICpcclxuICogICAgICAgICAgIC8vIFByb3BhZ2F0ZSB0aGUgdGlja1xyXG4gKiAgICAgICAgICAgdmFyIHN0YXR1cyA9IHRoaXMuY2hpbGRyZW5baV0uX2V4ZWN1dGUodGljayk7XHJcbiAqXHJcbiAqICAgICAgICAgICBpZiAoc3RhdHVzICE9PSBTVUNDRVNTKSB7XHJcbiAqICAgICAgICAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICogICAgICAgICAgIH1cclxuICogICAgICAgICB9XHJcbiAqXHJcbiAqICAgICAgICAgcmV0dXJuIFNVQ0NFU1M7XHJcbiAqICAgICAgIH1cclxuICogICAgIH07XHJcbiAqXHJcbiAqIEBtb2R1bGUgYjNcclxuICogQGNsYXNzIENvbXBvc2l0ZVxyXG4gKiBAZXh0ZW5kcyBCYXNlTm9kZVxyXG4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb3NpdGUgZXh0ZW5kcyBCYXNlTm9kZVxyXG57XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIENvbXBvc2l0ZS5cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFxyXG4gICAgICogQHBhcmFtIHtCYXNlTm9kZVtdfSBvcHRpb25zLmNoaWxkcmVuIFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMubmFtZSBOb2RlIG5hbWUuIERlZmF1bHQgdG8gYENvbXBvc2l0ZWAuXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy50aXRsZSBcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLnByb3BlcnRpZXMgXHJcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9zaXRlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNoaWxkcmVuOiBCYXNlTm9kZVtdID0gW10sIG5hbWUgPSAnQ29tcG9zaXRlJywgdGl0bGUgPSBuYW1lLCBwcm9wZXJ0aWVzID0ge30pXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoXHJcbiAgICAgICAgICAgIENPTVBPU0lURSxcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgICcnLFxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IChjaGlsZHJlbikuc2xpY2UoMCk7XHJcbiAgICB9XHJcblxyXG59O1xyXG4iLCJpbXBvcnQgQmFzZU5vZGUsIHsgSVByb3BlcnRpZXMgfSBmcm9tICcuL0Jhc2VOb2RlJztcclxuaW1wb3J0IHsgQ09ORElUSU9OIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbi8qKlxyXG4gKiBDb25kaXRpb24gaXMgdGhlIGJhc2UgY2xhc3MgZm9yIGFsbCBjb25kaXRpb24gbm9kZXMuIFRodXMsIGlmIHlvdSB3YW50IHRvXHJcbiAqIGNyZWF0ZSBuZXcgY3VzdG9tIGNvbmRpdGlvbiBub2RlcywgeW91IG5lZWQgdG8gaW5oZXJpdCBmcm9tIHRoaXMgY2xhc3MuXHJcbiAqXHJcbiAqIEBjbGFzcyBDb25kaXRpb25cclxuICogQGV4dGVuZHMgQmFzZU5vZGVcclxuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZGl0aW9uIGV4dGVuZHMgQmFzZU5vZGVcclxue1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBDb25kaXRpb24uXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLm5hbWUgTm9kZSBuYW1lLiBEZWZhdWx0IHRvIGBDb25kaXRpb25gLlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdGlvbnMudGl0bGVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLnByb3BlcnRpZXNcclxuICAgICAqIEBtZW1iZXJvZiBDb25kaXRpb25cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobmFtZSA9ICdDb25kaXRpb24nLCB0aXRsZSA9IG5hbWUsIHByb3BlcnRpZXM6IElQcm9wZXJ0aWVzID0ge30pXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoXHJcbiAgICAgICAgICAgIENPTkRJVElPTixcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgICcnLFxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn07XHJcbiIsImltcG9ydCBCYXNlTm9kZSwgeyBJUHJvcGVydGllcyB9IGZyb20gJy4vQmFzZU5vZGUnO1xyXG5pbXBvcnQgeyBERUNPUkFUT1IgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5cclxuLyoqXHJcbiAqIERlY29yYXRvciBpcyB0aGUgYmFzZSBjbGFzcyBmb3IgYWxsIGRlY29yYXRvciBub2Rlcy4gVGh1cywgaWYgeW91IHdhbnQgdG9cclxuICogY3JlYXRlIG5ldyBjdXN0b20gZGVjb3JhdG9yIG5vZGVzLCB5b3UgbmVlZCB0byBpbmhlcml0IGZyb20gdGhpcyBjbGFzcy5cclxuICpcclxuICogV2hlbiBjcmVhdGluZyBkZWNvcmF0b3Igbm9kZXMsIHlvdSB3aWxsIG5lZWQgdG8gcHJvcGFnYXRlIHRoZSB0aWNrIHNpZ25hbFxyXG4gKiB0byB0aGUgY2hpbGQgbm9kZSBtYW51YWxseSwganVzdCBsaWtlIHRoZSBjb21wb3NpdGUgbm9kZXMuIFRvIGRvIHRoYXQsXHJcbiAqIG92ZXJyaWRlIHRoZSBgdGlja2AgbWV0aG9kIGFuZCBjYWxsIHRoZSBgX2V4ZWN1dGVgIG1ldGhvZCBvbiB0aGUgY2hpbGRcclxuICogbm9kZS4gRm9yIGluc3RhbmNlLCB0YWtlIGEgbG9vayBhdCBob3cgdGhlIEludmVydGVyIG5vZGUgaW5oZXJpdCB0aGlzXHJcbiAqIGNsYXNzIGFuZCBob3cgaXQgY2FsbCBpdHMgY2hpbGRyZW46XHJcbiAqXHJcbiAqICAgICAvLyBJbmhlcml0IGZyb20gRGVjb3JhdG9yLCB1c2luZyB0aGUgdXRpbCBmdW5jdGlvbiBDbGFzcy5cclxuICogICAgIGNsYXNzIEludmVydGVyIGV4dGVuZHMgYjMuRGVjb3JhdG9yIHtcclxuICogICAgICAgXHJcbiAqICAgICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAqICAgICAgICAgc3VwZXIoe25hbWU6ICdJbnZlcmV0ZXInfSk7XHJcbiAqICAgICAgIH1cclxuICpcclxuICogICAgICAgdGljazogZnVuY3Rpb24odGljaykge1xyXG4gKiAgICAgICAgIGlmICghdGhpcy5jaGlsZCkge1xyXG4gKiAgICAgICAgICAgcmV0dXJuIGIzLkVSUk9SO1xyXG4gKiAgICAgICAgIH1cclxuICpcclxuICogICAgICAgICAvLyBQcm9wYWdhdGUgdGhlIHRpY2tcclxuICogICAgICAgICB2YXIgc3RhdHVzID0gdGhpcy5jaGlsZC5fZXhlY3V0ZSh0aWNrKTtcclxuICpcclxuICogICAgICAgICBpZiAoc3RhdHVzID09PSBiMy5TVUNDRVNTKSB7XHJcbiAqICAgICAgICAgICBzdGF0dXMgPSBiMy5GQUlMVVJFO1xyXG4gKiAgICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSBiMy5GQUlMVVJFKSB7XHJcbiAqICAgICAgICAgICBzdGF0dXMgPSBiMy5TVUNDRVNTO1xyXG4gKiAgICAgICAgIH1cclxuICpcclxuICogICAgICAgICByZXR1cm4gc3RhdHVzO1xyXG4gKiAgICAgICB9XHJcbiAqICAgICB9KTtcclxuICpcclxuICogQG1vZHVsZSBiM1xyXG4gKiBAY2xhc3MgRGVjb3JhdG9yXHJcbiAqIEBleHRlbmRzIEJhc2VOb2RlXHJcbiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY29yYXRvciBleHRlbmRzIEJhc2VOb2RlXHJcbntcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgRGVjb3JhdG9yLlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0aW9ucy5uYW1lIE5vZGUgbmFtZS4gRGVmYXVsdCB0byBgRGVjb3JhdG9yYC5cclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLnRpdGxlIFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMucHJvcGVydGllcyBcclxuICAgICAqIEBtZW1iZXJvZiBEZWNvcmF0b3JcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY2hpbGQ6IEJhc2VOb2RlID0gbnVsbCwgbmFtZSA9ICdEZWNvcmF0b3InLCB0aXRsZSA9IG5hbWUsIHByb3BlcnRpZXM6IElQcm9wZXJ0aWVzID0ge30pXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoXHJcbiAgICAgICAgICAgIERFQ09SQVRPUixcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgICcnLFxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmNoaWxkID0gY2hpbGQ7XHJcbiAgICB9XHJcblxyXG59O1xyXG4iLCJpbXBvcnQgQmVoYXZpb3JUcmVlIGZyb20gXCIuL0JlaGF2aW9yVHJlZVwiO1xyXG5pbXBvcnQgQmxhY2tib2FyZCBmcm9tIFwiLi9CbGFja2JvYXJkXCI7XHJcbmltcG9ydCBCYXNlTm9kZSBmcm9tIFwiLi9CYXNlTm9kZVwiO1xyXG5cclxuLyoqXHJcbiAqIEEgbmV3IFRpY2sgb2JqZWN0IGlzIGluc3RhbnRpYXRlZCBldmVyeSB0aWNrIGJ5IEJlaGF2aW9yVHJlZS4gSXQgaXMgcGFzc2VkXHJcbiAqIGFzIHBhcmFtZXRlciB0byB0aGUgbm9kZXMgdGhyb3VnaCB0aGUgdHJlZSBkdXJpbmcgdGhlIHRyYXZlcnNhbC5cclxuICpcclxuICogVGhlIHJvbGUgb2YgdGhlIFRpY2sgY2xhc3MgaXMgdG8gc3RvcmUgdGhlIGluc3RhbmNlcyBvZiB0cmVlLCBkZWJ1ZyxcclxuICogdGFyZ2V0IGFuZCBibGFja2JvYXJkLiBTbywgYWxsIG5vZGVzIGNhbiBhY2Nlc3MgdGhlc2UgaW5mb3JtYXRpb25zLlxyXG4gKlxyXG4gKiBGb3IgaW50ZXJuYWwgdXNlcywgdGhlIFRpY2sgYWxzbyBpcyB1c2VmdWwgdG8gc3RvcmUgdGhlIG9wZW4gbm9kZSBhZnRlclxyXG4gKiB0aGUgdGljayBzaWduYWwsIGluIG9yZGVyIHRvIGxldCBgQmVoYXZpb3JUcmVlYCB0byBrZWVwIHRyYWNrIGFuZCBjbG9zZVxyXG4gKiB0aGVtIHdoZW4gbmVjZXNzYXJ5LlxyXG4gKlxyXG4gKiBUaGlzIGNsYXNzIGFsc28gbWFrZXMgYSBicmlkZ2UgYmV0d2VlbiBub2RlcyBhbmQgdGhlIGRlYnVnLCBwYXNzaW5nIHRoZVxyXG4gKiBub2RlIHN0YXRlIHRvIHRoZSBkZWJ1ZyBpZiB0aGUgbGFzdCBpcyBwcm92aWRlZC5cclxuICpcclxuICogQG1vZHVsZSBiM1xyXG4gKiBAY2xhc3MgVGlja1xyXG4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWNrXHJcbntcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdHJlZSByZWZlcmVuY2UuXHJcbiAgICAgKiBAcHJvcGVydHkge2IzLkJlaGF2aW9yVHJlZX0gdHJlZVxyXG4gICAgICogQHJlYWRPbmx5XHJcbiAgICAgKiovXHJcbiAgICB0cmVlOiBCZWhhdmlvclRyZWUgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGRlYnVnIHJlZmVyZW5jZS5cclxuICAgICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkZWJ1Z1xyXG4gICAgICogQHJlYWRPbmx5XHJcbiAgICAgKi9cclxuICAgIGRlYnVnOiBPYmplY3QgPSBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHRhcmdldCBvYmplY3QgcmVmZXJlbmNlLlxyXG4gICAgICogQHByb3BlcnR5IHtPYmplY3R9IHRhcmdldFxyXG4gICAgICogQHJlYWRPbmx5XHJcbiAgICAgKiovXHJcbiAgICB0YXJnZXQ6IE9iamVjdCA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgYmxhY2tib2FyZCByZWZlcmVuY2UuXHJcbiAgICAgKiBAcHJvcGVydHkge2IzLkJsYWNrYm9hcmR9IGJsYWNrYm9hcmRcclxuICAgICAqIEByZWFkT25seVxyXG4gICAgICoqL1xyXG4gICAgYmxhY2tib2FyZDogQmxhY2tib2FyZCA9IG51bGw7XHJcblxyXG4gICAgLy8gdXBkYXRlZCBkdXJpbmcgdGhlIHRpY2sgc2lnbmFsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbGlzdCBvZiBvcGVuIG5vZGVzLiBVcGRhdGUgZHVyaW5nIHRoZSB0cmVlIHRyYXZlcnNhbC5cclxuICAgICAqIEBwcm9wZXJ0eSB7QXJyYXl9IF9vcGVuTm9kZXNcclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqIEByZWFkT25seVxyXG4gICAgICoqL1xyXG4gICAgX29wZW5Ob2RlczogQmFzZU5vZGVbXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG51bWJlciBvZiBub2RlcyBlbnRlcmVkIGR1cmluZyB0aGUgdGljay4gVXBkYXRlIGR1cmluZyB0aGUgdHJlZVxyXG4gICAgICogdHJhdmVyc2FsLlxyXG4gICAgICpcclxuICAgICAqIEBwcm9wZXJ0eSB7SW50ZWdlcn0gX25vZGVDb3VudFxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICogQHJlYWRPbmx5XHJcbiAgICAgKiovXHJcbiAgICBfbm9kZUNvdW50ID0gMDtcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6YXRpb24gbWV0aG9kLlxyXG4gICAgICogQG1ldGhvZCBpbml0aWFsaXplXHJcbiAgICAgKiBAY29uc3RydWN0b3JcclxuICAgICAqKi9cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICAvLyBzZXQgYnkgQmVoYXZpb3JUcmVlXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGVkIHdoZW4gZW50ZXJpbmcgYSBub2RlIChjYWxsZWQgYnkgQmFzZU5vZGUpLlxyXG4gICAgICogQG1ldGhvZCBfZW50ZXJOb2RlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbm9kZSBUaGUgbm9kZSB0aGF0IGNhbGxlZCB0aGlzIG1ldGhvZC5cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqKi9cclxuICAgIF9lbnRlck5vZGUobm9kZTogQmFzZU5vZGUpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5fbm9kZUNvdW50Kys7XHJcbiAgICAgICAgdGhpcy5fb3Blbk5vZGVzLnB1c2gobm9kZSk7XHJcblxyXG4gICAgICAgIC8vIFRPRE86IGNhbGwgZGVidWcgaGVyZVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgd2hlbiBvcGVuaW5nIGEgbm9kZSAoY2FsbGVkIGJ5IEJhc2VOb2RlKS5cclxuICAgICAqIEBtZXRob2QgX29wZW5Ob2RlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbm9kZSBUaGUgbm9kZSB0aGF0IGNhbGxlZCB0aGlzIG1ldGhvZC5cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqKi9cclxuICAgIF9vcGVuTm9kZShub2RlOiBCYXNlTm9kZSlcclxuICAgIHtcclxuICAgICAgICAvLyBUT0RPOiBjYWxsIGRlYnVnIGhlcmVcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHdoZW4gdGlja2luZyBhIG5vZGUgKGNhbGxlZCBieSBCYXNlTm9kZSkuXHJcbiAgICAgKiBAbWV0aG9kIF90aWNrTm9kZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG5vZGUgVGhlIG5vZGUgdGhhdCBjYWxsZWQgdGhpcyBtZXRob2QuXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKiovXHJcbiAgICBfdGlja05vZGUobm9kZTogQmFzZU5vZGUpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gVE9ETzogY2FsbCBkZWJ1ZyBoZXJlXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayB3aGVuIGNsb3NpbmcgYSBub2RlIChjYWxsZWQgYnkgQmFzZU5vZGUpLlxyXG4gICAgICogQG1ldGhvZCBfY2xvc2VOb2RlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbm9kZSBUaGUgbm9kZSB0aGF0IGNhbGxlZCB0aGlzIG1ldGhvZC5cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqKi9cclxuICAgIF9jbG9zZU5vZGUobm9kZTogQmFzZU5vZGUpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gVE9ETzogY2FsbCBkZWJ1ZyBoZXJlXHJcbiAgICAgICAgdGhpcy5fb3Blbk5vZGVzLnBvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgd2hlbiBleGl0aW5nIGEgbm9kZSAoY2FsbGVkIGJ5IEJhc2VOb2RlKS5cclxuICAgICAqIEBtZXRob2QgX2V4aXROb2RlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbm9kZSBUaGUgbm9kZSB0aGF0IGNhbGxlZCB0aGlzIG1ldGhvZC5cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqKi9cclxuICAgIF9leGl0Tm9kZShub2RlOiBCYXNlTm9kZSlcclxuICAgIHtcclxuICAgICAgICAvLyBUT0RPOiBjYWxsIGRlYnVnIGhlcmVcclxuICAgIH1cclxufTtcclxuIiwiaW1wb3J0IERlY29yYXRvciBmcm9tICcuLi9jb3JlL0RlY29yYXRvcic7XHJcbmltcG9ydCB7IEZBSUxVUkUsIFNVQ0NFU1MsIEVSUk9SIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuaW1wb3J0IFRpY2sgZnJvbSAnLi4vY29yZS9UaWNrJztcclxuaW1wb3J0IEJhc2VOb2RlIGZyb20gJy4uL2NvcmUvQmFzZU5vZGUnO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJbnZlcnRlciBkZWNvcmF0b3IgaW52ZXJ0cyB0aGUgcmVzdWx0IG9mIHRoZSBjaGlsZCwgcmV0dXJuaW5nIGBTVUNDRVNTYFxyXG4gKiBmb3IgYEZBSUxVUkVgIGFuZCBgRkFJTFVSRWAgZm9yIGBTVUNDRVNTYC5cclxuICpcclxuICogQG1vZHVsZSBiM1xyXG4gKiBAY2xhc3MgSW52ZXJ0ZXJcclxuICogQGV4dGVuZHMgRGVjb3JhdG9yXHJcbiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludmVydGVyIGV4dGVuZHMgRGVjb3JhdG9yXHJcbntcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgSW52ZXJ0ZXIuXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXHJcbiAgICAgKiBAcGFyYW0ge0Jhc2VOb2RlfSBwYXJhbXMuY2hpbGQgVGhlIGNoaWxkIG5vZGUuXHJcbiAgICAgKiBAbWVtYmVyb2YgSW52ZXJ0ZXJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY2hpbGQ6IEJhc2VOb2RlID0gbnVsbClcclxuICAgIHtcclxuICAgICAgICBzdXBlcihcclxuICAgICAgICAgICAgY2hpbGQsXHJcbiAgICAgICAgICAgICdJbnZlcnRlcidcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGljayBtZXRob2QuXHJcbiAgICAgKiBAbWV0aG9kIHRpY2tcclxuICAgICAqIEBwYXJhbSB7VGlja30gdGljayBBIHRpY2sgaW5zdGFuY2UuXHJcbiAgICAgKiBAcmV0dXJuIHtDb25zdGFudH0gQSBzdGF0ZSBjb25zdGFudC5cclxuICAgICAqKi9cclxuICAgIHRpY2sodGljazogVGljaylcclxuICAgIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2hpbGQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gRVJST1I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc3RhdHVzID0gdGhpcy5jaGlsZC5fZXhlY3V0ZSh0aWNrKTtcclxuXHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PSBTVUNDRVNTKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RhdHVzID0gRkFJTFVSRTtcclxuICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PSBGQUlMVVJFKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RhdHVzID0gU1VDQ0VTUztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCBEZWNvcmF0b3IgZnJvbSAnLi4vY29yZS9EZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBGQUlMVVJFLCBTVUNDRVNTLCBFUlJPUiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCBUaWNrIGZyb20gJy4uL2NvcmUvVGljayc7XHJcbmltcG9ydCBCYXNlTm9kZSBmcm9tICcuLi9jb3JlL0Jhc2VOb2RlJztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGRlY29yYXRvciBsaW1pdCB0aGUgbnVtYmVyIG9mIHRpbWVzIGl0cyBjaGlsZCBjYW4gYmUgY2FsbGVkLiBBZnRlciBhXHJcbiAqIGNlcnRhaW4gbnVtYmVyIG9mIHRpbWVzLCB0aGUgTGltaXRlciBkZWNvcmF0b3IgcmV0dXJucyBgRkFJTFVSRWAgd2l0aG91dFxyXG4gKiBleGVjdXRpbmcgdGhlIGNoaWxkLlxyXG4gKlxyXG4gKiBAbW9kdWxlIGIzXHJcbiAqIEBjbGFzcyBMaW1pdGVyXHJcbiAqIEBleHRlbmRzIERlY29yYXRvclxyXG4gKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW1pdGVyIGV4dGVuZHMgRGVjb3JhdG9yXHJcbntcclxuXHJcbiAgICBtYXhMb29wOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgTGltaXRlci5cclxuICAgICAqIFxyXG4gICAgICogU2V0dGluZ3MgcGFyYW1ldGVyczpcclxuICAgICAqIFxyXG4gICAgICogLSAqKm1heExvb3AqKiAoKkludGVnZXIqKSBNYXhpbXVtIG51bWJlciBvZiByZXBldGl0aW9ucy5cclxuICAgICAqIC0gKipjaGlsZCoqICgqQmFzZU5vZGUqKSBUaGUgY2hpbGQgbm9kZS5cclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHBhcmFtcy5tYXhMb29wIE1heGltdW0gbnVtYmVyIG9mIHJlcGV0aXRpb25zLlxyXG4gICAgICogQHBhcmFtIHtCYXNlTm9kZX0gcGFyYW1zLmNoaWxkIFRoZSBjaGlsZCBub2RlLlxyXG4gICAgICogQG1lbWJlcm9mIExpbWl0ZXJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY2hpbGQ6IEJhc2VOb2RlID0gbnVsbCwgbWF4TG9vcCA9IDEpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoXHJcbiAgICAgICAgICAgIGNoaWxkLFxyXG4gICAgICAgICAgICAnTGltaXRlcicsXHJcbiAgICAgICAgICAgICdMaW1pdCA8bWF4TG9vcD4gQWN0aXZhdGlvbnMnLFxyXG4gICAgICAgICAgICB7IG1heExvb3A6IDEgfSxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoIW1heExvb3ApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aHJvdyAnbWF4TG9vcCBwYXJhbWV0ZXIgaW4gTGltaXRlciBkZWNvcmF0b3IgaXMgYW4gb2JsaWdhdG9yeSBwYXJhbWV0ZXInO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tYXhMb29wID0gbWF4TG9vcDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9wZW4gbWV0aG9kLlxyXG4gICAgICogQG1ldGhvZCBvcGVuXHJcbiAgICAgKiBAcGFyYW0ge1RpY2t9IHRpY2sgQSB0aWNrIGluc3RhbmNlLlxyXG4gICAgICoqL1xyXG4gICAgb3Blbih0aWNrOiBUaWNrKVxyXG4gICAge1xyXG4gICAgICAgIHRpY2suYmxhY2tib2FyZC5zZXQoJ2knLCAwLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGljayBtZXRob2QuXHJcbiAgICAgKiBAbWV0aG9kIHRpY2tcclxuICAgICAqIEBwYXJhbSB7VGlja30gdGljayBBIHRpY2sgaW5zdGFuY2UuXHJcbiAgICAgKiBAcmV0dXJuIHtDb25zdGFudH0gQSBzdGF0ZSBjb25zdGFudC5cclxuICAgICAqKi9cclxuICAgIHRpY2sodGljazogVGljaylcclxuICAgIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2hpbGQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gRVJST1I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgaSA9IHRpY2suYmxhY2tib2FyZC5nZXQoJ2knLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpO1xyXG5cclxuICAgICAgICBpZiAoaSA8IHRoaXMubWF4TG9vcClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSB0aGlzLmNoaWxkLl9leGVjdXRlKHRpY2spO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSBTVUNDRVNTIHx8IHN0YXR1cyA9PSBGQUlMVVJFKVxyXG4gICAgICAgICAgICAgICAgdGljay5ibGFja2JvYXJkLnNldCgnaScsIGkgKyAxLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBGQUlMVVJFO1xyXG4gICAgfVxyXG59O1xyXG4iLCJpbXBvcnQgRGVjb3JhdG9yIGZyb20gJy4uL2NvcmUvRGVjb3JhdG9yJztcclxuaW1wb3J0IHsgRkFJTFVSRSwgRVJST1IgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgQmFzZU5vZGUgZnJvbSAnLi4vY29yZS9CYXNlTm9kZSc7XHJcbmltcG9ydCBUaWNrIGZyb20gJy4uL2NvcmUvVGljayc7XHJcblxyXG4vKipcclxuICogVGhlIE1heFRpbWUgZGVjb3JhdG9yIGxpbWl0cyB0aGUgbWF4aW11bSB0aW1lIHRoZSBub2RlIGNoaWxkIGNhbiBleGVjdXRlLlxyXG4gKiBOb3RpY2UgdGhhdCBpdCBkb2VzIG5vdCBpbnRlcnJ1cHQgdGhlIGV4ZWN1dGlvbiBpdHNlbGYgKGkuZS4sIHRoZSBjaGlsZFxyXG4gKiBtdXN0IGJlIG5vbi1wcmVlbXB0aXZlKSwgaXQgb25seSBpbnRlcnJ1cHRzIHRoZSBub2RlIGFmdGVyIGEgYFJVTk5JTkdgXHJcbiAqIHN0YXR1cy5cclxuICpcclxuICogQG1vZHVsZSBiM1xyXG4gKiBAY2xhc3MgTWF4VGltZVxyXG4gKiBAZXh0ZW5kcyBEZWNvcmF0b3JcclxuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF4VGltZSBleHRlbmRzIERlY29yYXRvclxyXG57XHJcblxyXG4gICAgbWF4VGltZTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIE1heFRpbWUuXHJcbiAgICAgKiBcclxuICAgICAqIC0gKiptYXhUaW1lKiogKCpJbnRlZ2VyKikgTWF4aW11bSB0aW1lIGEgY2hpbGQgY2FuIGV4ZWN1dGUuXHJcbiAgICAgKiAtICoqY2hpbGQqKiAoKkJhc2VOb2RlKikgVGhlIGNoaWxkIG5vZGUuXHJcbiAgXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIE9iamVjdCB3aXRoIHBhcmFtZXRlcnMuXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcGFyYW1zLm1heFRpbWUgTWF4aW11bSB0aW1lIGEgY2hpbGQgY2FuIGV4ZWN1dGUuXHJcbiAgICAgKiBAcGFyYW0ge0Jhc2VOb2RlfSBwYXJhbXMuY2hpbGQgVGhlIGNoaWxkIG5vZGUuXHJcbiAgICAgKiBAbWVtYmVyb2YgTWF4VGltZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtYXhUaW1lID0gMSwgY2hpbGQ6IEJhc2VOb2RlID0gbnVsbClcclxuICAgIHtcclxuICAgICAgICBzdXBlcihcclxuICAgICAgICAgICAgY2hpbGQsXHJcbiAgICAgICAgICAgICdNYXhUaW1lJyxcclxuICAgICAgICAgICAgJ01heCA8bWF4VGltZT5tcycsXHJcbiAgICAgICAgICAgIHsgbWF4VGltZTogbWF4VGltZSB9LFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmICghbWF4VGltZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRocm93ICdtYXhUaW1lIHBhcmFtZXRlciBpbiBNYXhUaW1lIGRlY29yYXRvciBpcyBhbiBvYmxpZ2F0b3J5IHBhcmFtZXRlcic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1heFRpbWUgPSBtYXhUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3BlbiBtZXRob2QuXHJcbiAgICAgKiBAbWV0aG9kIG9wZW5cclxuICAgICAqIEBwYXJhbSB7VGlja30gdGljayBBIHRpY2sgaW5zdGFuY2UuXHJcbiAgICAgKiovXHJcbiAgICBvcGVuKHRpY2s6IFRpY2spXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdGljay5ibGFja2JvYXJkLnNldCgnc3RhcnRUaW1lJywgc3RhcnRUaW1lLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGljayBtZXRob2QuXHJcbiAgICAgKiBAbWV0aG9kIHRpY2tcclxuICAgICAqIEBwYXJhbSB7VGlja30gdGljayBBIHRpY2sgaW5zdGFuY2UuXHJcbiAgICAgKiBAcmV0dXJuIHtDb25zdGFudH0gQSBzdGF0ZSBjb25zdGFudC5cclxuICAgICAqKi9cclxuICAgIHRpY2sodGljazogVGljaylcclxuICAgIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2hpbGQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gRVJST1I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY3VyclRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHZhciBzdGFydFRpbWUgPSB0aWNrLmJsYWNrYm9hcmQuZ2V0KCdzdGFydFRpbWUnLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpO1xyXG5cclxuICAgICAgICB2YXIgc3RhdHVzID0gdGhpcy5jaGlsZC5fZXhlY3V0ZSh0aWNrKTtcclxuICAgICAgICBpZiAoY3VyclRpbWUgLSBzdGFydFRpbWUgPiB0aGlzLm1heFRpbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gRkFJTFVSRTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCBEZWNvcmF0b3IgZnJvbSAnLi4vY29yZS9EZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBTVUNDRVNTLCBFUlJPUiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCBCYXNlTm9kZSBmcm9tICcuLi9jb3JlL0Jhc2VOb2RlJztcclxuaW1wb3J0IFRpY2sgZnJvbSAnLi4vY29yZS9UaWNrJztcclxuXHJcbi8qKlxyXG4gKiBSZXBlYXRVbnRpbEZhaWx1cmUgaXMgYSBkZWNvcmF0b3IgdGhhdCByZXBlYXRzIHRoZSB0aWNrIHNpZ25hbCB1bnRpbCB0aGVcclxuICogbm9kZSBjaGlsZCByZXR1cm5zIGBGQUlMVVJFYCwgYFJVTk5JTkdgIG9yIGBFUlJPUmAuIE9wdGlvbmFsbHksIGEgbWF4aW11bVxyXG4gKiBudW1iZXIgb2YgcmVwZXRpdGlvbnMgY2FuIGJlIGRlZmluZWQuXHJcbiAqXHJcbiAqIEBtb2R1bGUgYjNcclxuICogQGNsYXNzIFJlcGVhdFVudGlsRmFpbHVyZVxyXG4gKiBAZXh0ZW5kcyBEZWNvcmF0b3JcclxuICoqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwZWF0VW50aWxGYWlsdXJlIGV4dGVuZHMgRGVjb3JhdG9yXHJcbntcclxuXHJcbiAgICBtYXhMb29wOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgUmVwZWF0VW50aWxGYWlsdXJlLlxyXG4gICAgICpcclxuICAgICAqIC0gKiptYXhMb29wKiogKCpJbnRlZ2VyKikgTWF4aW11bSBudW1iZXIgb2YgcmVwZXRpdGlvbnMuIERlZmF1bHQgdG8gLTEgKGluZmluaXRlKS5cclxuICAgICAqIC0gKipjaGlsZCoqICgqQmFzZU5vZGUqKSBUaGUgY2hpbGQgbm9kZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIE9iamVjdCB3aXRoIHBhcmFtZXRlcnMuXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcGFyYW1zLm1heExvb3AgTWF4aW11bSBudW1iZXIgb2YgcmVwZXRpdGlvbnMuIERlZmF1bHQgdG8gLTEgKGluZmluaXRlKS5cclxuICAgICAqIEBwYXJhbSB7QmFzZU5vZGV9IHBhcmFtcy5jaGlsZCBUaGUgY2hpbGQgbm9kZS5cclxuICAgICAqIEBtZW1iZXJvZiBSZXBlYXRVbnRpbEZhaWx1cmVcclxuICAgICAqKi9cclxuICAgIGNvbnN0cnVjdG9yKG1heExvb3AgPSAtMSwgY2hpbGQ6IEJhc2VOb2RlID0gbnVsbClcclxuICAgIHtcclxuICAgICAgICBzdXBlcihcclxuICAgICAgICAgICAgY2hpbGQsXHJcbiAgICAgICAgICAgICdSZXBlYXRVbnRpbEZhaWx1cmUnLFxyXG4gICAgICAgICAgICAnUmVwZWF0IFVudGlsIEZhaWx1cmUnLFxyXG4gICAgICAgICAgICB7IG1heExvb3A6IC0xIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLm1heExvb3AgPSBtYXhMb29wO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3BlbiBtZXRob2QuXHJcbiAgICAgKiBAbWV0aG9kIG9wZW5cclxuICAgICAqIEBwYXJhbSB7VGlja30gdGljayBBIHRpY2sgaW5zdGFuY2UuXHJcbiAgICAgKiovXHJcbiAgICBvcGVuKHRpY2s6IFRpY2spXHJcbiAgICB7XHJcbiAgICAgICAgdGljay5ibGFja2JvYXJkLnNldCgnaScsIDAsIHRpY2sudHJlZS5pZCwgdGhpcy5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaWNrIG1ldGhvZC5cclxuICAgICAqIEBtZXRob2QgdGlja1xyXG4gICAgICogQHBhcmFtIHtUaWNrfSB0aWNrIEEgdGljayBpbnN0YW5jZS5cclxuICAgICAqIEByZXR1cm4ge0NvbnN0YW50fSBBIHN0YXRlIGNvbnN0YW50LlxyXG4gICAgICoqL1xyXG4gICAgdGljayh0aWNrOiBUaWNrKVxyXG4gICAge1xyXG4gICAgICAgIGlmICghdGhpcy5jaGlsZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBFUlJPUjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBpID0gdGljay5ibGFja2JvYXJkLmdldCgnaScsIHRpY2sudHJlZS5pZCwgdGhpcy5pZCk7XHJcbiAgICAgICAgdmFyIHN0YXR1cyA9IEVSUk9SO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy5tYXhMb29wIDwgMCB8fCBpIDwgdGhpcy5tYXhMb29wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RhdHVzID0gdGhpcy5jaGlsZC5fZXhlY3V0ZSh0aWNrKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gU1VDQ0VTUylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGkgPSB0aWNrLmJsYWNrYm9hcmQuc2V0KCdpJywgaSwgdGljay50cmVlLmlkLCB0aGlzLmlkKTtcclxuICAgICAgICByZXR1cm4gc3RhdHVzO1xyXG4gICAgfVxyXG59O1xyXG4iLCJpbXBvcnQgRGVjb3JhdG9yIGZyb20gJy4uL2NvcmUvRGVjb3JhdG9yJztcclxuaW1wb3J0IHsgU1VDQ0VTUywgRVJST1IsIEZBSUxVUkUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgQmFzZU5vZGUgZnJvbSAnLi4vY29yZS9CYXNlTm9kZSc7XHJcbmltcG9ydCBUaWNrIGZyb20gJy4uL2NvcmUvVGljayc7XHJcblxyXG4vKipcclxuICogUmVwZWF0VW50aWxTdWNjZXNzIGlzIGEgZGVjb3JhdG9yIHRoYXQgcmVwZWF0cyB0aGUgdGljayBzaWduYWwgdW50aWwgdGhlXHJcbiAqIG5vZGUgY2hpbGQgcmV0dXJucyBgU1VDQ0VTU2AsIGBSVU5OSU5HYCBvciBgRVJST1JgLiBPcHRpb25hbGx5LCBhIG1heGltdW1cclxuICogbnVtYmVyIG9mIHJlcGV0aXRpb25zIGNhbiBiZSBkZWZpbmVkLlxyXG4gKlxyXG4gKiBAbW9kdWxlIGIzXHJcbiAqIEBjbGFzcyBSZXBlYXRVbnRpbFN1Y2Nlc3NcclxuICogQGV4dGVuZHMgRGVjb3JhdG9yXHJcbiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcGVhdFVudGlsU3VjY2VzcyBleHRlbmRzIERlY29yYXRvclxyXG57XHJcblxyXG4gICAgbWF4TG9vcDogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFJlcGVhdFVudGlsU3VjY2Vzcy5cclxuICAgICAqXHJcbiAgICAgKiAtICoqbWF4TG9vcCoqICgqSW50ZWdlciopIE1heGltdW0gbnVtYmVyIG9mIHJlcGV0aXRpb25zLiBEZWZhdWx0IHRvIC0xIChpbmZpbml0ZSkuXHJcbiAgICAgKiAtICoqY2hpbGQqKiAoKkJhc2VOb2RlKikgVGhlIGNoaWxkIG5vZGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBPYmplY3Qgd2l0aCBwYXJhbWV0ZXJzLlxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHBhcmFtcy5tYXhMb29wIE1heGltdW0gbnVtYmVyIG9mIHJlcGV0aXRpb25zLiBEZWZhdWx0IHRvIC0xIChpbmZpbml0ZSkuXHJcbiAgICAgKiBAcGFyYW0ge0Jhc2VOb2RlfSBwYXJhbXMuY2hpbGQgVGhlIGNoaWxkIG5vZGUuXHJcbiAgICAgKiBAbWVtYmVyb2YgUmVwZWF0VW50aWxTdWNjZXNzXHJcbiAgICAgKiovXHJcbiAgICBjb25zdHJ1Y3RvcihtYXhMb29wID0gLTEsIGNoaWxkOiBCYXNlTm9kZSA9IG51bGwpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoXHJcbiAgICAgICAgICAgIGNoaWxkLFxyXG4gICAgICAgICAgICAnUmVwZWF0VW50aWxTdWNjZXNzJyxcclxuICAgICAgICAgICAgJ1JlcGVhdCBVbnRpbCBTdWNjZXNzJyxcclxuICAgICAgICAgICAgeyBtYXhMb29wOiAtMSB9LFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMubWF4TG9vcCA9IG1heExvb3A7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPcGVuIG1ldGhvZC5cclxuICAgICAqIEBtZXRob2Qgb3BlblxyXG4gICAgICogQHBhcmFtIHtUaWNrfSB0aWNrIEEgdGljayBpbnN0YW5jZS5cclxuICAgICAqKi9cclxuICAgIG9wZW4odGljazogVGljaylcclxuICAgIHtcclxuICAgICAgICB0aWNrLmJsYWNrYm9hcmQuc2V0KCdpJywgMCwgdGljay50cmVlLmlkLCB0aGlzLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRpY2sgbWV0aG9kLlxyXG4gICAgICogQG1ldGhvZCB0aWNrXHJcbiAgICAgKiBAcGFyYW0ge1RpY2t9IHRpY2sgQSB0aWNrIGluc3RhbmNlLlxyXG4gICAgICogQHJldHVybiB7Q29uc3RhbnR9IEEgc3RhdGUgY29uc3RhbnQuXHJcbiAgICAgKiovXHJcbiAgICB0aWNrKHRpY2s6IFRpY2spXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoaWxkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIEVSUk9SO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGkgPSB0aWNrLmJsYWNrYm9hcmQuZ2V0KCdpJywgdGljay50cmVlLmlkLCB0aGlzLmlkKTtcclxuICAgICAgICB2YXIgc3RhdHVzID0gRVJST1I7XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLm1heExvb3AgPCAwIHx8IGkgPCB0aGlzLm1heExvb3ApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdGF0dXMgPSB0aGlzLmNoaWxkLl9leGVjdXRlKHRpY2spO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSBGQUlMVVJFKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaSA9IHRpY2suYmxhY2tib2FyZC5zZXQoJ2knLCBpLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpO1xyXG4gICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICB9XHJcbn07XHJcbiIsImltcG9ydCBEZWNvcmF0b3IgZnJvbSAnLi4vY29yZS9EZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBTVUNDRVNTLCBFUlJPUiwgRkFJTFVSRSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XHJcbmltcG9ydCBCYXNlTm9kZSBmcm9tICcuLi9jb3JlL0Jhc2VOb2RlJztcclxuaW1wb3J0IFRpY2sgZnJvbSAnLi4vY29yZS9UaWNrJztcclxuXHJcbi8qKlxyXG4gKiBSZXBlYXRlciBpcyBhIGRlY29yYXRvciB0aGF0IHJlcGVhdHMgdGhlIHRpY2sgc2lnbmFsIHVudGlsIHRoZSBjaGlsZCBub2RlXHJcbiAqIHJldHVybiBgUlVOTklOR2Agb3IgYEVSUk9SYC4gT3B0aW9uYWxseSwgYSBtYXhpbXVtIG51bWJlciBvZiByZXBldGl0aW9uc1xyXG4gKiBjYW4gYmUgZGVmaW5lZC5cclxuICpcclxuICogQG1vZHVsZSBiM1xyXG4gKiBAY2xhc3MgUmVwZWF0ZXJcclxuICogQGV4dGVuZHMgRGVjb3JhdG9yXHJcbiAqKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcGVhdGVyIGV4dGVuZHMgRGVjb3JhdG9yXHJcbntcclxuXHJcbiAgICBtYXhMb29wOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgTWF4VGltZS5cclxuICAgICAqXHJcbiAgICAgKiAtICoqbWF4TG9vcCoqICgqSW50ZWdlciopIE1heGltdW0gbnVtYmVyIG9mIHJlcGV0aXRpb25zLiBEZWZhdWx0IHRvIC0xIChpbmZpbml0ZSkuXHJcbiAgICAgKiAtICoqY2hpbGQqKiAoKkJhc2VOb2RlKikgVGhlIGNoaWxkIG5vZGUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBPYmplY3Qgd2l0aCBwYXJhbWV0ZXJzLlxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHBhcmFtcy5tYXhMb29wIE1heGltdW0gbnVtYmVyIG9mIHJlcGV0aXRpb25zLiBEZWZhdWx0IHRvIC0xIChpbmZpbml0ZSkuXHJcbiAgICAgKiBAcGFyYW0ge0Jhc2VOb2RlfSBwYXJhbXMuY2hpbGQgVGhlIGNoaWxkIG5vZGUuXHJcbiAgICAgKiBAbWVtYmVyb2YgUmVwZWF0ZXJcclxuICAgICAqKi9cclxuICAgIGNvbnN0cnVjdG9yKG1heExvb3AgPSAtMSwgY2hpbGQ6IEJhc2VOb2RlID0gbnVsbClcclxuICAgIHtcclxuICAgICAgICBzdXBlcihcclxuICAgICAgICAgICAgY2hpbGQsXHJcbiAgICAgICAgICAgICdSZXBlYXRlcicsXHJcbiAgICAgICAgICAgICdSZXBlYXQgPG1heExvb3A+eCcsXHJcbiAgICAgICAgICAgIHsgbWF4TG9vcDogLTEgfSxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLm1heExvb3AgPSBtYXhMb29wO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3BlbiBtZXRob2QuXHJcbiAgICAgKiBAbWV0aG9kIG9wZW5cclxuICAgICAqIEBwYXJhbSB7VGlja30gdGljayBBIHRpY2sgaW5zdGFuY2UuXHJcbiAgICAgKiovXHJcbiAgICBvcGVuKHRpY2s6IFRpY2spXHJcbiAgICB7XHJcbiAgICAgICAgdGljay5ibGFja2JvYXJkLnNldCgnaScsIDAsIHRpY2sudHJlZS5pZCwgdGhpcy5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaWNrIG1ldGhvZC5cclxuICAgICAqIEBtZXRob2QgdGlja1xyXG4gICAgICogQHBhcmFtIHtUaWNrfSB0aWNrIEEgdGljayBpbnN0YW5jZS5cclxuICAgICAqKi9cclxuICAgIHRpY2sodGljazogVGljaylcclxuICAgIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2hpbGQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gRVJST1I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgaSA9IHRpY2suYmxhY2tib2FyZC5nZXQoJ2knLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpO1xyXG4gICAgICAgIHZhciBzdGF0dXMgPSBTVUNDRVNTO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy5tYXhMb29wIDwgMCB8fCBpIDwgdGhpcy5tYXhMb29wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RhdHVzID0gdGhpcy5jaGlsZC5fZXhlY3V0ZSh0aWNrKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gU1VDQ0VTUyB8fCBzdGF0dXMgPT0gRkFJTFVSRSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRpY2suYmxhY2tib2FyZC5zZXQoJ2knLCBpLCB0aWNrLnRyZWUuaWQsIHRoaXMuaWQpO1xyXG4gICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICB9XHJcbn07XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgSW52ZXJ0ZXIgfSBmcm9tICcuL0ludmVydGVyJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaW1pdGVyIH0gZnJvbSAnLi9MaW1pdGVyJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXhUaW1lIH0gZnJvbSAnLi9NYXhUaW1lJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZXBlYXRVbnRpbEZhaWx1cmUgfSBmcm9tICcuL1JlcGVhdFVudGlsRmFpbHVyZSc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVwZWF0VW50aWxTdWNjZXNzIH0gZnJvbSAnLi9SZXBlYXRVbnRpbFN1Y2Nlc3MnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlcGVhdGVyIH0gZnJvbSAnLi9SZXBlYXRlcic7XHJcbiIsImltcG9ydCB7IFZFUlNJT04sIFNVQ0NFU1MsIEZBSUxVUkUsIFJVTk5JTkcsIEVSUk9SLCBDT01QT1NJVEUsIERFQ09SQVRPUiwgQUNUSU9OLCBDT05ESVRJT04gfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGNyZWF0ZVVVSUQgfSBmcm9tICcuL2IzLmZ1bmN0aW9ucyc7XHJcblxyXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi9hY3Rpb25zL0Vycm9yJztcclxuaW1wb3J0IEZhaWxlciBmcm9tICcuL2FjdGlvbnMvRmFpbGVyJztcclxuaW1wb3J0IFJ1bm5lciBmcm9tICcuL2FjdGlvbnMvUnVubmVyJztcclxuaW1wb3J0IFN1Y2NlZWRlciBmcm9tICcuL2FjdGlvbnMvU3VjY2VlZGVyJztcclxuaW1wb3J0IFdhaXQgZnJvbSAnLi9hY3Rpb25zL1dhaXQnO1xyXG5cclxuaW1wb3J0IE1lbVByaW9yaXR5IGZyb20gJy4vY29tcG9zaXRlcy9NZW1Qcmlvcml0eSc7XHJcbmltcG9ydCBNZW1TZXF1ZW5jZSBmcm9tICcuL2NvbXBvc2l0ZXMvTWVtU2VxdWVuY2UnO1xyXG5pbXBvcnQgUHJpb3JpdHkgZnJvbSAnLi9jb21wb3NpdGVzL1ByaW9yaXR5JztcclxuaW1wb3J0IFNlcXVlbmNlIGZyb20gJy4vY29tcG9zaXRlcy9TZXF1ZW5jZSc7XHJcblxyXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vY29yZS9BY3Rpb24nO1xyXG5pbXBvcnQgQmFzZU5vZGUgZnJvbSAnLi9jb3JlL0Jhc2VOb2RlJztcclxuaW1wb3J0IEJlaGF2aW9yVHJlZSBmcm9tICcuL2NvcmUvQmVoYXZpb3JUcmVlJztcclxuaW1wb3J0IEJsYWNrYm9hcmQgZnJvbSAnLi9jb3JlL0JsYWNrYm9hcmQnO1xyXG5pbXBvcnQgQ29tcG9zaXRlIGZyb20gJy4vY29yZS9Db21wb3NpdGUnO1xyXG5pbXBvcnQgQ29uZGl0aW9uIGZyb20gJy4vY29yZS9Db25kaXRpb24nO1xyXG5pbXBvcnQgRGVjb3JhdG9yIGZyb20gJy4vY29yZS9EZWNvcmF0b3InO1xyXG5pbXBvcnQgVGljayBmcm9tICcuL2NvcmUvVGljayc7XHJcblxyXG5pbXBvcnQgSW52ZXJ0ZXIgZnJvbSAnLi9kZWNvcmF0b3JzL0ludmVydGVyJztcclxuaW1wb3J0IExpbWl0ZXIgZnJvbSAnLi9kZWNvcmF0b3JzL0xpbWl0ZXInO1xyXG5pbXBvcnQgTWF4VGltZSBmcm9tICcuL2RlY29yYXRvcnMvTWF4VGltZSc7XHJcbmltcG9ydCBSZXBlYXRVbnRpbEZhaWx1cmUgZnJvbSAnLi9kZWNvcmF0b3JzL1JlcGVhdFVudGlsRmFpbHVyZSc7XHJcbmltcG9ydCBSZXBlYXRVbnRpbFN1Y2Nlc3MgZnJvbSAnLi9kZWNvcmF0b3JzL1JlcGVhdFVudGlsU3VjY2Vzcyc7XHJcbmltcG9ydCBSZXBlYXRlciBmcm9tICcuL2RlY29yYXRvcnMvUmVwZWF0ZXInO1xyXG5cclxuZXhwb3J0XHJcbntcclxuICAgIFZFUlNJT04sXHJcbiAgICBTVUNDRVNTLFxyXG4gICAgRkFJTFVSRSxcclxuICAgIFJVTk5JTkcsXHJcbiAgICBFUlJPUixcclxuICAgIENPTVBPU0lURSxcclxuICAgIERFQ09SQVRPUixcclxuICAgIEFDVElPTixcclxuICAgIENPTkRJVElPTixcclxuICAgIGNyZWF0ZVVVSUQsXHJcbiAgICBFcnJvcixcclxuICAgIEZhaWxlcixcclxuICAgIFJ1bm5lcixcclxuICAgIFN1Y2NlZWRlcixcclxuICAgIFdhaXQsXHJcbiAgICBNZW1Qcmlvcml0eSxcclxuICAgIE1lbVNlcXVlbmNlLFxyXG4gICAgUHJpb3JpdHksXHJcbiAgICBTZXF1ZW5jZSxcclxuICAgIEFjdGlvbixcclxuICAgIEJhc2VOb2RlLFxyXG4gICAgQmVoYXZpb3JUcmVlLFxyXG4gICAgQmxhY2tib2FyZCxcclxuICAgIENvbXBvc2l0ZSxcclxuICAgIENvbmRpdGlvbixcclxuICAgIERlY29yYXRvcixcclxuICAgIFRpY2ssXHJcbiAgICBJbnZlcnRlcixcclxuICAgIExpbWl0ZXIsXHJcbiAgICBNYXhUaW1lLFxyXG4gICAgUmVwZWF0VW50aWxGYWlsdXJlLFxyXG4gICAgUmVwZWF0VW50aWxTdWNjZXNzLFxyXG4gICAgUmVwZWF0ZXJcclxufTtcclxuIl19
