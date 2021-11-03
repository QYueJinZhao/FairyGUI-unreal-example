/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnFire {

	public m_button:fgui.GController;
	public m_BG:fgui.GImage;
	public m_Text:fgui.GTextField;
	public static URL:string = "ui://sn18zihk90iz15";
	public static Package:string  = "MainPage";
	public static Component:string  = "BtnFire";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnFire.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnFire {
		var obj = new UI_BtnFire();
		if(component==null){component = UI_BtnFire.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_BG = <fgui.GImage>component.GetChild("BG");
		this.m_Text = <fgui.GTextField>component.GetChild("Text");
	}
}