/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnInteraction {

	public m_button:fgui.GController;
	public m_Interaction:fgui.GImage;
	public static URL:string = "ui://tqsc8htvpip18";
	public static Package:string  = "SyntheticTakeout";
	public static Component:string  = "BtnInteraction";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnInteraction.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnInteraction {
		var obj = new UI_BtnInteraction();
		if(component==null){component = UI_BtnInteraction.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_Interaction = <fgui.GImage>component.GetChild("Interaction");
	}
}