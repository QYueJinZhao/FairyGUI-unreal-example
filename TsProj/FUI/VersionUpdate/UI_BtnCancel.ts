/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnCancel {

	public m_button:fgui.GController;
	public m_btn:fgui.GImage;
	public static URL:string = "ui://644171sttexd6";
	public static Package:string  = "VersionUpdate";
	public static Component:string  = "BtnCancel";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnCancel.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnCancel {
		var obj = new UI_BtnCancel();
		if(component==null){component = UI_BtnCancel.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_btn = <fgui.GImage>component.GetChild("btn");
	}
}