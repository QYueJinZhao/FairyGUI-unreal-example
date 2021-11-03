/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnOnlineIcon {

	public m_button:fgui.GController;
	public m_Bg:fgui.GImage;
	public m_Purse:fgui.GImage;
	public m_time:fgui.GTextField;
	public static URL:string = "ui://5eksxjp2hktbf";
	public static Package:string  = "OnlineDuration";
	public static Component:string  = "BtnOnlineIcon";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnOnlineIcon.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnOnlineIcon {
		var obj = new UI_BtnOnlineIcon();
		if(component==null){component = UI_BtnOnlineIcon.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_Bg = <fgui.GImage>component.GetChild("Bg");
		this.m_Purse = <fgui.GImage>component.GetChild("Purse");
		this.m_time = <fgui.GTextField>component.GetChild("time");
	}
}