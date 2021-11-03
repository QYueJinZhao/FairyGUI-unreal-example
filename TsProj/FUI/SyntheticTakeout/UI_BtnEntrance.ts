/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnEntrance {

	public m_button:fgui.GController;
	public m_EntranceBg:fgui.GImage;
	public m_EntranceIcon:fgui.GImage;
	public static URL:string = "ui://tqsc8htvj17p1i";
	public static Package:string  = "SyntheticTakeout";
	public static Component:string  = "BtnEntrance";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnEntrance.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnEntrance {
		var obj = new UI_BtnEntrance();
		if(component==null){component = UI_BtnEntrance.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_EntranceBg = <fgui.GImage>component.GetChild("EntranceBg");
		this.m_EntranceIcon = <fgui.GImage>component.GetChild("EntranceIcon");
	}
}