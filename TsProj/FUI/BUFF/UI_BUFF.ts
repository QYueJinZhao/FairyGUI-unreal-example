/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_BtnBuff from "./UI_BtnBuff";

import * as fgui from "ue"
export default class UI_BUFF {

	public m_BUFF:UI_BtnBuff;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://tm2lcvzypip11p";
	public static Package:string  = "BUFF";
	public static Component:string  = "BUFF";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BUFF.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BUFF {
		var obj = new UI_BUFF();
		if(component==null){component = UI_BUFF.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_BUFF =  UI_BtnBuff.createInstance(component.GetChild("BUFF") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
	}
}