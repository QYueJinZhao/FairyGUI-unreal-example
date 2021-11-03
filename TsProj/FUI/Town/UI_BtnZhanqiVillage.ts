/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_lock1 from "./UI_lock1";
import UI_Overview from "./UI_Overview";

import * as fgui from "ue"
export default class UI_BtnZhanqiVillage {

	public m_button:fgui.GController;
	public m_c1:fgui.GController;
	public m_Bg:fgui.GImage;
	public m_aperture:fgui.GImage;
	public m_NameBottom:fgui.GImage;
	public m_Name:fgui.GTextField;
	public m_lock:UI_lock1;
	public m_Overview:UI_Overview;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://7d8qawjuq131g";
	public static Package:string  = "Town";
	public static Component:string  = "BtnZhanqiVillage";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnZhanqiVillage.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnZhanqiVillage {
		var obj = new UI_BtnZhanqiVillage();
		if(component==null){component = UI_BtnZhanqiVillage.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_c1 = component.GetController("c1");
		this.m_Bg = <fgui.GImage>component.GetChild("Bg");
		this.m_aperture = <fgui.GImage>component.GetChild("aperture");
		this.m_NameBottom = <fgui.GImage>component.GetChild("NameBottom");
		this.m_Name = <fgui.GTextField>component.GetChild("Name");
		this.m_lock =  UI_lock1.createInstance(component.GetChild("lock") as fgui.GComponent, WorldContextObject);
		this.m_Overview =  UI_Overview.createInstance(component.GetChild("Overview") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
	}
}