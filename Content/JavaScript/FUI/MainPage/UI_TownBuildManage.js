"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_TownWindowframe_1 = require("./UI_TownWindowframe");
const fgui = require("ue");
class UI_TownBuildManage {
    m_windowframe;
    static URL = "ui://sn18zihkhb0y2h";
    static Package = "MainPage";
    static Component = "TownBuildManage";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_TownBuildManage.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_TownBuildManage();
        if (component == null) {
            component = UI_TownBuildManage.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_windowframe = UI_TownWindowframe_1.default.createInstance(component.GetChild("windowframe"), WorldContextObject);
    }
}
exports.default = UI_TownBuildManage;
//# sourceMappingURL=UI_TownBuildManage.js.map