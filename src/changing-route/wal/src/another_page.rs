use wal_core::{
    component::{behavior::Behavior, Component},
    virtual_dom::VNode,
};
use wal_rsx::rsx;

#[derive(Default)]
pub(crate) struct AnotherPage;

impl Component for AnotherPage {
    type Message = ();

    type Properties = ();

    fn new(_props: Self::Properties) -> Self {
        Self
    }

    fn view(&self, _behavior: &mut impl Behavior<Self>) -> VNode {
        rsx! {
            <div>
                <h1> "Another Page" </h1>
            </div>
        }
    }

    fn update(&mut self, _message: Self::Message) -> bool {
        false
    }
}
