use yew::prelude::*;

use crate::nested_component::NestedComponent;

#[function_component]
pub(crate) fn RootComponent() -> Html {
    let state = use_state(|| 0);

    let on_click = {
        let state = state.clone();
        Callback::from(move |_| state.set(*state + 1))
    };

    html! {
        <div>
            <button id="button" onclick={on_click}> { "Click me" } </button>
            <NestedComponent counter={100} value={*state} />
        </div>
    }
}
