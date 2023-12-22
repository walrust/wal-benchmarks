use yew::prelude::*;

use crate::nested_component::{NestedComponent1, NestedComponent2};

#[function_component]
pub(crate) fn RootComponent() -> Html {
    let state = use_state(|| 0);

    let on_click = {
        let state = state.clone();
        Callback::from(move |_| state.set(*state + 1))
    };

    html! {
        <div>
            <button id="button" onclick={ on_click }> { "Click me" } </button>
            if *state % 2 == 0 {
                <NestedComponent1 counter = 100 />
            } else {
                <NestedComponent2 counter = 100 />
            }
        </div>
    }
}
