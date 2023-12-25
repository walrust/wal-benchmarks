use wal_core::{
    component::{behavior::Behavior, Component},
    virtual_dom::VNode,
};
use wal_rsx::rsx;

pub(crate) struct ChildComponent {
    pub(crate) value: u8,
}

impl Component for ChildComponent {
    type Message = ();

    type Properties = u8;

    fn new(props: Self::Properties) -> Self {
        Self { value: props }
    }

    fn view(&self, _behavior: &mut impl Behavior<Self>) -> VNode {
        let style = if self.value % 2 == 0 {
            "color: red"
        } else {
            "color: blue"
        };

        rsx! {
            <div style={style}>
                <p> "Const test" </p>
            </div>
        }
    }

    fn update(&mut self, _message: Self::Message) -> bool {
        false
    }
}
