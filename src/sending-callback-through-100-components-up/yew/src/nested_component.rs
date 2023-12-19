use yew::prelude::*;

#[derive(Properties, Clone, PartialEq)]
pub struct Props {
    pub counter: u8,
    pub callback: Callback<(), ()>,
}

#[function_component]
pub(crate) fn NestedComponent(props: &Props) -> Html {
    let callback = props.callback.clone();

    html! {
        if props.counter != 0 {
            <div>
                <NestedComponent counter={props.counter - 1} callback={Callback::from(move |_| callback.emit(()))}/>
            </div>
        } else {
            <button id="button" onclick={Callback::from(move |_| callback.emit(()))}>{"Click me"}</button>
        }
    }
}
