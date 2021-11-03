/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Take_outFood4 from "./UI_Take_outFood4";
import UI_Take_outFood3 from "./UI_Take_outFood3";
import UI_Take_outFood2 from "./UI_Take_outFood2";
import UI_Take_outFood1 from "./UI_Take_outFood1";

import * as fgui from "ue"
export default class UI_SettlementDynamicEffect {

	public m_Take_outFood4:UI_Take_outFood4;
	public m_Take_outFood3:UI_Take_outFood3;
	public m_Take_outFood2:UI_Take_outFood2;
	public m_Take_outFood1:UI_Take_outFood1;
	public static URL:string = "ui://tqsc8htvwfi04k";
	public static Package:string  = "SyntheticTakeout";
	public static Component:string  = "SettlementDynamicEffect";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_SettlementDynamicEffect.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_SettlementDynamicEffect {
		var obj = new UI_SettlementDynamicEffect();
		if(component==null){component = UI_SettlementDynamicEffect.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_Take_outFood4 =  UI_Take_outFood4.createInstance(component.GetChild("Take-outFood4") as fgui.GComponent, WorldContextObject);
		this.m_Take_outFood3 =  UI_Take_outFood3.createInstance(component.GetChild("Take-outFood3") as fgui.GComponent, WorldContextObject);
		this.m_Take_outFood2 =  UI_Take_outFood2.createInstance(component.GetChild("Take-outFood2") as fgui.GComponent, WorldContextObject);
		this.m_Take_outFood1 =  UI_Take_outFood1.createInstance(component.GetChild("Take-outFood1") as fgui.GComponent, WorldContextObject);
	}
}