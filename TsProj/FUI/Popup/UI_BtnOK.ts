/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnOK {

	public m_button:fgui.GController;
	public m_btn:fgui.GImage;
	public static URL:string = "ui://n16w4m5pqb9d38";
	public static Package:string  = "Popup";
	public static Component:string  = "BtnOK";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnOK.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnOK {
		var obj = new UI_BtnOK();
		if(component==null){component = UI_BtnOK.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_btn = <fgui.GImage>component.GetChild("btn");
	}
}