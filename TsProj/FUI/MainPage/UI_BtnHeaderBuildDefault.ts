/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnHeaderBuildDefault {

	public m_button:fgui.GController;
	public m_btn:fgui.GImage;
	public static URL:string = "ui://sn18zihkhb0y1x";
	public static Package:string  = "MainPage";
	public static Component:string  = "BtnHeaderBuildDefault";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnHeaderBuildDefault.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnHeaderBuildDefault {
		var obj = new UI_BtnHeaderBuildDefault();
		if(component==null){component = UI_BtnHeaderBuildDefault.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_btn = <fgui.GImage>component.GetChild("btn");
	}
}