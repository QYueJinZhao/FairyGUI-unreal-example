"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_BtnReturn_1 = require("./UI_BtnReturn");
const fgui = require("ue");
class UI_TownIndex {
    m_n0;
    m_BtnReturn;
    static URL = "ui://7d8qawjuefhc0";
    static Package = "Town";
    static Component = "TownIndex";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_TownIndex.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_TownIndex();
        if (component == null) {
            component = UI_TownIndex.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_n0 = component.GetChild("n0");
        this.m_BtnReturn = UI_BtnReturn_1.default.createInstance(component.GetChild("BtnReturn"), WorldContextObject);
    }
}
exports.default = UI_TownIndex;
//# sourceMappingURL=UI_TownIndex.js.map