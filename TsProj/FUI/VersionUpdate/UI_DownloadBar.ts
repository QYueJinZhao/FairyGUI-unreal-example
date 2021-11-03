/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_DownloadBar {

	public m_n0:fgui.GImage;
	public m_bar:fgui.GImage;
	public m_BarBottom2:fgui.GImage;
	public m_title:fgui.GTextField;
	public static URL:string = "ui://644171sttexd5";
	public static Package:string  = "VersionUpdate";
	public static Component:string  = "DownloadBar";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_DownloadBar.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_DownloadBar {
		var obj = new UI_DownloadBar();
		if(component==null){component = UI_DownloadBar.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_n0 = <fgui.GImage>component.GetChild("n0");
		this.m_bar = <fgui.GImage>component.GetChild("bar");
		this.m_BarBottom2 = <fgui.GImage>component.GetChild("BarBottom2");
		this.m_title = <fgui.GTextField>component.GetChild("title");
	}
}