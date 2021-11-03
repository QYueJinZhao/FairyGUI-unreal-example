"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_DownloadBar {
    m_n0;
    m_bar;
    m_BarBottom2;
    m_title;
    static URL = "ui://644171sttexd5";
    static Package = "VersionUpdate";
    static Component = "DownloadBar";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_DownloadBar.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_DownloadBar();
        if (component == null) {
            component = UI_DownloadBar.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_n0 = component.GetChild("n0");
        this.m_bar = component.GetChild("bar");
        this.m_BarBottom2 = component.GetChild("BarBottom2");
        this.m_title = component.GetChild("title");
    }
}
exports.default = UI_DownloadBar;
//# sourceMappingURL=UI_DownloadBar.js.map