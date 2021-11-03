/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_BtnReturn from "./UI_BtnReturn";

import * as fgui from "ue"
export default class UI_TownIndex {

	public m_n0:fgui.GList;
	public m_BtnReturn:UI_BtnReturn;
	public static URL:string = "ui://7d8qawjuefhc0";
	public static Package:string  = "Town";
	public static Component:string  = "TownIndex";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_TownIndex.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_TownIndex {
		var obj = new UI_TownIndex();
		if(component==null){component = UI_TownIndex.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_n0 = <fgui.GList>component.GetChild("n0");
		this.m_BtnReturn =  UI_BtnReturn.createInstance(component.GetChild("BtnReturn") as fgui.GComponent, WorldContextObject);
	}
}