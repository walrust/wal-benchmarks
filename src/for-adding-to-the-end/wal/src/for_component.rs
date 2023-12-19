use wal_core::{
    component::{behavior::Behavior, Component},
    virtual_dom::VNode,
};
use wal_rsx::rsx;

#[derive(Default)]
pub(crate) struct ForComponent {
    pub(crate) value: u8,
}

impl Component for ForComponent {
    type Message = ();

    type Properties = ();

    fn new(_props: Self::Properties) -> Self {
        Self { value: 0 }
    }

    fn view(&self, behavior: &mut impl Behavior<Self>) -> VNode {
        let on_click = behavior.create_callback(|_| ());
        rsx! {
            <button id="button" onclick={on_click}>"Click me"</button>
            for { (0..self.value).map(|x| {
                rsx! { <div>{ x }</div> }
            }) }
        }
    }

    fn update(&mut self, _message: Self::Message) -> bool {
        self.value += 1;
        true
    }
}
