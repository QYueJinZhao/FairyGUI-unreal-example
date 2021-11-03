/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_BtnZhanqiVillage from "./UI_BtnZhanqiVillage";
import UI_BtnSanya from "./UI_BtnSanya";
import UI_BtnHarbin from "./UI_BtnHarbin";
import UI_BtnUrumqi from "./UI_BtnUrumqi";
import UI_BtnShanghai from "./UI_BtnShanghai";

import * as fgui from "ue"
export default class UI_Town {

	public m_n71:fgui.GImage;
	public m_BtnZhanqiVillage:UI_BtnZhanqiVillage;
	public m_BtnSanya:UI_BtnSanya;
	public m_BtnHarbin:UI_BtnHarbin;
	public m_BtnUrumqi:UI_BtnUrumqi;
	public m_BtnShanghai:UI_BtnShanghai;
	public m_Title:fgui.GImage;
	public static URL:string = "ui://7d8qawjuq131f";
	public static Package:string  = "Town";
	public static Component:string  = "Town";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Town.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Town {
		var obj = new UI_Town();
		if(component==null){component = UI_Town.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_n71 = <fgui.GImage>component.GetChild("n71");
		this.m_BtnZhanqiVillage =  UI_BtnZhanqiVillage.createInstance(component.GetChild("BtnZhanqiVillage") as fgui.GComponent, WorldContextObject);
		this.m_BtnSanya =  UI_BtnSanya.createInstance(component.GetChild("BtnSanya") as fgui.GComponent, WorldContextObject);
		this.m_BtnHarbin =  UI_BtnHarbin.createInstance(component.GetChild("BtnHarbin") as fgui.GComponent, WorldContextObject);
		this.m_BtnUrumqi =  UI_BtnUrumqi.createInstance(component.GetChild("BtnUrumqi") as fgui.GComponent, WorldContextObject);
		this.m_BtnShanghai =  UI_BtnShanghai.createInstance(component.GetChild("BtnShanghai") as fgui.GComponent, WorldContextObject);
		this.m_Title = <fgui.GImage>component.GetChild("Title");
	}
}