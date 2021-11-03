/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_LOGO {

	public m_Bottom:fgui.GGraph;
	public m_LOGO2:fgui.GImage;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://644171sttexdf";
	public static Package:string  = "VersionUpdate";
	public static Component:string  = "LOGO";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_LOGO.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_LOGO {
		var obj = new UI_LOGO();
		if(component==null){component = UI_LOGO.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_Bottom = <fgui.GGraph>component.GetChild("Bottom");
		this.m_LOGO2 = <fgui.GImage>component.GetChild("LOGO2");
		this.m_t0 = component.GetTransition("t0");
	}
}