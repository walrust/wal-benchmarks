use wal_core::{
    component::{behavior::Behavior, Component},
    virtual_dom::VNode,
};
use wal_rsx::rsx;

use crate::child_component::ChildComponent;

#[derive(Default)]
pub(crate) struct ParentComponent {
    pub(crate) value: u8,
}

impl Component for ParentComponent {
    type Message = ();

    type Properties = ();

    fn new(_props: Self::Properties) -> Self {
        Self { value: 0 }
    }

    fn view(&self, behavior: &mut impl Behavior<Self>) -> VNode {
        let on_click = behavior.create_callback(|_| ());
        rsx! {
            <div>
                <p>{ self.value }</p>
            </div>
            <button id="button" onclick={on_click}>"Click me"</button>
            for { std::iter::repeat_with(|| {
                rsx! {
                    <ChildComponent props=0 />
                }
            }).take(100) }
        }
    }

    fn update(&mut self, _message: Self::Message) -> bool {
        self.value += 1;
        true
    }
}
