/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_DownloadBar from "./UI_DownloadBar";
import UI_VersionUpdatePopup from "./UI_VersionUpdatePopup";

import * as fgui from "ue"
export default class UI_VersionUpdate {

	public m_c1:fgui.GController;
	public m_BG:fgui.GImage;
	public m_n16:fgui.GGraph;
	public m_DownloadBar:UI_DownloadBar;
	public m_VersionUpdatePopup:UI_VersionUpdatePopup;
	public m_LOGO:fgui.GLoader;
	public m_ImgText:fgui.GLoader;
	public m_spot1:fgui.GImage;
	public m_spot2:fgui.GImage;
	public m_spot3:fgui.GImage;
	public m_spot4:fgui.GImage;
	public m_loading:fgui.GGroup;
	public m_t0:fgui.Transition;
	public m_t1:fgui.Transition;
	public static URL:string = "ui://644171sttexd0";
	public static Package:string  = "VersionUpdate";
	public static Component:string  = "VersionUpdate";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_VersionUpdate.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_VersionUpdate {
		var obj = new UI_VersionUpdate();
		if(component==null){component = UI_VersionUpdate.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_c1 = component.GetController("c1");
		this.m_BG = <fgui.GImage>component.GetChild("BG");
		this.m_n16 = <fgui.GGraph>component.GetChild("n16");
		this.m_DownloadBar =  UI_DownloadBar.createInstance(component.GetChild("DownloadBar") as fgui.GComponent, WorldContextObject);
		this.m_VersionUpdatePopup =  UI_VersionUpdatePopup.createInstance(component.GetChild("VersionUpdatePopup") as fgui.GComponent, WorldContextObject);
		this.m_LOGO = <fgui.GLoader>component.GetChild("LOGO");
		this.m_ImgText = <fgui.GLoader>component.GetChild("ImgText");
		this.m_spot1 = <fgui.GImage>component.GetChild("spot1");
		this.m_spot2 = <fgui.GImage>component.GetChild("spot2");
		this.m_spot3 = <fgui.GImage>component.GetChild("spot3");
		this.m_spot4 = <fgui.GImage>component.GetChild("spot4");
		this.m_loading = <fgui.GGroup>component.GetChild("loading");
		this.m_t0 = component.GetTransition("t0");
		this.m_t1 = component.GetTransition("t1");
	}
}