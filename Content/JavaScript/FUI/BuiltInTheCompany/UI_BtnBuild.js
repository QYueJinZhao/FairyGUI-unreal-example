"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_Frame_1 = require("./UI_Frame");
const fgui = require("ue");
class UI_BtnBuild {
    m_button;
    m_bottom;
    m_build;
    m_Frame;
    static URL = "ui://bk2v2a36ivrz9";
    static Package = "BuiltInTheCompany";
    static Component = "BtnBuild";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnBuild.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnBuild();
        if (component == null) {
            component = UI_BtnBuild.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_bottom = component.GetChild("bottom");
        this.m_build = component.GetChild("build");
        this.m_Frame = UI_Frame_1.default.createInstance(component.GetChild("Frame"), WorldContextObject);
    }
}
exports.default = UI_BtnBuild;
//# sourceMappingURL=UI_BtnBuild.js.map