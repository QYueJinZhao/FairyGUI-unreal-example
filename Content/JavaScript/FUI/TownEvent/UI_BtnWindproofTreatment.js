"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnWindproofTreatment {
    m_button;
    m_Bg;
    static URL = "ui://7zka63zlqqq9f";
    static Package = "TownEvent";
    static Component = "BtnWindproofTreatment";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnWindproofTreatment.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnWindproofTreatment();
        if (component == null) {
            component = UI_BtnWindproofTreatment.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_Bg = component.GetChild("Bg");
    }
}
exports.default = UI_BtnWindproofTreatment;
//# sourceMappingURL=UI_BtnWindproofTreatment.js.map