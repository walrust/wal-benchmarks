use yew::prelude::*;

#[derive(Properties, Clone, PartialEq)]
pub struct Props {
    pub counter: u8,
    pub value: u8,
}

#[function_component]
pub(crate) fn NestedComponent(props: &Props) -> Html {
    html! {
        if props.counter != 0 {
            <div>
                <NestedComponent counter={props.counter - 1} value={props.value}/>
            </div>
        } else {
            { props.value }
        }
    }
}
