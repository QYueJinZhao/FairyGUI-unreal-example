/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnComplete {

	public m_button:fgui.GController;
	public m_BtnBg:fgui.GImage;
	public m_Complete:fgui.GImage;
	public static URL:string = "ui://tqsc8htvpip1q";
	public static Package:string  = "SyntheticTakeout";
	public static Component:string  = "BtnComplete";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnComplete.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnComplete {
		var obj = new UI_BtnComplete();
		if(component==null){component = UI_BtnComplete.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_BtnBg = <fgui.GImage>component.GetChild("BtnBg");
		this.m_Complete = <fgui.GImage>component.GetChild("Complete");
	}
}