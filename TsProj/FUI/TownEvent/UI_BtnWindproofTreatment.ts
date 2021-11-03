/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnWindproofTreatment {

	public m_button:fgui.GController;
	public m_Bg:fgui.GImage;
	public static URL:string = "ui://7zka63zlqqq9f";
	public static Package:string  = "TownEvent";
	public static Component:string  = "BtnWindproofTreatment";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnWindproofTreatment.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnWindproofTreatment {
		var obj = new UI_BtnWindproofTreatment();
		if(component==null){component = UI_BtnWindproofTreatment.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_Bg = <fgui.GImage>component.GetChild("Bg");
	}
}