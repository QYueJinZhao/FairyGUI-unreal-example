/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnEvent {

	public m_button:fgui.GController;
	public m_Bg:fgui.GImage;
	public m_icon:fgui.GLoader;
	public m_time:fgui.GTextField;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://7zka63zlqqq9g";
	public static Package:string  = "TownEvent";
	public static Component:string  = "BtnEvent";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnEvent.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnEvent {
		var obj = new UI_BtnEvent();
		if(component==null){component = UI_BtnEvent.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_Bg = <fgui.GImage>component.GetChild("Bg");
		this.m_icon = <fgui.GLoader>component.GetChild("icon");
		this.m_time = <fgui.GTextField>component.GetChild("time");
		this.m_t0 = component.GetTransition("t0");
	}
}