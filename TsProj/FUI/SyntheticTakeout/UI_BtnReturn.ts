/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnReturn {

	public m_button:fgui.GController;
	public m_Return:fgui.GImage;
	public static URL:string = "ui://tqsc8htvveax17";
	public static Package:string  = "SyntheticTakeout";
	public static Component:string  = "BtnReturn";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnReturn.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnReturn {
		var obj = new UI_BtnReturn();
		if(component==null){component = UI_BtnReturn.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_Return = <fgui.GImage>component.GetChild("Return");
	}
}