"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var fgui = require("ue");
var UI_LongDisplayButton = /** @class */ (function (_super) {
    __extends(UI_LongDisplayButton, _super);
    function UI_LongDisplayButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UI_LongDisplayButton.CreateComponent = function (WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_LongDisplayButton.URL, WorldContextObject, fgui.GComponent.StaticClass());
    };
    UI_LongDisplayButton.createInstance = function (component, WorldContextObject) {
        var obj = new UI_LongDisplayButton();
        if (component == null) {
            component = UI_LongDisplayButton.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    };
    UI_LongDisplayButton.prototype.Bind = function (component, WorldContextObject) {
        this.view = component;
        this.m_BtnSignInIcon = component.GetChild("BtnSignInIcon");
        this.m_BtnOnlineIcon = component.GetChild("BtnOnlineIcon");
        this.m_BtnTurntableIcon = component.GetChild("BtnTurntableIcon");
        this.m_BtnLandmark = component.GetChild("BtnLandmark");
        this.m_BtnDailyMission = component.GetChild("BtnDailyMission");
    };
    UI_LongDisplayButton.URL = "ui://sn18zihk9xrpf";
    UI_LongDisplayButton.Package = "MainPage";
    UI_LongDisplayButton.Component = "LongDisplayButton";
    return UI_LongDisplayButton;
}(fgui.FairyGuiView));
exports["default"] = UI_LongDisplayButton;
