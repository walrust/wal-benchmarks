use yew::prelude::*;
use yew_router::prelude::*;

use crate::Route;

#[function_component(HomePage)]
pub fn home_page() -> Html {
    html! {
        <div>
            <h1>{ "Home Page" }</h1>
            <Link<Route> to={Route::Another}><a id="button">{ "Go to Another Page" }</a></Link<Route>>
        </div>
    }
}
