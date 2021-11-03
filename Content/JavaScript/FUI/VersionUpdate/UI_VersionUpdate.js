"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_DownloadBar_1 = require("./UI_DownloadBar");
const UI_VersionUpdatePopup_1 = require("./UI_VersionUpdatePopup");
const fgui = require("ue");
class UI_VersionUpdate {
    m_c1;
    m_BG;
    m_n16;
    m_DownloadBar;
    m_VersionUpdatePopup;
    m_LOGO;
    m_ImgText;
    m_spot1;
    m_spot2;
    m_spot3;
    m_spot4;
    m_loading;
    m_t0;
    m_t1;
    static URL = "ui://644171sttexd0";
    static Package = "VersionUpdate";
    static Component = "VersionUpdate";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_VersionUpdate.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_VersionUpdate();
        if (component == null) {
            component = UI_VersionUpdate.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_BG = component.GetChild("BG");
        this.m_n16 = component.GetChild("n16");
        this.m_DownloadBar = UI_DownloadBar_1.default.createInstance(component.GetChild("DownloadBar"), WorldContextObject);
        this.m_VersionUpdatePopup = UI_VersionUpdatePopup_1.default.createInstance(component.GetChild("VersionUpdatePopup"), WorldContextObject);
        this.m_LOGO = component.GetChild("LOGO");
        this.m_ImgText = component.GetChild("ImgText");
        this.m_spot1 = component.GetChild("spot1");
        this.m_spot2 = component.GetChild("spot2");
        this.m_spot3 = component.GetChild("spot3");
        this.m_spot4 = component.GetChild("spot4");
        this.m_loading = component.GetChild("loading");
        this.m_t0 = component.GetTransition("t0");
        this.m_t1 = component.GetTransition("t1");
    }
}
exports.default = UI_VersionUpdate;
//# sourceMappingURL=UI_VersionUpdate.js.map