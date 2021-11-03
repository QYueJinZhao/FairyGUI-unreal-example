/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnHR {

	public m_button:fgui.GController;
	public m_BG:fgui.GImage;
	public m_Coin:fgui.GImage;
	public m_text:fgui.GTextField;
	public static URL:string = "ui://sn18zihkmos411";
	public static Package:string  = "MainPage";
	public static Component:string  = "BtnHR";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnHR.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnHR {
		var obj = new UI_BtnHR();
		if(component==null){component = UI_BtnHR.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_BG = <fgui.GImage>component.GetChild("BG");
		this.m_Coin = <fgui.GImage>component.GetChild("Coin");
		this.m_text = <fgui.GTextField>component.GetChild("text");
	}
}