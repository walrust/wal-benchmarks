use yew::prelude::*;

use crate::child_component::ChildComponent;

#[function_component]
pub(crate) fn ParentComponent() -> Html {
    let state = use_state(|| 0);

    let on_click = {
        let state = state.clone();
        Callback::from(move |_| state.set(*state + 1))
    };

    html! {
        <>
            <div>
                <p>{ *state }</p>
            </div>
            <button id="button" onclick={on_click}> { "Click me" } </button>
            { for std::iter::repeat_with(|| {
                html! {
                    <ChildComponent value=0 />
                }
            }).take(100) }
        </>
    }
}
