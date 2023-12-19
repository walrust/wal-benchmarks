use yew::prelude::*;

#[derive(Properties, Clone, PartialEq)]
pub struct Props {
    pub counter: u8,
}

#[function_component]
pub(crate) fn NestedComponent1(props: &Props) -> Html {
    html! {
        <>
            { "First version of nested component" }
            if props.counter != 0 {
                <div>
                    <NestedComponent1 counter={props.counter - 1}/>
                </div>
            }
        </>
    }
}

#[function_component]
pub(crate) fn NestedComponent2(props: &Props) -> Html {
    html! {
        <>
            { "Second version of nested component" }
            if props.counter != 0 {
                <span>
                    <NestedComponent2 counter={props.counter - 1}/>
                </span>
            }
        </>
    }
}
