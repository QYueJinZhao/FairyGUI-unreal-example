"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_CompanyWindowframe_1 = require("./UI_CompanyWindowframe");
const fgui = require("ue");
class UI_CompanyRoomManage {
    m_frame;
    m_t0;
    static URL = "ui://sn18zihkhb0y1m";
    static Package = "MainPage";
    static Component = "CompanyRoomManage";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_CompanyRoomManage.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_CompanyRoomManage();
        if (component == null) {
            component = UI_CompanyRoomManage.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_frame = UI_CompanyWindowframe_1.default.createInstance(component.GetChild("frame"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_CompanyRoomManage;
//# sourceMappingURL=UI_CompanyRoomManage.js.map