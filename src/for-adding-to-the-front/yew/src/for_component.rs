use yew::prelude::*;

#[function_component]
pub(crate) fn ForComponent() -> Html {
    let state = use_state(|| 0);

    let on_click = {
        let state = state.clone();
        Callback::from(move |_| state.set(*state + 1))
    };

    html! {
        <>
            <button id="button" onclick={on_click}> { "Click me" } </button>
            { for (0..*state).rev().map(|x| {
                html! { <div> { x } </div> }
            }) }
        </>
    }
}
