/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_BtnCompany from "./UI_BtnCompany";
import UI_BtnTown from "./UI_BtnTown";

import * as fgui from "ue"
export default class UI_Switch {

	public m_c1:fgui.GController;
	public m_BtnCompany:UI_BtnCompany;
	public m_BtnTown:UI_BtnTown;
	public m_t0:fgui.Transition;
	public m_t1:fgui.Transition;
	public static URL:string = "ui://sn18zihkq13148";
	public static Package:string  = "MainPage";
	public static Component:string  = "Switch";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Switch.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Switch {
		var obj = new UI_Switch();
		if(component==null){component = UI_Switch.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_c1 = component.GetController("c1");
		this.m_BtnCompany =  UI_BtnCompany.createInstance(component.GetChild("BtnCompany") as fgui.GComponent, WorldContextObject);
		this.m_BtnTown =  UI_BtnTown.createInstance(component.GetChild("BtnTown") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
		this.m_t1 = component.GetTransition("t1");
	}
}