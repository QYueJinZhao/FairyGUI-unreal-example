/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_Mask {

	public m_n10:fgui.GImage;
	public static URL:string = "ui://bk2v2a36ivrz0";
	public static Package:string  = "BuiltInTheCompany";
	public static Component:string  = "Mask";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Mask.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Mask {
		var obj = new UI_Mask();
		if(component==null){component = UI_Mask.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_n10 = <fgui.GImage>component.GetChild("n10");
	}
}