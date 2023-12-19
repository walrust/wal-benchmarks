use yew::prelude::*;

use crate::nested_component::NestedComponent;

#[function_component]
pub(crate) fn RootComponent() -> Html {
    let state = use_state(|| 0);

    html! {
        <div>
            <NestedComponent counter={100} callback={Callback::from(move |_| state.set(*state + 1))} />
            <p>{*state}</p>
        </div>
    }
}
