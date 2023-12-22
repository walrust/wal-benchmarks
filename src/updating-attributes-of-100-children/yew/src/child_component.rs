use yew::prelude::*;

#[derive(Properties, Clone, PartialEq)]
pub struct Props {
    pub value: u8,
}

#[function_component]
pub(crate) fn ChildComponent(props: &Props) -> Html {
    let style = if props.value % 2 == 0 {
        "color: red"
    } else {
        "color: blue"
    };
    html! {
        <div style={style}>
            <p> { "Const text" } </p>
        </div>
    }
}
