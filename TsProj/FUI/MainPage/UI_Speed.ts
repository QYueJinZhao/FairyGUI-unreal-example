/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_Speed {

	public m_bar:fgui.GImage;
	public m_title:fgui.GTextField;
	public m_Text:fgui.GTextField;
	public static URL:string = "ui://sn18zihk90iz16";
	public static Package:string  = "MainPage";
	public static Component:string  = "Speed";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Speed.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Speed {
		var obj = new UI_Speed();
		if(component==null){component = UI_Speed.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_bar = <fgui.GImage>component.GetChild("bar");
		this.m_title = <fgui.GTextField>component.GetChild("title");
		this.m_Text = <fgui.GTextField>component.GetChild("Text");
	}
}