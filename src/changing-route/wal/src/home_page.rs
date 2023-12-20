use wal_core::{
    component::{behavior::Behavior, Component},
    virtual_dom::VNode,
};
use wal_rsx::rsx;

#[derive(Default)]
pub(crate) struct HomePage;

impl Component for HomePage {
    type Message = ();

    type Properties = ();

    fn new(_props: Self::Properties) -> Self {
        Self
    }

    fn view(&self, _behavior: &mut impl Behavior<Self>) -> VNode {
        rsx! {
            <h1> "Home Page" </h1>
            <Link to="/another">
                <a id="button"> "Go to Another Page" </a>
            </Link>
        }
    }

    fn update(&mut self, _message: Self::Message) -> bool {
        false
    }
}
