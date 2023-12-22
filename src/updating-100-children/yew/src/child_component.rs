use yew::prelude::*;

#[derive(Properties, Clone, PartialEq)]
pub struct Props {
    pub value: u8,
}

#[function_component]
pub(crate) fn ChildComponent(props: &Props) -> Html {
    html! {
        <div>
            <p>{ props.value }</p>
        </div>
    }
}
