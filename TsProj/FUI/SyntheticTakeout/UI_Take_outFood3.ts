/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_Take_outFood3 {

	public m_GradeBottom:fgui.GLoader;
	public m_packing:fgui.GLoader;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://tqsc8htvwfi04i";
	public static Package:string  = "SyntheticTakeout";
	public static Component:string  = "Take-outFood3";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Take_outFood3.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Take_outFood3 {
		var obj = new UI_Take_outFood3();
		if(component==null){component = UI_Take_outFood3.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_GradeBottom = <fgui.GLoader>component.GetChild("GradeBottom");
		this.m_packing = <fgui.GLoader>component.GetChild("packing");
		this.m_t0 = component.GetTransition("t0");
	}
}