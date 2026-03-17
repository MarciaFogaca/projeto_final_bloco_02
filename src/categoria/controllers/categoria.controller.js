"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaController = void 0;
var common_1 = require("@nestjs/common");
var CategoriaController = function () {
    var _classDecorators = [(0, common_1.Controller)("/categorias")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _findAll_decorators;
    var _findById_decorators;
    var _findByDescricao_decorators;
    var _create_decorators;
    var _update_decorators;
    var _delete_decorators;
    var CategoriaController = _classThis = /** @class */ (function () {
        function CategoriaController_1(categoriaService) {
            this.categoriaService = (__runInitializers(this, _instanceExtraInitializers), categoriaService);
        }
        CategoriaController_1.prototype.findAll = function () { return this.categoriaService.findAll(); };
        CategoriaController_1.prototype.findById = function (id) {
            return this.categoriaService.findById(id);
        };
        CategoriaController_1.prototype.findByDescricao = function (descricao) {
            return this.categoriaService.findByDescricao(descricao);
        };
        CategoriaController_1.prototype.create = function (categoria) {
            return this.categoriaService.create(categoria);
        };
        CategoriaController_1.prototype.update = function (categoria) {
            return this.categoriaService.update(categoria);
        };
        CategoriaController_1.prototype.delete = function (id) {
            return this.categoriaService.delete(id);
        };
        return CategoriaController_1;
    }());
    __setFunctionName(_classThis, "CategoriaController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _findAll_decorators = [(0, common_1.Get)()];
        _findById_decorators = [(0, common_1.Get)('/:id')];
        _findByDescricao_decorators = [(0, common_1.Get)('/descricao/:descricao')];
        _create_decorators = [(0, common_1.Post)(), (0, common_1.HttpCode)(common_1.HttpStatus.CREATED)];
        _update_decorators = [(0, common_1.Put)()];
        _delete_decorators = [(0, common_1.Delete)('/:id'), (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT)];
        __esDecorate(_classThis, null, _findAll_decorators, { kind: "method", name: "findAll", static: false, private: false, access: { has: function (obj) { return "findAll" in obj; }, get: function (obj) { return obj.findAll; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findById_decorators, { kind: "method", name: "findById", static: false, private: false, access: { has: function (obj) { return "findById" in obj; }, get: function (obj) { return obj.findById; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _findByDescricao_decorators, { kind: "method", name: "findByDescricao", static: false, private: false, access: { has: function (obj) { return "findByDescricao" in obj; }, get: function (obj) { return obj.findByDescricao; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _create_decorators, { kind: "method", name: "create", static: false, private: false, access: { has: function (obj) { return "create" in obj; }, get: function (obj) { return obj.create; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _update_decorators, { kind: "method", name: "update", static: false, private: false, access: { has: function (obj) { return "update" in obj; }, get: function (obj) { return obj.update; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _delete_decorators, { kind: "method", name: "delete", static: false, private: false, access: { has: function (obj) { return "delete" in obj; }, get: function (obj) { return obj.delete; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CategoriaController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CategoriaController = _classThis;
}();
exports.CategoriaController = CategoriaController;
