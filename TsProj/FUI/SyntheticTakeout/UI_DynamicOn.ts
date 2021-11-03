/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_T1 from "./UI_T1";
import UI_T2 from "./UI_T2";
import UI_T3 from "./UI_T3";
import UI_T4 from "./UI_T4";
import UI_T5 from "./UI_T5";
import UI_T6 from "./UI_T6";
import UI_T7 from "./UI_T7";
import UI_T8 from "./UI_T8";

import * as fgui from "ue"
export default class UI_DynamicOn {

	public m_T1:UI_T1;
	public m_T2:UI_T2;
	public m_T3:UI_T3;
	public m_T4:UI_T4;
	public m_T5:UI_T5;
	public m_T6:UI_T6;
	public m_T7:UI_T7;
	public m_T8:UI_T8;
	public static URL:string = "ui://tqsc8htvwfi049";
	public static Package:string  = "SyntheticTakeout";
	public static Component:string  = "DynamicOn";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_DynamicOn.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_DynamicOn {
		var obj = new UI_DynamicOn();
		if(component==null){component = UI_DynamicOn.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_T1 =  UI_T1.createInstance(component.GetChild("T1") as fgui.GComponent, WorldContextObject);
		this.m_T2 =  UI_T2.createInstance(component.GetChild("T2") as fgui.GComponent, WorldContextObject);
		this.m_T3 =  UI_T3.createInstance(component.GetChild("T3") as fgui.GComponent, WorldContextObject);
		this.m_T4 =  UI_T4.createInstance(component.GetChild("T4") as fgui.GComponent, WorldContextObject);
		this.m_T5 =  UI_T5.createInstance(component.GetChild("T5") as fgui.GComponent, WorldContextObject);
		this.m_T6 =  UI_T6.createInstance(component.GetChild("T6") as fgui.GComponent, WorldContextObject);
		this.m_T7 =  UI_T7.createInstance(component.GetChild("T7") as fgui.GComponent, WorldContextObject);
		this.m_T8 =  UI_T8.createInstance(component.GetChild("T8") as fgui.GComponent, WorldContextObject);
	}
}