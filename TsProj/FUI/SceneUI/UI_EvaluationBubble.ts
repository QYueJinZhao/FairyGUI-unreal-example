/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Evaluation from "./UI_Evaluation";

import * as fgui from "ue"
export default class UI_EvaluationBubble {

	public m_Bg:fgui.GImage;
	public m_Evaluation:UI_Evaluation;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://vw08vbbgwajrn";
	public static Package:string  = "SceneUI";
	public static Component:string  = "EvaluationBubble";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_EvaluationBubble.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_EvaluationBubble {
		var obj = new UI_EvaluationBubble();
		if(component==null){component = UI_EvaluationBubble.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_Bg = <fgui.GImage>component.GetChild("Bg");
		this.m_Evaluation =  UI_Evaluation.createInstance(component.GetChild("Evaluation") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
	}
}