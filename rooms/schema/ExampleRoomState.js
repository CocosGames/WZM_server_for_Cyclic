"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleRoomState = exports.ExampleNetworkedUser = exports.ExampleNetworkedEntity = void 0;
const schema_1 = require("@colyseus/schema");
class ExampleNetworkedEntity extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.creationId = "";
        this.xPos = 0;
        this.yPos = 0;
        this.zPos = 0;
        this.xRot = 0;
        this.yRot = 0;
        this.zRot = 0;
        this.wRot = 0;
        this.xScale = 1;
        this.yScale = 1;
        this.zScale = 1;
        this.xVel = 0;
        this.yVel = 0;
        this.zVel = 0;
        this.attributes = new schema_1.MapSchema();
    }
}
__decorate([
    (0, schema_1.type)("string")
], ExampleNetworkedEntity.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)("string")
], ExampleNetworkedEntity.prototype, "ownerId", void 0);
__decorate([
    (0, schema_1.type)("string")
], ExampleNetworkedEntity.prototype, "creationId", void 0);
__decorate([
    (0, schema_1.type)("number")
], ExampleNetworkedEntity.prototype, "xPos", void 0);
__decorate([
    (0, schema_1.type)("number")
], ExampleNetworkedEntity.prototype, "yPos", void 0);
__decorate([
    (0, schema_1.type)("number")
], ExampleNetworkedEntity.prototype, "zPos", void 0);
__decorate([
    (0, schema_1.type)("number")
], ExampleNetworkedEntity.prototype, "xRot", void 0);
__decorate([
    (0, schema_1.type)("number")
], ExampleNetworkedEntity.prototype, "yRot", void 0);
__decorate([
    (0, schema_1.type)("number")
], ExampleNetworkedEntity.prototype, "zRot", void 0);
__decorate([
    (0, schema_1.type)("number")
], ExampleNetworkedEntity.prototype, "wRot", void 0);
__decorate([
    (0, schema_1.type)("number")
], ExampleNetworkedEntity.prototype, "xScale", void 0);
__decorate([
    (0, schema_1.type)("number")
], ExampleNetworkedEntity.prototype, "yScale", void 0);
__decorate([
    (0, schema_1.type)("number")
], ExampleNetworkedEntity.prototype, "zScale", void 0);
__decorate([
    (0, schema_1.type)("number")
], ExampleNetworkedEntity.prototype, "timestamp", void 0);
__decorate([
    (0, schema_1.type)("number")
], ExampleNetworkedEntity.prototype, "xVel", void 0);
__decorate([
    (0, schema_1.type)("number")
], ExampleNetworkedEntity.prototype, "yVel", void 0);
__decorate([
    (0, schema_1.type)("number")
], ExampleNetworkedEntity.prototype, "zVel", void 0);
__decorate([
    (0, schema_1.type)({ map: "string" })
], ExampleNetworkedEntity.prototype, "attributes", void 0);
exports.ExampleNetworkedEntity = ExampleNetworkedEntity;
class ExampleNetworkedUser extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.attributes = new schema_1.MapSchema();
    }
}
__decorate([
    (0, schema_1.type)("string")
], ExampleNetworkedUser.prototype, "sessionId", void 0);
__decorate([
    (0, schema_1.type)("boolean")
], ExampleNetworkedUser.prototype, "connected", void 0);
__decorate([
    (0, schema_1.type)("number")
], ExampleNetworkedUser.prototype, "timestamp", void 0);
__decorate([
    (0, schema_1.type)({ map: "string" })
], ExampleNetworkedUser.prototype, "attributes", void 0);
exports.ExampleNetworkedUser = ExampleNetworkedUser;
class ExampleRoomState extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.networkedEntities = new schema_1.MapSchema();
        this.networkedUsers = new schema_1.MapSchema();
        this.attributes = new schema_1.MapSchema();
    }
}
__decorate([
    (0, schema_1.type)({ map: ExampleNetworkedEntity })
], ExampleRoomState.prototype, "networkedEntities", void 0);
__decorate([
    (0, schema_1.type)({ map: ExampleNetworkedUser })
], ExampleRoomState.prototype, "networkedUsers", void 0);
__decorate([
    (0, schema_1.type)({ map: "string" })
], ExampleRoomState.prototype, "attributes", void 0);
exports.ExampleRoomState = ExampleRoomState;
