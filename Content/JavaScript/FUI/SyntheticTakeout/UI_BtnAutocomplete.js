"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnAutocomplete {
    m_button;
    m_Autocomplete;
    static URL = "ui://tqsc8htvpip16";
    static Package = "SyntheticTakeout";
    static Component = "BtnAutocomplete";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnAutocomplete.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnAutocomplete();
        if (component == null) {
            component = UI_BtnAutocomplete.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_Autocomplete = component.GetChild("Autocomplete");
    }
}
exports.default = UI_BtnAutocomplete;
//# sourceMappingURL=UI_BtnAutocomplete.js.map