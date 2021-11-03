/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_Evaluation {

	public m_HeadPortrait:fgui.GLoader;
	public m_Take_outFood:fgui.GLoader;
	public m_Star_5:fgui.GLoader;
	public m_Star_4:fgui.GLoader;
	public m_Star_3:fgui.GLoader;
	public m_Star_2:fgui.GLoader;
	public m_Star_1:fgui.GLoader;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://vw08vbbgdkz6s";
	public static Package:string  = "SceneUI";
	public static Component:string  = "Evaluation";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Evaluation.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Evaluation {
		var obj = new UI_Evaluation();
		if(component==null){component = UI_Evaluation.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_HeadPortrait = <fgui.GLoader>component.GetChild("HeadPortrait");
		this.m_Take_outFood = <fgui.GLoader>component.GetChild("Take-outFood");
		this.m_Star_5 = <fgui.GLoader>component.GetChild("Star_5");
		this.m_Star_4 = <fgui.GLoader>component.GetChild("Star_4");
		this.m_Star_3 = <fgui.GLoader>component.GetChild("Star_3");
		this.m_Star_2 = <fgui.GLoader>component.GetChild("Star_2");
		this.m_Star_1 = <fgui.GLoader>component.GetChild("Star_1");
		this.m_t0 = component.GetTransition("t0");
	}
}